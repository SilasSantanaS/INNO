import { Status } from '../../../enums/status';
import { IUser } from '../../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../enums/profile';
import { MenuItem, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersFacade } from '../../../facades/users.facade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.scss',
})
export class AddUsersComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;
  btnTitle: string = 'Cadastrar';
  breadcrumbItems: MenuItem[] = [];

  readonly statuses = [
    {
      id: Status.Active,
      label: 'Ativo',
    },
    {
      id: Status.Inactive,
      label: 'Inativo',
    },
  ];

  readonly profiles = [
    {
      id: Profile.Admin,
      label: 'Administrardor',
    },
    {
      id: Profile.Receptionist,
      label: 'Recepcionista',
    },
    {
      id: Profile.Professional,
      label: 'Profissional de Saúde',
    },
    {
      id: Profile.Patient,
      label: 'Paciente',
    },
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private usersFacade: UsersFacade,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      status: ['', Validators.required],
      password: ['', Validators.required],
      profileId: ['', Validators.required],
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

    this.editComponentSettings();
  }

  save(): void {
    this.isLoading = true;
    const user = { ...this.form.value } as IUser;

    this.usersFacade.newUser(user).subscribe(() => {
      this.isLoading = false;

      this.messageService.add({
        severity: 'success',
        summary: 'Êxito',
        detail: 'Usuário cadastrado com sucesso.',
      });

      this.router.navigate(['./users']);
    });
  }

  editComponentSettings(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.usersFacade.getUserById(+id).subscribe((user) => {
          this.form.patchValue({
            ...user,
            password: '*********',
          });
        });

        this.btnTitle = 'Editar';
        this.form.get('password')?.disable();
      }
    });
  }
}
