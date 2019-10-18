import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addClient(event: Client) {
    this.clientService.add(event).then( () => {
      this.router.navigate(['/clients', 'list']);
    });
  }
}
