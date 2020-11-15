import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addictcode',
  templateUrl: './addictcode.component.html',
  styleUrls: ['./addictcode.component.scss']
})
export class AddictcodeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddictcodeComponent>) { }

  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }

}
