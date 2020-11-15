import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { MatDialog } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[AlertService]
})
export class UserMenuComponent implements OnInit {
  public userImage = '../../../../assets/img/users/default-user.jpg';
  constructor(private dialogRef: MatDialog, private changeDetectorRefs: ChangeDetectorRef, public dialog: MatDialog, public router:Router, public loginService: LoginService, public alertService: AlertService) { }

  public openUserDialog(id) {
    let dialogRef = this.dialog.open(PasswordDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

public openUserDialogs(id) {
  let dialogRef = this.dialog.open(ProfileDialogComponent, {
      data: id,
      height: 'auto',
      width: '600px',
      autoFocus:false
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

  ngOnInit() {

  }

  logoutUser(){
    this.router.navigate(['/login']);
    this.alertService.createAlert("Logged out successfully",1);
    // this.loginService.logOut().then(res => {
    //   if(res.success) {
    //     localStorage.clear();
    //     localStorage.removeItem('user_info');
    //     this.dialogRef.closeAll();
    //     this.router.navigate(['/login']);
    //     this.alertService.createAlert(res.message,1);
    //   }else {
    //     this.alertService.createAlert(res.message,0);
    //   }
    // }).catch(e => {
    //   console.log(e);
    // });
   }

}
