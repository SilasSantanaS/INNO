import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';
import { ScrollerModule } from 'primeng/scroller';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AddPatientsComponent } from './add-patients.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPatientsRoutingModule } from './add-patients-routing.module';
import { SpinnerModule } from '../../../components/spinner/spinner.module';
import { TimelineModule } from "../../../components/timeline/timeline.module";
import { FileCardModule } from "../../../components/file-card/file-card.module";
import { BreadCrumbModule } from "../../../components/bread-crumb/bread-crumb.module";
import { FileUploadModule } from '../../../components/file-upload/file-upload.module';

@NgModule({
  declarations: [
    AddPatientsComponent
  ],
  imports: [
    CardModule,
    FormsModule,
    ButtonModule,
    CommonModule,
    TooltipModule,
    DividerModule,
    SpinnerModule,
    ScrollerModule,
    CalendarModule,
    DropdownModule,
    FileCardModule,
    TimelineModule,
    InputTextModule,
    InputMaskModule,
    BreadCrumbModule,
    FileUploadModule,
    InputNumberModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    AddPatientsRoutingModule
]
})
export class AddPatientsModule { }
