import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Game } from '../../shared/models/game.interface';
import { GameProviderTypes } from '../../shared/models/game-provider-types.enum';
import { SearchGameFacadeService } from '../../shared/state/facade/search-game.facade.service';
import { Observable, tap } from 'rxjs';
import { AsyncPipe, Location, NgIf } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { GameProviderDetailsModule } from '../../shared/ui/game-provider-details/game-provider-details.module';
import { GameOsSupportedModule } from '../../shared/ui/game-os-supported/game-os-supported.module';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ NgIf, AsyncPipe, TabViewModule, ButtonModule, GameProviderDetailsModule, GameOsSupportedModule, ],
})
export class GameDetailsComponent implements OnInit {
  public activeIndex: number = GameProviderTypes.STEAM;
  public selectedGame$!: Observable<Game>;
  public isLoading$!: Observable<boolean>;

  private facade = inject(SearchGameFacadeService);
  private location = inject(Location);

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
    this.location.back()
  }

  //TODO: add/remove to favourites
}
