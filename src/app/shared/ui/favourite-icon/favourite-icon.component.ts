import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favourite-icon',
  templateUrl: './favourite-icon.component.html',
  styleUrls: ['./favourite-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
  ],
})
export class FavouriteIconComponent {
  @Input() isFavourite: boolean|undefined;
  @Input() size = '1.2rem';
  @Output() favourize = new EventEmitter<void>();

  public mouseEntered = false;

  public onFavourize(event: Event): void {
    event.stopPropagation();
    this.favourize.emit();
  }
}
