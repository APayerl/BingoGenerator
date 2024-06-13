import { TestBed } from '@angular/core/testing';
import { StartComponent } from './start.component';
import { ColorChromeModule } from 'ngx-color/chrome';
import { FormsModule } from '@angular/forms';
import { FlexBoardComponent } from '../flex-board/flex-board.component';
import { provideRouter } from '@angular/router';

describe('StartComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        StartComponent,
        FlexBoardComponent
      ],
      imports: [
        FormsModule,
        ColorChromeModule
      ],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StartComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'bingo-generator' title`, () => {
    const fixture = TestBed.createComponent(StartComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bingo-generator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(StartComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Settings');
  });
});
