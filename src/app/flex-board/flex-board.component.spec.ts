import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBoardComponent } from './flex-board.component';

describe('FlexBoardComponent', () => {
  let component: FlexBoardComponent;
  let fixture: ComponentFixture<FlexBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
