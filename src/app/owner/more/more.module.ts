import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreComponent } from './more.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwnersComponent } from './owners/owners.component';
import { SettingsComponent } from './settings/settings.component';
import { LookupOptionsComponent } from './lookup-options/lookup-options.component';
import { AddownersComponent } from './owners/addowners/addowners.component';
import { AddlookupComponent } from './lookup-options/addlookup/addlookup.component';

export const routes = [
  { path: '', redirectTo: 'owners', pathMatch: 'full' },
  { path: 'owners', component: OwnersComponent, data: { breadcrumb: 'Owners' } },
  { path: 'lookup', component: LookupOptionsComponent, data: { breadcrumb: 'Lookup' } },
  { path: 'settings', component: SettingsComponent, data: { breadcrumb: 'Settings' } },
];

@NgModule({
  declarations: [MoreComponent, OwnersComponent, SettingsComponent, LookupOptionsComponent, AddownersComponent,AddlookupComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents :[AddownersComponent,AddlookupComponent]
})

export class MoreModule { }
