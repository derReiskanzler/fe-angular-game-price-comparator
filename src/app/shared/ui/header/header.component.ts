import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  private ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService,
    public auth: AuthService,
  ) {}

  public ngOnInit(): void {
    // TODO: to show nickname in header - get logged in user from BE and set user signal in auth service and on error set user signal to null
    // or set nickname in localstorage when logging in/registering and set user signal with nickname from local storage here
  }

  public showAuthDialog(): void {
    this.ref = this.dialogService.open(AuthComponent, {
        width: '30%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
    });

    this.ref.onClose.subscribe((_success: any) => {

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
