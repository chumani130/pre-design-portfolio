import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarActive = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
  }

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }

  closeNavbar() {
    if (this.isNavbarActive) {
      this.isNavbarActive = false;
    }
  }
  scrollToHome() {
    document.getElementById("home")?.scrollIntoView({behavior: "smooth"});

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
