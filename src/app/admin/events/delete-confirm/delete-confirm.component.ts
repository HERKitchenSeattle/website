import { Component, OnInit } from '@angular/core';
import { actualDeleteEvent } from '../events.component';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss'],
})
export class DeleteConfirmComponent implements OnInit {
  constructor() {}
  actuallyDeleteTheEvent() {}
  ngOnInit(): void {}
}
