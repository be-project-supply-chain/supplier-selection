import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { sidebar_4plComponent } from './sidebar_4pl/sidebar_4pl.component';
import { sidebar_custComponent } from './sidebar_cust/sidebar_cust.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    sidebar_4plComponent,
    sidebar_custComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    sidebar_4plComponent,
    sidebar_custComponent
  ]
})
export class ComponentsModule { }
