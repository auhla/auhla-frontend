import { Injectable } from '@angular/core';
import { FirestoreService } from '@services/firestore/firestore.service';
import { User } from '@models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestoreServices: FirestoreService) { }

  public addUser(user: User): Promise<void>{
    const id: string = this.firestoreServices.creatId();
    user.id = id;
    user.createAt = new Date();
    user.modifiedAt = user.createAt;
    return this.firestoreServices.addDocument<User>('user', id, user);
  }

  public updateUser(id: string, user: User): Promise<void>{
    user.modifiedAt = new Date();
    return this.firestoreServices.updateDocument<Partial<User>>(`user/${id}`, user);
  }

  public getUser(id: string): Observable<User>{
    return this.firestoreServices.snapshotDocument<User>(`user/${id}`);
  }

  public deleteUser(id: string): Promise<void>{
    return this.firestoreServices.deleteDocument(`user/${id}`);
  }
  
}
