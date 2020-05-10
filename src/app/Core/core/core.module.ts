import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseModule } from './modules/firebase/firebase.module';
import { UserService } from './providers/user/user.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirebaseModule
  ],
  providers: [
    UserService
  ]
})
export class CoreModule { }
