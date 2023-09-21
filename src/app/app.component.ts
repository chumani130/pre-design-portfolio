import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Chumani-Madikizela';

  constructor(){ }
  menuVariable:boolean = false;
  menu_icon_Varriable:boolean = false;


openMenu(){
  this.menuVariable =! this.menuVariable;
  this.menu_icon_Varriable =! this.menu_icon_Varriable;
}

  ngOnInit(): void {}

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

