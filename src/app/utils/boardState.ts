import { Delimiter, Delimiters } from "./delimiters"

export class ConfigurationStateBuilder {
    private state: ConfigurationState;

    constructor(oldState?: ConfigurationState) {
        if(oldState != null) {
            this.state = oldState.clone();
        } else {
            this.state = new ConfigurationState();
        }
    }

    setRows(rows: number): ConfigurationStateBuilder {
        this.state.rows = rows;
        return this;
    }

    setColumns(columns: number): ConfigurationStateBuilder {
        this.state.columns = columns;
        return this;
    }

    setNumOfBoards(numOfBoards: number): ConfigurationStateBuilder {
        this.state.numOfBoards = numOfBoards;
        return this;
    }

    setDoShuffle(doShuffle: boolean): ConfigurationStateBuilder {
        this.state.doShuffle = doShuffle;
        return this;
    }

    setCellBorderColor(cellBorderColor: string): ConfigurationStateBuilder {
        this.state.cellBorderColor = cellBorderColor;
        return this;
    }

    setCellBorderWidth(cellBorderWidth: number): ConfigurationStateBuilder {
        this.state.cellBorderWidth = cellBorderWidth;
        return this;
    }

    setCellTextSize(cellTextSize: number): ConfigurationStateBuilder {
        this.state.cellTextSize = cellTextSize;
        return this;
    }

    setOuterBorderWidth(outerBorderWidth: number): ConfigurationStateBuilder {
        this.state.outerBorderWidth = outerBorderWidth;
        return this;
    }

    setBoardSize(boardSize: number): ConfigurationStateBuilder {
        this.state.boardSize = boardSize;
        return this;
    }

    setStringDelimiter(stringDelimiter: Delimiter): ConfigurationStateBuilder {
        this.state.stringDelimiter = stringDelimiter;
        return this;
    }

    setRawOptionalString(rawOptionalString: string): ConfigurationStateBuilder {
        this.state.rawOptionalString = rawOptionalString;
        return this;
    }

    setRawRequiredString(rawRequiredString: string): ConfigurationStateBuilder {
        this.state.rawRequiredString = rawRequiredString;
        return this;
    }

    build(): ConfigurationState {
        return this.state;
    }
}

export class ConfigurationState {
    rows: number;
    columns: number;
    numOfBoards: number;
    doShuffle: boolean;
    cellBorderColor: string;
    cellBorderWidth: number;
    cellTextSize: number;
    outerBorderWidth: number;
    boardSize: number;
    stringDelimiter: Delimiter;
    rawOptionalString: string;
    rawRequiredString: string;

    constructor(
        rows: number = 5,
        columns: number = 5,
        numOfBoards: number = 1,
        doShuffle: boolean = false,
        cellBorderColor: string = "black",
        cellBorderWidth: number = 1,
        cellTextSize: number = 16,
        outerBorderWidth: number = 1,
        boardSize: number = 250,
        stringDelimiter: Delimiter = Delimiters[0],
        rawOptionalString: string = "",
        rawRequiredString: string = ""
    ) {
        this.rows = rows
        this.columns = columns
        this.numOfBoards = numOfBoards
        this.doShuffle = doShuffle
        this.cellBorderColor = cellBorderColor
        this.outerBorderWidth = outerBorderWidth
        this.cellBorderWidth = cellBorderWidth
        this.cellTextSize = cellTextSize
        this.boardSize = boardSize
        this.stringDelimiter = stringDelimiter
        this.rawOptionalString = rawOptionalString
        this.rawRequiredString = rawRequiredString
    }

    clone(): ConfigurationState {
        let copy = JSON.parse(JSON.stringify(this));
        Object.setPrototypeOf(copy, ConfigurationState.prototype);
        return copy;
    }
}

export class BoardState<T> {
    rows: number;
    columns: number;
    cellBorderColor: string;
    cellBorderWidth: number;
    cellTextSize: number;
    outerBorderWidth: number;
    boardSize: number;
    elements: T[];

    constructor(
        rows: number = 5,
        columns: number = 5,
        cellBorderColor: string = "black",
        outerBorderWidth: number = 1,
        cellBorderWidth: number = 1,
        cellTextSize: number = 16,
        boardSize: number = 250,
        elements: T[] = []
    ) {
        this.rows = rows
        this.columns = columns
        this.cellBorderColor = cellBorderColor
        this.outerBorderWidth = outerBorderWidth
        this.cellBorderWidth = cellBorderWidth
        this.cellTextSize = cellTextSize
        this.boardSize = boardSize
        this.elements = elements
    }

    clone(): BoardState<T> {
        return JSON.parse(JSON.stringify(this));
    }
}