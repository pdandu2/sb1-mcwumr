import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'prefix'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'patients',
                loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)
            },
            {
                path: 'overview',
                loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
            },
            {
                path: 'details',
                loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
            },
            {
                path: 'visualisations',
                loadChildren: () => import('./visualisations/visualisations.module').then(m => m.VisualisationsModule)
            },
            {
                path: 'actionplans',
                loadChildren: () => import('./actionplans/actionplans.module').then(m => m.ActionPlansModule)
            },
            {
                path: 'sessions',
                loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule)
            },
            {
                path: 'medication',
                loadChildren: () => import('./medication/medication.module').then(m => m.MedicationModule)
            },
            {
                path: 'messages',
                loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)
            },
            {
                path: 'journal',
                loadChildren: () => import('./journal/journal.module').then(m => m.JournalModule)
            },
            {
                path: 'search',
                loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
            },
            {
                path: 'administration',
                loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule)
            },
            {
                path: 'signout',
                redirectTo: '/signin',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class LayoutRoutingModule { }
