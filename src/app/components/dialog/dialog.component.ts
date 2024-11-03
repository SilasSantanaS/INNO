import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  visible: boolean = false;
  loading: boolean = false;

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = 'pi pi-user-edit';
  @Input() severity: Button['severity'] = 'primary';

  @Output() confirm = new EventEmitter<void>();

  showDialog() {
    this.visible = true;
  }

  onConfirm(): void {
    this.loading = true;

    setTimeout(() => {
      this.confirm.emit();
      this.loading = false;
      this.visible = false;
    }, 4000);
  }

  cancel(): void {
    this.visible = false;
  }
}
