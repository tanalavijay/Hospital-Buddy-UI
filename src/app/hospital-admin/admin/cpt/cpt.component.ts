import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog } from '@angular/material';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddcptcodeComponent } from './addcptcode/addcptcode.component';

@Component({
  selector: 'app-cpt',
  templateUrl: './cpt.component.html',
  styleUrls: ['./cpt.component.scss']
})
export class CPTComponent implements OnInit {
  
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
      {code:"45645",desc:"Prescription can be written here",price:"$10",referringPhysician:"Alabama",adminName:"Western",hospitalName:"Core Clinics",status :true},
      {code:"23123",desc:"Prescription can be written here",price:"$12",referringPhysician:"Alaska",adminName:"Florence",hospitalName:"Pain Relief",status:true},
      {code:"64324",desc:"Prescription can be written here",price:"$11",referringPhysician:"California",adminName:"Georgia",hospitalName:"MediCure",status: false},
      {code:"98765",desc:"Prescription can be written here",price:"$13",referringPhysician:"Florida",adminName:"Florence",hospitalName:"Avveliation Group",status: false},
      {code:"34156",desc:"Prescription can be written here",price:"$12",referringPhysician:"Georgia",adminName:"Georgia",hospitalName:"Orthopedics",status: true},
    
    ]
    this.totalSize = 10;
    this.subList = this.totalList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.subList = this.totalList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }

  public openCptDialog(id) {
    let dialogRef = this.dialog.open(AddcptcodeComponent, {
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
