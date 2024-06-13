import { ChangeDetectionStrategy, Component, Input, Signal } from '@angular/core';
import { BoardState } from '../utils/boardState';

@Component({
  selector: 'app-flex-board',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './flex-board.component.html',
  styleUrl: './flex-board.component.scss'
})
export class FlexBoardComponent<T> {
  @Input({ required: true }) config!: BoardState<T>;
}
