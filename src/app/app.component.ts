import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { HeaderComponent } from './features/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
  ],
})
export class AppComponent implements OnInit {
  private primengConfig = inject(PrimeNGConfig);

  public ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
