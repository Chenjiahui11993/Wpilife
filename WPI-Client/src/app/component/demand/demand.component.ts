import { Component, OnInit } from '@angular/core';
import { DemandService } from '../../Service/demand.service';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['../product/product.component.css']
})
export class DemandComponent implements OnInit {
  demandList = [];
  dp: number;
  constructor(private demandService: DemandService) { }
  ngOnInit() {
    this.demandService.getDemandList()
    .subscribe((demandList) => {
    this.demandList = demandList;
    });
  }
  getPageNumber(event) {
    this.dp = event;
  //  console.log(event);
  }

}
