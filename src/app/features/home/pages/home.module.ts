import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SkeletonModule } from 'primeng/skeleton';
import { GameProviderDetailsModule } from '../../../shared/ui/game-provider-details/game-provider-details.module';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    CommonModule,
    TabViewModule,
    ButtonModule,
    SkeletonModule,
    
    GameProviderDetailsModule,
  ],
  declarations: [ HomeComponent, GameDetailsComponent ],
})
export class HomeModule { }
