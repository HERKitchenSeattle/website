import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';

import { firebaseConfig } from '../../main';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatCardModule,
    MatDividerModule,
  ],
})
export class EventsModule {}
