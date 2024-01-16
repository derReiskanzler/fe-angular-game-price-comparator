import { Component, OnInit, inject } from '@angular/core';
import { SearchGameFacadeService } from '../../../../shared/state/facade/search-game.facade.service';
import { Observable } from 'rxjs';
import { Game } from '../../../../shared/models/game.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public results$!: Observable<Game[]>;
  public isLoading$!: Observable<boolean>;
  public selectedGame$!: Observable<Game>;

  private facade = inject(SearchGameFacadeService);
  private router = inject(Router);

  public ngOnInit(): void {
      this.results$ = this.facade.results$;
      this.isLoading$ = this.facade.isLoading$;
      this.selectedGame$ = this.facade.selectedGame$;
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
