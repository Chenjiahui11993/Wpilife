import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { HouseModel } from './house.model';
import { HouseService } from '../../Service/house-service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'app-house-component',
  templateUrl: './house-component.component.html',
  styleUrls: ['../product/product.component.css']
})
export class HouseComponentComponent implements OnInit, OnDestroy {
  id: number;
  houses: HouseModel[] = [];
  house: HouseModel;
  hp: number;
  temp: number;
  searchBox: FormControl = new FormControl();
  searchValue = '';
  houseSubscription: Subscription;
  subscriptionInput: Subscription;
  constructor(private houseService: HouseService, private router: Router, private activateRouter: ActivatedRoute) {
    this.hp = houseService.getCurrentPage();
  }

  ngOnInit() {
    this.activateRouter.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
        }
      );
    this.houseSubscription = this.houseService.getAllHouses()
      .subscribe(allHouse => this.houses = allHouse);
    this.subscriptionInput = this.searchBox
      .valueChanges
      .debounceTime(200)
      .subscribe(
        term => {
          this.searchValue = term;
        }
      );
  }
  ngOnDestroy() {
    this.houseSubscription.unsubscribe();
  }
  toHouseDetail(id: number) {
    this.temp = id / 6;
    this.hp = Math.ceil(this.temp);
    this.houseService.setCurrentPage(this.hp);
    this.router.navigate(['/house-list', id, id, 'desc']);
    // this.house = this.houseService.gethouse((id - 1));
    console.log('这是第' + id + '个房子');
  }

}
