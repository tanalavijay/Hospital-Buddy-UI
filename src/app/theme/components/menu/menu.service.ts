import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { Menu } from "./menu.model";
import { verticalMenuItems, horizontalMenuItems } from "./menu";

@Injectable()
export class MenuService {

  adminMenuItems : any;

  constructor(private location: Location, private router: Router) {
    let temp = [];
    let userType = localStorage.getItem('userType');
    if (userType == 'owner') {
        temp.push(
            new Menu(1, 'Analytics', '/owner/analytics', null,' analytics', null, true, 0, "white"),
            new Menu(2, 'Admin', '/owner/admin', null, 'account_circle', null, true, 0, "white"),
            new Menu(3, 'Patients', '/owner/patients', null, 'person_outline', null, false, 0, "white"),
            new Menu(4, 'Pricing', '/owner/pricing', null, 'attach_money', null, true, 0, "white"),
            new Menu(5, 'Subscriptions', '/owner/subscription', null, 'subscriptions', null, false, 0, "white"),
            new Menu(6, 'More', '/owner/more/owners', null, 'more_horiz', null, true, 0, "white"),
            new Menu(6.1, 'Owners', '/owner/more/owners', null, 'group_add', null, false, 6, "white"),
            // new Menu(6.2, 'Lookup Options', '/owner/more/lookup', null, 'zoom_in', null, false, 6, "white"),
            new Menu(6.3, 'Settings', '/owner/more/settings', null, 'settings', null, false, 6, "white")
        );
    }else {
        temp.push(
            new Menu(1, 'Analytics', '/admin/dashboard', null,' analytics', null, true, 0, "white"),
            new Menu(2, 'Manage', '/admin/manage/hospital', null, 'work', null, true, 0, "white"),
            new Menu(2.1, 'Hospitals', '/admin/manage/hospital', null, 'business_center', null, true, 2, "white"),
            new Menu(2.2, 'Physicians', '/admin/manage/physician', null, 'record_voice_over', null, true, 2, "white"),
            new Menu(2.3, 'Patients', '/admin/manage/patient', null, 'accessible', null, true, 2, "white"),
            new Menu(3, 'Master Data', '/admin/admin/icd', null, 'dvr', null, true, 0, "white"),
            // new Menu(3.1, 'Referring Physician', '/admin/admin/referringphysician', null, 'account_circle', null, false, 3, "white"),
            new Menu(3.2, 'ICD Codes', '/admin/admin/icd', null, 'library_add', null, false, 3, "white"),
            new Menu(3.3, 'CPT Codes', '/admin/admin/cpt', null, 'library_books', null, false, 3, "white"),
            new Menu(3.4, 'Settings', '/admin/admin/settings', null, 'settings', null, false, 3, "white"),
        );
    }
    this.adminMenuItems = temp;
  }

  
  public getVerticalMenuItems(): Array<Menu> {
    return verticalMenuItems;
  }

  public getHorizontalMenuItems(): Array<Menu> {
    return horizontalMenuItems;
  }

  public getAdminMenuItems(): Array<Menu> {
    return this.adminMenuItems;
  }

  public expandActiveSubMenu(menu: Array<Menu>) {
    let url = this.location.path();
    let routerLink = url; // url.substring(1, url.length);
    let activeMenuItem = menu.filter((item) => item.routerLink === routerLink);
    if (activeMenuItem[0]) {
      let menuItem = activeMenuItem[0];
      while (menuItem.parentId != 0) {
        let parentMenuItem = menu.filter(
          (item) => item.id == menuItem.parentId
        )[0];
        menuItem = parentMenuItem;
        this.toggleMenuItem(menuItem.id);
      }
    }
  }

  public toggleMenuItem(menuId) {
    let menuItem = document.getElementById("menu-item-" + menuId);
    let subMenu = document.getElementById("sub-menu-" + menuId);
    if (subMenu) {
      if (subMenu.classList.contains("show")) {
        subMenu.classList.remove("show");
        menuItem.classList.remove("expanded");
      } else {
        subMenu.classList.add("show");
        menuItem.classList.add("expanded");
      }
    }
  }

  public closeOtherSubMenus(menu: Array<Menu>, menuId) {
    let currentMenuItem = menu.filter((item) => item.id == menuId)[0];
    if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
      menu.forEach((item) => {
        if (item.id != menuId) {
          let subMenu = document.getElementById("sub-menu-" + item.id);
          let menuItem = document.getElementById("menu-item-" + item.id);
          if (subMenu) {
            if (subMenu.classList.contains("show")) {
              subMenu.classList.remove("show");
              menuItem.classList.remove("expanded");
            }
          }
        }
      });
    }
  }
}
