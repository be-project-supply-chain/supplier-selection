import { Routes } from '@angular/router';

// import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
// import { IconsComponent } from '../../pages/icons/icons.component';
// import { MapsComponent } from '../../pages/maps/maps.component';
// import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
// import { TablesComponent } from '../../pages/tables/tables.component';
import { Threepl_formComponent } from '../../pages/Threepl_form/Threepl_form.component';
// import { Fourpl_feedbackComponent } from '../../pages/Fourpl_feedback/Fourpl_feedback.component';
// import { ordersComponent } from '../../pages/orders/orders.component';
import { order_formComponent } from '../../pages/order_form/order_form.component';
import { askComponent } from '../../pages/ask/ask.component';
// import { track_order_3plComponent } from '../../pages/track_order_3pl/track_order_3pl.component';
// import { track_order_4plComponent } from '../../pages/track_order_4pl/track_order_4pl.component';
import { track_order_customerComponent } from '../../pages/track_order_customer/track_order_customer.component';

export const customerRoutes: Routes = [
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'tables',         component: TablesComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent }
    { path: 'Threepl_form',   component: Threepl_formComponent },
    { path: 'ask',   component: askComponent },
    // { path: 'Fourpl_feedback',   component: Fourpl_feedbackComponent },
    { path: 'order_form',   component: order_formComponent },
    // { path: 'orders',   component: ordersComponent },
    // { path: 'track_order_3pl',   component: track_order_3plComponent },
    { path: 'track_order_customer',   component: track_order_customerComponent },
    // { path: 'track_order_4pl',   component: track_order_4plComponent }
    
];
