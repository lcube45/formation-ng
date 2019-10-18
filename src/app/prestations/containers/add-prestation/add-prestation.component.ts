import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addPrestation(event: Prestation) {
    this.prestationService.add(event).then( () => {
      this.router.navigate(['/prestations', 'list']);
    });
  }

}
