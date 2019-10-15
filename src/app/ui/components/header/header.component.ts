import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status: boolean;

  constructor(private menuService: MenuService) {
    this.menuService.status$
    .subscribe((data) => this.status = data);
  }

  ngOnInit() {
  }

  toggle() {
    this.menuService.toggle();
  }
}
