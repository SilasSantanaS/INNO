import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  tabs: { title: string; content: string }[] = [];
  breadcrumbItems: MenuItem[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver agendamentos de pacientes',
        routerLink: '/calendar',
      },
    ];

    this.tabs = [
      { title: 'Pacientes', content: 'Tab 1 Content' },
      { title: 'Outros', content: 'Tab 2 Content' },
    ];
  }

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
