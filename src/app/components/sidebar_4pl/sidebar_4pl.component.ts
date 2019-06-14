import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    
    // { path: '/Threepl_form', title: 'Threepl_form',  icon:'ni-tv-2 text-primary', class: '' },
    { path: '/Fourpl_feedback', title: 'Feedback Form',  icon:'ni-tv-2 text-primary', class: '' },
    // { path: '/order_form', title: 'order_form',  icon:'ni-tv-2 text-primary', class: '' },
    { path: '/orders', title: 'View orders',  icon:'ni-tv-2 text-primary', class: '' },
    // { path: '/track_order_3pl', title: 'track_order_3pl',  icon:'ni-tv-2 text-primary', class: '' },
    { path: '/track_order_4pl', title: 'Trace Order',  icon:'ni-tv-2 text-primary', class: '' },
    // { path: '/track_order_customer', title: 'track_order_customer',  icon:'ni-tv-2 text-primary', class: '' }
];

@Component({
  selector: 'app-sidebar_4pl',
  templateUrl: './sidebar_4pl.component.html',
  styleUrls: ['./sidebar_4pl.component.scss']
})
export class sidebar_4plComponent implements OnInit {

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
