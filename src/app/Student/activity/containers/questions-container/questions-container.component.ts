import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ActivityProviderService } from '@core/providers/activity/activity-provider.service';
import { Activity } from '@models/activity.model';


@Component({
  selector: 'activity-questions-container',
  template: `
    <activity-question
      [questions]="(questions$ | async)"
    ></activity-question>
  `
})
export class QuestionsContainerComponent implements OnInit {

  @Input() 
  public activity: Activity;

  public questions$: Observable<any[]>;

  constructor(
    private activityProvider: ActivityProviderService,
  ){ 
  }
  
  ngOnInit(): void {
    this.questions$ = this.activityProvider.getActivityQuestions(this.activity.id);                      
  }

}
