import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  public list() {
    // return de la méthode pour ne pas déclencher l'appel au WS dès l'instanciation du service
    return this.http.get(`${environment.urlApi}/photos?albumId=1`);
  }
}
