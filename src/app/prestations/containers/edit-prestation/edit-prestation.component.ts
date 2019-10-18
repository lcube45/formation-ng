import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {

  constructor(private prestationService: PrestationService) { }

  ngOnInit() {
  }

  editPrestation(event: Prestation) {
    //this.prestationService.update(id, event);
  }

}
