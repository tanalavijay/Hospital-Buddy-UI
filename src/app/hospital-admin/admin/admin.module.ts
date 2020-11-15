import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReferringphysicianComponent } from './referringphysician/referringphysician.component';
import { ICDComponent } from './icd/icd.component';
import { CPTComponent } from './cpt/cpt.component';
import { SettingsComponent } from './settings/settings.component';
import { AddcptcodeComponent } from './cpt/addcptcode/addcptcode.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddictcodeComponent } from './icd/addictcode/addictcode.component';

export const routes = [
  { path: '', redirectTo: 'referringphysician', pathMatch: 'full' },
  { path: 'referringphysician', component: ReferringphysicianComponent, data: { breadcrumb: 'Referring Physician' } },
  { path: 'cpt', component: CPTComponent, data: { breadcrumb: 'CPT Codes' } },
  { path: 'icd', component: ICDComponent, data: { breadcrumb: 'ICD Codes' } },
  { path: 'settings', component: SettingsComponent, data: { breadcrumb: 'Settings' } },
];

@NgModule({
  declarations: [AdminComponent, ReferringphysicianComponent, ICDComponent, CPTComponent, SettingsComponent, AddcptcodeComponent, AddictcodeComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents :[AddcptcodeComponent,DeleteConfirmDialogComponent,AddictcodeComponent]
})

export class AdminModule { }
