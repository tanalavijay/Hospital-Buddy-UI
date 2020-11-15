import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddownersComponent } from './addowners/addowners.component';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  tableList: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;

public searchText: string;
public page: any;
constructor(
  public dialog: MatDialog,
  private alertService: AlertService) {

}

ngOnInit() {
  this.tableList =[
    {name:'Amit', email:'123amit@gmail.com', phone:'9845155555', assign:'6', permissions:"50/56",usertype:'Admin',status:true},
    {name:'Vinay', email:'vinay00@gmail.com', phone:'9852874785', assign:'3', permissions:"56/56",usertype:'User',status:true},
    {name:'Sachin', email:'sachin97@gmail.com', phone:'9412386785', assign:'4', permissions:"45/56",usertype:'User',status:false},
    {name:'Shiva', email:'shiva007@gmail.com', phone:'9789126785', assign:'1', permissions:"42/56",usertype:'User',status:true},
  ]
}

public openUserDialog(id) {
  let dialogRef = this.dialog.open(AddownersComponent, {
      data: id,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

openDeleteDialog(assets) {
  let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
    data: assets,
    height: 'auto',
    width: 'auto',
    autoFocus: false
  });
  
  dialogRef.afterClosed().subscribe(data => {
    if (data != null && data !== undefined) {
    }
  });
}

deleteUser(userid){
  
  this.tableList = this.tableList.filter(e=>e.intApplicantId != userid)
  this.alertService.createAlert('Successfully deleted.', 1);
  console.log(this.tableList)
}

saveStatus() {
  //this.alertService.createAlert('Successfully saved.', 1);
}
}
