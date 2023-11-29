import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  public loggedInUser: User|null = null;
  private ref: DynamicDialogRef | undefined;

  public auth = inject(AuthService);
  private dialogService = inject(DialogService);
  private messageService = inject(MessageService);

  public ngOnInit(): void {
    // TODO: to show nickname in header - get logged in user from BE (check if I am logged in) and set user signal in auth service and on error set user signal to null
    // or set expiry date, nickname in local storage when trying to use already logged in user here and set user signal with nickname from local storage here

    // what if I'm logged in but close the tab and create new tab
  }

  public showAuthDialog(): void {
    this.ref = this.dialogService.open(AuthComponent, {
        width: '30%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
    });

    this.ref.onClose.subscribe((result: User | any) => {
      if (result.token) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'You are logged in now!' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong while you were logging in.' });
        // this.messageService.add({ severity: 'error', summary: 'Error', detail: result.message });
      }
    });
  }

  public logout(): void {
    this.auth.logout();
  }

  public ngOnDestroy(): void {
    if (this.ref) {
        this.ref.close();
    }
  }
}
