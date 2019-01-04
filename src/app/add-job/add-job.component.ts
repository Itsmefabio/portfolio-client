



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../shared/job/job.service';
import { Job } from '../shared/job/job.model';

@Component({
 selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  job: Job = new Job();
  constructor(private router: Router, private jobService: JobService) { }

  ngOnInit() {
  }
createJob(): void {
    this.jobService.createJob(this.job)
        .subscribe( data => {
          alert('Project created successfully.');
        }
        );
        this.router.navigateByUrl('/jobs');
}}
