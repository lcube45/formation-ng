import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public collection: Observable<Client[]>;
  private itemsCollection: AngularFirestoreCollection<Client>;

  constructor(private afs: AngularFirestore) {

    this.itemsCollection = this.afs.collection<Client>('clients');

    this.collection = this.itemsCollection.valueChanges().pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    );
  }

  public add(item: Client): Promise<any> {
    const id = this.afs.createId();
    const client = { id, ...item };
    return this.itemsCollection.doc(id).set(client)
    .catch((e) => {
      console.log(e);
    });
    // return this.http.post(url, item);
  }

  public update(id, client) {
    return this.itemsCollection.doc(id).update(client).catch((e) => {
      console.log(e);
    });
  }

  public delete(item: Client): Promise<any> {
    return this.itemsCollection.doc(item.id).delete()
    .catch((e) => {
      console.log(e);
    });
    // return this.http.delete(url, item);
  }

  public getClient(id: string): Observable<Client> {
    return this.itemsCollection.doc<Client>(id).valueChanges();
    // return this.http.get(url);
  }

}
