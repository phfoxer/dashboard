import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { AdmissionStartComponent } from './admission-start.component';

describe('AdmissionStartComponent', () => {
  let component: AdmissionStartComponent;
  let fixture: ComponentFixture<AdmissionStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
