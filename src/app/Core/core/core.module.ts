import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirebaseModule } from './modules/firebase/firebase.module';
import { MaterialModule } from './modules/material/material.module';

import { ActivityProviderService } from './providers/activity/activity-provider.service';
import { UserProviderService } from './providers/user/user-provider.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirebaseModule,
    MaterialModule
  ],
  providers: [
    UserProviderService,
    ActivityProviderService
  ]
})
export class CoreModule { }
