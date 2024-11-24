import { Component } from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.scss',
})
export class DataViewComponent {
  products: any[] = [
    {
      name: '09h00 - 10h00',
      category: 'Maria Lima Flores',
      price: 100,
      image: 'produto-a.jpg',
    },
    {
      name: '11h00 - 12h00',
      category: 'Roberto Dias Araújo',
      price: 200,
      image: 'produto-b.jpg',
    },
    {
      name: '14h00 - 15h00',
      category: 'Luciana Ribeiro Dantas',
      price: 300,
      image: 'produto-c.jpg',
    },
  ];
}
