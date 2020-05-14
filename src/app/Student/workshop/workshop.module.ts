import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopRoutingModule } from './workshop-routing.module';

import { TimelineScreenComponent } from './screens/timeline-screen/timeline-screen.component';

import { WorkshopComponent } from './workshop.component';

@NgModule({
  declarations: [
    WorkshopComponent,
    TimelineScreenComponent
  ],
  imports: [
    CommonModule,
    WorkshopRoutingModule
  ]
})
export class WorkshopModule { }
