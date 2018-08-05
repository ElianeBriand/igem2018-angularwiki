import {Component, OnInit} from '@angular/core';
import {TeamMember} from '../team-roster/team-roster.component';
import {animate, state, style, transition, trigger} from '@angular/animations';


export class Sponsor {
  public name: string;
  public image_src: string;
  public sponsor_text: string;
  public expanded;
  public expanded_bool: boolean;

  constructor(name: string, image_src: string, sponsor_text: string) {
    this.name = name;
    this.image_src = image_src;
    this.sponsor_text = sponsor_text;
    this.expanded_bool = false;
    this.expanded = 'inactive';

  }

  toggleState() {
    this.expanded_bool = !this.expanded_bool;
    this.expanded = this.expanded === 'active' ? 'inactive' : 'active';
  }
}

@Component({
  selector: 'app-support-section',
  templateUrl: './support-section.component.html',
  styleUrls: ['./support-section.component.css'],
  animations: [
    trigger('cardState', [
      state('inactive', style({})),
      state('active', style({})),
      transition('inactive => active', [
        style({transform: 'translateY(100%)'}),
        animate('200ms ease-in')
      ]),
      transition('active => inactive', [
        style({transform: 'translateY(-20%)'}),
        animate('200ms ease-out')
      ])
    ])
  ]
})
export class SupportSectionComponent implements OnInit {


  sponsorsList = [
    new Sponsor('FSDIE',
      'http://2018.igem.org/wiki/images/7/72/T--GO_Paris-Saclay--FSDIE.png',
      'A small percentage of the university tuition fees goes each year to the <a href=\'http://www.u-psud.fr/fr/vie-etudiante/fsdie.html\'>Fond de Solidarité et de Développement des Initiatives Etudiantes</a> ' +
      '(Fund for Solidarity and Development of Student Initiatives, FSDIE), whose goal is to help students develop projects (regarding science, sport, solidarity, etc).' +
      ' Students should present an application form which is examined by a jury composed of student representatives and teachers.<br><br>' +
      'We worked hard so our presence in Boston participates to our university reputation!'
    ),
    new Sponsor('Magistère de biogie',
      'http://2018.igem.org/wiki/images/5/56/T--GO_Paris-Saclay--magistere.png',
      'The <a href="http://www.u-psud.fr/fr/formations/diplomes/magisteres/biologie.html">Magistère of Biology</a> is a diploma which can be obtained in France after 3 years of study. Courses are delivered by teachers' +
      ' from public (CNRS, INRA, Universities) and private (Research & Development) institutions. It covers various aspects of biology: sciences, marketing, ' +
      'communication, journalism etc. This year, even though no magisterian participate to the adventure, they still support us, and we are grateful for that.'),
    new Sponsor('New England Biolab',
      'http://2018.igem.org/wiki/images/f/f8/T--GO_Paris-Saclay--NEB.png',
      '<a href="https://www.neb.com/">New England Biolab</a> provides high-quality research products to a worldwide scientific community and has an extensive quality control.' +
      ' Their generosity towards iGEM teams has long been known and is still ongoing!'),
    new Sponsor('DesignBro',
      'http://2018.igem.org/wiki/images/0/0f/T--GO_Paris-Saclay--DesignBro.png',
      '<a href="https://designbro.com/">DesignBro</a> is a professional design platform that offers high-quality design services for clients. Designers have multiple years of experience & are hand-curated.'+
      ' They aim to be the highest quality design platform on the internet.<br><br>We thank them for our brand new IGEM Paris Saclay logo.'),
    new Sponsor('MathWorks',
      'http://2018.igem.org/wiki/images/a/aa/T--GO_Paris-Saclay--matworks.png',
      '<a href="https://www.mathworks.com/">MathWorks</a> is the leading company on mathematical computing software. Their two primary products are MATLAB, for the development '+
      'and algorithms and data analysis, and Simulink for designing and running simulations of dynamic multidomain models The products are a top in '+
      'innovation and development in life science as well as other fields. <br><br>We thanks them for the 3 MATLAB licences they gave us.'),
    new Sponsor('Integrated DNA Technologies',
      'http://2018.igem.org/wiki/images/d/d4/T--GO_Paris-Saclay--IDT.png',
      '<a href="https://www.idtdna.com/">Integrated DNA Technologies Inc.</a> is the world\'s largest supplier of custom nucleic acids, serving the areas of academic research, biotechnology, clinical diagnostics,'+
      ' and pharmaceutical development.<br><br> IDT kindly provided gBlocks which we used for gene construction and modification.'),
    new Sponsor('Embassade de France aux USA',
      'http://2018.igem.org/wiki/images/d/df/T--GO_Paris-Saclay--emba_fr_us.jpg',
      'The <a href="https://franceintheus.org/">French Embassy in the United States</a>, located in Washington D.C., is the primary French diplomatic mission in the United States.' +
      ' <br><br>They offered us 1,000€ so we could come to Boston and show the french scientific enthusiasm on synthetic biology. We will do our best to represent our country!'),
    new Sponsor('I2BC',
      'http://2018.igem.org/wiki/images/4/4f/T--GO_Paris-Saclay--I2BC.png',
      'The <a href=\'https://www.i2bc.paris-saclay.fr/?lang=en\'>Institute of Integrative Biology of the Cell</a> is a lab supported by the Paris-Sud University,' +
      ' the CNRS and the CEA. The institute includes 80 teams of scientists and 15 facilities from 8 research units. It is located in 3 different research campus ' +
      '(Orsay in the Paris-Sud University, Gif-Sur-Yvette in the CNRS, Saclay campus in the CEA).\n' +
      '<br><br>Our team\'s supervisors are from this institute. The institute offered us funding and the great ' +
      'opportunity to perform our experiments in their buildings. No experimentation would have been possible without their tremendous help!\n'),
    new Sponsor('Paris Saclay : Sciences de la Vie',
      'http://2018.igem.org/wiki/images/9/9d/T--GO_Paris-Saclay--upsaclay_sdv.jpg',
      'The <a href=\'https://www.universite-paris-saclay.fr/en/education/school/biology-medicine-and-pharmacy\'>Biology Medicine Pharmacy</a> (BMP) school coordinates 4 masters from different components of the Paris-Saclay University (Paris Sud University, ENS Cachan, ' +
      'École Polytechnique, Versailles-Saint-Quentin University, Évry Val d\'Essonne University).<br><br> Its strength : the implication of many research departments throughout the curriculum.' +
      '  <br><br>Their financial support was essential for our team!'),
    new Sponsor('Université Paris Saclay',
      'http://2018.igem.org/wiki/images/c/c4/T--GO_Paris-Saclay--upsaclay_s.png',
      'In a globalized economic context, a massive and targeted investment in research and innovation is the <i>sine qua non</i> of competitiveness,' +
      ' growth, employment in French territories.<br><br> We would like to thank the <a href=\'https://www.caissedesdepots.fr/investissements-davenir\'>Fond d’investissement d’avenir de Paris Saclay</a>' +
      ' for supporting us financially in our project.')
  ];

  constructor() {

    this.shuffleArray(this.sponsorsList);
  }

  shuffleArray = function (array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  };

  ngOnInit() {
  }

}
