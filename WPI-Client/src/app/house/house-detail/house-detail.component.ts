import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { HouseModel } from '../house.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HouseService } from '../../Service/house-service';
@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['../../product/product.component.css',
              '../../product/product-detail/product-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  Config: NgxCarousel;
  houseDetail: HouseModel;
  id: number;
  constructor( private houseService: HouseService, private router: Router, private activateRouter: ActivatedRoute) {
    this.Config = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      point: {
        visible: true
      },
      loop: true,
      touch: false
    };
   }

  ngOnInit() {
    this.activateRouter.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
   this.houseService.gethouse((this.id))
   .then(house =>  {
     this.houseDetail = house;
     console.log(this.houseDetail);
    })
   .catch((e) => {
     console.log(e);
   });
  }

}
