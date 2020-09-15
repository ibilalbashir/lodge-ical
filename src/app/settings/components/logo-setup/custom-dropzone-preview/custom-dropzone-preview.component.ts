import { Component, OnInit, Input } from "@angular/core";
import { NgxDropzonePreviewComponent } from "ngx-dropzone";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
@Component({
  selector: "rbs-custom-dropzone-preview",
  templateUrl: "./custom-dropzone-preview.component.html",
  styleUrls: ["./custom-dropzone-preview.component.less"],
  providers: [
    {
      provide: NgxDropzonePreviewComponent,
      useExisting: CustomDropzonePreviewComponent,
    },
  ],
})
export class CustomDropzonePreviewComponent
  extends NgxDropzonePreviewComponent
  implements OnInit {
  public imagePath: SafeResourceUrl;
  imgURL: any;
  public message: string;
  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
  }
  ngOnInit() {
    if (!this.file) {
      console.error(
        "No file to read. Please provide a file using the [file] Input property."
      );
      return;
    }
    this.preview(this.file);
  }
  preview(files) {
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files);
    reader.onload = (_event) => {
      this.imgURL = this.sanitizer.bypassSecurityTrustResourceUrl(
        reader.result as string
      );
    };
  }
}
