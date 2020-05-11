import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityService } from '@core/providers/activity/activity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'activity-questions-container',
  template: `
    <activity-question
      [questions]="(questions$ | async)"
    ></activity-question>
  `
})
export class QuestionsContainerComponent implements OnInit {

  public questions$: Observable<any>;
  private activityId: string;

  constructor(
    private activityService: ActivityService,
    private activateRoute: ActivatedRoute
  ){
    this.activityId = this.activateRoute.snapshot.paramMap.get("id"); 
  }

  ngOnInit(): void {
    this.questions$ = this.activityService.getActivityQuestions(this.activityId);
  }

}
