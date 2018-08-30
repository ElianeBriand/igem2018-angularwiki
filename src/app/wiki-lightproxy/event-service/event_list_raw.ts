import {addDays, addHours, endOfMonth, startOfDay, subDays} from 'date-fns';
import {CalendarEvent} from 'calendar-utils';

export const colors: any = {
  mtx: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  ancillary: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  bistable: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

export class eventMetadata {
  category: string;

  wikipath: string;

  constructor(category: string, wikipath: string) {
    this.category = category;
    this.wikipath = wikipath;
  }

}


export let EVENT_LIST: CalendarEvent[] = [
  {
    start: new Date('2018-08-16'),
    end: new Date('2018-08-17'),
    title: 'LEE5 Transformation',
    color: colors.bistable,
    meta: new eventMetadata('bistable', 'Heat_Shock_Transformation')
  },
  {
    start: startOfDay(new Date()),
    title: 'Sequencing pSB1C3 abgT',
    color: colors.mtx,
    meta: new eventMetadata('mtx', 'Heat_Shock_Transformation')
  },
  {
    start: subDays(endOfMonth(new Date()), 3),
    end: addDays(endOfMonth(new Date()), 3),
    title: 'Creating P1 phage stock',
    color: colors.ancillary,
    meta: new eventMetadata('ancillary', 'labnotebook/P1_stock_making')
  },
  {
    start: addHours(startOfDay(new Date()), 2),
    end: new Date(),
    title: 'Digesting pCR blunt abgT (XbaI,SpeI)',
    color: colors.mtx,
    meta: new eventMetadata('mtx', 'Heat_Shock_Transformation')
  }
];
