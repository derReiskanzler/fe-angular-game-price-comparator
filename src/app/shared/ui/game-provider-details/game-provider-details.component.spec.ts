import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProviderDetailsComponent } from './game-provider-details.component';

describe('GameProviderDetailsComponent', () => {
  let component: GameProviderDetailsComponent;
  let fixture: ComponentFixture<GameProviderDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameProviderDetailsComponent]
    });
    fixture = TestBed.createComponent(GameProviderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
