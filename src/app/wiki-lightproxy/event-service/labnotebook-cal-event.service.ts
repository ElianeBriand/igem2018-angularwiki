import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CalendarEvent} from 'calendar-utils';
import {EVENT_LIST} from './event_list_raw';







@Injectable({
  providedIn: 'root'
})
export class LabnotebookCalEventService {

  static singletonInstance: LabnotebookCalEventService;

  public CalendarEventsList: Observable<CalendarEvent[]>;
  private internalEvList: CalendarEvent[];

  constructor() {
    if (LabnotebookCalEventService.singletonInstance) {
      return LabnotebookCalEventService.singletonInstance;
    }
    LabnotebookCalEventService.singletonInstance = this;

    this.CalendarEventsList = new Observable((observer) => {
        /*
        this.http.get(referenceJSONurl, {responseType: 'text'})
        .subscribe((data: any) => {
        let decodedData = atob(data);
        let objjson: Reference[] = JSON.parse(decodedData);
        this.internal_reflist = objjson;
          observer.next(this.internal_reflist);
        }, error1 => console.log(error1));

           setTimeout(() => {
          let jsonstr = JSON.stringify(EVENT_LIST);
          let objjson: CalendarEvent[] = JSON.parse(jsonstr);

          this.internalEvList = objjson;
          observer.next(this.internalEvList);
        }, 0);
      }else{
        observer.next(this.internalEvList);
      }

         */

        this.internalEvList = EVENT_LIST;
        observer.next(this.internalEvList);


    });

  }




}
