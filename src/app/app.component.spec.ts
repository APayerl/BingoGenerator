import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ColorChromeModule } from 'ngx-color/chrome';
import { FormsModule } from '@angular/forms';
import { FlexBoardComponent } from './flex-board/flex-board.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FlexBoardComponent
      ],
      imports: [
        FormsModule,
        ColorChromeModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'bingo-generator' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bingo-generator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Settings');
  });
});
