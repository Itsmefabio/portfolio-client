import { Component, OnInit } from '@angular/core';
import { JobService } from '../shared/job/job.service';
import { Job } from '../shared/job/job.model';



@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})

export class JobListComponent implements OnInit {
 jobs: Array<any>;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getAll().subscribe(data => {
      this.jobs = data;
    });
  }
   deleteJob(jobs: Job): void {
    this.jobService.deleteJob(jobs)
      .subscribe( data => {
        this.jobs = this.jobs.filter(j => j !== jobs);
      });
}}
