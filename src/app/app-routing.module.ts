import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { JobsComponent } from './jobs/jobs.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddJobComponent } from './add-job/add-job.component';

const routes: Routes = [
   { path: 'projects', component: ProjectsComponent },
   {path: 'jobs', component: JobsComponent} ,
    {path: 'about-me', component: AboutMeComponent },
    {path: 'contact', component: ContactComponent },
    { path: 'add-project', component: AddProjectComponent },
    { path: 'add-job', component: AddJobComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
