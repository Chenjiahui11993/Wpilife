import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DemandModel } from '../component/demand/demand-model';

@Injectable()
export class DemandService {
  currentPage: number;
  demandLists = new BehaviorSubject<DemandModel[]>([]);
  constructor(private httpClient: HttpClient, private router: Router) { }
  getDemandList(): Observable<DemandModel[]> {
    this.httpClient.get('api/v1/demands')
      .subscribe((e: any) => {
        this.demandLists.next(e);
      });
    return this.demandLists.asObservable();
  }
  setDemandList(name: string, contactInfo: string, desc: string, ownerID: string) {
    const demandItem = new DemandModel(name, contactInfo, desc, ownerID, true);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
    };
    return this.httpClient.post('api/v1/demands', demandItem, options)
      .toPromise()
      .then(e => this.router.navigate(['/success']))
      .catch((e) => {
        return Promise.reject(e.body || e);
      });

  }
  setCurrentPage(currentPage: number) {
    this.currentPage = currentPage;
  }
  getCurrentPage(): number {  // not use now 4/12/2018
    return this.currentPage;
  }

}
