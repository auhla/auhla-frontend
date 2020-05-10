import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorRoutingModule } from './visitor-routing.module';

import { SharedModule } from 'src/app/Core/shared/shared.module';

import { VisitorComponent } from './visitor.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    VisitorComponent, 
    HomeScreenComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    VisitorRoutingModule,
    SharedModule
  ]
})
export class VisitorModule { }
