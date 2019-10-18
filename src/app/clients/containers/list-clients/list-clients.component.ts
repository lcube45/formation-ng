import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/shared/models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  collection$: Observable<Client[]>;
  headers = ['#', 'Label', 'Actions'];

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {
    this.collection$ = this.clientService.collection;
  }

  ngOnInit() {

  }

  edit(client: Client) {
    this.router.navigate(['/clients', 'edit', client.id]);
  }

  delete(client: Client) {
    this.clientService.delete(client);
  }
}
