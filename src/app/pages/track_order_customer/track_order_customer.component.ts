import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-track_order_customer',
  templateUrl: './track_order_customer.component.html',
  styleUrls: ['./track_order_customer.component.scss']
})
export class track_order_customerComponent implements OnInit {
  orders:any
  public copy: string;
  constructor(
    public orderAndTrackApi : OrdersService
  ) {
    orderAndTrackApi.trackOrdersCustomer()
    .subscribe(res=>{
      console.log(res)
      this.orders=res
    })
   }

  ngOnInit() {
  }

  NumberToCity(x){
    switch(x){
      case 1:return "Mumbai"
      case 2:return "Delhi"
      case 3:return "Pune"
      case 4:return "Kolkata"
      case 5:return "Chennai"
      case 6:return "Nagpur"
      case 7:return "Ahemadabad"
      case 8:return "Srinagar"
      case 9:return "Panaji"
      case 10:return "Hyderabad"
    }
  }
  NumberToOrderStatus(x){
    switch(x){
      case 1:return "Order Processed"
      case 2:return "Order Dispatched"
      case 3:return "Order In Transit"
      case 4:return "Order Delivered"
      default : return "Order Processing"
    }
  }
}
