import { Component, OnInit } from '@angular/core';
import { ActivityService } from '@activity/services/activity/activity.service';
import { Observable } from 'rxjs';
import { Activity } from '@models/activity.model';

@Component({
  selector: 'app-activity-screen',
  templateUrl: './activity-screen.component.html',
  styleUrls: ['./activity-screen.component.css']
})
export class ActivityScreenComponent implements OnInit {

  public activity$: Observable<Activity>;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.activity$ = this.activityService.activity$;
  }   

}
