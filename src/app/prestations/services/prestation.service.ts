import { Injectable } from '@angular/core';
import { fakePrestations } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})

export class PrestationService {

  public collection = fakePrestations;

  constructor() { }
}
