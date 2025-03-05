import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AdmissionService } from '../../services/admission.service';
import { AdmissionStartComponent } from './admission-start.component';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CPF_STATUS } from '../../export/admission.model';
import { By } from '@angular/platform-browser';

describe('AdmissionStartComponent', () => {
  let component: AdmissionStartComponent;
  let fixture: ComponentFixture<AdmissionStartComponent>;
  let admissionService: jasmine.SpyObj<AdmissionService>;

  beforeEach(async () => {
    const admissionServiceSpy = jasmine.createSpyObj('AdmissionService', ['getUseByCpf']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [],
      providers: [
        { provide: AdmissionService, useValue: admissionServiceSpy }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdmissionStartComponent);
    component = fixture.componentInstance;
    admissionService = TestBed.inject(AdmissionService) as jasmine.SpyObj<AdmissionService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should submit form and handle success', fakeAsync(() => {
    // Arrange
    const userMock = { status: CPF_STATUS.REGULAR, name: 'John Doe' };
    admissionService.getUseByCpf.and.returnValue(of(userMock));
    let fakeComponent = (component as any);
    fakeComponent.form.controls['cpf'].setValue('55154368061');
    // Act
    fakeComponent.onSubmit();
    tick();
    // Assert
    expect(fakeComponent.isLoading()).toBeFalse();
    expect(fakeComponent.user()).toEqual(userMock);
    expect(fakeComponent.form.get('cpf')?.disabled).toBeTrue();
  }));

  it('Should submit form', fakeAsync(() => {
    // Arrange
    (fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement).value = '55154368061';

    // Act
    (fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement).click();
    fixture.detectChanges();
    // Assert

    expect((fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement).disabled).toEqual(true)

  }));
});
