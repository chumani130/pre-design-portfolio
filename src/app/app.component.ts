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
    const homeId =  document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
    console.log(homeId)
  }
  scrollToAbout() {
    document.getElementById("about")?.scrollIntoView({behavior: "smooth"});
  }
  scrollToSkills() {
    document.getElementById("skills")?.scrollIntoView({behavior: "smooth"});
  }
  scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({behavior: "smooth"});
  }
  scrollToEducation() {
    document.getElementById("education")?.scrollIntoView({behavior: "smooth"});
  }
  scrollToExperience() {
    document.getElementById("experience")?.scrollIntoView({behavior: "smooth"});
  }
  scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
  }
  
}
