import { Injectable } from '@angular/core';


export class Reference {
  public shorthand: string;
  public authors: string;
  public title: string;
  public doi: string;
  public journal: string;
  public url: string;
  public pubDetails: string;
  public tags: string[];

  constructor(shorthand: string, authors: string, doi: string, journal: string, url: string, pubDetails: string, tags: string[])  {
    this.shorthand = shorthand;
    this.authors = authors;
    this.doi = doi;
    this.journal = journal;
    this.url = url;
    this.pubDetails = pubDetails;
    this.tags = tags;
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

export let PAGE_CHUNK_MASTER_RECORD = [
  //*
  // */
]

@Injectable({
  providedIn: 'root'
})
export class ReferenceManagerService {

  constructor() { }
}
