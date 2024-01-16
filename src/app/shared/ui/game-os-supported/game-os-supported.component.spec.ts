import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOsSupportedComponent } from './game-os-supported.component';

describe('GameOsSupportedComponent', () => {
  let component: GameOsSupportedComponent;
  let fixture: ComponentFixture<GameOsSupportedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameOsSupportedComponent]
    });
    fixture = TestBed.createComponent(GameOsSupportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
