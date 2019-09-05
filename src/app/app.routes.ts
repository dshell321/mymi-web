import { ProjectsResolverService } from './projects-layout/projects-resolver.service';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsLayoutComponent } from './projects-layout/projects-layout.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeLayoutComponent
    },
    {
        path: 'projects',
        component: ProjectsLayoutComponent,
        resolve: { projects: ProjectsResolverService}
    },
    {
        path: 'project',
        component: ProjectOverviewComponent
    },
    { path: '**', redirectTo: ''}
];
