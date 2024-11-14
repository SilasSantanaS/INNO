import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss',
})
export class SchedulerComponent {
  appointmentDate: string = 'aa';
  visible: boolean = false;

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

  showDialog() {
    this.visible = true;
  }

  handleDateClick(arg: any) {
    this.appointmentDate = arg.dateStr;
    this.visible = true;
  }
}
