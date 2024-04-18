import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoardComponent } from './flex-board.component';
import { signal } from '@angular/core';

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
    component.columns = signal(3);
    component.rows = signal(3);
    component.content = signal(["1", "2", "3", "4", "5", "6", "7", "8", "9"])
    component.outerBorderWidth = signal(1)
    component.cellBorderWidth = signal(1);
    component.cellTextSize = signal(20);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
