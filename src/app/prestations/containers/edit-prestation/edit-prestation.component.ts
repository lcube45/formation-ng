import { Component, OnInit } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {

  prestation$: Observable<Prestation>;
  id: string;

  constructor(
    private prestationService: PrestationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.prestation$ = this.route.paramMap.pipe(
      switchMap( (params) => {
        this.id = params.get('id');
        return this.prestationService.getPrestation(this.id);
      })
    );
  }

  editPrestation(prestation: Prestation) {
    this.prestationService.update(this.id, prestation).then( () => {
      this.router.navigate(['/prestations', 'list']);
    });
  }

}
