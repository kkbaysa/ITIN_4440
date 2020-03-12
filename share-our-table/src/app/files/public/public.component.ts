import { Component, OnInit, Injectable, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

import { File } from '../../file';
//import { DialogComponent } from '../files/dialog/dialog.component';
// import { AddOrganizationsDialogComponent } from './add-organizations-dialog.component';

export interface orgDataDialog {
  name: string;
  description: string;
  link: string;
  image: string;
}

@Component({
  selector: 'public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})

@Injectable()
export class PublicComponent
{
  name: string;
  description: string;
  link: string;
  image: string;
  private fileCollection: AngularFirestoreCollection<File>;
  files: Observable<File[]>;
  downloads: string[];
  downloadsLength: number = 0;

  constructor(private afs: AngularFirestore,public dialog: MatDialog)
  {
    this.fileCollection = afs.collection<File>('publicFiles');
    this.files = this.fileCollection.valueChanges();
  }
 
  ngOnInit(): void { 
  }

  addFileDownload(downloadURLIn: string) {
    this.downloads.push(downloadURLIn);
  }
  
}
