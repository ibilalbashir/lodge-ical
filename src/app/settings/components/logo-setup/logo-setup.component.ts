import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbs-logo-setup',
  templateUrl: './logo-setup.component.html',
  styleUrls: ['./logo-setup.component.less'],
})
export class LogoSetupComponent implements OnInit {

  files: File[] = [];

  constructor() { }

  ngOnInit(): void {
  }

onSelect(event) {
  this.files.push(...event.addedFiles);
}

onRemove(event) {
  this.files.splice(this.files.indexOf(event), 1);
}

}
