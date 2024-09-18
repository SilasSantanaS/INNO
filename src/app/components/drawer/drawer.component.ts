import { Sidebar } from 'primeng/sidebar';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e: Event): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = false;
}
