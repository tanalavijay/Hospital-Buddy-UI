import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AppSettings } from "../app.settings";
import { Settings } from "../app.settings.model";
import { AlertService } from "../shared/services/alert.service";
import { LoginService } from "./login.service";
import { emailValidator } from "../theme/utils/app-validators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AlertService,LoginService],
})
export class LoginComponent {
  public TypeString: string = "password";
  public isPassword: boolean = true;
  public form: FormGroup;
  public settings: Settings;
  constructor(
    public appSettings: AppSettings,
    public fb: FormBuilder,
    public router: Router,
    public alertService: AlertService,
    public loginService: LoginService
  ) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    });
  }

  ngOnInit() {
    if (localStorage.getItem('user_info')) {
      var currentUser = JSON.parse(localStorage.getItem('user_info'));
      let token = currentUser.token;
      this.loginService.checkSessionAlive(token).then(res => {
        if (res.success) {
          this.router.navigate(["/login"]);
        }
      });
    }
  }

  // public onSubmit(values){
  //   if (this.form.valid) {
  //     this.loginService.loginCheck(values.email, values.password).then(res => {
  //       console.log(res,"vijay");
  //       if(res.auth) {
  //         localStorage.removeItem('user_info');
  //         localStorage.setItem('user_info', JSON.stringify({ user_id: res.user_id,  token: res.auth_token,  email:res.email}));
  //         this.router.navigate(["/design/"]);
  //         this.alertService.createAlert(res.message,1);  
  //       }
  //       else {
  //         this.alertService.createAlert(res.message,0);
  //       }
  //     }).catch(e => {
  //       console.log(e);
  //     });
      
  //   }
  // }

  public onSubmit(values) {
    if (this.form.valid) {
      if (this.form.valid && values.email == "cynthia@hospitalbuddy.com") {
        localStorage.setItem('userType', 'owner');
        this.router.navigate(['/owner']);
      } else if (this.form.valid && values.email == "admin@hospitalbuddy.com") {
        localStorage.setItem('userType', 'admin');
        this.router.navigate(['/admin']);
      } else {
        localStorage.setItem('userType', '');
      }
    }
  }

  public ChangetextType(isPassword) {
    if (isPassword) {
      this.TypeString = "password";
    } else {
      this.TypeString = "text";
    }
  }

  // ngAfterViewInit(){
  //   this.settings.loadingSpinner = false;
  // }

  ngAfterViewInit() {
    setInterval(() => {
      this.settings.loadingSpinner = false;
    }, 500);
  }
}
