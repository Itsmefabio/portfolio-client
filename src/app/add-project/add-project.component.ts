import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../shared/project/project.service';
import { Project } from '../shared/project/project.model';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  project: Project = new Project();
  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
  }
createProject(): void {
    this.projectService.createProject(this.project)
        .subscribe( data => {
          alert('User created successfully.');
        });
}}
