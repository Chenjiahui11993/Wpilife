import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HouseService } from '../../../Service/house-service';
import { HouseModel} from '../../house.model';
@Component({
  selector: 'app-house-desc',
  templateUrl: './house-desc.component.html',
  styleUrls: ['./house-desc.component.css']
})
export class HouseDescComponent implements OnInit {
   id: number;
   house: HouseModel;
  constructor(private houseService: HouseService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params
    .subscribe(
      (params: Params) => {
       this.id = params['id'];
      }
    );
   this.houseService.gethouse(this.id - 1)
   .then(house => this.house = house);
  }

}
