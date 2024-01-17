import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    products: any;
    httpClient = inject(HttpClient);
    ngOnInit(): void{
      this.getProduct();
    }
    getProduct(){
      this.httpClient.get('https://meowshop-be.onrender.com/api/products')
      .subscribe((response:any)=>{
        console.log(response.data);
        this.products = response.data;
      });
    
    }
}
