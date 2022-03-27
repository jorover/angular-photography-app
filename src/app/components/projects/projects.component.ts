import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: string = 'ProjectSection'
  colorContainer: string = 'colorContainer'
  projectsImg: string = 'projectsImg'
  figureImg: string = '/assets/fImg.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
