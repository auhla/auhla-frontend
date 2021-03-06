import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '@models/activity.model';


@Component({
  selector: 'activity-activity-detail-card',
  templateUrl: './activity-detail-card.component.html',
  styleUrls: ['./activity-detail-card.component.css']
})
export class ActivityDetailCardComponent implements OnInit {
  
  @Input()
  public activity: Activity;

  constructor() { }

  ngOnInit(): void {
  }

}
