import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-os-supported',
  templateUrl: './game-os-supported.component.html',
  styleUrls: ['./game-os-supported.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
  ],
})
export class GameOsSupportedComponent {
  @Input() styleClass = 'px-1 py-2 flex gap-2 align-items-center';
  @Input() windows: boolean|undefined = false;
  @Input() mac: boolean|undefined = false;
  @Input() linux: boolean|undefined = false;
}
