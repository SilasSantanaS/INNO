import listPlugin from '@fullcalendar/list';
import { MessageService } from 'primeng/api';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import {
  CalendarOptions,
  DateSelectArg,
  EventApi,
  EventClickArg,
} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  currentEvents: EventApi[] = [];
  filteredCountries: any[] | undefined;
  eventListDialogVisible: boolean = false;

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    eventsSet: this.handleEvents.bind(this),
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'Consulta Carlos Faria', date: '2025-01-10' },
      { title: 'Consulta Daniella Dias', date: '2025-01-15' },
      { title: 'Consulta Michael Torres', date: '2025-01-28' },
    ],
  };

  constructor(private messageService: MessageService) {}

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: '',
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  handleDateClick(arg: any) {
    this.eventListDialogVisible = true;
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
