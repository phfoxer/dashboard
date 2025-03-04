import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'dashboard' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dashboard');
  });

  it('should have an input', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // Act
    const compiled = fixture.nativeElement as HTMLElement;
    const input = compiled.getElementsByTagName('input');
    // Assert
    expect(input).toBeTruthy();
  });

  it('should accept only numbers', () => {
    // Arrange
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // Act
    const compiled = fixture.nativeElement as HTMLElement;
    const input = compiled.getElementsByTagName('input').item(0);
    // Assert
    expect(input?.getAttribute('type')).toEqual('number');
  });

  
});
