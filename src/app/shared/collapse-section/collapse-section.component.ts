import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rbs-collapse-section',
  templateUrl: './collapse-section.component.html',
  styleUrls: ['./collapse-section.component.less']
})
export class CollapseSectionComponent implements OnInit {

  @Input() showContent = false;
  @Input() sectionTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleContent(): void {
    this.showContent = !this.showContent;
  }

}
