import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InstagramComponent } from './instagram/instagram.component';
import { FacebookComponent } from './facebook/facebook.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from '@angular/fire';

import { MatDialogModule } from '@angular/material/dialog';

import { DialogComponent } from './navbar/dialog/dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import {
  CommonModule,
  HashLocationStrategy,
  Location,
  LocationStrategy,
} from '@angular/common';
import { ContactButtonComponent } from './contact-button/contact-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonDialogComponent } from './contact-button/button-dialog/button-dialog.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SecondDialogComponent } from './contact-button/button-dialog/second-dialog/second-dialog.component';
import {
  AngularFirePerformanceModule,
  PerformanceMonitoringService,
} from '@angular/fire/performance';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ErrorDialogComponent } from './contact-button/button-dialog/error-dialog/error-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DirectivesModule } from './directives/directives.module';
import { MdbModule } from 'mdb-angular-ui-kit';

//change the keys in main.ts, app.module.ts, environment.ts, and environment.prod.ts.
const firebaseConfig = {
  apiKey: 'AIzaSyBouOK3qYFSPtttpQTIUPR6WDy0AlNvbNY',
  authDomain: 'herkitchenseattle.firebaseapp.com',
  databaseURL: 'https://herkitchenseattle-default-rtdb.firebaseio.com',
  projectId: 'herkitchenseattle',
  storageBucket: 'herkitchenseattle.appspot.com',
  messagingSenderId: '532110473531',
  appId: '1:532110473531:web:b6cdda638b727921d49f1e',
  measurementId: 'G-1W9PF6P5JD',
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    InstagramComponent,
    FacebookComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    DialogComponent,
    ContactButtonComponent,
    ButtonDialogComponent,
    SecondDialogComponent,

    ErrorDialogComponent,
  ],
  imports: [
    BrowserModule,

    DirectivesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirePerformanceModule,
    AngularFirestoreModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    MdbModule,
    // AngularFireModule.initializeApp(firebaseConfig),
  ],

  providers: [
    PerformanceMonitoringService,
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
