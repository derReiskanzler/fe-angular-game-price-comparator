import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../models/game.interface';
import { GameComponent } from '../game/game.component';
import { SkeletonModule } from 'primeng/skeleton';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    SkeletonModule,
    GameComponent,
  ],
})
export class GameListComponent {
  @Input() games!: Game[]|null;
  @Input() isLoading: boolean|null = false;
  @Output() selectGame = new EventEmitter<Game>();
  @Output() favourize = new EventEmitter<Game>();
}
