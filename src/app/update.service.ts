import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor(public updates: SwUpdate, public _snackBar: MatSnackBar) {
    if (updates.isEnabled) {
      updates
        .checkForUpdate()
        .then(() =>
          console.log(
            'checking for updates. time is ' + new Date().getUTCDate()
          )
        );

      interval(15000).subscribe(() =>
        updates
          .checkForUpdate()
          .then(() =>
            console.log(
              'checking for updates. time is ' + new Date().getUTCDate()
            )
          )
      );
    }
  }

  public checkForUpdates(): void {
    this.updates.available.subscribe((event) => this.promptUser());
  }

  private promptUser(): void {
    console.log('updating to new version');
    this._snackBar
      .open('This site has a new version.', 'Reload')
      .afterDismissed()
      .subscribe(() => {
        this.updates.activateUpdate().then(() => document.location.reload());
      });
  }
}
