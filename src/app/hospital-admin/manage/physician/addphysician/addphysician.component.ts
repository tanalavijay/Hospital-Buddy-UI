import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addphysician',
  templateUrl: './addphysician.component.html',
  styleUrls: ['./addphysician.component.scss']
})
export class AddphysicianComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddphysicianComponent>) { }

  ngOnInit() {

  }
 close(): void {
    this.dialogRef.close();
  }

}
