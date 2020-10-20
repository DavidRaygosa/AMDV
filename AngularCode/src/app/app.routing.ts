import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Components

import { IndexComponent } from './components/index/index.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ParallaxComponent } from './components/parallax/parallax.component';

//Routes

const appRoutes: Routes = 
[
	{path: '', component: IndexComponent},
	{path: 'contacto', component: ContactComponent},
	{path: 'privacidad', component: PrivacyComponent},
	{path: 'terminos', component: TermsComponent},
	{path: 'parallax', component: ParallaxComponent},
	{path: '**', component: NotfoundComponent}
]


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);