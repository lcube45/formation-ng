import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  private pstatus$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public status$ = this.pstatus$.asObservable();

  constructor() { }

  toggle() {
    this.pstatus$.next(!this.pstatus$.value);
  }
}
