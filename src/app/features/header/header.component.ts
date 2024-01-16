import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SearchGameFacadeService } from '../../shared/state/facade/search-game.facade.service';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private facade = inject(SearchGameFacadeService);

  public searchControl = new FormControl();

  public ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef),
      debounceTime(500),
      map(value => {
        if (!value) {
          this.facade.resetSearch();

          return;
        }

        this.facade.searchGame(value);
      }),
    ).subscribe();
  }
}
