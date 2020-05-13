import { Injectable } from '@angular/core';
import { Activity } from '@models/activity.model';
import { FirestoreService } from '@services/firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityProviderService {
  
  constructor(
    private firebaseService: FirestoreService
  ) { }

  public async getActivityByKey(key: string): Promise<Activity> {
    return new Promise((resolve, reject) => this.firebaseService
      .snapshotCollection('activity', ref => ref.where('key', '==', key))
      .subscribe((activities: Activity[]) => {
        activities.length ? resolve(activities.shift()): reject('Invalid key');
      }));
  }

  public getActivityQuestions(activityId: string){
    return this.firebaseService.snapshotCollection('activity-question', ref => ref.where('activityId', '==', activityId));
  }
}
