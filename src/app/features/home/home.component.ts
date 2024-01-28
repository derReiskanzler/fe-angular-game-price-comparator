import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { SearchGameFacadeService } from '../../shared/state/facade/search-game.facade.service';
import { Observable, tap } from 'rxjs';
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
  public search$!: Observable<string>;
  public error$!: Observable<string>;

  private facade = inject(SearchGameFacadeService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  private destroyRef = inject(DestroyRef);
  public searchControl = new FormControl();

  public ngOnInit(): void {
      this.results$ = this.facade.results$;
      this.isLoading$ = this.facade.isLoading$;
      this.facade.search$
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(search => this.searchControl.setValue(search)),
      ).subscribe();
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

  public openGameOverview(game: Game): void {
    this.facade.selectGame(game);
    this.router.navigate(['home','game-details'], { queryParams: { name: game.name } });
  }

  public onFavourize(game: Game): void {
    if (game.isFavourite) {
      this.facade.deleteFromFavourites(game.name);
    } else {
      this.facade.addToFavourite(game);
    }
  }

  public searchGame(): void {
    const value = this.searchControl.getRawValue();
    if (!value) {
      this.facade.resetSearch();
      this.router.navigate(['home']);

      return;
    }
    this.facade.searchGame(value);
    this.router.navigate(['home'], { queryParams: { search: value }});
  }
}
