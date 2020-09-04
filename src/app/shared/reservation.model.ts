export class Reservation {
  public checkInDate: Date;
  public checkOutDate: Date;
  public client: Client;
  public numberOfGuests: number;
  public inventory: string; // probably need an inventory model down the road
}

export class Client {
  public name: string;
}