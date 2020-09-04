import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  EmbeddedViewRef,
  AfterViewInit
} from '@angular/core';

import * as moment from 'moment';

import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import resourcePlugin from '@fullcalendar/resource-common';
import { enterLeaveAnimation } from 'src/app/shared/enterLeave.animation';
import { Router } from '@angular/router';

// tslint:disable-next-line: no-namespace
declare namespace SimpleScrollbar {
  export function initEl(element: Element): void;
  export function initAll(): void;
  export function moveBar(e: Event): void;
}

@Component({
  selector: 'rbs-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  animations: [
    enterLeaveAnimation
  ]
})
export class CalendarComponent implements OnInit, AfterViewInit {

  @ViewChild('resourceInfoPlaceholder') resourceInfo: TemplateRef<any>;
  private readonly contentRenderers = new Map<string, EmbeddedViewRef<any>>();

  private _selectedArrivalDate: Date;
  private _selectedDepartureDate: Date;
  private _daysToShow = 30;

  public calendarPlugins = [interactionPlugin, resourceTimelinePlugin, resourcePlugin];
  public resourceColumns = [
    {
      labelText: '',
      field: 'title',
      text: () => '',
      render: (resource, el) => this.renderResourceInfo(resource, el)
    },
  ];

  public slotLabelFormat = [
    { month: 'long', year: 'numeric' }, // top level of text
    { day: '2-digit' } // lower level of text
  ];
  public visibleRange = {
    start: '',
    end: ''
  };
  public header = {
    left: 'prev, next',
    center: '',
    right: ''
  };
  public customButtons = {
    prev: {
      text: 'Prev',
      click: () => this.onPrev()
    },
    next: {
      text: 'Next',
      click: () => this.onNext()
    }
  };

  public detailsVisible = true;
  public resourceData: any[] = [];
  public eventsData: any[] = [];
  public selectedResources: any[] = [];

  public eventRender = (info) => {
    if (info.event.extendedProps.selected) {
      info.el.classList.add('selected');
    } else {
      info.el.classList.remove('selected');
    }
  }

  public set selectedArrivalDate(value) {
    this._selectedArrivalDate = value;
  }
  public get selectedArrivalDate(): Date {
    return this._selectedArrivalDate;
  }

  public set selectedDepartureDate(value) {
    this._selectedDepartureDate = value;
  }
  public get selectedDepartureDate(): Date {
    return this._selectedDepartureDate;
  }
  public get minDateForDeparturePicker(): Date {
    return moment(this.selectedArrivalDate).add(1, 'days').toDate();
  }

  public get checkAvailabiltyEnabled(): boolean {
    return this.selectedArrivalDate !== undefined && this.selectedDepartureDate !== undefined;
  }

  public get daysToShow(): number {
    return this._daysToShow;
  }

  public set daysToShow(days) {
    this._daysToShow = days;

    this.visibleRange = {
      start: this.visibleRange.start,
      end: moment(this.visibleRange.start).add(this.daysToShow, 'days').format('YYYY-MM-DD')
    };
    this.highlightDates();
  }

  constructor(private router: Router) {
    const today = moment();
    // const daysBeforeAndAfter = this.daysToShow / 2;
    this.visibleRange = {
      start: today.format('YYYY-MM-DD'),
      end: today.add(this.daysToShow, 'days').format('YYYY-MM-DD')
    };
  }

  ngOnInit(): void {
    this.genData();
  }

