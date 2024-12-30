import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HealthPlansFacade } from '../../../facades/health-plans.facade';
import { IHealthPlan } from '../../../interfaces/health-plan';

@Component({
  selector: 'app-add-health-plans',
  templateUrl: './add-health-plans.component.html',
  styleUrl: './add-health-plans.component.scss',
})
export class AddHealthPlansComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean = false;
  breadcrumbItems: MenuItem[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService,
    private healthPlansFacade: HealthPlansFacade
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.breadcrumbItems = [
      {
        label: 'Ver planos de saúde',
        routerLink: '/health-plans',
      },
      {
        label: 'Cadastrar novo plano de saúde',
        routerLink: '/health-plans/new',
      },
    ];
  }

  save(): void {
    this.isLoading = true;
    let healthPlan = this.form.value as IHealthPlan;
    //this.professinalService.createProfessinal(professional);

    setTimeout(() => {
      this.isLoading = false;

      this.messageService.add({
        severity: 'success',
        summary: 'Êxito',
        detail: 'Plano de saúde cadastrado com sucesso.',
      });

      this.router.navigate(['./health-plans']);
    }, 3000);
  }
}
