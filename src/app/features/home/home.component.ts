import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { SearchGameFacadeService } from '../../shared/state/facade/search-game.facade.service';
import { Observable, debounceTime, map, tap } from 'rxjs';
import { Game } from '../../shared/models/game.interface';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AsyncPipe, NgIf } from '@angular/common';
import { GameListModule } from '../../shared/ui/game-list/game-list.module';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    GameListModule,
    
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
})
export class HomeComponent implements OnInit {
  public results$!: Observable<Game[]>;
  public isLoading$!: Observable<boolean>;
  public selectedGame$!: Observable<Game>;
  public error$!: Observable<string>;

  private facade = inject(SearchGameFacadeService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  private destroyRef = inject(DestroyRef);
  public searchControl = new FormControl();

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

      this.searchControl.valueChanges.pipe(
        takeUntilDestroyed(this.destroyRef),
        debounceTime(1000),
        map(value => {
          if (!value) {
            this.facade.resetSearch();
  
            return;
          }
  
          this.facade.searchGame(value);
        }),
      ).subscribe();
  }

  public openGameOverview(game: Game, selectedGameName?: string): void {
    if (game.name !== selectedGameName) {
      this.facade.selectGame(game);
    }
    this.router.navigate(['home','game-details'], { queryParams: { name: game.name } });
  }

  public resetSelectedGame(): void {
    this.facade.resetSelectedGame();
  }

  // TOOD: show message - cant add to favourite when user is not logged in
  public onFavourize(game: Game): void {
    if (game.isFavourite) {
      this.facade.deleteFromFavourites(game.name);
    } else {
      this.facade.addToFavourite(game);
    }
  }

}
