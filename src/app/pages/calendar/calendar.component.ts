import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { IProfessional } from '../../interfaces/professional';
import { ProfessionalService } from '../../services/professional.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent implements OnInit {
  isLoading: boolean = false;
  showSchedulerDialog: boolean = false;
  tabs: { title: string; content: string }[] = [];
  professionals: IProfessional[] = [];
  breadcrumbItems: MenuItem[] = [];
  loading: boolean = false;

  constructor(private professionalService: ProfessionalService) {}

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver agendamentos de pacientes',
        routerLink: '/calendar',
      },
    ];

    this.tabs = [
      { title: 'Agendados', content: 'Tab 1 Content' },
      { title: 'Disponíveis', content: 'Tab 2 Content' },
    ];

    this.loadProfessionals();
  }

  scheduleAppointment(): void {
    this.showSchedulerDialog = true;
  }

  onDialogClose(): void {
    this.showSchedulerDialog = false;
  }

  getCalendarByProfessional(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  loadProfessionals() {
    this.professionals = this.professionalService.getProfessionals();
  }

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
