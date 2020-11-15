import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  ViewChildren,
  QueryList,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import {
  PerfectScrollbarDirective,
  PerfectScrollbarConfigInterface,
} from "ngx-perfect-scrollbar";
import { AppSettings } from "../app.settings";
import { Settings } from "../app.settings.model";
import { MenuService } from "../theme/components/menu/menu.service";
import { HelpDialogComponent } from "../shared/help-dialog/help-dialog.component";
import { MatDialog } from "@angular/material";
import { TourService } from "ngx-tour-ngx-bootstrap";

@Component({
  selector: "app-pages",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  providers: [MenuService],
})
export class LayoutComponent implements OnInit {
  @ViewChild("sidenav") sidenav: any;
  @ViewChild("backToTop") backToTop: any;
  @ViewChildren(PerfectScrollbarDirective) pss: QueryList<
    PerfectScrollbarDirective
  >;
  public settings: Settings;
  public menus = ["vertical", "horizontal"];
  public menuOption: string;
  public menuTypes = ["default", "compact", "mini"];
  public menuTypeOption: string;
  public isStickyMenu: boolean = false;
  public lastScrollTop: number = 0;
  public showBackToTop: boolean = false;
  public toggleSearchBar: boolean = false;
  show_universal_filter: boolean = false;
  Show_analytics: boolean = false;
  slide : boolean = false;
  private defaultMenu: string; //declared for return default menu when window resized

  languages = [
    { value: 'English', viewValue: 'English', img: 'https://www.flaticon.com/svg/static/icons/svg/206/206592.svg' },
    { value: 'Spanish', viewValue: 'Spanish', img: 'https://www.flaticon.com/svg/static/icons/svg/2122/2122709.svg' }
  ];

  public selected2 = this.languages[0].value;

  constructor(
    public appSettings: AppSettings,
    public router: Router,
    private menuService: MenuService,
    public dialog: MatDialog,
    public tourService: TourService
  ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.settings.menu = "vertical";
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
    }
    this.menuOption = this.settings.menu;
    this.menuTypeOption = this.settings.menuType;
    this.defaultMenu = this.settings.menu;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.settings.loadingSpinner = false;
    }, 300);
    this.backToTop.nativeElement.style.display = "none";
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!this.settings.sidenavIsPinned) {
          this.sidenav.close();
        }
        if (window.innerWidth <= 768) {
          this.sidenav.close();
        }
      }
    });
    if (this.settings.menu == "vertical")
      this.menuService.expandActiveSubMenu(
        this.menuService.getVerticalMenuItems()
      );
  }

  public chooseMenu() {
    this.settings.menu = this.menuOption;
    this.defaultMenu = this.menuOption;
    this.router.navigate(["/"]);
  }

  public chooseMenuType() {
    this.settings.menuType = this.menuTypeOption;
  }

  public changeTheme(theme) {
    this.settings.theme = theme;
  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

  public showHelpTour(){
    let dialogRef = this.dialog.open(HelpDialogComponent, {
      height: "auto",
      width: "650px"
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res === "save") {
        console.log("help")
         this.tourService.start();
      }else{
         this.tourService.end();
      }
    });
  }

  // public showAlerts(){
  //   let dialogRef = this.dialog.open(MessagesComponent, {
  //     height: "auto",
  //     width: "650px"
  //   });
  //   dialogRef.afterClosed().subscribe(res => {
  //     if (res === "save") {
       
  //     }else{
      
  //     }
  //   });
  // }

  public onPsScrollY(event) {
    event.target.scrollTop > 300
      ? (this.backToTop.nativeElement.style.display = "flex")
      : (this.backToTop.nativeElement.style.display = "none");
    if (this.settings.menu == "horizontal") {
      if (this.settings.fixedHeader) {
        var currentScrollTop =
          event.target.scrollTop > 56 ? event.target.scrollTop : 0;
        currentScrollTop > this.lastScrollTop
          ? (this.isStickyMenu = true)
          : (this.isStickyMenu = false);
        this.lastScrollTop = currentScrollTop;
      } else {
        event.target.scrollTop > 56
          ? (this.isStickyMenu = true)
          : (this.isStickyMenu = false);
      }
    }
  }

  public scrollToTop() {
    this.pss.forEach((ps) => {
      if (
        ps.elementRef.nativeElement.id == "main" ||
        ps.elementRef.nativeElement.id == "main-content"
      ) {
        ps.scrollToTop(0, 250);
      }
    });
  }

  @HostListener("window:resize")
  public onWindowResize(): void {
    if (window.innerWidth <= 768) {
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.settings.menu = "vertical";
    } else {
      this.defaultMenu == "horizontal"
        ? (this.settings.menu = "horizontal")
        : (this.settings.menu = "vertical");
      this.settings.sidenavIsOpened = true;
      this.settings.sidenavIsPinned = true;
    }
  }

  public closeSubMenus() {
    let menu = document.querySelector(".sidenav-menu-outer");
    if (menu) {
      for (let i = 0; i < menu.children[0].children.length; i++) {
        let child = menu.children[0].children[i];
        if (child) {
          if (child.children[0].classList.contains("expanded")) {
            child.children[0].classList.remove("expanded");
            child.children[1].classList.remove("show");
          }
        }
      }
    }
  }
}
