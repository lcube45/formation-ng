import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {TypePrestation} from '../../shared/enums/type-prestation.enum';
import {StatusPrestation} from '../../shared/enums/status-prestation.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  public collection: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;

  constructor(private afs: AngularFirestore) {

    this.itemsCollection = this.afs.collection<Prestation>('prestations');

    this.collection = this.itemsCollection.valueChanges().pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
  }

  public add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation)
    .catch((e) => {
      console.log(e);
    });
    // return this.http.post(url, item);
  }

  public updateStatus(item: Prestation, status: StatusPrestation): Promise<any> {
    const presta  = {...item};
    presta.status = status;
    return this.update(item.id, presta)
    // return this.http.put(url, item);
  }

   public updateType(item: Prestation, type: TypePrestation): Promise<any> {
    const presta  = {...item};
    presta.type = type;
    return this.update(item.id, presta)
    // return this.http.put(url, item);
  }

  public update(id, presta) {
    return this.itemsCollection.doc(id).update(presta).catch((e) => {
      console.log(e);
    });
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete()
    .catch((e) => {
      console.log(e);
    });
    // return this.http.delete(url, item);
  }

  public getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(url);
  }

}
