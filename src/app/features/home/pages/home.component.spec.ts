import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideMockStore } from '@ngrx/store/testing';
import { intialSearchGameState } from '../../../shared/state/reducers/search-game.reducer';
import { GameDetailsComponent } from '../../../shared/ui/game-details/game-details.component';
import { GameProviderDetailsComponent } from '../../../shared/ui/game-provider-details/game-provider-details.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, GameDetailsComponent, GameProviderDetailsComponent ],
      imports: [
        SkeletonModule,
        TabViewModule,
        ButtonModule,
      ],
      providers: [
        provideMockStore({ initialState: intialSearchGameState }),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
