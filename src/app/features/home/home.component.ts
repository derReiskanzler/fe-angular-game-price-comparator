import { Component, OnInit, inject } from '@angular/core';
import { SearchGameFacadeService } from '../../shared/state/facade/search-game.facade.service';
import { Observable, tap } from 'rxjs';
import { Game } from '../../shared/models/game.interface';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AsyncPipe, NgIf } from '@angular/common';
import { GameListModule } from '../../shared/ui/game-list/game-list.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [ NgIf, AsyncPipe, GameListModule, ],
})
export class HomeComponent implements OnInit {
  public results$!: Observable<Game[]>;
  public isLoading$!: Observable<boolean>;
  public selectedGame$!: Observable<Game>;
  public error$!: Observable<string>;

  private facade = inject(SearchGameFacadeService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  public ngOnInit(): void {
      this.results$ = this.facade.results$;
      this.isLoading$ = this.facade.isLoading$;
      this.selectedGame$ = this.facade.selectedGame$;
      this.error$ = this.facade.error$.pipe(
        tap(error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error,
          })
        })
      );
  }

  public openGameOverview(game: Game, selectedGameName?: string): void {
    if (game.name !== selectedGameName) {
      this.facade.selectGame(game);
    }
    this.router.navigate(['home','game-details']);
  }

  public resetSelectedGame(): void {
    this.facade.resetSelectedGame();
  }
}
