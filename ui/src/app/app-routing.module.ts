import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'signin',
		pathMatch: 'full'
	},
	{
		path: 'signin',
        loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule)
	},
	{
		path: 'registration',
        loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
	},
	{
		path: 'layout',
		loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
	}
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ]
})
export class AppRoutingModule { }
