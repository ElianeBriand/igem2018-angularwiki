import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


let indx = 0;

export class Reference {
  public shorthand: string;
  public authors: string;
  public title: string;
  public doi: string;
  public journal: string;
  public url: string;
  public pubDetails: string;
  public tags: string[];
  public abstract: string;
  public index: number;


  constructor(shorthand: string, authors: string, title: string, doi: string, journal: string, url: string, pubDetails: string, tags: string[], abstract: string) {
    this.shorthand = shorthand;
    this.authors = authors;
    this.title = title;
    this.doi = doi;
    this.journal = journal;
    this.url = url;
    this.pubDetails = pubDetails;
    this.tags = tags;
    this.abstract = abstract;
    this.index = indx;
    indx++;
  }
}

/*
@article{Pritchard1997,
abstract = {Heterologous expression of unmodified recombinant human cytochrome P450 enzymes (P450s) in Escherichia coli has proved to be extremely difficult. To date, high-level expression has only been achieved after altering the 5'-end of the native cDNA, resulting in amino acid changes within the P450 protein chain. We have devised a strategy whereby unmodified P450s can be expressed to high levels in E. coli, by making NH2-terminal translational fusions to bacterial leader sequences. Using this approach, we initially tested two leader sequences, pelB and ompA, fused to CYP3A4. These were compared with an expression construct producing a conventional NH2-terminally modified CYP3A4 (17$\alpha$-3A4). Both leader constructs produced spectrally active, functional protein. Furthermore, the ompA-3A4 fusion gave higher levels of expression, and a marked improvement in the recovery of active P450 in bacterial membrane fractions, when compared with 17$\alpha$-3A4. We then tested the ompA leader with CYP2A6 and CYP2E1, again comparing with the conventional (17$\alpha$-) approach. As before, the leader construct produced active enzyme, and, for CYP2E1 at least, gave a higher level of expression than the 17$\alpha$-construct. The ompA fusion strategy thus appears to represent a significant advance for the expression of P450s in E. coli, circumventing the previous need for individual optimization of P450 sequences for expression.},
author = {Pritchard, Michael P. and Ossetian, Richard and Li, Dongtao N. and Henderson, Colin J. and Burchell, Brian and Wolf, C. Roland and Friedberg, Thomas},
doi = {10.1006/abbi.1997.0265},
file = {:C$\backslash$:/Users/elian/AppData/Local/Mendeley Ltd./Mendeley Desktop/Downloaded/Pritchard et al. - 1997 - A General Strategy for the Expression of Recombinant Human Cytochrome P450s inEscherichia coliUsing Bacterial.pdf:pdf},
issn = {00039861},
journal = {Archives of Biochemistry and Biophysics},
keywords = {Affinity purification,Cytochrome P450,Escherichia coli,Heterologous expression,Signal peptide},
mendeley-groups = {IGEM},
month = {sep},
number = {2},
pages = {342--354},
pmid = {9308909},
publisher = {Academic Press},
title = {{A general strategy for the expression of recombinant human cytochrome P450s in Escherichia coli using bacterial signal peptides: Expression of CYP3A4, CYP2A6, and CYP2E1}},
url = {https://www.sciencedirect.com/science/article/pii/S0003986197902654?via{\%}3Dihub},
volume = {345},
year = {1997}
}


 (2017). . , 6(7), 1120–1123. https://doi.org/

  */

export let error_reference = new Reference('Error2018', 'E. Rror', 'This reference : not found', '404', 'Journal of Error Not Found', 'http://error.404', 'Publication not found', ['publicationNotFound'], 'Error abstract...');


/*

 (2014, April 17).  . https://doi.org/10.1016/j.mrrev.2014.02.001


 */


export let referenceJSONurl = 'http//404.404';


@Injectable({
  providedIn: 'root'
})
export class ReferenceManagerService {

  static singletonInstance: ReferenceManagerService;

  public reflist: Observable<Reference[]>;
  private internal_reflist: Reference[];
  public errref = error_reference;
  private alreadyRan: boolean = false;

  constructor(private http: HttpClient) {
    if (ReferenceManagerService.singletonInstance) {
      return ReferenceManagerService.singletonInstance;
    }
    ReferenceManagerService.singletonInstance = this;


    this.reflist = new Observable((observer) => {
      if (this.alreadyRan == true && !this.internal_reflist) {
        console.log("ReferenceManagerService::constructor() : Debounced call (waiting 1 second)")
        setTimeout(() => {
          this.fetchReflist(observer);
        }, 1000);
      } else {
        this.alreadyRan = true;
        this.fetchReflist(observer);
      }
    });

  }

  private fetchReflist(observer: any) {
    if (!this.internal_reflist) {
      this.http.get('http://2018.igem.org/wiki/images/d/df/T--GO_Paris-Saclay--references_list.txt', {responseType: 'text'})
        .subscribe((data: any) => {
          console.log('ReferenceManagerService::fetchReflist() :  Parsing reference list...');
          let objjson: Reference[] = JSON.parse(data);
          this.internal_reflist = objjson;
          observer.next(this.internal_reflist);
          observer.complete();
        }, error1 => console.log(error1));
    } else {
      observer.next(this.internal_reflist);
      observer.complete();
    }
  }

  public getRefFromShorthand(shorthand: string): Observable<Reference> {
    let returnPromise = new Promise<Reference>((resolve, reject) => {
      // console.log("GetRefFromShorthand : " + shorthand);
      this.reflist.subscribe((refl: Reference[]) => {
        var refIndex = refl.findIndex(function (element: Reference) {
          return element.shorthand == shorthand;
        });
        if (refIndex == undefined) {
          console.log('ReferenceManagerService::GetRefFromShorthand : Failed to get ref. (shorthand = ' + shorthand + ')');
          resolve(this.errref);
        }
        resolve(refl[refIndex]);
      }, error1 => console.log(error1));
    });
    return from(returnPromise);
  }


}
