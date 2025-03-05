import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { StepperStepDirective } from './directives/stepper-step/stepper-step.directive';
import { StepperComponent } from './stepper.component';

@Component({
  imports: [StepperComponent, StepperStepDirective],
  template: `<dash-stepper [step]="step">
  <ng-template stepper-step>1</ng-template>
  <ng-template stepper-step>2</ng-template>
  </dash-stepper>
  `,
})
class TestHostComponent { public step = 1; }

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperComponent, TestHostComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start in step one', () => {
    // Arrange
    let fixtureHost: ComponentFixture<TestHostComponent> = TestBed.createComponent(TestHostComponent);
    fixtureHost.detectChanges();
    // Act
    let element = fixtureHost.debugElement.query(By.css('li')).nativeElement as HTMLElement;
    let isActive = element.classList.contains('stepper-item_active')
    // Assert     
    expect(isActive).toEqual(true)
  });

  it('should forward to step two', () => {
    // Arrange
    let fixtureHost: ComponentFixture<TestHostComponent> = TestBed.createComponent(TestHostComponent);    
    fixtureHost.componentInstance.step = 2;
    fixtureHost.detectChanges();
    // Act

    let element = fixtureHost.debugElement.query(By.css('li')).nativeElement as HTMLElement;
    let isActive = element.classList.contains('stepper-item_done')
    // Arrange
    expect(isActive).toEqual(true)

  });

});
