import { Component, OnInit, Input } from '@angular/core';
import {error_reference, Reference, ReferenceManagerService} from '../reference-manager.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';


@Component({
  selector: 'reference-box',
  templateUrl: './reference-box.component.html',
  styleUrls: ['./reference-box.component.css']
})
export class ReferenceBoxComponent implements OnInit {

  @Input() shorthand: string;

  public testString = "A";
  public ref: Reference;

  public refsheetref : MatBottomSheetRef;

  private refmanservice : ReferenceManagerService;

  constructor(private refman: ReferenceManagerService, private bottomSheet: MatBottomSheet) {
    this.refmanservice = refman;
    this.ref = error_reference;
  }

  openRefBottomSheet(): void {
    this.refsheetref = this.bottomSheet.open(ReferenceSheet);
    this.refsheetref.instance.ref = this.ref;
  }

  ngOnInit() {
    let result = this.refmanservice.getRefFromShorthand(this.shorthand);
    result.subscribe((results: Reference) => {
      this.ref = results;
    }, error1 => console.log(error1));

  }

}



@Component({
  selector: 'reference-sheet',
  templateUrl: 'reference-sheet.html',
})
export class ReferenceSheet {

  public ref: Reference;

  constructor(public bottomSheetRef: MatBottomSheetRef<ReferenceSheet>) {
    this.ref = error_reference;
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
