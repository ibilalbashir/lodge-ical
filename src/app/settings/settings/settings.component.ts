import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  AfterViewInit,
} from "@angular/core";
import * as CONSTANTS from "../constants/settings-constants";
@Component({
  selector: "rbs-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.less"],
})
export class SettingsComponent implements OnInit, AfterViewInit {
  navItems = [];
  sideBarMode = "side";
  isOpened: boolean;
  @ViewChild("settingsSideNav") settingsSideNav;

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth < 762) {
      this.isOpened = false;
      this.sideBarMode = "over";
    } else {
      this.isOpened = true;
      this.sideBarMode = "side";
    }
  }
  constructor() {
    this.isOpened = true;
    this.navItems = CONSTANTS.SettingsConstants.navItems;
  }

  ngOnInit(): void {
    this.hideOnSmallScreens();
  }
  ngAfterViewInit() {
    this.settingsSideNav.closedStart.subscribe((res) => {
      this.isOpened = false
    });
  }
  toggleSideNav() {
    this.isOpened = !this.isOpened;
  }
  hideOnSmallScreens() {
    if (window.innerWidth < 762) {
      this.isOpened = false;
      this.sideBarMode = "over";
    }
  }

  backDropClicked() {
    console.log("cliked");
  }
}
