import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { TypePrestation } from 'src/app/shared/enums/type-prestation.enum';
import { StatusPrestation } from 'src/app/shared/enums/status-prestation.enum';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

  collection$: Observable<Prestation[]>;
  headers = ['#', 'Type', 'Client', 'Durée', 'TJM HT', 'Total HT', 'Total TTC', 'TVA', 'Statut', 'Actions'];
  typePrestation = Object.values(TypePrestation);
  statutPrestation = Object.values(StatusPrestation);

  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) {
    this.collection$ = this.prestationService.collection;
  }

  ngOnInit() {

  }

  edit(prestation: Prestation) {
    this.router.navigate(['/prestations', 'edit', prestation.id]);
  }

  delete(prestation: Prestation) {
    this.prestationService.delete(prestation);
  }

  changeType(prestation: Prestation, event: any) {
    this.prestationService.updateType(prestation, event.target.value)
  }

  changeStatus(prestation: Prestation, event: any) {
    this.prestationService.updateStatus(prestation, event.target.value)
  }

}
