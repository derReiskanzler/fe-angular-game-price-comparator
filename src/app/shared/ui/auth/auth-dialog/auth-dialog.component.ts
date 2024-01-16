import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthType } from '../../../models/auth-type.enum';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from '../../../services/auth/auth.service';
import { LoginUserDto } from '../../../dtos/login-user.dto';
import { RegisterUserDto } from '../../../dtos/register-user.dto';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthDialogComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private dialogRef = inject(DynamicDialogRef);
  private messageService = inject(MessageService);
  private auth = inject(AuthService);

  public activeIndex: number = AuthType.LOGIN;
  public loginFormGroup!: FormGroup;
  public registerFormGroup!: FormGroup;
  public isLoading = this.auth.isLoadingSig;

  public ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
      password: new FormControl<string | null>(null, [Validators.required])
    });
    this.registerFormGroup = new FormGroup({
      email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
      nickname: new FormControl<string | null>(null,[Validators.required]),
      password: new FormControl<string | null>(null, [Validators.required]),
    });
  }

  public get loginIsSelected(): boolean {
    return this.activeIndex === AuthType.LOGIN;
  }

  public onSubmit(): void {
    this.messageService.clear();

    if (this.loginIsSelected) {
      if (this.loginFormGroup.invalid) {
        this.loginFormGroup.markAllAsTouched();
        return;
      }

      this.auth.login(this.loginFormGroup.value as LoginUserDto)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(user => {
          this.dialogRef.close(user);
        });
    } else {
      if (this.registerFormGroup.invalid) {
        this.registerFormGroup.markAllAsTouched();
        return;
      }

      this.auth.register(this.registerFormGroup.value as RegisterUserDto)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(user => {
          this.dialogRef.close(user);
        });
    }
  }
}
