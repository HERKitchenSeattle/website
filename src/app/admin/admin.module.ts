import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ConsoleRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SignOutComponent } from './sign-out/sign-out.component';
import { DeleteConfirmComponent } from './events/delete-confirm/delete-confirm.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AdminComponent,
    MessagesComponent,
    LoginComponent,
    EventsComponent,
    SignOutComponent,
    DeleteConfirmComponent,
  ],
  imports: [
    CommonModule,

    ConsoleRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatNativeDateModule,
    MatDialogModule,
    MatAutocompleteModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ],
})
export class AdminModule {}
