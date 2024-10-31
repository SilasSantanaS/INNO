import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  breadcrumbItems: MenuItem[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver agendamentos de pacientes',
        routerLink: '/calendar',
      },
    ];
  }

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
