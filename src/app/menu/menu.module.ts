import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { DetailComponent } from './detail/detail.component';
import { DirectivesModule } from '../directives/directives.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [MenuComponent, DetailComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    DirectivesModule,
    MatCardModule,
    MatButtonModule,
    MatTreeModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
  ],
})
export class MenuModule {}
