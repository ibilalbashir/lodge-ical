import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest.model';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'rbs-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.less']
})
export class GuestsComponent implements OnInit {

  public selection: SelectionModel<Guest>;
  public guests: Guest[];
  public displayedColumns: string[] = ['select', 'status', 'name', 'bookingDetails', 'location', 'contactNumber'];
  public visitDate: string;

  constructor() {
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<Guest>(allowMultiSelect, initialSelection);

    this.devBootstrap();
  }

  ngOnInit(): void { }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.guests.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.guests.forEach(row => this.selection.select(row));
  }

  private devBootstrap() {
    this.guests = [
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'hold' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'quote' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'inquiry' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'cancelled' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { id: 1, name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' }
    ]
  }

}
