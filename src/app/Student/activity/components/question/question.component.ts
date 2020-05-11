import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '@models/activity.model';

@Component({
  selector: 'activity-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  public questions: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
