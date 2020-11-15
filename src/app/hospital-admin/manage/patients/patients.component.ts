import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

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
  
  constructor(public alertService: AlertService,public dialog: MatDialog) {}
  
  ngOnInit() {
    this.totalList = [
      {patientName:"Virat Kohli",mrNumber:"10121214",physician:"Dhoni",referringPhysician:"ABD",adminName:"Core Health",hospitalName:"Core Clinics"},
      {patientName:"Niklauss",mrNumber:"12147474",physician:"Morris",referringPhysician:"Smith",adminName:"Centre for Pain Relief",hospitalName:"Pain Relief"},
      {patientName:"Elijah",mrNumber:"32521417",physician:"Finn",referringPhysician:"Haddin",adminName:"Medi Cure MD",hospitalName:"MediCure"},
      {patientName:"Kol",mrNumber:"96987475",physician:"Ester",referringPhysician:"Archer",adminName:"Pain Allieviation",hospitalName:"Avveliation Group"},
      {patientName:"Michael",mrNumber:"63256587",physician:"Vicky",referringPhysician:"Woakes",adminName:"Prime Orthopedics",hospitalName:"Orthopedics"},
      {patientName:"Rebecca",mrNumber:"10247851",physician:"Daemon",referringPhysician:"Stokes",adminName:"Yashoda Group",hospitalName:"Yashoda Hospitals"},
      {patientName:"Elena",mrNumber:"36251478",physician:"Salvatore",referringPhysician:"Williamson",adminName:"Apollo Group",hospitalName:"Apollo Group"},
      {patientName:"Gilbert",mrNumber:"98745696",physician:"Catherene",referringPhysician:"Guptil",adminName:"Medplus",hospitalName:"Medplus Group"},
      {patientName:"Matt",mrNumber:"25874125",physician:"David",referringPhysician:"Martin",adminName:"KIMS",hospitalName:"KIMS"},
      {patientName:"Stefen",mrNumber:"74745666",physician:"Rabada",referringPhysician:"Boult",adminName:"Medicover Hospitals",hospitalName:"Medicover Group"},
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
}
