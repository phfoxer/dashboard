import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/admission/admission.component').then(m => m.AdmissionComponent)
    }
];
