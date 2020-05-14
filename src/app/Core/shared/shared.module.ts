import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { JoinActivityCardComponent } from './components/join-activity-card/join-activity-card.component';
import { WorkshopsCardComponent } from './components/workshops-card/workshops-card.component';


const components = [
  JoinActivityCardComponent,
  WorkshopsCardComponent
];

const toastrOptions = {
  progressBar: true,
  closeButton: true,
  positionClass: 'toast-top-right'
};

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot(toastrOptions)
  ],
  exports: [
    ...components,
    ToastrModule,
  ]
})
export class SharedModule { }
