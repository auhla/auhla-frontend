import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { VisitorComponent } from './visitor.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';


@NgModule({
  declarations: [VisitorComponent, HomeScreenComponent],
  imports: [
    CommonModule,
    VisitorRoutingModule
  ]
})
export class VisitorModule { }
