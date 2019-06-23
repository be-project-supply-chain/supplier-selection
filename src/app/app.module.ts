import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FourplComponent } from './layouts/Fourpl/Fourpl.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { customerComponent } from './layouts/customer/customer.component';


import { FetchSupplierService } from './services/fetch-supplier.service';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { TransporterData } from './classes/fetch-transporter-class';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    FourplComponent,
    customerComponent
  ],
  providers: [FetchSupplierService,TransporterData],
  bootstrap: [AppComponent]
})
export class AppModule { }
