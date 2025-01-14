import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  value: number = 5;
  isLoading: boolean = false;
  breadcrumbItems: MenuItem[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver perfil de usuário',
        routerLink: '/profile',
      },
    ];
  }

  removeAccount(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;

      this.messageService.add({
        severity: 'info',
        summary: 'Nota',
        detail: 'Sua conta será excluída em até 72 horas.',
      });
    }, 1000);
  }
}
