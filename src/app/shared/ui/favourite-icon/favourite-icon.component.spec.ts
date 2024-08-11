import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteIconComponent } from './favourite-icon.component';

describe('FavouriteIconComponent', () => {
  let component: FavouriteIconComponent;
  let fixture: ComponentFixture<FavouriteIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FavouriteIconComponent]
    });
    fixture = TestBed.createComponent(FavouriteIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
