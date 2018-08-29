import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';


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

 */

export let error_reference = new Reference('Error2018', 'E. Rror', 'This reference : not found', '404', 'Journal of Error Not Found', 'http://error.404', 'Publication not found', ['publicationNotFound'], 'Error abstract...');


export let REFERENCES_MASTER_RECORD = [
  //*
  new Reference('Test2018', 'Anonymous', 'Testing : a reference manager', '2939', 'J. Eur. Behavioral Example',
    'http://journal.example.com', 'Vol 2.3 p3', ['example', 'article'],
    'The inducibility of SOS responses by 5-fluorouracil (5-FU), which has been used as an antitumor drug, was studied in Escherichia coli' +
    ' cells which have different DNA repair capacities for UV lesions. Expression of the umuC gene was apparently induced by 5-FU in the wild-type and' +
    ' uvrA strains but not in lexA and recA strains. The inducibility of the umuC gene by 5-FU, the metabolite of which inhibits thymidylate synthetase,' +
    ' was abolished in cultures containing deoxythymidine monophosphate which is converted from deoxyuridine monophosphate by thymidylate synthetase.' +
    ' These results suggest that 5-FU may exert its SOS inducibility by inhibiting thymidylate synthetase and then disturbing DNA metabolism but not by' +
    ' incorporating 5-FU residues into RNA. Further, 5-FU weakly induced mutations in E. coli. © 1987.'),
  new Reference('Example2018', 'Alfred Example', 'Example of paper : this one is a good example of paper', '452', 'J. Eur. Chemical Example',
    'http://journal.example.eu', 'Vol 45 p12', ['exampleJournal', 'article'],
    'During protein synthesis, ribosomes encounter many roadblocks, the outcomes of which are largely determined by substrate availability ,' +
    ' amino acid features and reaction kinetics. Prolonged ribosome stalling is likely to be resolved by ribosome rescue or quality control pathways,' +
    ' whereas shorter stalling is likely to be resolved by ongoing productive translation. How ribosome function is affected by such hindrances can therefore' +
    ' have a profound impact on the translational output (yield) of a particular mRNA. In this Review , we focus on these roadblocks and the resumption of normal' +
    ' translation elongation rather than on alternative fates wherein the stalled ribosome triggers degradation of the mRNA and the incomplete protein product.' +
    ' We discuss the fundamental stages of the translation process in eukaryotes, from elongation through ribosome recycling, with particular attention to recent' +
    ' discoveries of the complexity of the genetic code and regulatory elements that control gene expression, including ribosome stalling during elongation, the' +
    ' role of mRNA context in translation termination and mechanisms of ribosome rescue that resemble recycling.')

  // */
];

export let referenceJSONurl = "http//404.404";


@Injectable({
  providedIn: 'root'
})
export class ReferenceManagerService {

  static singletonInstance: ReferenceManagerService;

  public reflist: Observable<Reference[]>;
  private internal_reflist: Reference[];
  public errref = error_reference;

  constructor() {
    if (ReferenceManagerService.singletonInstance) {
      return ReferenceManagerService.singletonInstance;
    }
    ReferenceManagerService.singletonInstance = this;


    this.reflist = new Observable((observer) => {
      if(!this.internal_reflist) {
        /*
        this.http.get(referenceJSONurl, {responseType: 'text'})
        .subscribe((data: any) => {
        let decodedData = atob(data);
        let objjson: Reference[] = JSON.parse(decodedData);
        this.internal_reflist = objjson;
          observer.next(this.internal_reflist);
        }, error1 => console.log(error1));
         */

        setTimeout(() => {
          let jsonstr = JSON.stringify(REFERENCES_MASTER_RECORD);
          let objjson: Reference[] = JSON.parse(jsonstr);

          this.internal_reflist = objjson;
          observer.next(this.internal_reflist);
        }, 0);
      }else{
        observer.next(this.internal_reflist);
      }
    });

    /*
    let jsonstr = JSON.stringify(REFERENCES_MASTER_RECORD);
    console.log(jsonstr);
    */
    /*
    let objjson: Reference = JSON.parse(jsonstr);
    console.log(objjson);
  */
  }

  // private fetchRefList():

  public getRefFromShorthand(shorthand: string): Observable<Reference> {
    let returnPromise = new Promise<Reference>((resolve, reject) => {
      // console.log("GetRefFromShorthand : " + shorthand);
      this.reflist.subscribe((refl: Reference[]) => {
          var refIndex = refl.findIndex(function (element: Reference) {
            return element.shorthand == shorthand;
          });
          if (refIndex == undefined) {
            resolve(this.errref);
          }
          resolve(refl[refIndex]);
        },error1 => console.log(error1))
    });
    return from(returnPromise);
  }


}
