import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-wiki-lightproxy',
  templateUrl: './wiki-lightproxy.component.html',
  styleUrls: ['./wiki-lightproxy.component.css']
})

export class WikiLightproxyComponent implements OnInit, AfterViewInit {


  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router) { };

  remoteContent: any = 'Loading...';
  wikiPageTitle = 'Loading...';
  fieldPagePath = '';

  ngOnInit() {
    this.route.paramMap.subscribe((res: any) => this.checkForPagePath(res));
  }

  checkForPagePath (paramMap: ParamMap) {
    if (paramMap.has('pagepath')) {
      this.fetchWikiPage(paramMap.get('pagepath'));
      this.fieldPagePath = paramMap.get('pagepath');
    } else {
      this.fetchWikiPage('TeamMainPage');
      this.fieldPagePath = 'TeamMainPage';
    }

  }

  fetchWikiPage(pagepath: string) {
    const baseurl = 'http://2018.igem.org/Team:GO_Paris-Saclay/';
    /*
    if (pagepath === '') {
      baseurl = 'http://2018.igem.org/Team:GO_Paris-Saclay';
    }
    */
    this.http.get(baseurl + pagepath, {responseType: 'text'})
      .subscribe((html: any) => this.processContent(html), error1 => console.log(error1));
  }

  processContent(content: any) {
    // console.log('ProcessContent called !');

    const pos_title_begin = content.indexOf('<title>Team:GO Paris-Saclay/');
    const pos_title_end = content.indexOf(' - 2018.igem.org</title>');

    this.wikiPageTitle = content.slice(pos_title_begin + ('<title>Team:GO Paris-Saclay/'.length), pos_title_end);

    const pos_text_begin = content.indexOf('<div id="HQ_page">');
    const pos_text_end = content.indexOf('<div class="visualClear"></div>');
    var sliced_content = content.slice(pos_text_begin, pos_text_end);

    sliced_content = sliced_content.replace(new RegExp('href="\\/Team:GO_Paris-Saclay\\/', 'g'), '<a href="#/wiki-lp/'); // Rewriting wiki links

    this.remoteContent = sliced_content;
  }

  goToFilledPage(): void {
    this.router.navigate(['/wiki-lp/' +  this.fieldPagePath]);

  }

  ngAfterViewInit() {


  }

}
