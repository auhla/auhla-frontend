import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshopComponent } from './workshop.component';
import { TimelineScreenComponent } from './screens/timeline-screen/timeline-screen.component';


const routes: Routes = [
  { 
    path: '',
    component: WorkshopComponent,
    children: [
      { path: 'timeline', component: TimelineScreenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopRoutingModule { }
