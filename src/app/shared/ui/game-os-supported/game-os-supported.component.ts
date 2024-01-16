import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-os-supported',
  templateUrl: './game-os-supported.component.html',
  styleUrls: ['./game-os-supported.component.scss']
})
export class GameOsSupportedComponent {
  @Input() styleClass: string = 'px-1 py-2 flex gap-2 align-items-center';
  @Input() windows: boolean = false;
  @Input() mac: boolean = false;
  @Input() linux: boolean = false;
}
