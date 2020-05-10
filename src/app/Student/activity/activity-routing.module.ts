import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './activity.component';
import { StartActivityScreenComponent } from './screens/start-activity-screen/start-activity-screen.component';
import { ActivityScreenComponent } from './screens/activity-screen/activity-screen.component';


const routes: Routes = [
  {
    path: '',
    component: ActivityComponent,
    children: [
      { path: 'start', component: StartActivityScreenComponent },
      { path: 'in-progress', component: ActivityScreenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
