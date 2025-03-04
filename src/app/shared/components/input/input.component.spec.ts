import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

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

  it('should accept only numbers', () => { 
    // Arrange
    fixture = TestBed.createComponent(InputComponent);

    // Act
    fixture.componentRef.setInput('type', 'number');
    fixture.componentRef.setInput('label', 'Age');    
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const input = compiled.getElementsByTagName('input').item(0);
    input?.setAttribute('value', '0');
    // Assert
    expect(typeof input?.value).toEqual('number');
  });
});
