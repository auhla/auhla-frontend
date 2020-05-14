import { Injectable } from '@angular/core';
import { Activity } from '@models/activity.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private activitySubject: BehaviorSubject<Activity>;

  constructor() { 
    const activity: Activity = JSON.parse(sessionStorage.getItem('activity'));
    this.activitySubject = new BehaviorSubject(activity);
  }

  handleActivity(activity: Activity){
    sessionStorage.setItem('activity', JSON.stringify(activity))
    this.activitySubject.next(activity);
  }

  get activity$(){
    return this.activitySubject.asObservable();
  }
}
