import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatBadgeModule, MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';
import { FeedComponent } from './feed/feed.component';


@NgModule({
  declarations: [DashboardComponent, FeedComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ]
})
export class DashboardModule { }
