import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrl: './file-card.component.scss'
})
export class FileCardComponent {
  @Input() title: string = '';
  @Input() showDeleteButton: boolean = true;

  constructor() {}
}
