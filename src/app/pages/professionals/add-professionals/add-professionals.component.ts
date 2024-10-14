import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-professionals',
  templateUrl: './add-professionals.component.html',
  styleUrl: './add-professionals.component.scss'
})
export class AddProfessionalsComponent {

  constructor(private router: Router) {}

  save(): void {
    this.router.navigate(['./professionals']);
  }
}
