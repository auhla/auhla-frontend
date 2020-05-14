import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '@services/notification/notification.service';
import { ActivityProviderService } from '@core/providers/activity/activity-provider.service';
import { ActivityService } from '@activity/services/activity/activity.service';
import { Activity } from '@models/activity.model';

@Component({
  selector: 'shared-join-activity-card',
  templateUrl: './join-activity-card.component.html',
  styleUrls: ['./join-activity-card.component.css']
})
export class JoinActivityCardComponent implements OnInit {

  key: string;
  name: string;

  constructor(
    private activityProvider: ActivityProviderService,
    private activityService: ActivityService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async join(key: string, name: string){
    try {
      const activity: Activity = await this.activityProvider.getActivityByKey(key);
      
      this.activityService.handleActivity(activity);
      this.router.navigate(['student/activity/start'],);
    } 
    catch (error) {
      this.notificationService.error('La llave es incorrecta');
    }

  }
}
