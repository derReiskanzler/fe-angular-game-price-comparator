import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { AuthComponent } from '../../shared/ui/auth/auth.component';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AuthComponent,
    ToastModule,
    MenubarModule,
  ],
})
export class HeaderComponent {
  private readonly router = inject(Router);

  public onLogoClick(): void {
    this.router.navigate(['home']);
  }
}
