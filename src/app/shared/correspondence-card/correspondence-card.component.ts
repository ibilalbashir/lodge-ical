import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rbs-correspondence-card',
  templateUrl: './correspondence-card.component.html',
  styleUrls: ['./correspondence-card.component.less']
})
export class CorrespondenceCardComponent implements OnInit {

  @Input() correspondenceTitle: string;
  @Input() correspondenceType: string;
  @Input() date: Date = new Date();
  @Input() description: string = 'Quisque at justo nec orci tempus faucibus ac id ipsum. Pellentesque ex urna, eleifend vitae est et, ornare porttitor lorem. Aenean convallis rhoncus enim, in dignissim massa posuere.';

  public followUp: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
