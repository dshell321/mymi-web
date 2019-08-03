import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeLayoutComponent
    },
    { path: '**', redirectTo: ''}
];
