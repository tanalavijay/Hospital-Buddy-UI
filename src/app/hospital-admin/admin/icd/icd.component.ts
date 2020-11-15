import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog } from '@angular/material';
import { AddictcodeComponent } from './addictcode/addictcode.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-icd',
  templateUrl: './icd.component.html',
  styleUrls: ['./icd.component.scss']
})
export class ICDComponent implements OnInit {

  public totalPricing: any;
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  public pricingList = [];
  showEmpty: boolean = true;
  filterToggle: boolean;
  public package_filter = "";
  public fleet_filter = "";
  monthlyForm = new FormControl();
  subList:any;
  totalList: any[];
  public popoverStatusTitle = 'Confirm Save Change';
  public popoverStatusMessage = 'Are you sure you want to save changes ?';
  public cancelClicked = false;
  constructor(public alertService: AlertService,public dialog: MatDialog) { }

  ngOnInit() {
   this.totalList = [
      {code:"D63.1",desc:"Anemia in chronic kidney disease",price:"$10",referringPhysician:"Alabama",adminName:"Western",hospitalName:"Core Clinics",status :true},
      {code:"D23.4",desc:"Other benign neoplasm of skin of scalp and neck",price:"$12",referringPhysician:"Alaska",adminName:"Florence",hospitalName:"Pain Relief",status:true},
      {code:"E80.6",desc:"Other disorders of bilirubin metabolism",price:"$11",referringPhysician:"California",adminName:"Georgia",hospitalName:"MediCure",status: false},
      {code:"E27.9",desc:"Disorder of adrenal gland, unspecified",price:"$13",referringPhysician:"Florida",adminName:"Florence",hospitalName:"Avveliation Group",status: false},
      {code:"M13.852",desc:"Other specified arthritis, left hip",price:"$12",referringPhysician:"Georgia",adminName:"Georgia",hospitalName:"Orthopedics",status: true},
    
    ]
    this.totalSize = 10;
    this.subList = this.totalList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.subList = this.totalList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public openIctDialog(id) {
    let dialogRef = this.dialog.open(AddictcodeComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }

  public openDeleteDialog(id) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
        data: id,
        height: 'auto',
        width: '400px'
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }

}
