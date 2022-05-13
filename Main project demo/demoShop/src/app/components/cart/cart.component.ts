import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products:any=[];
  public grandTotal:number = 0;
  constructor(private CartService:CartService) { }

  ngOnInit(): void {
    this.CartService.getProducts().subscribe(res=>{
      this.products = res;
      console.log(res);
      this.grandTotal = this.CartService.getTotalPrice();
    })
  }

  removeItem(item:any){
    this.CartService.removeCartItem(item);
  }

  emptyCart(){
    this.CartService.removeAllCart();
  }

}
