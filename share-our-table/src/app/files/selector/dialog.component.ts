import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PublicDialogComponent } from 'src/app/files/public-directory-dialog/dialog.component';
import { PrivateDialogComponent } from 'src/app/files/private-directory-dialog/dialog.component';

@Component({
  selector: 'public-private-selector-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class PublicOrPrivateComponent implements OnInit {

  action:string = "Dismiss";

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openPublicUploader(): void {
    let dialogRef = this.dialog.open(PublicDialogComponent, {
      width: '50vw',
      height: '38vw',
    });
  }

  openPrivateUploader(): void {
    let dialogRef = this.dialog.open(PrivateDialogComponent, {
      width: '50vw',
      height: '38vw',
    });
  }


}