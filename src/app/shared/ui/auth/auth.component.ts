import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from '../../services/auth/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { User } from '../../models/user.interface';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { NgIf } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    AvatarModule,
    TooltipModule,
    RippleModule,
    MenuModule,
  ],
})
export class AuthComponent implements OnInit, OnDestroy {
  private readonly auth = inject(AuthService);
  private readonly dialogService = inject(DialogService);
  private readonly messageService = inject(MessageService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  private dialogRef: DynamicDialogRef|undefined;
  public readonly isLoggedIn = this.auth.currentUserSig;
  public readonly isLoading = this.auth.isLoadingSig;

  public ngOnInit(): void {
    // what if I'm logged in but close the tab and create new tab
    this.auth.getLoggedInUser().pipe(
      takeUntilDestroyed(this.destroyRef),
      tap(user => this.auth.currentUserSig.set(user)),
    ).subscribe();
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
      // {
      //   label: 'Settings',
      //   icon: 'pi pi-cog',
      //   command: () => {
      //     this.router.navigate(['/settings']);
      //   },
      // },
    ];
  }
}
