import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private CartService: CartService) { }
  totalNumber:number = 0;
  ngOnInit(): void {
    this.CartService.getProducts().subscribe(res=>{
      this.totalNumber = res.length;
    })
  }

}
