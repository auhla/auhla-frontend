import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '@activity/services/activity/activity.service';
import { Activity } from '@models/activity.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-start-activity-screen',
  templateUrl: './start-activity-screen.component.html',
  styleUrls: ['./start-activity-screen.component.css']
})
export class StartActivityScreenComponent implements OnInit {

  public activity$: Observable<Activity>;

  constructor(
    private activityService: ActivityService
  ){ 
  }

  ngOnInit(): void {
    this.activity$ = this.activityService.activity$;
  }

}
