import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrl: './reset-password-dialog.component.scss',
})
export class ResetPasswordDialogComponent {
  form: FormGroup;
  visible: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.form = this.fb.group({
      password: ['', Validators.required],
      confirmedPassword: ['', Validators.required],
    });
  }

  showDialog() {
    this.visible = true;
  }

  confirm(): void {
    this.loading = true;

    setTimeout(() => {
      this.visible = false;
      this.loading = false;
      this.form.reset();

      this.messageService.add({
        severity: 'success',
        summary: 'Êxito',
        detail: 'Senha alterada com sucesso.',
      });
    }, 2000);
  }

  cancel(): void {
    this.visible = false;
    this.form.reset();
  }
}
