import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from './job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
private jobUrl = 'http://localhost:8080/api/job';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/api/jobs');
  }
  public deleteJob(job) {
    return this.http.delete(this.jobUrl + '/' + job.jobsId);
  }

  public createJob(job) {
    return this.http.post<Job>(this.jobUrl, job);
  }
}
