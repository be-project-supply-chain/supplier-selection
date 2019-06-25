import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order_form',
  templateUrl: './order_form.component.html',
  styleUrls: ['./order_form.component.scss']
})
export class order_formComponent implements OnInit {

  @ViewChild('f') placeorder : NgForm

  deliverymode:any

  public copy: string;
  constructor(public orderpost : OrdersService) { }

  ngOnInit() {
  }

  onSubmit(){
    
    console.log(this.placeorder.value.productName)
    console.log(this.placeorder.value.productType)
    console.log(this.placeorder.value.weight)
    console.log(this.placeorder.value.quantity)
    console.log(this.placeorder.value.price)
    console.log(this.placeorder.value.location)
    console.log(this.placeorder.value.quantity*this.placeorder.value.price)
    console.log(this.placeorder.value.quantity*this.placeorder.value.weight)

    if(this.placeorder.value.productType==="Electronic"){
      this.deliverymode="Hand Delivered"
    }else{this.deliverymode="Truck Delivered"}

    let data={
      location : parseInt(this.placeorder.value.location),
      totalamount: this.placeorder.value.quantity*this.placeorder.value.price,
      type: this.placeorder.value.productType,
      weight :this.placeorder.value.quantity*this.placeorder.value.weight,
      quantity: this.placeorder.value.quantity, 
      productName:this.placeorder.value.productName,
      deliveryMode:this.deliverymode
    }
    console.log(data)
    this.orderpost.postOrders(data)
    .subscribe(res=>{
      console.log(res)
    })
    
  }
}
