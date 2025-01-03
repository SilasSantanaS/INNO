import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver usuários',
        routerLink: '/users',
      },
    ];
  }

  create(): void {
    this.router.navigate(['users/new']);
  }
}
