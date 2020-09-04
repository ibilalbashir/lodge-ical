import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'rbs-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.less']
})
export class ReservationsComponent implements OnInit {

  // TODO: change to proper reservation model
  public selection: SelectionModel<any>;
  public reservations: any[];
  public displayedColumns: string[] = ['select', 'status', 'name', 'bookingDetails', 'location', 'contactNumber'];
  public visitDate: string;
  public checkoutReportVisible = false;

  constructor() {
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<any>(allowMultiSelect, initialSelection);

    this.devBootstrap();
  }

  ngOnInit(): void { }

  //dev
  public showCheckoutReport(): void {
    this.checkoutReportVisible = true;
  }

  public hideCheckoutReport(): void {
    this.checkoutReportVisible = false;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.reservations.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.reservations.forEach(row => this.selection.select(row));
  }

  private devBootstrap() {
    this.reservations = [
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' },
      { name: 'Rose Andrews', bookingDetails: '6 guests - 4 Days - Main Lodge', location: 'Haskell, Illinois', contactNumber: '(987) 456-8765', status: 'confirmed' }
    ]
  }
}
