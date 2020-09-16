import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbs-logo-setup',
  templateUrl: './logo-setup.component.html',
  styleUrls: ['./logo-setup.component.less'],
})
export class LogoSetupComponent implements OnInit {

  files: File[] = [];
  selectedFiles: File[] = []
  event

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event) {
    this.event = event
    this.files = []
    this.files.push(...event.addedFiles);
  }


  onUploadSelect(event) {
    this.event = event
    this.selectedFiles = []
    this.selectedFiles.push(...event.addedFiles);
  }
  onupload(event) {
    this.selectedFiles = []
    this.selectedFiles.push(...event.addedFiles);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onselectedFile(event) {
    this.selectedFiles.splice(this.selectedFiles.indexOf(event), 1);
  }

  seletedToUpload() {
    console.log(this.event);
    this.selectedFiles = []
    this.selectedFiles.push(...this.event.addedFiles)
  }


}
