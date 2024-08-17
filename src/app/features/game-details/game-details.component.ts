import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Game } from '../../shared/models/game.interface';
import { GameProviderTypes } from '../../shared/models/game-provider-types.enum';
import { SearchGameFacadeService } from '../../shared/state/facade/search-game.facade.service';
import { Observable, tap } from 'rxjs';
import { AsyncPipe, Location, NgFor, NgIf } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { GameProviderDetailsComponent } from '../../shared/ui/game-provider-details/game-provider-details.component';
import { GameOsSupportedComponent } from '../../shared/ui/game-os-supported/game-os-supported.component';
import { FavouriteIconComponent } from '../../shared/ui/favourite-icon/favourite-icon.component';
import { MessageService } from 'primeng/api';
import { GameProviderLogoPipe } from '../../shared/utils/pipes/game-provider-logo.pipe';
import { GameProviderNamePipe } from '../../shared/utils/pipes/game-provider-name.pipe';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    TabViewModule,
    ButtonModule,
    GameProviderDetailsComponent,
    GameOsSupportedComponent,
    FavouriteIconComponent,
    GameProviderLogoPipe,
    GameProviderNamePipe,
  ],
})
export class GameDetailsComponent implements OnInit {
  public activeIndex: number = GameProviderTypes.STEAM;
  public selectedGame$!: Observable<Game>;
  public isLoading$!: Observable<boolean>;
  public error$!: Observable<string>;
  
  private readonly facade = inject(SearchGameFacadeService);
  private readonly location = inject(Location);
  private readonly messageService = inject(MessageService);

  public ngOnInit(): void {
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

  public onBack(): void {
    this.location.back();
  }

  public onFavourize(game: Game|null): void {
    if (!game) {
      return;
    }

    if (game.isFavourite) {
      this.facade.deleteFromFavourites(game.name);
    } else {
      this.facade.addToFavourite(game);
    }
  }
}
