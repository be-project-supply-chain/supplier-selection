import { Component, OnInit } from '@angular/core';
import { FetchSupplierService } from 'src/app/services/fetch-supplier.service';
import { OrdersService } from 'src/app/services/orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class ordersComponent implements OnInit {
  hideme=[]
  supplierDataFromApi:any
  data:any
  // a={
  //   location : 1,
  //   hand_delivered : 1,
  //   truck_delivered: 0 

  // }
  orders1:any
  orders=[{
    orderID : 101,
    orderLocation : "Mumbai",
    orderAmount : 1000,
    orderType: "Electronic",
    orderWeight :250,
    deliveryMode: "Hand Delivered"
  },{
    orderID : 102,
    orderLocation : "Delhi",
    orderAmount : 1000,
    orderType: "Furniture",
    orderWeight :250,
    deliveryMode: "Truck Delivered"
  },{
    orderID : 103,
    orderLocation : "Pune",
    orderAmount : 1000,
    orderType: "Electronic",
    orderWeight :250,
    deliveryMode: "Hand Delivered"
  },{
    orderID : 101,
    orderLocation : "Mumbai",
    orderAmount : 1000,
    orderType: "Electronic",
    orderWeight :250,
    deliveryMode: "Hand Delivered"
  },{
    orderID : 101,
    orderLocation : "Mumbai",
    orderAmount : 1000,
    orderType: "Electronic",
    orderWeight :250,
    deliveryMode: "Hand Delivered"
  },{
    orderID : 101,
    orderLocation : "Mumbai",
    orderAmount : 1000,
    orderType: "Electronic",
    orderWeight :250,
    deliveryMode: "Hand Delivered"
  },{
    orderID : 101,
    orderLocation : "Mumbai",
    orderAmount : 1000,
    orderType: "Electronic",
    orderWeight :250,
    deliveryMode: "Hand Delivered"
  }]
  hideOrders=[]

  public copy: string;
  constructor(public fetch_supplier : FetchSupplierService,
    public ordersApi : OrdersService
     ) { 
    for(var i=0;i<this.orders.length;i++){
      this.hideOrders.push(false)
    }
    this.ordersApi.getOrders()
    .subscribe(res=>{
      this.orders1=res
      console.log(this.orders1)
    })
    


  //  fetch_supplier.fetchOrders(this.a).subscribe(res=>{console.log(res) })
  //  console.log(this.val)
   }

  ngOnInit() {
    
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

  fetchSuppliers(order,city , deliveryMode){
    for(var i=0;i<this.orders.length;i++){
      this.hideOrders[i]=false
    }
    this.hideOrders[order]=true

    let hand_delivered=0
    let truck_delivered=0
    city=this.cityToNumber(city)
    if(deliveryMode=="Hand Delivered"){
      hand_delivered=1
      truck_delivered=0
    }else{
      hand_delivered=0
      truck_delivered=1
    }
    let data ={
      location:city,
      hand_delivered,
      truck_delivered
    }
    // order.editable=true
    // console.log() 
    this.fetch_supplier.fetchOrders(data)
    .subscribe(res=>{
      this.supplierDataFromApi=res
      console.log(this.supplierDataFromApi)
    })


  }
}
