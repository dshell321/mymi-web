import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ProjectsLayoutComponent } from './projects-layout/projects-layout.component';
import { AboutLayoutComponent } from './about-layout/about-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeLayoutComponent,
        ProjectsLayoutComponent,
        AboutLayoutComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES, { enableTracing: false})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
