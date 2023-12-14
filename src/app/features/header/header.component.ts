import { ChangeDetectionStrategy, Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthComponent } from '../../shared/ui/auth/auth.component';
import { AuthService } from '../../shared/services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { User } from '../../shared/models/user.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  private auth = inject(AuthService);
  private dialogService = inject(DialogService);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);
  
  private dialogRef: DynamicDialogRef|undefined;
  public isLoggedIn = this.auth.currentUserSig;
  public isLoading = this.auth.isLoadingSig;

  public ngOnInit(): void {
    // what if I'm logged in but close the tab and create new tab
    this.auth.getLoggedInUser().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  public showAuthDialog(): void {
    this.dialogRef = this.dialogService.open(AuthComponent, {
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
}
