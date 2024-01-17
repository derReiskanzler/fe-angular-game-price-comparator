import { Component, OnInit, inject } from '@angular/core';
import { FavouritesFacadeService } from '../../shared/state/facade/favourites.facade.service';
import { Game } from '../../shared/models/game.interface';
import { Observable, tap } from 'rxjs';
import { SearchGameFacadeService } from '../../shared/state/facade/search-game.facade.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AsyncPipe, NgIf } from '@angular/common';
import { GameListModule } from '../../shared/ui/game-list/game-list.module';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
  standalone: true,
  imports: [NgIf, GameListModule, AsyncPipe],
})
export class FavouriteListComponent implements OnInit {
  public favourites$!: Observable<Game[]>;
  public isLoading$!: Observable<boolean>;
  public selectedGame$!: Observable<Game>;
  public error$!: Observable<string>;
  
  private facade = inject(FavouritesFacadeService);
  private searchFacade = inject(SearchGameFacadeService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  public ngOnInit(): void {
    this.facade.getFavouriteList();
    this.favourites$ = this.facade.favourites$;
    this.isLoading$ = this.facade.isLoading$;
    this.selectedGame$ = this.searchFacade.selectedGame$;
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
      this.searchFacade.selectGame(game);
    }
    this.router.navigate(['home','game-details']);
  }
}
