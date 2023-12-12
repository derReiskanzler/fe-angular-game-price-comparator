import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, WritableSignal, inject } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthComponent } from '../../shared/ui/auth/auth.component';
import { AuthService } from '../../shared/services/auth/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  private dialogRef: DynamicDialogRef|undefined;

  public auth = inject(AuthService);
  private dialogService = inject(DialogService);
  private messageService = inject(MessageService);

  public ngOnInit(): void {

    // TODO: to show nickname in header - get logged in user from BE (check if I am logged in) and set user signal in auth service and on error set user signal to null
    // or set expiry date, nickname in local storage when trying to use already logged in user here and set user signal with nickname from local storage here

    // what if I'm logged in but close the tab and create new tab
  }

  public showAuthDialog(): void {
    this.dialogRef = this.dialogService.open(AuthComponent, {
        width: '30%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
    });

    this.dialogRef.onClose.subscribe(_success => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'You are logged in now!' });
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
