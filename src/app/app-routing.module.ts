import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
// import { NavbarComponent } from './shared/navbar/navbar.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
     path: '', 
     component: HomeComponent,
     title: 'Home Page'
  },
  { 
    path: 'about', 
    component: AboutComponent,
    title: 'About Page'
  },
  {
    path: 'skills', 
    component: SkillsComponent,
    title: 'Skills Page' 
  },
  {
   path: 'projects', 
   component: ProjectsComponent,
   title: 'Projects Page'
  },
  { 
    path: 'education', 
    component: EducationComponent,
    title: 'Education Page' 
  },
  { 
    path: 'experience', 
    component: ExperienceComponent, 
    title: 'Experience Page' 
  },
  { 
    path: 'contact', 
    component: ContactComponent,
    title: 'Contact'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
