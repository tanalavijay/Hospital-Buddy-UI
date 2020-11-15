import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  cityForm = new FormControl();
  stateForm = new FormControl();
  statu = new FormControl();
  subList: any[];
  
  constructor(public alertService:AlertService,private _fb: FormBuilder) {
    this.filterForm = this._fb.group({
      'keyWord': [null]
    });
  }
  public pageSize = 5;
  filterForm: FormGroup;
  public subscriptions :any;
  filterToggle: boolean;
  subscriptionList = [];
  packageLevels = [{package_id:1 , package_level:"Basic"} , {package_id:2 , package_level:"Gold"} , {package_id:3 , package_level:"Platinum"}];
  public status_filter = "";
  TransRef = new FormControl();
  paginationSubscriptionList = [];
  // pageSize = 10;
  public showEmpty : boolean = true;
  currentPage = 0;
  totalSize = 0;
  public usingObject = {};
  status = [{'status_id':'1','status_name':'Paid'},
  {'status_id':'2','status_name':'Declined'},
  {'status_id':'3','status_name':'Pending'}
]
city = [{'city_id':'1','city_name':'L1'},
{'city_id':'2','city_name':'L2'},
{'city_id':'3','city_name':'L3'},
{'city_id':'4','city_name':'L4'}
]
state = [{'state_id':'1','state_name':'0 - 1'},
{'state_id':'2','state_name':'2 - 5'},
{'state_id':'3','state_name':'6 - 10'},
{'state_id':'4','state_name':'11 - 15'}
]
toggleFilter() {
  this.filterToggle = !this.filterToggle;
}

filterSearch() {
  let filterObj = {};
  if(this.TransRef.value) {
    filterObj['invoice_number'] = this.TransRef.value.trim();
  }
  
  if(this.status_filter) {
    filterObj['package_id'] = this.status_filter;
  }
  
  this.usingObject = filterObj;
}

clearFilters() {
  this.status_filter = '';
  this.TransRef.setValue('');
  this.usingObject = {};
}

ngOnInit() {
  this.subscriptionList = [
    {admin_name:"Core Health",number_of_physicians:"3",number_of_hospitals:"1",subscriptionLevel:"Basic",amount:"$100",start_date:"2020-05-01",end_date:"2020-05-07",invoice_number:"in_1Ga0SXBoNjUyJwhUNWqjP",payment_date:"",subscription_end_date:"",is_active:false},
    {admin_name:"Centre for Pain Relief",number_of_physicians:"5",number_of_hospitals:"2",subscriptionLevel:"Gold",amount:"$500",start_date:"2020-06-01",end_date:"2020-06-30",invoice_number:"in_dsfsafgdfgfdgfsfs",payment_date:"",subscription_end_date:"",is_active:true},
    {admin_name:"Medi Cure MD",number_of_physicians:"20",number_of_hospitals:"3",subscriptionLevel:"Platinum",amount:"$1000",start_date:"2020-06-01",end_date:"2020-08-31",invoice_number:"in_dfhgjnfdsdadfs",payment_date:"",subscription_end_date:"",is_active:true},
    {admin_name:"Pain Allieviation",number_of_physicians:"15",number_of_hospitals:"3",subscriptionLevel:"Platinum",amount:"$1000",start_date:"2020-07-01",end_date:"2020-09-30",invoice_number:"in_hkfdgbvfbngv",payment_date:"",subscription_end_date:"",is_active:true},
    {admin_name:"Prime Orthopedics",number_of_physicians:"4",number_of_hospitals:"2",subscriptionLevel:"Gold",amount:"$500",start_date:"2020-07-01",end_date:"2020-07-30",invoice_number:"in_dvthygfdvbdsb",payment_date:"",subscription_end_date:"",is_active:false},
    {admin_name:"Yashoda Group",number_of_physicians:"3",number_of_hospitals:"1",subscriptionLevel:"Basic",amount:"$100",start_date:"2020-05-01",end_date:"2020-05-07",invoice_number:"in_cdsfegfvw",payment_date:"",subscription_end_date:"",is_active:true},
    {admin_name:"Apollo Group",number_of_physicians:"5",number_of_hospitals:"2",subscriptionLevel:"Gold",amount:"$500",start_date:"2020-06-01",end_date:"2020-06-30",invoice_number:"in_qergdbyfbhn",payment_date:"",subscription_end_date:"",is_active:true},
    {admin_name:"Medplus",number_of_physicians:"18",number_of_hospitals:"3",subscriptionLevel:"Platinum",amount:"$1000",start_date:"2020-01-01",end_date:"2020-03-31",invoice_number:"in_awrftgbsefv",payment_date:"",subscription_end_date:"",is_active:true},
    {admin_name:"KIMS",number_of_physicians:"13",number_of_hospitals:"3",subscriptionLevel:"Platinum",amount:"$1000",start_date:"2020-02-25",end_date:"2020-05-25",invoice_number:"in_vgfcrdbxdfgdb",payment_date:"",subscription_end_date:"",is_active:false},
    {admin_name:"Medicover Hospitals",number_of_physicians:"10",number_of_hospitals:"3",subscriptionLevel:"Platinum",amount:"$1000",start_date:"2020-03-01",end_date:"2020-05-31",invoice_number:"in_errcvdscrtgfd",payment_date:"",subscription_end_date:"",is_active:true}

  ];
  this.totalSize = 10;
  this.subList = this.subscriptionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
}
  
  resetFilter() {
    this.currentPage = 0;
    this.pageSize = 10;
    // this.getScopeList();
    this.filterForm.reset();
  }
  
  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.subList = this.subscriptionList.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  }
  
  selectAll(ev, type) {
    if (ev._selected) {
      if (type == 'status') {
        let temp = [];
        for (let i = 0; i < this.status.length; i++) {
          temp.push(this.status[i]['status_id']);
        }
        this.statu.setValue(temp);
      }
      if (type == 'city') {
        let temp = [];
        for (let i = 0; i < this.city.length; i++) {
          temp.push(this.city[i]['city_id']);
        }
        this.cityForm.setValue(temp);
      }
      
      if (type == 'state') {
        let temp = [];
        for (let i = 0; i < this.state.length; i++) {
          temp.push(this.state[i]['state_id']);
        }
        this.stateForm.setValue(temp);
      }
      ev._selected = true;
    }
    if (ev._selected == false) {
      if (type == 'city')
      this.cityForm.setValue([]);
      if (type == 'state')
      this.stateForm.setValue([]);
      if (type == 'status')
      this.statu.setValue([]);
      
    }
  }
  selectOne(ev, type) {
    if (type == 'status') {
      ((this.status.length <= this.statu.value.length) && !ev._selected) ? ev.select() : ev.deselect();
    }
    if (type == 'city') {
      ((this.city.length <= this.cityForm.value.length) && !ev._selected) ? ev.select() : ev.deselect();
    }
    if (type == 'state') {
      ((this.state.length <= this.stateForm.value.length) && !ev._selected) ? ev.select() : ev.deselect();
    }
    
  }

}
