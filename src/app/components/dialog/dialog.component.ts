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
  icon: string = 'pi pi-user-edit';

  @Input()
  severity: Button["severity"] = 'primary';

  showDialog() {
    this.visible = true;
  }
}
