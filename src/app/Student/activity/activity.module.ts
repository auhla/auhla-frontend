import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { StartActivityScreenComponent } from './screens/start-activity-screen/start-activity-screen.component';
import { ActivityScreenComponent } from './screens/activity-screen/activity-screen.component';


@NgModule({
  declarations: [
    ActivityComponent,
    StartActivityScreenComponent,
    ActivityScreenComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
