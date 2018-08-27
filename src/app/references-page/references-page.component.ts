import { Component, OnInit } from '@angular/core';
import {Reference, ReferenceManagerService, REFERENCES_MASTER_RECORD} from '../reference-manager.service';
import {MatTableDataSource} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-references-page',
  templateUrl: './references-page.component.html',
  styleUrls: ['./references-page.component.css'],
  animations: []
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

  public datasource_references : MatTableDataSource<Reference>;
  public displayedColumns: string[] = ['index','shorthand'];
  expandedElement: Reference;
  applyFilter(filterValue: string) {
    this.datasource_references.filter = filterValue.trim().toLowerCase();
  }

  constructor(private refman: ReferenceManagerService) {
    refman.reflist.subscribe((refs: Reference[]) => {
      this.datasource_references = new MatTableDataSource(refs)
    }, error1 => console.log(error1));
  }

  ngOnInit() {
  }

}
