import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  GetProductList(){
    this.httpClient.get("https://localhost:5001/api/Product");
  }
}
