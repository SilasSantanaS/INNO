import { SubSink } from 'subsink';
import { shareReplay } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '../../facades/auth.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private subs = new SubSink();

  items: MenuItem[] | undefined;

  members = [
    {
      name: 'Amy Elsner',
      image: 'amyelsner.png',
      email: 'amy@email.com',
      role: 'Owner',
    },
    {
      name: 'Bernardo Dominic',
      image: 'bernardodominic.png',
      email: 'bernardo@email.com',
      role: 'Editor',
    },
    {
      name: 'Ioni Bowcher',
      image: 'ionibowcher.png',
      email: 'ioni@email.com',
      role: 'Viewer',
    },
  ];

  constructor(private router: Router, private authFacade: AuthFacade) {}

  logout(): void {
    this.subs.add(
      this.authFacade
        .logout()
        .pipe(shareReplay({ refCount: true }))
        .subscribe(() => {
          this.router.navigate(['auth/login']);
        })
    );
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-th-large',
        routerLink: ['dashboard'],
      },
      {
        label: 'Agenda',
        icon: 'pi pi-calendar-plus',
        routerLink: ['calendar'],
      },
      {
        label: 'Pacientes',
        icon: 'pi pi-users',
        routerLink: ['patients'],
      },
      {
        label: 'Profissionais',
        icon: 'pi pi-user-plus',
        routerLink: ['professionals'],
      },
      {
        label: 'Planos de Saúde',
        icon: 'pi pi-heart',
        routerLink: ['health-plans'],
      },
      {
        label: 'Análise',
        icon: 'pi pi-chart-bar',
        routerLink: ['analysis'],
      },
    ];
  }
}
