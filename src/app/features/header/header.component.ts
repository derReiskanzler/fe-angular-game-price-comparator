import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { AuthModule } from '../../shared/ui/auth/auth.module';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgTemplateOutlet,
    ToastModule,
    MenubarModule,
    AuthModule,
  ],
})
export class HeaderComponent {
  private router = inject(Router);

  public onLogoClick(): void {
    this.router.navigate(['home']);
  }
}
