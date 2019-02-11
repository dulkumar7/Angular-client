import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  private url = 'https://zuul-api-gateway.pcfapps.nonprod.ptc.nttdataservices.com/customer/customers';
 
  constructor(private http: HttpClient) { }
 
  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.url}/${id}`);
  }
 
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.url}` + `/create`, customer);
  }
 

 
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
 
  getCustomersList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
 
  getCustomersByAge(age: number): Observable<any> {
    return this.http.get(`${this.url}/age/${age}`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.url}` + `/delete`, { responseType: 'text' });
  }
}