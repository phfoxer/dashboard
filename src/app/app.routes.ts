import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@dash-pages/main/main.component').then(m => m.MainComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('@dash-pages/admission/admission.component').then(m => m.AdmissionComponent),
                children: [
                    {
                        path: '',
                        loadComponent: () => import('@dash-pages/admission/components/admission-start/admission-start.component').then(m => m.AdmissionStartComponent),
                    },
                    {
                        path: 'inicio',
                        loadComponent: () => import('@dash-pages/admission/components/admission-start/admission-start.component').then(m => m.AdmissionStartComponent),
                    },
                    {
                        path: 'documentos',
                        loadComponent: () => import('@dash-pages/admission/components/admission-documents/admission-documents.component').then(m => m.AdmissionDocumentsComponent),
                    },
                    {
                        path: 'dados-cadastrais',
                        loadComponent: () => import('@dash-pages/admission/components/admission-start/admission-start.component').then(m => m.AdmissionStartComponent),
                    },
                    {
                        path: 'admissao',
                        loadComponent: () => import('@dash-pages/admission/components/admission-start/admission-start.component').then(m => m.AdmissionStartComponent),
                    }
                ]
                    
            },

        ]
    }
];
