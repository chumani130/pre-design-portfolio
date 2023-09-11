import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pre-design-portfolio';

  constructor(){ }
  ngOnInit(): void {
    
  }
  scrollToHome() {
    document.getElementById("home")?.scrollIntoView();
    const homeId =  document.getElementById("home")?.scrollIntoView();
    console.log(homeId)
  }
  scrollToAbout() {
    document.getElementById("about")?.scrollIntoView();
  }
  scrollToSkills() {
    document.getElementById("skills")?.scrollIntoView();
  }
  scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView();
  }
  scrollToEducation() {
    document.getElementById("education")?.scrollIntoView();
  }
  scrollToExperience() {
    document.getElementById("experience")?.scrollIntoView();
  }
  scrollToContact() {
    document.getElementById("contact")?.scrollIntoView();
  }
  
}
