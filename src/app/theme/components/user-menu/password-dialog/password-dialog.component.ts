import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../../shared/services/alert.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../../../shared/services/mustMatch';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.scss'],
  providers: [AlertService]
})
export class PasswordDialogComponent implements OnInit {
  
  passwordChangeForm: FormGroup;
  isOneLetter = false;
  isOneCapitalLetter = false;
  isOneNumber = false;
  isOneSpecialCaharacter = false;
  isMinLength = false;
  isValidate = false;
  public TypeString:string="password";
  public TypeStringInNewPassword:string="password";
  public TypeStringInConfirmPassword:string="password";
  public isPassword:boolean=true;
  
  
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<PasswordDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) {
    this.createChangePasswordForm();
  }
  
  ngOnInit() {
    this.passwordChangeForm.controls['uniqueId'].setValue(1012147);
  }
  
  close(): void {
    this.dialogRef.close();
  }
  
  updatePassword() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }
  
  get uniqueId() { return this.passwordChangeForm.get('uniqueId'); }
  
  get currentPassword() { return this.passwordChangeForm.get('currentPassword'); }
  
  get userNewPassword() { return this.passwordChangeForm.get('userNewPassword'); }
  
  get userNewReenterPassword() { return this.passwordChangeForm.get('userNewReenterPassword'); }
  
  createChangePasswordForm() {
    this.passwordChangeForm = this.fb.group({
      uniqueId : new FormControl(''),
      currentPassword : new FormControl('',[Validators.required,Validators.maxLength(50),this.noWhiteSpaceValidator]),
      userNewPassword : new FormControl('',[Validators.required,Validators.maxLength(50),this.noWhiteSpaceValidator]),
      userNewReenterPassword : new FormControl('',[Validators.required,Validators.maxLength(50),this.noWhiteSpaceValidator])
    }, {
      validator: MustMatch('userNewPassword', 'userNewReenterPassword')
    });
  }
  
  onKeyPress(e) {
    var pswd = e.value;
    //validate the length
    if (pswd.length < 8) {
      this.isMinLength = false;
    } else {
      this.isMinLength = true;
    }
    
    //validate letter
    if (pswd.match(/[A-z]/)) {
      if (pswd != '_') {
        this.isOneLetter = true;
      } else {
        this.isOneLetter = false;
      }
    } else {
      this.isOneLetter = false;
    }
    
    //validate uppercase letter
    if (pswd.match(/[A-Z]/)) {
      this.isOneCapitalLetter = true;
    } else {
      this.isOneCapitalLetter = false;
    }
    
    //validate special character
    if (pswd.match(/[!@#\$%\^&\_\+\<\>\.\,\=\:\;\'\?\(\)\[\]\\\/\|\*{}-]/)) {
      this.isOneSpecialCaharacter = true;
    } else {
      this.isOneSpecialCaharacter = false;
    }
    
    //validate number
    if (pswd.match(/\d/)) {
      this.isOneNumber = true;
    } else {
      this.isOneNumber = false;
    }
    
  }
  
  noWhiteSpaceValidator(control: FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid = !isWhiteSpace;
    return isValid ? null : { 'whitespace': true };
  }
  
  public ChangetextType(isPassword){
    if(isPassword){
      this.TypeString="password"
    }else{
      this.TypeString="text"
    }
  }
  
  public ChangetextTypeInConfirmPassword(isPassword){
    if(isPassword){
      this.TypeStringInConfirmPassword="password"
    }else{
      this.TypeStringInConfirmPassword="text"
    }
  }
  
  public ChangetextTypeInNewPassword(isPassword){
    if(isPassword){
      this.TypeStringInNewPassword="password"
    }else{
      this.TypeStringInNewPassword="text"
    }
  }
  
}
