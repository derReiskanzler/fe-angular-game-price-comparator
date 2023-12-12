import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthType } from '../../models/auth-type.enum';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from '../../services/auth/auth.service';
import { LoginUserDto } from '../../dtos/login-user.dto';
import { RegisterUserDto } from '../../dtos/register-user.dto';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnInit {
  public activeIndex: number = AuthType.LOGIN;
  public loginFormGroup!: FormGroup;
  public registerFormGroup!: FormGroup;

  private destroyRef = inject(DestroyRef);
  private dialogRef = inject(DynamicDialogRef);
  public auth = inject(AuthService);

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
