import { Component, Signal, WritableSignal, computed, signal, untracked, effect, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import shuffle from "lodash/shuffle";
import { Delimiter, Delimiters } from './utils/delimiters';

@Component({
  selector: 'app-root',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // rows: WritableSignal<number> = signal(5);
  // columns: WritableSignal<number> = signal(5);
  // numOfBoards: WritableSignal<number> = signal(1);
  // doShuffle: WritableSignal<boolean> = signal(false);
  // cellBorderColor: WritableSignal<string> = signal("black");
  // cellBorderWidth: WritableSignal<number> = signal(1);
  // cellTextSize: WritableSignal<number> = signal(16);
  // outerBorderWidth: WritableSignal<number> = signal(1);
  // boardSize: WritableSignal<number> = signal(250);
  // stringDelimiter: WritableSignal<Delimiter> = signal(Delimiters[0]);
  // rawOptionalString: WritableSignal<string> = signal("");
  // rawRequiredString: WritableSignal<string> = signal("");
  // optionalElements: Signal<string[]> = computed(() => this.rawOptionalString().split(this.stringDelimiter().value));
  // requiredElements: Signal<string[]> = computed(() => this.rawRequiredString().split(this.stringDelimiter().value));
  // elems: Signal<Signal<string[]>[]> = computed(() => Array.from({ length: this.numOfBoards() }, (_, i) => signal(
  //   this.getContent(
  //     this.rows(),
  //     this.columns(),
  //     this.requiredElements(),
  //     this.optionalElements(),
  //     this.doShuffle()
  //   ))));

  // delimiters = Delimiters;
  // defaultDelimiter: Delimiter = this.delimiters.find(delimiter => delimiter.displayName === 'ENTER') || this.delimiters[0];
  // console = console;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // this.console.log("Snapshot: ", this.route.snapshot.queryParamMap.get("state"));
    // this.route.queryParamMap.subscribe(params => 
    //   this.console.log("Observable: ", params.get("state")));
    // // this.restoreState(state);
  }

  // getContent(rows: number, columns: number, required: string[], optional: string[], doShuffle: boolean): string[] {
  //   const cells = rows * columns;
  //   if(cells <= required.length) {
  //     if(doShuffle) {
  //       required = shuffle(required);
  //     }
  //     return required.slice(0, cells);
  //   }

  //   if(doShuffle) {
  //     optional = shuffle(optional);
  //   }
  //   let finalList: string[] = optional.slice(0, cells - required.length).concat(required);
  //   if((cells - finalList.length) > 0) {
  //     finalList = finalList.concat(Array.from({ length: cells - finalList.length }, (_, i) => ""));
  //   }
  //   return doShuffle ? shuffle(finalList) : finalList;
  // }

  title = 'bingo-generator';
}
