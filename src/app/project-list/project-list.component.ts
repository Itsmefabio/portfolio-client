import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/project/project.service';
import { Project } from '../shared/project/project.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})

export class ProjectListComponent implements OnInit {
 projects: Array<any>;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAll().subscribe(data => {
      this.projects = data;
    });
  }
  deleteProject(projects: Project): void {
    this.projectService.deleteProject(projects)
      .subscribe( data => {
        this.projects = this.projects.filter(p => p !== projects);
      });
}}
