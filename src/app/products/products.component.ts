import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products:Product[] = []; 

  constructor(
    private productsService: ProductsService) {

    }

  ngOnInit(): void {
    this.productsService.getProductList().subscribe(
      (response) => {
       this.products = response.data.getProductList.items
      },
      (error) => {
        console.log(error);
      }
    );
  }
}