  ngAfterViewInit(): void {
    // add a loader to help ease the transition of getting data and resizing the calendar
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      this.highlightDates();
    }, 400);
  }

  public eventClick(info) {
    if (info.event.extendedProps.status === 'available') {
      // are we selecting the resource or the event ...
      // need to determine which to figure out how to track selections
      // and the 'state' of an event (available vs selected)
      // const idx = this.eventsData.indexOf(info.event);
      let selectedEventIndex;
      const selectedEventFromList = this.eventsData.find((evt, idx) => {
        if (evt.id === parseInt(info.event.id, 10)) {
          selectedEventIndex = idx;
          return true;
        }
        return false;
      });
      if (this.selectedResources.indexOf(selectedEventFromList) !== -1) {
        this.selectedResources.splice(this.selectedResources.indexOf(selectedEventFromList), 1);
        selectedEventFromList.selected = false;
      } else {
        selectedEventFromList.selected = true;
        this.selectedResources.push(selectedEventFromList);
      }
    }
  }

  public onPrev() {
    const firstDate = moment(this.visibleRange.start);
    const lastDate = moment(this.visibleRange.end);
    this.visibleRange = {
      start: firstDate.subtract(this.daysToShow, 'days').format('YYYY-MM-DD'),
      end: lastDate.subtract(this.daysToShow, 'days').format('YYYY-MM-DD')
    };
    this.highlightDates();
  }

  public onNext() {
    const firstDate = moment(this.visibleRange.start);
    const lastDate = moment(this.visibleRange.end);
    this.visibleRange = {
      start: moment(firstDate.add(this.daysToShow, 'days')).format('YYYY-MM-DD'),
      end: moment(lastDate.add(this.daysToShow, 'days')).format('YYYY-MM-DD')
    };
    this.highlightDates();
  }

  public clearSelection() {
    this.selectedResources.forEach(item => item.selected = false);
    this.selectedResources = [];
  }

  public toggleDetails() {
    this.detailsVisible = !this.detailsVisible;
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }

  public selectResource(resource) {
    const idx = this.selectedResources.indexOf(resource.id);
    if (idx === -1) {
      this.selectedResources.push(resource.id);
    } else {
      this.selectedResources.splice(idx, 1);
    }
    const renderer = this.contentRenderers.get(resource.id);
    if (renderer) {
      renderer.detectChanges();
    }
  }

  public resourceSelected(resource) {
    return this.selectedResources.indexOf(resource.id) !== -1;
  }

  public renderResourceInfo(data, el) {
    let renderer = this.contentRenderers.get(data.id);
    if (!renderer) {
      // Make a new renderer and save it so that we can destroy when the event is unmounted.
      renderer = this.resourceInfo.createEmbeddedView({ data });
      this.contentRenderers.set(data.id, renderer);
    } else {
      // Just update the existing renderer.
      renderer.context.data = data;
      renderer.markForCheck();
    }
    renderer.detectChanges();
    return renderer.rootNodes[0];
  }

  public onEventDragStart(info: any) {
    console.log(info);
  }

  unrenderEvent(arg) {
    const renderer = this.contentRenderers.get(arg.event.id);
    if (renderer) {
      renderer.destroy();
    }
  }

  public getAvailableResources() {
    // whenever we update either of these dates, and both have valid values
    // update the visibleRange of the calendar to show a total of 30 days with an even # of days before and
    // after the selected date range
    const daysBetweenDates = moment(this.selectedDepartureDate).diff(moment(this.selectedArrivalDate), 'days');
    const daysBeforeAndAfter = Math.floor((this.daysToShow - daysBetweenDates) / 2);
    this.visibleRange = {
      start: moment(this.selectedArrivalDate).add(-daysBeforeAndAfter, 'days').format('YYYY-MM-DD'),
      end: moment(this.selectedDepartureDate).add(daysBeforeAndAfter, 'days').format('YYYY-MM-DD')
    };
    this.highlightDates();
  }

  public highlightDates() {
    setTimeout(() => {
      // higlight days in the past
      const slats = Array.from(document.getElementsByClassName('fc-major'));
      slats.forEach(element => {
        const date = moment(element.attributes['data-date'].value);
        if (date.isBefore(moment(), 'day')) {
          element.classList.add('past');
        }
      });

      // highlight weekends
      const dayHeaders = Array.from(document.getElementsByClassName('fc-widget-header'));
      dayHeaders.forEach(element => {
        if (element.attributes['data-date'] && !element.attributes['colspan']) {
          const day = moment(element.attributes['data-date'].value).day();
          if (day === 0 || day === 6) {
            element.classList.add('weekend');
          }
        }
      });
    }, 100);
  }

  public bookReservation() {
    this.router.navigate(['/reservations/confirmation']);
  }

  private parseEventsData(data) {
    data.forEach(event => {
      // event.backgroundColor = event.borderColor = this.eventStatusColor(event.status);
      // event.textColor = this.eventStatusTextColor(event.status);
      event.className = event.status;
      event.className += event.selected ? 'selected' : '';
    });

    this.eventsData = data;
  }

  private genData(): void {
    this.resourceData = [
      { id: 0, title: 'Main Lodge', guests: 6, beds: ['1 King', '4 Small'] },
      { id: 1, title: 'North Lodge', guests: 12 },
      { id: 101, title: 'North Lodge 1', parentId: 1, beds: ['2 King', '4 Small'] },
      { id: 102, title: 'North Lodge 2', parentId: 1, beds: ['2 King', '4 Small'] },
      { id: 2, title: 'Grand Deluxe Lodge', guests: 8, beds: ['2 King', '8 Small'] },
      { id: 3, title: 'Mount Lodge', guests: 8, beds: ['2 King', '4 Small'] },
      { id: 4, title: 'Sunny Lodge', guests: 6, beds: ['2 King', '4 Small'] }
    ];

    const eventsData = [
      { id: 0, resourceId: 0, title: 'McAllistar Family', start: moment().toDate(), end: moment().add(7, 'days').toDate(), status: 'confirmed' },
      { id: 1, resourceId: 102, title: 'McAllistar Family', start: moment().toDate(), end: moment().add(7, 'days').toDate(), status: 'confirmed' },
      { id: 2, resourceId: 101, title: 'Glascher Family', start: moment().add(-4, 'days').toDate(), end: moment().add(9, 'days').toDate(), status: 'confirmed' },
      { id: 3, resourceId: 2, title: 'Andrew McArthy', start: moment().add(1, 'days').toDate(), end: moment().add(8, 'days').toDate(), status: 'reserved' },
      { id: 4, resourceId: 3, title: 'Andrew McArthy', start: moment().add(4, 'days').toDate(), end: moment().add(9, 'days').toDate(), status: 'confirmed' },
      { id: 5, resourceId: 3, title: 'Adam Polak', start: moment().add(10, 'days').toDate(), end: moment().add(15, 'days').toDate(), status: 'confirmed' },
      { id: 6, resourceId: 4, title: 'McAllister Family', start: moment().add(4, 'days').toDate(), end: moment().add(5, 'days').toDate(), status: 'reserved' },
      { id: 7, resourceId: 0, title: 'Available', start: moment().add(8, 'days').toDate(), end: moment().add(12, 'days').toDate(), status: 'available' },
      { id: 8, resourceId: 102, title: 'Available', start: moment().add(8, 'days').toDate(), end: moment().add(12, 'days').toDate(), status: 'available' },
      { id: 9, resourceId: 4, title: 'Available', start: moment().add(8, 'days').toDate(), end: moment().add(12, 'days').toDate(), status: 'available' },
      { id: 10, resourceId: 1, title: '0/6', start: moment().toDate(), end: moment().add(2, 'days').toDate(), status: 'fully-booked', editable: false, resourceEditable: false },
      { id: 11, resourceId: 1, title: '2/6', start: moment().add(2, 'days').toDate(), end: moment().add(8, 'days').toDate(), status: 'partially-booked', editable: false, resourceEditable: false },
      { id: 12, resourceId: 1, title: '6/6', start: moment().add(8, 'days').toDate(), end: moment().add(12, 'days').toDate(), status: 'fully-available', editable: false, resourceEditable: false }
    ];

    this.parseEventsData(eventsData);
  }
}
