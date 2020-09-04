import { Directive, Input, OnInit, ElementRef } from '@angular/core';
import { AnchorNavigatorComponent } from './anchor-navigator.component';
import { Anchor } from './anchor.model';

@Directive({
  selector: '[rbsAnchor]'
})
export class AnchorDirective implements OnInit {

  @Input() rbsAnchor: Anchor;

  constructor(private anchorHost: AnchorNavigatorComponent, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.anchorHost.anchorLinks.push(this.rbsAnchor);
    this.elementRef.nativeElement.setAttribute('id', this.rbsAnchor.url);
  }

}
