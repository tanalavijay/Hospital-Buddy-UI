import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addadmin-dialog',
  templateUrl: './addadmin-dialog.component.html',
  styleUrls: ['./addadmin-dialog.component.scss']
})
export class AddadminDialogComponent implements OnInit {

  adminBasicDetailsForm: FormGroup;
  adminBillingForm:FormGroup;

  cities = [{'city_id':'1','city_name':'New York'},
{'city_id':'2','city_name':'Toronto'},
{'city_id':'3','city_name':'San Antonio'},
{'city_id':'4','city_name':'Vancouver'}
]
states = [{'state_id':'1','state_name':'Alabama'},
{'state_id':'2','state_name':'Quebec'},
{'state_id':'3','state_name':'Colorado'},
{'state_id':'4','state_name':'Ontario'}
]
package = [{'package_id':'1','package_name':'Basic'},
{'package_id':'2','package_name':'Gold'},
{'package_id':'3','package_name':'Platinum'}
]

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this record ?';
  public cancelClicked: boolean = false;

  constructor(public fb:FormBuilder, public alertService: AlertService,@Inject(MAT_DIALOG_DATA) public admin: any ,public dialogRef: MatDialogRef<AddadminDialogComponent>) {
    this.createAdminDetailForm();
    this.createBillingDetailsForm();
  }

  get adminName() { return this.adminBasicDetailsForm.get('adminName'); }

  get emailId() { return this.adminBasicDetailsForm.get('emailId'); }

  get contactName() { return this.adminBasicDetailsForm.get('contactName'); }

  get contactNumber() { return this.adminBasicDetailsForm.get('contactNumber'); }

  get address() { return this.adminBasicDetailsForm.get('address'); }

  get state() { return this.adminBasicDetailsForm.get('state'); }

  get city() { return this.adminBasicDetailsForm.get('city'); }

  get billingemailId() { return this.adminBillingForm.get('billingemailId'); }

  get billingaddress() { return this.adminBillingForm.get('billingaddress'); }

  get billingstate() { return this.adminBillingForm.get('billingstate'); }

  get billingcity() { return this.adminBillingForm.get('billingcity'); }

  createAdminDetailForm() {
    this.adminBasicDetailsForm = this.fb.group({
      adminName : new FormControl('' , [Validators.required , this.noWhiteSpaceValidator]),
      emailId : new FormControl('' , [Validators.required , this.noWhiteSpaceValidator]),
      contactName : new FormControl('' , [Validators.required , this.noWhiteSpaceValidator]),
      contactNumber : new FormControl('' , [Validators.required , this.noWhiteSpaceValidator]),
      address : new FormControl('' , [Validators.required , this.noWhiteSpaceValidator]),
      state : new FormControl('' , [Validators.required]),
      city : new FormControl('' , [Validators.required])
    });
  }

  createBillingDetailsForm() {
    this.adminBillingForm = this.fb.group({
      billingemailId : new FormControl('' , [Validators.required , this.noWhiteSpaceValidator]),
      billingaddress : new FormControl('' , [Validators.required , this.noWhiteSpaceValidator]),
      billingstate : new FormControl('' , [Validators.required]),
      billingcity : new FormControl('' , [Validators.required])
    });
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close('save');
  }

  saveAdmin(): void {
    this.dialogRef.close('save');
  }

}
