import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    
    { path: '/ask', title: 'Feedback Form',  icon:'ni-tv-2 text-primary', class: '' },
    // { path: '/Fourpl_feedback', title: 'Fourpl_feedback',  icon:'ni-tv-2 text-primary', class: '' },
    { path: '/order_form', title: 'Make Order',  icon:'ni-tv-2 text-primary', class: '' },
    // { path: '/orders', title: 'orders',  icon:'ni-tv-2 text-primary', class: '' },
    // { path: '/track_order_3pl', title: 'track_order_3pl',  icon:'ni-tv-2 text-primary', class: '' },
    // { path: '/track_order_4pl', title: 'track_order_4pl',  icon:'ni-tv-2 text-primary', class: '' },
    { path: '/track_order_customer', title: 'Trace Order',  icon:'ni-tv-2 text-primary', class: '' }
];

@Component({
  selector: 'app-sidebar_cust',
  templateUrl: './sidebar_cust.component.html',
  styleUrls: ['./sidebar_cust.component.scss']
})
export class sidebar_custComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
