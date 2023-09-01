import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
