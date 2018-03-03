import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product-service';
import { ProductModel } from '../product/product-model';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: []
})
export class ProductComponent implements OnInit {
 path = '../../assets/product-1.jpg';
 typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
 public p: number;
 temp: number;
  constructor(private productService: ProductService, private router: Router, private activatedRouter: ActivatedRoute) {
    this.p = this.productService.getCurrentPage();
    console.log(this.p);
   }
  allProducts: ProductModel[] = [];
  ngOnInit() {
    this.allProducts = this.productService.getAllProduct();
  }
  ToProductDetail(id: number) {
    this.temp = id / 6;
    this.p = Math.ceil(this.temp);
    console.log(this.p);
    this.router.navigate(['/product-list', id, id, 'desc']);
    console.log('这是第' + id + '产品');
    this.productService.setCurrentPage(this.p);
  }
}
