import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from '../../main';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
  ],
})
export class MenuModule {}
