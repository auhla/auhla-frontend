import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';


const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { 
    path: 'activity',
    loadChildren: () => import('./../activity/activity.module')
      .then(m => m.ActivityModule)
  },
  { 
    path: 'workshop',
    loadChildren: () => import('./../workshop/workshop.module')
      .then(m => m.WorkshopModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
