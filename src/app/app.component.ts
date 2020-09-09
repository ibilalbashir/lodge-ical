import { Component } from '@angular/core';
import { query, style, group, animate, trigger, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('.2s ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
    ], {
      optional: true,
    }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('.2s ease-out', style({ transform: 'translateX(100%)', opacity: 1 }))
    ], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave',
    style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('.2s ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))
    ], {
      optional: true,
    }),
    query(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('.2s ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
    ], {
      optional: true,
    }),
  ]),
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('animateRoutes', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
})
export class AppComponent {
  title = 'Lodge-iCal';

  constructor(private route: ActivatedRoute) { }

  public animationState: number;

  public onActivate(): void {
    this.animationState = this.route.firstChild.snapshot.data['routeIdx'];
  }
}