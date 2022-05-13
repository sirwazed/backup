import { CartService } from './../../services/cart.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import{} from 'rxjs'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  isLoaded = true;
  public productList: any;
  constructor(private api: ApiService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe((res)=>{
      this.productList = res;
      this.isLoaded = false;

      this.productList.forEach((element: any) => {
        Object.assign(element,{quantity:1,total:element.price})
      });
    })
  }

  addToCart(product: any){
    this.cartService.addToCart(product);
  }
}
