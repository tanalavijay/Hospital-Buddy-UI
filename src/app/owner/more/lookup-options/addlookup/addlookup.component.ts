import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-addlookup',
  templateUrl: './addlookup.component.html',
  styleUrls: ['./addlookup.component.scss']
})
export class AddlookupComponent implements OnInit {

  countryList : any;
  stateList : any;
  cityList : any;
  code_master:any;
  conditions : Array<any> = [{'code':'>=','name':' >= '},{'code':'<=','name':' <= '}];
  colors : Array<any> = [{'code':'green','name':'Green','colorClass':'dot_green'},{'code':'blue','name':'Blue','colorClass':'dot_blue'},{'code':'grey','name':'Grey','colorClass':'dot_grey'},{'code':'red','name':'Red','colorClass':'dot_red'}];
  
  constructor(public dialogRef: MatDialogRef<AddlookupComponent>,@Inject(MAT_DIALOG_DATA) public user: number,private alertService: AlertService) { 
    console.log(this.user);
   }

  
  ngOnInit() {
    
  }

  close(): void {
    this.dialogRef.close();
  }

  itemstr: HTMLElement[] = [];
  agestr: HTMLElement[] = [];
  responsestr: HTMLElement[] = [];
  str: HTMLElement = <HTMLElement>document.getElementById("new_text");
  copy(type) {
    if(type=='lookup')
      this.itemstr.push(this.str);
    else if(type=='age')
      this.agestr.push(this.str);
    else
      this.responsestr.push(this.str);
  }

  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }

  saveLookup() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }


}
