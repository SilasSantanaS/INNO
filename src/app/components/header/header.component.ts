import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['auth/login']);
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/']
      },
      {
        label: 'Agenda',
        icon: 'pi pi-calendar-plus',
        routerLink: ['calendar']
      },
      {
        label: 'Pacientes',
        icon: 'pi pi-users',
        routerLink: ['patients'],
      },
      {
        label: 'Profissionais',
        icon: 'pi pi-user-plus',
        routerLink: ['professionals']
      },
      {
        label: 'Análise',
        icon: 'pi pi-chart-bar',
        routerLink: ['analysis']
      },
    ];
  }
}
