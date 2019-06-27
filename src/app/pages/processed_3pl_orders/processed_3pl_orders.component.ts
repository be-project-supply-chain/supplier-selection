import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-processed_3pl_orders',
  templateUrl: './processed_3pl_orders.component.html',
  styleUrls: ['./processed_3pl_orders.component.scss']
})
export class processed_3pl_ordersComponent implements OnInit {
  id: any
  orders :any
  orders1 : any
  public copy: string;
  constructor( public route : ActivatedRoute,
    public orderAPI : OrdersService
    ) {
    // console.log("parameter id")
    // console.log(this.route.snapshot.params["id"])
    this.id=parseInt(this.route.snapshot.params["id"])
    console.log(this.id)
    let data={sid:this.id}
    this.orderAPI.processOrder3PL(data).subscribe(res=>{
      this.orders=res
      console.log(this.orders)
    })

    this.orderAPI.getOrderToBeCompleted(data).subscribe(res=>{
      this.orders1=res
      console.log(this.orders1)
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
  cityToNumber(x){
    switch(x){
      case "Mumbai": return 1
      case "Delhi": return 2
      case "Pune":return 3
      case "Kolkata":return 4
      case "Chennai":return 5
      case "Nagpur":return 6
      case "Ahemadabad":return 7
      case "Srinagar":return 8
      case "Panaji":return 9
      case "Hyderabad":return 10 
    }
  }
  updateOrderStatus(oid){
    let data={oid}
    this.orderAPI.updateProcessToDispatched(data).subscribe(res=>{
      console.log("done")
      alert("Order sucessfully dispatched")
      let data1={sid:this.id}
      this.orderAPI.processOrder3PL(data1).subscribe(res=>{
        console.log("")
        this.orders=res
        console.log(this.orders)
      })
      this.orderAPI.getOrderToBeCompleted(data1).subscribe(res=>{
        this.orders1=res
        console.log(this.orders1)
      })
    })
  }

  updateOrderStatusA(oid){
    let data={oid}
    this.orderAPI.updateDispatchToDelivered(data).subscribe(res=>{
      console.log("done")
      alert("Order sucessfully delivered")
      let data1={sid:this.id}
      this.orderAPI.processOrder3PL(data1).subscribe(res=>{
        this.orders=res
        console.log(this.orders)
      })
      this.orderAPI.getOrderToBeCompleted(data1).subscribe(res=>{
        this.orders1=res
        console.log(this.orders1)
      })
    })
  }
}
