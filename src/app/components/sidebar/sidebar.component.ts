import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    // { path: '/Threepl_form', title: 'Threepl_form',  icon:'ni-tv-2 text-primary', class: '' },
    // { path: '/Fourpl_feedback', title: 'Fourpl_feedback',  icon:'ni-tv-2 text-primary', class: '' },
    // { path: '/order_form', title: 'order_form',  icon:'ni-tv-2 text-primary', class: '' },
    // // { path: '/orders', title: 'orders',  icon:'ni-tv-2 text-primary', class: '' },
    // { path: '/track_order_3pl', title: 'Trace Order',  icon:'ni-tv-2 text-primary', class: '' },
    { path: '/delivered_3pl_orders', title: 'Delivered Orders',  icon:'ni-tv-2 text-primary', class: '' },
    { path: '/processed_3pl_orders', title: 'Processed Orders',  icon:'ni-tv-2 text-primary', class: '' }
    // { path: '/track_order_4pl', title: 'track_order_4pl',  icon:'ni-tv-2 text-primary', class: '' },
    // { path: '/track_order_customer', title: 'track_order_customer',  icon:'ni-tv-2 text-primary', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router,
    public route: ActivatedRoute) {
      console.log(this.route.snapshot.params["id"])
     }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
