import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: ''};
  photos$: Observable<any>;

  constructor(private photoService: PhotoService) {

  }

  ngOnInit() {
    this.photos$ = this.photoService.list();
  }

  register() {
    console.log(this.user);
  }

}
