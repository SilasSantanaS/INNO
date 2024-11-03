import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  visible: boolean = false;

  @Input()
  title: string = '';

  @Input()
  description: string = '';

  @Input()
  icon: string = 'pi pi-user-edit';

  @Input()
  severity: Button['severity'] = 'primary';

  showDialog() {
    this.visible = true;
  }

  confirm(): void {
    this.visible = false;
  }

  cancel(): void {
    this.visible = false;
  }
}
