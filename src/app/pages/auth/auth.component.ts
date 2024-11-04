import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  isLoading: boolean = false;

  loginForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
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
