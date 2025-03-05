import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
