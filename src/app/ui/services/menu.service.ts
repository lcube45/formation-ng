import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  status$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  toggle() {
    this.status$.next(!this.status$.value);
  }
}
