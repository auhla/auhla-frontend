import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { StartActivityScreenComponent } from './screens/start-activity-screen/start-activity-screen.component';
import { ActivityScreenComponent } from './screens/activity-screen/activity-screen.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionsContainerComponent } from './containers/questions-container/questions-container.component';
import { ActivityDetailCardComponent } from './components/activity-detail-card/activity-detail-card.component';


@NgModule({
  declarations: [
    ActivityComponent,
    StartActivityScreenComponent,
    ActivityScreenComponent,
    QuestionComponent,
    QuestionsContainerComponent,
    ActivityDetailCardComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
