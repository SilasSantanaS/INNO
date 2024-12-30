import { MenuItem } from 'primeng/api';
import { Sidebar } from 'primeng/sidebar';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  sidebarVisible: boolean = false;

  items: MenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-th-large', route: '/dashboard' },
    { label: 'Análise', icon: 'pi pi-chart-line', route: '/analysis' },
    { label: 'Pacientes', icon: 'pi pi-users', route: '/patients' },
    {
      label: 'Profissionais',
      icon: 'pi pi-user-plus',
      route: '/professionals',
    },
    { label: 'Agenda', icon: 'pi pi-calendar', route: '/calendar' },
    { label: 'Planos de Saúde', icon: 'pi pi-heart', route: '/health-plans' },
    { label: 'Usuários', icon: 'pi pi-user-minus', route: '/users' },
    { label: 'Notificações', icon: 'pi pi-comments', route: '' },
    { label: 'Configurações', icon: 'pi pi-cog', route: '/settings' },
  ];

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }
}
