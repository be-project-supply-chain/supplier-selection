import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  id:any

  @ViewChild('f') placeorder : NgForm


  constructor(private router : Router) {}
  opentab:any =false
  onSubmit(){
    console.log(this.placeorder.value.username)
    let s = this.placeorder.value.username
    this.id=s.substring(8, s.length)
    this.id=parseInt(this.id)
    console.log(this.id)
    this.router.navigate(["/processed_3pl_orders",this.id])
  }
  ngOnInit() {

  }
 
  ngOnDestroy() {
  }

  open3PLlogin(){
    this.opentab=!this.opentab
  }
}

