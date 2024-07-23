import {Component, OnInit} from '@angular/core';
import {Product} from "../Shared/Models/Product";
import { CommonModule,NgFor,NgIf } from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  constructor() {}

  productList:Product[] = [];

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.productList.push({description: "Hello", price: 0, quantity: 0, id: i, name: "Product"});
    }

    console.log(this.productList);
  }
}
