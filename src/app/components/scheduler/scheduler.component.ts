import { MessageService } from 'primeng/api';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfessionalService } from '../../services/professional.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss',
})
export class SchedulerComponent {
  selectedCountry: any;
  loading: boolean = false;
  appointmentDate: string = '';
  countries: any[] | undefined;
  filteredCountries: any[] | undefined;

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  handleDateClick(arg: any) {
    this.appointmentDate = arg.dateStr;
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

  hideDialog() {
    this.visibleChange.emit(false);
  }
}
