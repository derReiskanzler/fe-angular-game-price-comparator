import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Game } from '../../shared/models/game.interface';
import { GameProviderTypes } from '../../shared/models/game-provider-types.enum';
import { SearchGameFacadeService } from '../../shared/state/facade/search-game.facade.service';
import { Observable, tap } from 'rxjs';
import { AsyncPipe, Location, NgFor, NgIf } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { GameProviderDetailsModule } from '../../shared/ui/game-provider-details/game-provider-details.module';
import { GameOsSupportedModule } from '../../shared/ui/game-os-supported/game-os-supported.module';
import { FavouriteIconModule } from '../../shared/ui/favourite-icon/favourite-icon.module';
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
    GameProviderDetailsModule,
    GameOsSupportedModule,
    FavouriteIconModule,
    GameProviderLogoPipe,
    GameProviderNamePipe,
  ],
})
export class GameDetailsComponent implements OnInit {
  public activeIndex: number = GameProviderTypes.STEAM;
  public selectedGame$!: Observable<Game>;
  public isLoading$!: Observable<boolean>;
  public error$!: Observable<string>;
  
  private facade = inject(SearchGameFacadeService);
  private location = inject(Location);
  private messageService = inject(MessageService);

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
