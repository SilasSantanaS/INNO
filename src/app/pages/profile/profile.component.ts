import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver perfil de usuário',
        routerLink: '/profile',
      },
    ];
  }
}
