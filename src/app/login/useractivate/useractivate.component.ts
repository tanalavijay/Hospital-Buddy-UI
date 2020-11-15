import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AbstractControl, FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-useractivate',
  templateUrl: './useractivate.component.html',
  styleUrls: ['./useractivate.component.scss'],
  providers: [LoginService, AlertService]
})
export class UseractivateComponent implements OnInit {

  today = Date.now();
  userId: string;
  accesToken: string;
  resToken: string;
  isOneLetter = false;
  isOneCapitalLetter = false;
  isOneNumber = false;
  isOneSpecialCaharacter = false;
  isMinLength = false;
  isValidate = false;
  private _submitted: boolean = false;

  public form: FormGroup;
  public settings: Settings;
  createFormEnable: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, public fb: FormBuilder, public router: Router, public loginService: LoginService, public alertService: AlertService) {
    this.createForm();
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params.uid;
      this.accesToken = params.activationToken;
    });
  }

  createForm() {
    this.form = this.fb.group({
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
      confirmPassword: new FormControl('', [Validators.minLength(8), Validators.required])
    }, {
      validator: this.passwordConfirming // your validation method
    });
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    } else {
      return { invalid: false };
    }
  }

  ngOnInit() {
    // this.loginService.urlStatusCheck(this.userId, this.accesToken).then(res => {
    //   if (!res.success) {
    //     this.alertService.createAlert('The URL is no longer valid.', 0);
    //     this.router.navigate(['/login']);
    //     this.isValidate = false;
    //   } else {
    //     this.isValidate = true;
    //   }
    // }).catch(e => {
    //   this.isValidate = false;
    // });
  }
  get password() { return this.form.get('password'); };
  get confirmPassword() { return this.form.get('confirmPassword'); };


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

  public onSubmit(values: any): void {
    // if (this.form.valid) {
    // if (values['password'] === values['confirmPassword']) {
    //   this.loginService.userCreatePassword(values.password, this.userId, this.accesToken).then(res => {
    //     if (res.success) {
    //       this.alertService.createAlert('Password has been sucessfully created for your sales global account.', 1);
    //       this.router.navigate(['/login']);
    //     } else {
    //       this.alertService.createAlert(res.message, 0);
    //     }
    //   });
      // } else {
      //   console.log("error");
      // }
    }
  }

