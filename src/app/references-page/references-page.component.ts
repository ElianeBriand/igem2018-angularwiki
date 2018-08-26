import { Component, OnInit } from '@angular/core';
import {Reference, ReferenceManagerService, REFERENCES_MASTER_RECORD} from '../reference-manager.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-references-page',
  templateUrl: './references-page.component.html',
  styleUrls: ['./references-page.component.css']
})
export class ReferencesPageComponent implements OnInit {


 /*
export class Reference {
  public shorthand: string;
  public authors: string;
  public title: string;
  public doi: string;
  public journal: string;
  public url: string;
  public pubDetails: string;
  public tags: string[];
}
*/

  public datasource_references = new MatTableDataSource(REFERENCES_MASTER_RECORD);
  public displayedColumns: string[] = ['index','shorthand', 'authors'];

  applyFilter(filterValue: string) {
    this.datasource_references.filter = filterValue.trim().toLowerCase();
  }

  constructor(refman: ReferenceManagerService) {
  }

  ngOnInit() {
  }

}
