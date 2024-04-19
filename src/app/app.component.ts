import { Component, Signal, WritableSignal, computed, signal, untracked, effect, OnInit } from '@angular/core';

import shuffle from "lodash/shuffle";
import { Delimiter, Delimiters } from './utils/delimiters';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rows: WritableSignal<number> = signal(5);
  columns: WritableSignal<number> = signal(5);
  numOfBoards: WritableSignal<number> = signal(1);
  doShuffle: WritableSignal<boolean> = signal(false);
  cellBorderColor: WritableSignal<string> = signal("black");
  cellBorderWidth: WritableSignal<number> = signal(1);
  cellTextSize: WritableSignal<number> = signal(16);
  outerBorderWidth: WritableSignal<number> = signal(1);
  boardSize: WritableSignal<number> = signal(250);
  stringDelimiter: WritableSignal<Delimiter> = signal(Delimiters[0]);
  rawOptionalString: WritableSignal<string> = signal("");
  rawRequiredString: WritableSignal<string> = signal("");
  optionalElements: Signal<string[]> = computed(() => this.rawOptionalString().split(this.stringDelimiter().value));
  requiredElements: Signal<string[]> = computed(() => this.rawRequiredString().split(this.stringDelimiter().value));
  elems: Signal<Signal<string[]>[]> = computed(() => Array.from({ length: this.numOfBoards() }, (_, i) => signal(this.getContent())));

  delimiters = Delimiters;
  defaultDelimiter: Delimiter = this.delimiters.find(delimiter => delimiter.displayName === 'ENTER') || this.delimiters[0];
  console = console;

  getContent(): string[] {
    let reqItems = this.requiredElements();
    if((this.rows() * this.columns()) <= this.requiredElements.length) {
      if(this.doShuffle()) {
        reqItems = shuffle(reqItems);
      }
      return reqItems.slice(0, this.rows() * this.columns());
    }

    let optItems = this.optionalElements();
    if(this.doShuffle()) {
      optItems = shuffle(optItems);
    }
    let finalList: string[] = optItems.slice(0, (this.rows() * this.columns()) - reqItems.length).concat(reqItems);
    return this.doShuffle() ? shuffle(finalList) : finalList;
  }

  title = 'bingo-generator';
}
