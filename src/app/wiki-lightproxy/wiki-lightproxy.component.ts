import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours, addMonths
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import {LabnotebookCalEventService} from './event-service/labnotebook-cal-event.service';


@Component({
  selector: 'app-wiki-lightproxy',
  templateUrl: './wiki-lightproxy.component.html',
  styleUrls: ['./wiki-lightproxy.component.css']
})

export class WikiLightproxyComponent implements OnInit, AfterViewInit {


  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private eventService: LabnotebookCalEventService) {
    this.eventService.CalendarEventsList.subscribe((value: CalendarEvent[]) => {
      this.events = value;
    }, (error: any) => console.log("EvService error : " + error));

  };

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
      this.fetchWikiPage('labnotebook');
      this.fieldPagePath = 'labnotebook';
    }

  }

  goBackHomeLabNotebook() :void {
    this.router.navigateByUrl('/labnotebook');
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

    sliced_content = sliced_content.replace(new RegExp('href="\\/Team:GO_Paris-Saclay\\/', 'g'), '<a href="#/labnotebook/'); // Rewriting wiki links

    this.remoteContent = sliced_content;
  }

  /*
  goToFilledPage(): void {
    this.router.navigate(['/wiki-lp/' +  this.fieldPagePath]);

  }
  */

  ngAfterViewInit() {

      try {
        document.querySelector('#topprotocols').scrollIntoView();
  } catch (e) { }
  }




  view: string = 'month';

  viewDate: Date = new Date();

  excludeDays: number[] = [0, 6];

  events: CalendarEvent[] = [];

  /*
  From : calendar-utils

  export interface CalendarEvent<MetaType = any> {
    id?: string | number;
    start: Date;
    end?: Date;
    title: string;
    color?: EventColor;
    actions?: EventAction[];
    allDay?: boolean;
    cssClass?: string;
    resizable?: {
        beforeStart?: boolean;
        afterEnd?: boolean;
    };
    draggable?: boolean;
    meta?: MetaType;
}
   */

  eventClicked({ event }: { event: CalendarEvent }): void {
    this.fetchWikiPage(event.meta.wikipath);
  }

  public backAMonth() {
    this.viewDate = addMonths(this.viewDate, -1);
  }

  activeDayIsOpen: boolean = true;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;

      if (
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }

    }
  }

}
