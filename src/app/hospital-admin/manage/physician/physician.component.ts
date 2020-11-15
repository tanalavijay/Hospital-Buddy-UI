import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog } from '@angular/material';
import { AddphysicianComponent } from './addphysician/addphysician.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-physician',
  templateUrl: './physician.component.html',
  styleUrls: ['./physician.component.scss']
})
export class PhysicianComponent implements OnInit {

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

  constructor(public alertService: AlertService,public dialog: MatDialog) {}
  
  ngOnInit() {
    this.totalList = [
      {patientName:"Virat Kohli",mrNumber:"kohli@gmail.com",physician:"+132456790234",referringPhysician:"Alabama",adminName:"Western",hospitalName:"Core Clinics",status :true,p:'15'},
      {patientName:"Niklauss",mrNumber:"nikl@gmail.com",physician:"+2354678990",referringPhysician:"Alaska",adminName:"Florence",hospitalName:"Pain Relief",status:true,p:'09'},
      {patientName:"Elijah",mrNumber:"elijah@gmail.com",physician:"+1324567900",referringPhysician:"California",adminName:"Georgia",hospitalName:"MediCure",status: false,p:'08'},
      {patientName:"Kol",mrNumber:"kol@gmail.com",physician:"+3324567080",referringPhysician:"Florida",adminName:"Florence",hospitalName:"Avveliation Group",status: false,p:'07'},
      {patientName:"Michael",mrNumber:"michael@gmail.com",physician:"+1324567890",referringPhysician:"Georgia",adminName:"Georgia",hospitalName:"Orthopedics",status: true,p:'13'},
      {patientName:"Rebecca",mrNumber:"rebeca@gmail.com",physician:"+9832456456",referringPhysician:"Idaho",adminName:"Kansas",hospitalName:"Yashoda Hospitals",status: false,p:'14'},
      {patientName:"Elena",mrNumber:"elena@gmail.com",physician:"+332456790",referringPhysician:"Kansas",adminName:"Colorado",hospitalName:"Apollo Group",status: true,p:'16'},
      {patientName:"Gilbert",mrNumber:"gilbert@gmail.com",physician:"+132456790",referringPhysician:"Indiana",adminName:"Colorado",hospitalName:"Medplus Group",status: true,p:'18'},
      {patientName:"Matt",mrNumber:"mat@gmail.com",physician:"+13244679",referringPhysician:"Colorado",adminName:"Colorado",hospitalName:"KIMS",status: true,p:'15'},
      {patientName:"Stefen",mrNumber:"stefen@gmail.com",physician:"+132456790",referringPhysician:"Connecticut",adminName:"Colorado",hospitalName:"Medicover Group",status: true,p:'05'},
    ]
    this.totalSize = 10;
    this.subList = this.totalList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  } 
  
  packages = [{'package':'L1'},{'package':'L2'},{'package':'L3'},{'package':'L4'},{'package':'L5'},{'package':'L6'},{'package':'L7'}];
  fleets = [{'fleet':'1-2'},{'fleet':'3-6'},{'fleet':'7-14'},{'fleet':'15-25'},{'fleet':'26-60'},{'fleet':'51-75'},{'fleet':'76-100'}];
  
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.subList = this.totalList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }
  
  goOntoLocal(yes) {
    console.log(yes);
    localStorage.setItem("RemovingItem",yes);
  }
  
  fliterSearch() {
    let filters = {};
    if (this.package_filter){
      filters['package_level'] = this.package_filter;
    } 
    if (this.fleet_filter){
      filters['number_of_fleets'] = this.fleet_filter;
    }
    if (this.monthlyForm.value){
      filters['monthly_price'] = this.monthlyForm.value.trim();
    } 
  }
  
  clearFilters() {
    this.package_filter = '';
    this.fleet_filter = '';
    this.monthlyForm.setValue('');
  }

  public openPhysicianDialog(id) {
    let dialogRef = this.dialog.open(AddphysicianComponent, {
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
