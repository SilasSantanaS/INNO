import { Router } from '@angular/router';
import { IUser } from '../../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.scss',
})
export class AddUsersComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;
  breadcrumbItems: MenuItem[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver usuários',
        routerLink: '/users',
      },
      {
        label: 'Cadastrar novo usuário',
        routerLink: '/users/new',
      },
    ];
  }

  save(): void {
    this.isLoading = true;
    let healthPlan = this.form.value as IUser;
    //this.professinalService.createProfessinal(professional);

    setTimeout(() => {
      this.isLoading = false;

      this.messageService.add({
        severity: 'success',
        summary: 'Êxito',
        detail: 'Usuário cadastrado com sucesso.',
      });

      this.router.navigate(['./users']);
    }, 3000);
  }
}
