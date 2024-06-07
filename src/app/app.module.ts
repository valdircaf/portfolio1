import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { CardProjectsComponent } from './components/card-projects/card-projects.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './pages/skills/skills.component';
import { CarouselModule } from 'ngx-bootstrap/carousel'

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    CardProjectsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
