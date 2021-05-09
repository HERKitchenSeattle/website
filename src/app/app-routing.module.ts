import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FacebookComponent } from './facebook/facebook.component';
import { InstagramComponent } from './instagram/instagram.component';
import { EventsComponent } from './events/events.component';

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
    path: 'locations',
    redirectTo: 'events',
    pathMatch: 'full',
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
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
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
      initialNavigation: 'enabled',
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
