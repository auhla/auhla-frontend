import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { VisitorComponent } from './visitor.component';


const routes: Routes = [
  { 
    path: '',
    component: VisitorComponent,
    children: [
      { path: '', component: HomeScreenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
