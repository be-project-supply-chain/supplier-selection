import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  postOrders(data:any): Observable<Object> {
    return this.http.post('http://localhost:5000/db/save_orders',data)
  }

  getOrders():Observable<Object>{
    return this.http.get('http://localhost:5000/db/fetch_orders_all')
  }

  mapOrder(data : any ):Observable<Object> {
    return this.http.post('http://localhost:5000/db/map_order',data)
  }

  trackOrders4PL() : Observable<Object>{
    return this.http.get('http://localhost:5000/db/trace_order_4pl')
  }
  trackOrdersCustomer(): Observable<Object>{
    return this.http.get('http://localhost:5000/db/trace_order_customer')
  }
}
