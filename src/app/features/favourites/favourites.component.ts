import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Game } from '../../shared/models/game.interface';
import { Observable, tap } from 'rxjs';
import { SearchGameFacadeService } from '../../shared/state/facade/search-game.facade.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AsyncPipe, Location, NgIf } from '@angular/common';
import { GameListComponent } from '../../shared/ui/game-list/game-list.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    GameListComponent,
    ButtonModule,
  ],
})
export class FavouriteListComponent implements OnInit {
  public favourites$!: Observable<Game[]>;
  public isLoading$!: Observable<boolean>;
  public selectedGame$!: Observable<Game>;
  public error$!: Observable<string>;
  
  private readonly facade = inject(SearchGameFacadeService);
  private readonly router = inject(Router);
  private readonly messageService = inject(MessageService);
  private readonly location = inject(Location);

  public ngOnInit(): void {
    this.facade.getFavouriteList();
    this.favourites$ = this.facade.favourites$;
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
    this.router.navigate(['home','game-details'], { queryParams: { name: game.name } });
  }

  public onFavourize(game: Game): void {
    if (game.isFavourite) {
      this.facade.deleteFromFavourites(game.name);
    } else {
      this.facade.addToFavourite(game);
    }
  }

  public onBack(): void {
    this.location.back();
  }
}
