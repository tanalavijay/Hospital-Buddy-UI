import { Component, OnInit } from '@angular/core';
import { AddadminDialogComponent } from './addadmin-dialog/addadmin-dialog.component';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  statu = new FormControl(); 
  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this user?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  cityForm = new FormControl();
  stateForm = new FormControl();
  countryForm = new FormControl();
  subList: any;
  constructor(public alertService:AlertService,private _fb: FormBuilder, public dialog: MatDialog) {
    this.filterForm = this._fb.group({
      'keyWord': [null]
    });
  }
  status = [{'status_id':'1','status_name':'Active'},
  {'status_id':'2','status_name':'Inactive'}
]
city = [{'city_id':'1','city_name':'New York'},
{'city_id':'2','city_name':'Toronto'},
{'city_id':'3','city_name':'San Antonio'},
{'city_id':'4','city_name':'Vancouver'}
]
state = [{'state_id':'1','state_name':'Alabama'},
{'state_id':'2','state_name':'Quebec'},
{'state_id':'3','state_name':'Colorado'},
{'state_id':'4','state_name':'Ontario'}
]
country = [{'country_id':'1','country_name':'USA'},
{'country_id':'2','country_name':'Canada'}
]
packageLevels = [{package_id:1 , package_level:"Basic"} , {package_id:2 , package_level:"Gold"} , {package_id:3 , package_level:"Platinum"}];
filterForm: FormGroup;
public pageSize = 5;
filterToggle: boolean;
carrierList = [];
carriersforexcel:any;
excelDataCarrier = [];
public allClients:any;
paginationCarrierList = [];
// pageSize = 10;
currentPage = 0;
totalSize = 0;
dateToday: any;
usingObject:any;
public showEmpty:boolean = true;
countries = [{id:38 , value:"Canada"} , {id:231 , value:"USA"}];
statesForCanadaAndUSa :any;
nameControl = new FormControl();
cityControl = new FormControl();
public country_filter = "";
public state_filter = "";
public status_filter = '';

toggleFilter() {
  this.filterToggle = !this.filterToggle;
}

filterSearch() {
  let filterObj = {};
  if(this.nameControl.value) {
    filterObj['client_name'] = this.nameControl.value.trim();
  }
  if(this.cityControl.value) {
    filterObj['city'] = this.cityControl.value.trim();
  }
  if(this.country_filter) {
    filterObj['country_id'] = this.country_filter;
  }
  if(this.state_filter) {
    filterObj['state_id'] = this.state_filter;
  }
  this.usingObject = filterObj;
  // this.getClients(filterObj);
}


clearFilters() {
  this.country_filter = '';
  this.status_filter = '';
  this.state_filter = '';
  this.nameControl.setValue('');
  this.cityControl.setValue('');
  this.usingObject = {};
  // this.allDrivers({});
}

