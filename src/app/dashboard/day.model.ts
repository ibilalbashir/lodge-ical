import { Reservation } from '../shared/reservation.model';

export class Day {
  public date: Date;
  public events: Event[];
}

export class Event {
  public name: string;
  public date: Date;
}