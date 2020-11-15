import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HospitalComponent } from './hospital/hospital.component';
import { PhysicianComponent } from './physician/physician.component';
import { PatientsComponent } from './patients/patients.component';
import { AddhospitalComponent } from './hospital/addhospital/addhospital.component';
import { AddphysicianComponent } from './physician/addphysician/addphysician.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

export const routes = [
  { path: '', redirectTo: 'hospital', pathMatch: 'full' },
  { path: 'hospital', component: HospitalComponent, data: { breadcrumb: 'Hospitals' } },
  { path: 'physician', component: PhysicianComponent, data: { breadcrumb: 'Physicians' } },
  { path: 'patient', component: PatientsComponent, data: { breadcrumb: 'Patients' } },
];

@NgModule({
  declarations: [ManageComponent, HospitalComponent, PhysicianComponent, PatientsComponent, AddhospitalComponent, AddphysicianComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents : [AddhospitalComponent,AddphysicianComponent,DeleteConfirmDialogComponent]
})

export class ManageModule { }
