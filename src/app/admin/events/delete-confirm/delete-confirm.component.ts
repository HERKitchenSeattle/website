import { Component, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../../pages/events/events.component';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss'],
})
export class DeleteConfirmComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public db: AngularFirestore
  ) {}
  actuallyDeleteTheEvent(id: string) {
    this.db.collection('events').doc(id).delete();
  }
}
