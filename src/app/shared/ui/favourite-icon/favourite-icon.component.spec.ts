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

  it('should emit favourize event', () => {
    const event = new Event('some-event');
    const spy = jest.spyOn(component.favourize, 'emit');
    const eventSpy = jest.spyOn(event, 'stopPropagation');

    component.onFavourize(event);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(eventSpy).toHaveBeenCalledTimes(1);
  });
});
