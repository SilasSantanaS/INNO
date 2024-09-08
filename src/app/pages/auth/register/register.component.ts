import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IUser } from '../../../interfaces/user';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { passwordMatchValidator } from '../../../directives/password-match.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {
      fullName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
    },
    {
      Validators: passwordMatchValidator,
    }
  );

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  registerUser(): void {
    const user = { ...this.registerForm.value };
    delete user.confirmPassword;

    this.authService.registerUser(user as IUser).subscribe(
      (response) => {
        console.log(response);
        this.messageService.add({
          severity: 'success',
          summary: 'Êxito',
          detail: 'Cadastro realizado com sucesso.',
        });

        this.router.navigate(['auth/login']);
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível realizar o cadastrado de usuário.',
        });
      }
    );
  }
}
