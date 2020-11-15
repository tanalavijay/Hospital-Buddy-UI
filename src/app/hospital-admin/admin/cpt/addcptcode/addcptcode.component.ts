import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addcptcode',
  templateUrl: './addcptcode.component.html',
  styleUrls: ['./addcptcode.component.scss']
})
export class AddcptcodeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddcptcodeComponent>) { }

  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }
}
