import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss',
})
export class BreadCrumbComponent implements OnInit {
  @Input()
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
