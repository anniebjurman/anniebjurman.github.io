import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience } from './experience';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  projects: Project[] = [];
  experiences: Experience[] = [];
  prevScrollPos: number;

  constructor() { 
    this.loadExperiences();
    this.loadProjects();
    this.prevScrollPos = -1;
  }

  loadExperiences() {
    var e1 = new Experience(2016, "Technology program", "I started a high school education with a focus on technology and computer science.");
    var e2 = new Experience(2016, "Summer business", "During the summer, a friend and I started and ran a summer business teaching children to play floorball.");
    var e3 = new Experience(2019, "Moved to Umeå", "Moved from Skellefteå to Umeå to start studying at University.");
    var e4 = new Experience(2019, "M.Sc.Eng in Interaction Technology and Design", "Started a Master of science in engineering at Umeå University." + 
                            "The program is 5 years and focuses a broad spectrum of subjects where the main focus is on interaction technology and design.");
    var e5 = new Experience(2020, "Worked as a café manager", "The service included tasks such as placing product orders, preparing lunches," +
                             " standing at the checkout, helping customers and posting income.");

    this.experiences.push(e1, e2, e3, e4, e5);
  }

  getExperiences(): Experience[] {
    return this.experiences;
  }

  loadProjects(){
    var p1 = new Project(1, "NASA Space App Challenge", "A website the informs about the suns impact on us on earth and the different satellites that orbit the sun.",
     "hej", "hej", "hej", "hej", "Figma, HTML/CSS/JS");
    var p2 = new Project(2, "Website for VB-ost", "A clickable HiFi prototype of a website for Västerbottensost. Developed in collaboration with Västerbottensost during a course at Umeå University.",
    "hej", "hej", "hej", "hej", "Adobe XD");
    var p3 = new Project(3, "Mobile-adapted design for INSIKT", "A clickable HiFi prototype on a mobile-adapted version of Trimma’s product INSIKT. Developed in collaboration with Trimma during a course at Umeå University.",
    "hej", "hej", "hej", "hej", "Adobe XD");
    var p4 = new Project(4, "Hackaton", "a HiFi clickable prototype ...", "hej", "hej", "hej", "hej", "Adobe XD");

    this.projects.push(p1, p2, p3, p4);
  }

  getProjects(): Project[]  {
    return this.projects;
  }

  getProject(id: Number) {
    const project = this.projects.find(p => p.id === id);

    return of(project);
  }

  setPrevScrollPos(pos: number) {
    this.prevScrollPos = pos;
  }

  getPrevScrollPos() {
    return this.prevScrollPos;
  }
}