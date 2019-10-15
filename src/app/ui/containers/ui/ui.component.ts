import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

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
