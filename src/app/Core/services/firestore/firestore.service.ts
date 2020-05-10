import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, QueryFn, DocumentData, DocumentChangeAction, DocumentSnapshot, Action } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore) { }

  public creatId(): string{
    return this.angularFirestore.createId();
  }

  public stringFormat(string: string){
    return string
      .trim()
      .toLowerCase()
  }

  public snapshotCollection<type>(path?: string, queryFn?: QueryFn): Observable<type[]> {
    const collection: AngularFirestoreCollection<type> = this.angularFirestore.collection<type>(path, queryFn);
    
    return collection.snapshotChanges()
      .pipe( map((snapshot: DocumentChangeAction<type>[]) => {
        return snapshot
          .map((doc: DocumentChangeAction<type>) => {
            return doc.payload.doc.data() as type;
          });
      }));
  }

  public snapshotDocument<type>(path?: string): Observable<type> {
    const document: AngularFirestoreDocument<type> = this.angularFirestore.doc<type>(path);
    
    return document.snapshotChanges()
      .pipe( map((snapshot: Action<DocumentSnapshot<type>>) => {
        return snapshot.payload.data() as type;
    }));
  }

  public addDocument<type>(path: string, id: string, data: type): Promise<void>{
    return this.angularFirestore.collection<type>(path).doc<type>(id).set(data);
  }

  public deleteDocument(path: string): Promise<void>{
    return this.angularFirestore.doc(path).delete();
  }

  public updateDocument<type>(path: string, data: type): Promise<void>{
    return this.angularFirestore.doc<type>(path).update(data);
  }
  
}
