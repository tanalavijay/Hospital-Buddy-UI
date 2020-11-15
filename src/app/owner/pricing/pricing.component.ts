import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  public totalPricing: any;
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') :'5');
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
  
  constructor(public alertService: AlertService) {}
  
  ngOnInit() {
    this.totalList = [
      {subLevel:"Basic",subscribers:"2",number_of_physicians:"5",number_of_hospitals:"5",price:"$100/Month"},
      {subLevel:"Gold",subscribers:"3",number_of_physicians:"10",number_of_hospitals:"10",price:"$500/3 Months"},
      {subLevel:"Platinum",subscribers:"5",number_of_physicians:"Unlimited",number_of_hospitals:"Unlimited",price:"$1000/Year"}
    ]
  } 
  
  packages = [{'package':'L1'},{'package':'L2'},{'package':'L3'},{'package':'L4'},{'package':'L5'},{'package':'L6'},{'package':'L7'}];
  fleets = [{'fleet':'1-2'},{'fleet':'3-6'},{'fleet':'7-14'},{'fleet':'15-25'},{'fleet':'26-60'},{'fleet':'51-75'},{'fleet':'76-100'}];
  
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
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
