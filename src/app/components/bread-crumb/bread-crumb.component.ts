import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss',
})
export class BreadCrumbComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Profissionais de Saúde' },
      { label: 'Cadastrar Novo Profissional' }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
