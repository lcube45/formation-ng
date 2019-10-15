import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  date = moment();
  dateOfToday: string = this.date.format('MMMM YYYY, h:mm:ss a');

  constructor() {
   }

  ngOnInit() {
  }
}
