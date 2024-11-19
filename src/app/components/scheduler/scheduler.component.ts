import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import { ProfessionalService } from '../../services/professional.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss',
})
export class SchedulerComponent {
  selectedCountry: any;
  loading: boolean = false;
  visible: boolean = false;
  appointmentDate: string = '';
  countries: any[] | undefined;
  filteredCountries: any[] | undefined;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'Consulta Carlos Faria', date: '2024-11-01' },
      { title: 'Consulta Daniella Dias', date: '2024-11-05' },
      { title: 'Consulta Michael Torres', date: '2024-11-28' },
    ],
  };

  constructor(
    private messageService: MessageService,
    private professionalService: ProfessionalService
  ) {}

  showDialog() {
    this.visible = true;
  }

  handleDateClick(arg: any) {
    this.appointmentDate = arg.dateStr;
    this.visible = true;
  }

  onConfirm(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.visible = false;

      this.messageService.add({
        severity: 'success',
        summary: 'Êxito',
        detail: 'Paciente agendado com sucesso.',
      });
    }, 2000);
  }

  cancel(): void {
    this.visible = false;
  }
}
