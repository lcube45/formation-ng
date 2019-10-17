import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { TypePrestation } from 'src/app/shared/enums/type-prestation.enum';
import { StatusPrestation } from 'src/app/shared/enums/status-prestation.enum';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

  collection: Prestation[];
  headers = ['#', 'Type', 'Client', 'Durée', 'TJM HT', 'Total HT', 'Total TTC', 'TVA', 'Statut'];
  typePrestation = Object.values(TypePrestation);
  statutPrestation = Object.values(StatusPrestation);

  constructor(private prestationService: PrestationService) {
    //this.collection = this.prestationService.findAll();
  }

  ngOnInit() {

  }

}
