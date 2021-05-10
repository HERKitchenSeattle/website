import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { UpdateService } from './update.service';

@Component({
  selector: 'her-kitchen',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'HER Kitchen';
  constructor(private sw: UpdateService) {
    this.sw.checkForUpdates();
  }

  ngOnInit() {}
}
