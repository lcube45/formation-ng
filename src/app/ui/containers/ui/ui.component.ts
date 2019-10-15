import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  status$: Observable<boolean>;

  constructor(private menuService: MenuService) {
    this.status$ = this.menuService.status$;
  }

  ngOnInit() {
  }

  toggle() {
    this.menuService.toggle();
  }
}
