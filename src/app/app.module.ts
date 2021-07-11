import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactButtonComponent } from './contact-button/contact-button.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { InstagramComponent } from './pages/instagram/instagram.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFirePerformanceModule,
  PerformanceMonitoringService,
} from '@angular/fire/performance';
import { firebaseConfig } from '../firebase';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { DialogComponent } from './navbar/dialog/dialog.component';
import { ButtonDialogComponent } from './contact-button/button-dialog/button-dialog.component';
import { DirectivesModule } from './directives/directives.module';
import {
  HashLocationStrategy,
  Location,
  LocationStrategy,
} from '@angular/common';
import { ErrorDialogComponent } from './contact-button/button-dialog/error-dialog/error-dialog.component';
import { SecondDialogComponent } from './contact-button/button-dialog/second-dialog/second-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandingComponent } from './pages/branding/branding.component';
import { CookieComponent } from './easter-eggs/cookie/cookie.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { AboutSiteComponent } from './pages/about-site/about-site.component';
import { TwitterComponent } from './pages/twitter/twitter.component';
import { ChangelogComponent } from './pages/changelog/changelog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ContactButtonComponent,
    FacebookComponent,
    FooterComponent,
    HomeComponent,
    InstagramComponent,
    NavbarComponent,
    PageNotFoundComponent,
    DialogComponent,
    ButtonDialogComponent,
    ErrorDialogComponent,
    SecondDialogComponent,
    BrandingComponent,
    CookieComponent,
    AboutSiteComponent,
    TwitterComponent,
    ChangelogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuicklinkModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    AngularFireAuthModule,
    DirectivesModule,
    AngularFirePerformanceModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    PerformanceMonitoringService,
    Location,
    Title,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
