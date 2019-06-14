import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { FourplRoutes } from './Fourpl.routing';
// import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
// import { IconsComponent } from '../../pages/icons/icons.component';
// import { MapsComponent } from '../../pages/maps/maps.component';
// import { Threepl_formComponent } from '../../pages/Threepl_form/Threepl_form.component';
import { Fourpl_feedbackComponent } from '../../pages/Fourpl_feedback/Fourpl_feedback.component';
import { ordersComponent } from '../../pages/orders/orders.component';
// import { order_formComponent } from '../../pages/order_form/order_form.component';
// import { track_order_3plComponent } from '../../pages/track_order_3pl/track_order_3pl.component';
import { track_order_4plComponent } from '../../pages/track_order_4pl/track_order_4pl.component';
// import { track_order_customerComponent } from '../../pages/track_order_customer/track_order_customer.component';
// import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
// import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FourplRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    // DashboardComponent,
    // UserProfileComponent,
    // TablesComponent,
    // IconsComponent,
    // MapsComponent,
    // Threepl_formComponent,
    Fourpl_feedbackComponent,
    // track_order_customerComponent,
    track_order_4plComponent,
    // track_order_3plComponent,
    // order_formComponent,
    ordersComponent


  ]
})

export class FourplModule {}
