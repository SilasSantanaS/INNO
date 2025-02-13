import { SubSink } from 'subsink';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { debounceTime, finalize } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '../../facades/auth.facade';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

interface ILoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  private subs = new SubSink();
  isLoading: boolean = false;

  loginForm = this.fb.group({
    password: ['', Validators.required],
    checked: [false, Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initializeAuthSubscription();
  }

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  get formValue() {
    return this.loginForm.value as ILoginForm;
  }

  private initializeAuthSubscription() {
    this.subs.add(
      this.authFacade.authState$.pipe(debounceTime(500)).subscribe((auth) => {
        if (!auth.isAuthenticated || !auth.user) {
          return;
        }

        return this.router.navigate(['/']);
      })
    );
  }

  onSubmit(): void {
    this.isLoading = true;

    const data = {
      ...this.formValue,
      password: this.formValue.password.trim(),
    };

    this.subs.add(
      this.authFacade
        .login(data)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe({
          next: (user) => {},
          error: (error) => {
            this.messageService.add({
              key: 'notification',
              severity: 'error',
              summary: 'Houve um problema!',
              detail: error?.error?.messages?.length
                ? error.error.messages[0]
                : 'Tente novamente mais tarde.',
            });
          },
        })
    );
  }

  login(): void {
    const { email, password } = this.loginForm.value;

    this.authService.getUserByEmail(email as string).subscribe(
      (response) => {
        if (response.length > 0 && response[0].password == password) {
          this.isLoading = true;

          setTimeout(() => {
            this.isLoading = false;

            sessionStorage.setItem('email', email as string);
            this.router.navigate(['/dashboard']);
          }, 3000);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Email e/ou senha inválido(s).',
          });
        }
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível logar no sistema.',
        });
      }
    );
  }
}
