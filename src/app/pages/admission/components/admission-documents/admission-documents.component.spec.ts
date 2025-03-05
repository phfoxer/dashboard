import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionDocumentsComponent } from './admission-documents.component';

describe('AdmissionDocumentsComponent', () => {
  let component: AdmissionDocumentsComponent;
  let fixture: ComponentFixture<AdmissionDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
