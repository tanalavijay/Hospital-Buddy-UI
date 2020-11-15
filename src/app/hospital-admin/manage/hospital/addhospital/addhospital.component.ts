import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addhospital',
  templateUrl: './addhospital.component.html',
  styleUrls: ['./addhospital.component.scss']
})
export class AddhospitalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddhospitalComponent>) { }

  ngOnInit() {

  }
 close(): void {
    this.dialogRef.close();
  }

}
