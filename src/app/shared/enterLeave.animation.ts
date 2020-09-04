import { trigger, transition, style, animate } from '@angular/animations';

export const enterLeaveAnimation =
  trigger('enterLeave', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('330ms ease-in-out',
        style({ opacity: 1 })
      )
    ]),
    transition(':leave', [
      animate('130ms ease-in-out',
        style({ opacity: 0 })
      )
    ])
  ]);