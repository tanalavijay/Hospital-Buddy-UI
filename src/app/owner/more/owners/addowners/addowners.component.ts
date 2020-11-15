import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-addowners',
  templateUrl: './addowners.component.html',
  styleUrls: ['./addowners.component.scss']
})
export class AddownersComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddownersComponent>,private alertService: AlertService,) { }

  ngOnInit() {
  }

  saveUser() {
    this.dialogRef.close();
  }


  close(): void {
    this.dialogRef.close();
  }

}
