import { Component, Signal, WritableSignal, computed, signal, untracked, effect, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import shuffle from "lodash/shuffle";
import { Delimiter, Delimiters } from '../utils/delimiters';
import { BoardState, ConfigurationState, ConfigurationStateBuilder } from '../utils/boardState';

@Component({
    selector: 'app-start',
    standalone: false,
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent {
    config: WritableSignal<ConfigurationState> = signal(new ConfigurationState());
    optionalElements: Signal<string[]> = computed(() => this.config().rawOptionalString.split(this.config().stringDelimiter.value));
    requiredElements: Signal<string[]> = computed(() => this.config().rawRequiredString.split(this.config().stringDelimiter.value));

    boards: Signal<BoardState<string>[]> = computed(() => Array.from({ length: this.config().numOfBoards }, (_, i) =>
        this.getContentBoard(
            this.config(),
            this.requiredElements(),
            this.optionalElements()
        )));

    delimiters = Delimiters;
    defaultDelimiter: Delimiter = this.delimiters.find(delimiter => delimiter.displayName === 'ENTER') || this.delimiters[0];
    configKeys = ConfigKeys;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        let stateStr = this.route.snapshot.queryParamMap.get("state");
        if(stateStr !== null) {
            let state: ConfigurationState = JSON.parse(stateStr);

            this.config.set(state);
        }
    }

    updateState2(prop: ConfigKeys, value: any) {
        this.config.update(cnf => {
            let configStateBuilder = new ConfigurationStateBuilder(cnf);
            switch(prop) {
                case ConfigKeys.Rows:
                    configStateBuilder.setRows(value);
                    break;
                case ConfigKeys.Columns:
                    configStateBuilder.setColumns(value);
                    break;
                case ConfigKeys.NumOfBoards:
                    configStateBuilder.setNumOfBoards(value);
                    break;
                case ConfigKeys.DoShuffle:
                    configStateBuilder.setDoShuffle(value);
                    break;
                case ConfigKeys.CellBorderColor:
                    configStateBuilder.setCellBorderColor(value);
                    break;
                case ConfigKeys.CellBorderWidth:
                    configStateBuilder.setCellBorderWidth(value);
                    break;
                case ConfigKeys.CellTextSize:
                    configStateBuilder.setCellTextSize(value);
                    break;
                case ConfigKeys.OuterBorderWidth:
                    configStateBuilder.setOuterBorderWidth(value);
                    break;
                case ConfigKeys.BoardSize:
                    configStateBuilder.setBoardSize(value);
                    break;
                case ConfigKeys.StringDelimiter:
                    configStateBuilder.setStringDelimiter(value);
                    break;
                case ConfigKeys.RawRequiredString:
                    configStateBuilder.setRawRequiredString(value);
                    break;
                case ConfigKeys.RawOptionalString:
                    configStateBuilder.setRawOptionalString(value);
                    break;
            }
            return configStateBuilder.build();
        });
    }

    saveState() {
        const state = JSON.stringify(this.config());
        this.router.navigate([], { queryParams: { state: state } });
    }

    getContentBoard(
        config: ConfigurationState, required: string[], optional: string[]): BoardState<string> {
        let board: BoardState<string> = new BoardState(
            config.rows, 
            config.columns, 
            config.cellBorderColor, 
            config.outerBorderWidth, 
            config.cellBorderWidth, 
            config.cellTextSize, 
            config.boardSize);
        const cells = config.rows * config.columns;
        if(cells <= required.length) {
            if(config.doShuffle) {
                required = shuffle(required);
            }
            board.elements = required.slice(0, cells);
        }

        if(config.doShuffle) {
            optional = shuffle(optional);
        }
        let finalList: string[] = optional.slice(0, cells - required.length).concat(required);
        if((cells - finalList.length) > 0) {
            finalList = finalList.concat(Array.from({ length: cells - finalList.length }, (_, i) => ""));
        }
        board.elements = config.doShuffle ? shuffle(finalList) : finalList;

        return board;
    }

    title = 'bingo-generator';
}

enum ConfigKeys {
    Rows = "rows",
    Columns = "columns",
    NumOfBoards = "numOfBoards",
    DoShuffle = "doShuffle",
    CellBorderColor = "cellBorderColor",
    CellBorderWidth = "cellBorderWidth",
    CellTextSize = "cellTextSize",
    OuterBorderWidth = "outerBorderWidth",
    BoardSize = "boardSize",
    StringDelimiter = "stringDelimiter",
    RawOptionalString = "rawOptionalString",
    RawRequiredString = "rawRequiredString",
}