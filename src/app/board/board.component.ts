import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  standalone: false,
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent<T> {
  @Input({ required: true }) rows!: number;
  @Input({ required: true }) columns!: number;
  @Input({ required: true }) border!: boolean;
  @Input({ required: true }) content!: T;

  getIndexArray(num: number): number[] {
    return Array.from(Array(num), (d, i) => i);
  }

  getContent(row: number, col: number): T {
    return (this.content as any[])[(row*this.columns) + col] as T;
  }
}
