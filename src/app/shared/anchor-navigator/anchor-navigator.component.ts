import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Anchor } from './anchor.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rbs-anchor-navigator',
  templateUrl: './anchor-navigator.component.html',
  styleUrls: ['./anchor-navigator.component.less']
})
export class AnchorNavigatorComponent implements OnInit, AfterViewInit {

  @ViewChild('scroller') scroller: ElementRef;

  private subscription: Subscription;

  public anchorLinks: Anchor[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.subscription = this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scroller.nativeElement.querySelector('#' + fragment).scrollIntoView();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
