import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { SignOutComponent } from './sign-out/sign-out.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'sign-out',
    component: SignOutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsoleRoutingModule {}