ngOnInit() {
  this.allClients = [
    {adminName:"Core Health",emailID:"core@sapphire.in",contactNAme:"Prabhu",contactNumber:"+1(456) 456-4566",state:"New York",city:"Albany",billingEmail:"admin@pain.in",address:"40 Bay Street",billingAddress:"34 Norfinch Drive",package_level:"Basic",is_active:false,paymentStatus:false,cn:'************9809',ed:'22/20',cvv:'123'},
    {adminName:"Centre for Pain Relief",emailID:"cfpr@gmail.com",contactNAme:"Matt",contactNumber:"+1(413) 453-5452",state:"California",city:"Frisco",billingEmail:"mat@gmail.com",address:"14 Amos Drive",billingAddress:"40 Bay Street",package_level:"Gold",is_active:true,paymentStatus:true,cn:'************1819',ed:'12/22',cvv:'231'},
    {adminName:"Medi Cure MD",emailID:"md@yahoo.co.in",contactNAme:"Bairstow",contactNumber:"+1(456) 456-4566",state:"New Jersey",city:"Dallas",billingEmail:"stow@gmail.com",address:"34 Norfinch Drive",billingAddress:"4 Norfinch Drive",package_level:"Gold",is_active:true,paymentStatus:true,cn:'************1019',ed:'10/22',cvv:'521'},
    {adminName:"Pain Allieviation",emailID:"painAll@gmail.com",contactNAme:"Buttler",contactNumber:"+1(456) 456-7489",state:"Georgia",city:"San Fransisco",billingEmail:"bill@gmail.com",address:"14 Amos Drive",billingAddress:"4 Norfinch Drive",package_level:"Platinum",is_active:false,paymentStatus:false,cn:'************1229',ed:'11/22',cvv:'221'},
    {adminName:"Prime Orthopedics",emailID:"prime@gmail.com",contactNAme:"Stokes",contactNumber:"+1(413) 453-5452",state:"Indiana",city:"Ohio",billingEmail:"keys@gmail.com",address:"4 Norfinch Drive",billingAddress:"40 Bay Street",package_level:"Platinum",is_active:true,paymentStatus:true,cn:'************1819',ed:'12/22',cvv:'7861'},
    {adminName:"Yashoda Group",emailID:"yashodagrpofficial@gmail.com",contactNAme:"David",contactNumber:"+1(456) 456-4566",state:"Kentucky",city:"Michigan",billingEmail:"david@bill.com",address:"14 Amos Drive",billingAddress:"40 Bay Street",package_level:"Platinum",is_active:true,paymentStatus:true,cn:'************1819',ed:'12/22',cvv:'231'},
    {adminName:"Apollo Group",emailID:"apollogroupofficial@gmail.com",contactNAme:"Steve",contactNumber:"+1(413) 453-5452",state:"Michigan",city:"Corning",billingEmail:"steve@gmail.com",address:"40 Bay Street",billingAddress:"34 Norfinch Drive",package_level:"Gold",is_active:false,paymentStatus:false,cn:'************1819',ed:'12/22',cvv:'231'},
    {adminName:"Medplus",emailID:"medPlus@gmail.com",contactNAme:"Klauss",contactNumber:"+1(587) 456-4566",state:"Nebraska",city:"Buffalo",billingEmail:"newBill@gmail.com",address:"4 Norfinch Drive",billingAddress:"40 Bay Street",package_level:"Basic",is_active:true,paymentStatus:true,cn:'************1819',ed:'12/22',cvv:'231'},
    {adminName:"KIMS",emailID:"KIMS@gmail.com",contactNAme:"Elijah",contactNumber:"+1(197) 781-5452",state:"Ohio",city:"Florida",billingEmail:"billHere@gmail.com",address:"40 Bay Street",billingAddress:"14 Amos Drive",package_level:"Platinum",is_active:false,paymentStatus:false,cn:'************1819',ed:'12/22',cvv:'231'},
    {adminName:"Medicover Hospitals	",emailID:"medcover@yahoo.co.in",contactNAme:"Mikelson",contactNumber:"+1(555) 453-9996",state:"Texas",city:"Trinidad",billingEmail:"mikelson@yahoo.co.i",address:"40 Bay Street",billingAddress:"34 Norfinch Drive",package_level:"Platinum",is_active:true,paymentStatus:true,cn:'************1819',ed:'12/22',cvv:'231'},
  ]
  this.totalSize = 10;
  this.subList = this.allClients.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
}

addAdmin(status) {
  let dialogRef = this.dialog.open(AddadminDialogComponent, {
    data: status,
    height: 'auto',
    width: '750px',
    autoFocus: false,
    panelClass: 'my-dialog'
  });
  
  dialogRef.afterClosed().subscribe(prospects => {
    if(prospects == 'save') {
      
    }
  });
}

resetFilter() {
  this.currentPage = 0;
  this.pageSize = 10;
  // this.getScopeList();
  this.ngOnInit();
  this.filterForm.reset();
}

public handlePage(e: any) {
  this.currentPage = e.pageIndex;
  this.pageSize = e.pageSize;
  this.subList = this.allClients.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
  
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
    if (type == 'country') {
      let temp = [];
      for (let i = 0; i < this.country.length; i++) {
        temp.push(this.country[i]['country_id']);
      }
      this.countryForm.setValue(temp);
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
    if (type == 'status')
    this.statu.setValue([]);
    
    if (type == 'city')
    this.cityForm.setValue([]);
    if (type == 'state')
    this.stateForm.setValue([]);
    if (type == 'country')
    this.countryForm.setValue([]);
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
  if (type == 'country') {
    ((this.country.length <= this.countryForm.value.length) && !ev._selected) ? ev.select() : ev.deselect();
  }
}

}
