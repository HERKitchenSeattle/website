import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutSiteComponent } from './pages/about-site/about-site.component';
import { AboutComponent } from './pages/about/about.component';
import { BrandingComponent } from './pages/branding/branding.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { HomeComponent } from './home/home.component';
import { InstagramComponent } from './pages/instagram/instagram.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TwitterComponent } from './pages/twitter/twitter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'about-site',
    component: AboutSiteComponent,
  },
  {
    path: 'locations',
    redirectTo: 'events',
    pathMatch: 'full',
  },
  {
    path: 'branding',
    component: BrandingComponent,
  },
  {
    path: 'facebook',
    component: FacebookComponent,
  },
  {
    path: 'instagram',
    component: InstagramComponent,
  },
  {
    path: 'twitter',
    component: TwitterComponent,
  },
  {
    path: 'changelog',
    component: ChangelogComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./pages/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabledBlocking',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      useHash: true,
      urlUpdateStrategy: 'eager',
      scrollPositionRestoration: 'top',
      relativeLinkResolution: 'corrected',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
