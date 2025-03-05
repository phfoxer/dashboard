import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { By } from '@angular/platform-browser';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'input');
    fixture.componentRef.setInput('type', 'text');
    fixture.detectChanges();
  });

  it('should create', () => {
    // Arrange

    // Act

    // Assert
    expect(component).toBeTruthy();
  });

  it('should change the label', () => { 
    // Arrange
    fixture = TestBed.createComponent(InputComponent);

    // Act
    fixture.componentRef.setInput('type', 'number');
    fixture.componentRef.setInput('label', 'Age');    
    fixture.detectChanges();
    // Assert
    const labelElement = fixture.debugElement.query(By.css('label')).nativeElement;
    expect(labelElement.textContent).toBe('Age');
  });
});
