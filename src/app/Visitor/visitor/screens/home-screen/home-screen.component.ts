import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/Core/services/firestore/firestore.service';
import { NotificationService } from '@services/notification/notification.service';


@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(
    private firestoreService: FirestoreService,
  ) { }

  async ngOnInit() {
    
  }

  crear(){
    /*QUESTIONS.forEach((question: any) => { 
      let id: string = this.firestoreService.creatId();
      let activityId: string = "FycTiKfDqUgV1P9hGLHT";
      question.id = id;
      question.activityId = activityId;
      question.createAt = new Date();
      question.modifiedAt = question.createAt;
      this.firestoreService.addDocument('activity-question', id, question);
    });*/
  }

}
