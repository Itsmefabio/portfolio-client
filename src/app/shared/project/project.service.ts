import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../project/project.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectUrl = 'http://localhost:8080/api/project';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/api/projects');
  }
 public deleteProject(project) {
    return this.http.delete(this.projectUrl + '/' + project.projId);
  }

  public createProject(project) {
    return this.http.post<Project>(this.projectUrl, project);
  }

}


