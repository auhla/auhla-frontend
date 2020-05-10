import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinActivityCardComponent } from './components/join-activity-card/join-activity-card.component';
import { WorkshopsCardComponent } from './components/workshops-card/workshops-card.component';


const components = [
  JoinActivityCardComponent,
  WorkshopsCardComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
