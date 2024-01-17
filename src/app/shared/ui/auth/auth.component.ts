import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from '../../services/auth/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { User } from '../../models/user.interface';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  private auth = inject(AuthService);
  private dialogService = inject(DialogService);
  private messageService = inject(MessageService);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  private dialogRef: DynamicDialogRef|undefined;
  public isLoggedIn = this.auth.currentUserSig;
  public isLoading = this.auth.isLoadingSig;

  public ngOnInit(): void {
    // what if I'm logged in but close the tab and create new tab
    this.auth.getLoggedInUser().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  public showAuthDialog(): void {
    this.dialogRef = this.dialogService.open(AuthDialogComponent, {
        width: '30%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
    });

    this.dialogRef.onClose.pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe((user: User) => {
      if (user?.token) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'You are logged in now!' });
      }
    });
  }

  public logout(): void {
    this.auth.logout();
  }

  public ngOnDestroy(): void {
    if (this.dialogRef) {
        this.dialogRef.close();
    }
  }

  public get menuItems(): MenuItem[] {
    return [
      {
        label: 'Favourites',
        icon: 'pi pi-heart-fill',
        command: () => {
          this.router.navigate(['/favourites']);
        },
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        command: () => {
          this.router.navigate(['/settings']);
        },
      },
    ];
  }
}
