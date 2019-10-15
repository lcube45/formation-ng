import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status$: Observable<boolean>;
  faBars = faBars;

  constructor(private menuService: MenuService) {
    this.status$ = this.menuService.status$;
  }

  ngOnInit() {
  }

  toggle() {
    this.menuService.toggle();
  }
}
