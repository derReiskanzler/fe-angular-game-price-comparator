import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SkeletonModule } from 'primeng/skeleton';
import { GameDetailsModule } from '../../../shared/ui/game-details/game-details.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    GameDetailsModule,

    SkeletonModule,
  ],
  declarations: [ HomeComponent ],
})
export class HomeModule { }
