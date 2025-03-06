import { TestBed } from "@angular/core/testing";
import { AdmissionService } from "./admission.service";

describe('Admission Service', () => {
    let service: AdmissionService;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AdmissionService);
    });

    it('Should return the user by CPF', ()=>{
        // Arrange

        // Act
        service.getUseByCpf('0333255454').subscribe((user)=>{
            expect(Object.keys(user).includes('name')).toBe(true);
        })
        // Assert
    })
});