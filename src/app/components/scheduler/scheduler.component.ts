import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss',
})
export class SchedulerComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      // { title: 'Consulta Carlos Faria', date: '2024-11-01' },
      // { title: 'Consulta Daniella Dias', date: '2024-11-05' },
      // { title: 'Consulta Michael Torres', date: '2024-11-22' },
    ],
  };

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr);
  }
}
