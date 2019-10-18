import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  client$: Observable<Client>;
  id: string;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.client$ = this.route.paramMap.pipe(
      switchMap( (params) => {
        this.id = params.get('id');
        return this.clientService.getClient(this.id);
      })
    );
  }

  editClient(client: Client) {
    this.clientService.update(this.id, client).then( () => {
      this.router.navigate(['/clients', 'list']);
    });
  }
}
