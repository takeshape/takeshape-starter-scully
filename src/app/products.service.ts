import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


export interface Product {
  name: string;
  _id: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductList() {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', `Bearer YOUR-API-KEY-HERE`)

    return this.http.post<any>('YOUR-ENDPOINT-HERE', 
        {"query":`query{
          getProductList{
            items{
              price
              name
              _id
            }
          }
        }`},
        {headers});
  }
}
