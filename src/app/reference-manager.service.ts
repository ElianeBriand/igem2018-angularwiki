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


export let REFERENCES_MASTER_RECORD = [
  new Reference('Loenen2014', 'Loenen, W. A. M., Dryden, D. T. F., Raleigh, E. A., Wilson, G. G., & Murrayy, N. E',
    'Highlights of the DNA cutters: A short history of the restriction enzymes',
    '10.1093/nar/gkt990',
    'Nucleic Acids Research',
    'http://academic.oup.com/nar/article/42/1/3/2438402/Highlights-of-the-DNA-cutters-a-short-history-of', '42(1), 3–19', ['RestrictionEnzyme', 'History'],
    'In the early 1950\'s, \'host-controlled variation in bacterial viruses\' was reported as a non-hereditary phenomenon: one cycle of viral growth on certain bacterial hosts affected the ability of progeny virus to grow on other hosts by either restricting or enlarging their host range. Unlike mutation, this change was reversible, and one cycle of growth in the previous host returned the virus to its original form. These simple observations heralded the discovery of the endonuclease and methyltransferase activities of what are now termed Type I, II, III and IV DNA restriction-modification systems. The Type II restriction enzymes (e.g. EcoRI) gave rise to recombinant DNA technology that has transformed molecular biology and medicine. This review traces the discovery of restriction enzymes and their continuing impact on molecular biology and medicine.'),
  new Reference('Cox2018', 'Cox, R. S., Madsen, C., McLaughlin, J., Nguyen, T., Roehner, N., Bartley, B., … Wipat, A.',
    'Synthetic Biology Open Language Visual (SBOL Visual) Version 2.0',
    '10.1515/jib-2017-0074',
    'Journal of Integrative Bioinformatics',
    'http://www.degruyter.com/view/j/jib.2018.15.issue-1/jib-2017-0074/jib-2017-0074.xml', '15(1)', ['Visualization', 'SyntheticBiology'],
    'People who are engineering biological organisms often find it useful to communicate in diagrams, both about the structure of the nucleic acid sequences that they are engineering and about the functional relationships between sequence features and other molecular species. Some typical practices and conventions have begun to emerge for such diagrams. The Synthetic Biology Open Language Visual (SBOL Visual) has been developed as a standard for organizing and systematizing such conventions in order to produce a coherent language for expressing the structure and function of genetic designs. This document details version 2.0 of SBOL Visual, which builds on the prior SBOL Visual 1.0 standard by expanding diagram syntax to include functional interactions and molecular species, making the relationship between diagrams and the SBOL data model explicit, supporting families of symbol variants, clarifying a number of requirements and best practices, and significantly expanding the collection of diagram glyphs.'
  ),
  new Reference('Cox2017', 'Cox, R. S., McLaughlin, J. A., Grünberg, R., Beal, J., Wipat, A., & Sauro, H. M.',
    'A Visual Language for Protein Design',
    '10.1021/acssynbio.6b00286',
    'ACS Synthetic Biology',
    'http://pubs.acs.org/doi/10.1021/acssynbio.6b00286', '15(1)', ['Visualization', 'Protein'],
'As protein engineering becomes more sophisticated, practitioners increasingly need to share diagrams for communicating protein designs. To this end, we present a draft visual language, Protein Language, that describes the high-level architecture of an engineered protein with easy-to-draw glyphs, intended to be compatible with other biological diagram languages such as SBOL Visual and SBGN. Protein Language consists of glyphs for representing important features (e.g., globular domains, recognition and localization sequences, sites of covalent modification, cleavage and catalysis), rules for composing these glyphs to represent complex architectures, and rules constraining the scaling and styling of diagrams. To support Protein Language we have implemented an extensible web-based software diagram tool, Protein Designer, that uses Protein Language in a “drag and drop” interface for visualization and computer-aided-design of engineered proteins, as well as conversion of annotated protein sequences to Protein L...'
  ),
  new Reference('Cook2001', 'Cook, D. L., Farley, J. F., & Tapscott, S. J.',
    'A basis for a visual language for describing, archiving and analyzing functional models of complex biological systems',
    '10.1186/gb-2001-2-4-research0012',
    'Genome Biol',
    'http://genomebiology.biomedcentral.com/articles/10.1186/gb-2001-2-4-research0012', '2(4), RESEARCH0012', ['Visualization', 'SystemBiology'],
'BACKGROUND: We propose that a computerized, internet-based graphical description language for systems biology will be essential for describing, archiving and analyzing complex problems of biological function in health and disease. RESULTS: We outline here a conceptual basis for designing such a language and describe BioD, a prototype language that we have used to explore the utility and feasibility of this approach to functional biology. Using example models, we demonstrate that a rather limited lexicon of icons and arrows suffices to describe complex cell-biological systems as discrete models that can be posted and linked on the internet. CONCLUSIONS: Given available computer and internet technology, BioD may be implemented as an extensible, multidisciplinary language that can be used to archive functional systems knowledge and be extended to support both qualitative and quantitative functional analysis.'
  ),
  new Reference('Novere2009', 'Novere, N. Le, Hucka, M., & Mi, H.',
    'The systems biology graphical notation',
    '10.1038/nbt.1558',
    'Nature Computational Biology',
    'http://www.nature.com/articles/nbt.1558', '27(8), 735–741', ['Visualization', 'SystemBiology'],
    'Circuit diagrams and Unified Modeling Language diagrams are just two examples of standard visual languages that help accelerate work by promoting regularity, removing ambiguity and enabling software tool support for communication of complex information. Ironically, despite having one of the highest ratios of graphical to textual information, biology still lacks standard graphical notations. The recent deluge of biological knowledge makes addressing this deficit a pressing concern. Toward this goal, we present the Systems Biology Graphical Notation (SBGN), a visual language developed by a community of biochemists, modelers and computer scientists. SBGN consists of three complementary languages: process diagram, entity relationship diagram and activity flow diagram. Together they enable scientists to represent networks of biochemical interactions in a standard, unambiguous way. We believe that SBGN will foster efficient and accurate representation, visualization, storage, exchange and reuse of information on all kinds of biological knowledge, from gene regulation, to metabolism, to cellular signaling.'
  ),
  new Reference('Funahashi2003', 'Funahashi, A., Morohashi, M., Kitano, H., & Tanimura, N.',
    'CellDesigner: a process diagram editor for gene-regulatory and biochemical networks',
    '10.1016/S1478-5382(03)02370-9',
    'BIOSILICO',
    'http://linkinghub.elsevier.com/retrieve/pii/S1478538203023709', '1(5), 159–162', ['Bioinformatics', 'Biochemistry'],
''
  ),
  new Reference('Cooper2007', 'Cooper, A., Reimann, R., & Cronin, D. ',
    'About Face 3: The essentials of interaction design',
    '10.1057/palgrave.ivs.9500066',
    'Book',
    '', '', ['Visualization', 'UX', 'Design'],
    ''
  ),
  new Reference('Toolaram2014', 'Toolaram, A. P., Kümmerer, K., & Schneider, M.',
    'Environmental risk assessment of anti-cancer drugs and their transformation products: A focus on their genotoxicity characterization-state of knowledge and short comings.',
    '10.1016/j.mrrev.2014.02.001',
    'Mutation Research - Reviews in Mutation Research',
    'https://linkinghub.elsevier.com/retrieve/pii/S1383574214000039', '', ['Risk', 'Drug', 'RiskAssessment', 'Environment'],
    'Anti-cancer drugs are chemotherapeutic agents that are designed to kill or reduce proliferating cells. Often times, they interfere directly or indirectly with the cell\'s deoxyribonucleic acid (DNA). Some of these drugs can be detected in the ng/L concentration range in the aquatic environment and have the potential to be very persistent. Environmental risk assessment is available for only a few anti-cancer drugs, derived mainly from predicted data and excluding information on their metabolites and transformation products (TPs). Notably, there is no defined strategy for genotoxicity risk assessment of anti-cancer drugs, their metabolites and TPs in the environment. In fact, the presence of anti-cancer drugs in hospital and municipal wastewaters has not been clearly related to the genotoxic nature of these wastewaters. The few available studies that have sought to investigate the genotoxicity of mixtures derived from treating anti-cancer drugs prior to disposal seem to share the commonality of coupling analytical methods to measure concentration and genotoxic bioassays, namely the Ames test to monitor inactivation. Such limited studies on the environmental fate and effects of these drugs presents an area for further research work. Most importantly, there is a need to characterize the genotoxic effects of anti-cancer drugs towards aquatic organisms. Given current environmental risk assessment strategies, genotoxicity risk assessment of these drugs and their TPs would have to include a combination of appropriate analytical methods, genotoxicity bioassays, (bio) degradability and computer based prediction methods such as QSAR studies. © 2014 Elsevier B.V.'
  ),

];

/*

 (2014, April 17).  . https://doi.org/10.1016/j.mrrev.2014.02.001


 */



export let referenceJSONurl = "http//404.404";


@Injectable({
  providedIn: 'root'
})
export class ReferenceManagerService {

  static singletonInstance: ReferenceManagerService;

  public reflist: Observable<Reference[]>;
  private internal_reflist: Reference[];
  public errref = error_reference;

  constructor(private http: HttpClient) {
    if (ReferenceManagerService.singletonInstance) {
      return ReferenceManagerService.singletonInstance;
    }
    ReferenceManagerService.singletonInstance = this;


    this.reflist = new Observable((observer) => {
      if(!this.internal_reflist) {

        this.http.get("http://2018.igem.org/wiki/images/d/df/T--GO_Paris-Saclay--references_list.txt", {responseType: 'text'})
        .subscribe((data: any) => {
        let objjson: Reference[] = JSON.parse(data);
        this.internal_reflist = objjson;
          observer.next(this.internal_reflist);
        }, error1 => console.log(error1));

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
