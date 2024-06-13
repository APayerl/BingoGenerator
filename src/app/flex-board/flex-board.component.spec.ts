import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoardComponent } from './flex-board.component';
import { signal } from '@angular/core';
import { BoardState } from '../utils/boardState';

describe('FlexBoardComponent', () => {
  let component: FlexBoardComponent<string>;
  let fixture: ComponentFixture<FlexBoardComponent<string>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexBoardComponent<string>);
    component = fixture.componentInstance;
    component.config = new BoardState();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
