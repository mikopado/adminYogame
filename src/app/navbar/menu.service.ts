import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';

export class MenuItem {
    path: string;   /* The URL path to the page */
    title: string;  /* The Title of the page */
    icon?: string;  /* An optional icon for the page title */
    isStatic?: boolean;
    isLogout?: boolean;
  }
  @Injectable()
  export class MenuService{

    constructor(private router: Router) {}
       
    getMenuItems(): MenuItem[] {
        return this.router.config
          .filter(route =>
            route.data &&
            route.data.title)          
          .map(route => {
            if (!route.data.title) {
              throw new Error('Missing title for toolbar menu route ' + route.path);
            }            
            return {
              path: route.path,
              title: route.data.title,
              icon: route.data.icon,
              isStatic: route.data.isStatic,
              isLogout: route.data.isLogout
            };
          });
      }
  }