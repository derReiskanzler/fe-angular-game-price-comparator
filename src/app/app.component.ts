import { Component, OnInit, inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private primengConfig = inject(PrimeNGConfig);

  public ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
