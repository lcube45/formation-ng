import { Component, NgZone } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pierre ';
  constructor(
    private swUpdate: SwUpdate,
    private ngZone: NgZone
  ) {

    if (this.swUpdate.isEnabled) {
      this.ngZone.runOutsideAngular(() => {
        interval(1000)
          .pipe(
            tap(() => console.log('on check'))
          )
          .subscribe(_ => {
            this.ngZone.run(() => {
              this.swUpdate.checkForUpdate()
            });
          });
      });


      this.ngZone.run(() => {
        this.swUpdate.available.subscribe(version => {
          if (version) {
            console.log('La version actuelle est', version.current);
            console.log('La dernière version disponible est', version.available);
            this.swUpdate.activateUpdate().then(() => window.location.reload());
          }
        });
        this.swUpdate.activated.subscribe(version => {
          console.log('L’ancienne version était', version.previous);
          console.log('La nouvelle version est', version.current);
        });
      });

    }
  }
}
