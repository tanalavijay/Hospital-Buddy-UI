import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddadminDialogComponent } from './addadmin-dialog/addadmin-dialog.component';

export const routes = [
  { path: '', component:AdminComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [AdminComponent, AddadminDialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[AddadminDialogComponent]
})

export class AdminModule { }
