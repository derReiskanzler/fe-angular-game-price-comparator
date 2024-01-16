import { Component, OnInit, inject } from '@angular/core';
import { FavouritesFacadeService } from '../../../../shared/state/facade/favourites.facade.service';
import { Favourite } from '../../../../shared/models/favourite.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.scss']
})
export class FavouriteListComponent implements OnInit {
  public favourites$!: Observable<Favourite[]>;
  public isLoading$!: Observable<boolean>;

  private facade = inject(FavouritesFacadeService);

  public ngOnInit(): void {
    console.log('works')
    this.facade.getFavouriteList();
    this.favourites$ = this.facade.favourites$;
    this.isLoading$ = this.facade.isLoading$;
  }
}
