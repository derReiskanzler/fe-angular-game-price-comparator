import { Component, OnInit, inject } from '@angular/core';
import { Game } from '../../../../shared/models/game.interface';
import { GameProviderTypes } from '../../../../shared/models/game-provider-types.enum';
import { SearchGameFacadeService } from '../../../../shared/state/facade/search-game.facade.service';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  public activeIndex: number = GameProviderTypes.STEAM;
  public selectedGame$!: Observable<Game>;
  public isLoading$!: Observable<boolean>;

  private facade = inject(SearchGameFacadeService);
  private router = inject(Router);

  public ngOnInit(): void {
    this.isLoading$ = this.facade.isLoading$;
    this.selectedGame$ = this.facade.selectedGame$
      .pipe(
        tap(game => {
          if (!game.name) {
            this.onBack();
          }
        })
      );
  }

  public onBack(): void {
    this.router.navigate(['home']);
  }
}
