import { Component, OnInit } from '@angular/core';
import { HouseModel } from './house.model';
import { HouseService } from '../Service/house-service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-house-component',
  templateUrl: './house-component.component.html',
  styleUrls: ['../product/product.component.css']
})
export class HouseComponentComponent implements OnInit {
  id: number;
  houses: HouseModel[] = [];
  house: HouseModel;
  hp: number;
  temp: number;
  constructor( private houseService: HouseService, private router: Router, private activateRouter: ActivatedRoute) {
    this.houses = houseService.getAllHouses();
    this.hp = houseService.getCurrentPage();
   }

  ngOnInit() {
    this.activateRouter.params
    .subscribe(
      (params: Params) => {
      this.id = params['id'];
      }
    );
  }
  toHouseDetail(id: number) {
  this.temp = id / 6;
  this.hp = Math.ceil(this.temp);
  this.houseService.setCurrentPage(this.hp);
  this.router.navigate(['/house-list', id, id, 'desc']);
  this.house = this.houseService.gethouse((id - 1));
  console.log('这是第' + id + '个房子');
  }

}
