import { ChangeDetectionStrategy, Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-flex-board',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './flex-board.component.html',
  styleUrl: './flex-board.component.scss'
})
export class FlexBoardComponent<T> {
  @Input({ required: true }) rows!: Signal<number>;
  @Input({ required: true }) columns!: Signal<number>;
  @Input({ required: true }) outerBorderWidth!: Signal<number>;
  @Input({ required: true }) cellBorderWidth!: Signal<number>;
  @Input({ required: true }) cellTextSize!: Signal<number>;
  @Input({ required: true }) content!: Signal<T[]>;
}
