import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ProjectsLayoutComponent } from './projects-layout/projects-layout.component';
import { AboutLayoutComponent } from './about-layout/about-layout.component';
import { HeroDirective } from './hero.directive';
import { FooterComponent } from './footer.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeLayoutComponent,
        ProjectsLayoutComponent,
        AboutLayoutComponent,
        HeroDirective,
        FooterComponent,
        ProjectOverviewComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES, { enableTracing: false}),
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
