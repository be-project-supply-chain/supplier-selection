import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FetchSupplierService {

  constructor(private http: HttpClient) {  
      
  }
  fetchOrders(data: any) : Observable<Object> {
    return this.http.post('http://localhost:5000/neural',data)

  }
}
