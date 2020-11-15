import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddlookupComponent } from './addlookup/addlookup.component';

@Component({
  selector: 'app-lookup-options',
  templateUrl: './lookup-options.component.html',
  styleUrls: ['./lookup-options.component.scss']
})
export class LookupOptionsComponent implements OnInit {

  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;

  deleteUser(elementValues){
    console.log(elementValues);
    }

    name:any;

  ngOnInit() {
  }
 
  tableList: Object = [
    { intLookupId: 2,code: 'CID Code', options:'CID-009'}
  ];

  public openLookupDialog(id) {
    let dialogRef = this.dialog.open(AddlookupComponent, {
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

  deleteLookup() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }


}
