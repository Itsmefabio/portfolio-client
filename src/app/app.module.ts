import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { JobsComponent } from './jobs/jobs.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectListComponent } from './project-list/project-list.component';
import { JobListComponent } from './job-list/job-list.component';
import { ContactComponent } from './contact/contact.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddJobComponent } from './add-job/add-job.component';
import { ContactMeComponent } from './contact-me/contact-me.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    JobsComponent,
    AboutMeComponent,
    ProjectListComponent,
    JobListComponent,
    ContactComponent,
    AddProjectComponent,
    AddJobComponent,
    ContactMeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
    exports: [
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
