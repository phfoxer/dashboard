import { TestBed } from "@angular/core/testing";
import { FormService } from "./admission-form.service";

describe('TestService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increment the step', () => {
    service.nextStep();
    service.step$.subscribe(step => {
      expect(step).toBe(2);
    });
  });

  it('should decrease the step', () => {
    // arrange
    service.setStep(1);
    // act
    service.prevStep();
    // assert
    service.step$.subscribe(step => {
      expect(step).toEqual(2);
    })
  });

});
