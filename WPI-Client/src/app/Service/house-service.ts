import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { HouseModel } from '../component/house/house.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class HouseService {
    currentPage: number;
    newHouse: HouseModel;
    private _housesSource = new BehaviorSubject<HouseModel[]>([]);
    constructor(private httpClient: HttpClient, private router: Router) { }
    getAllHouses(): Observable<HouseModel[]> {
        this.httpClient.get('api/v1/houses')
            .toPromise()
            .then((houses: any) => {
                this._housesSource.next(houses);
            })
            .catch((e) => {
                console.log(e);
            });
        return this._housesSource.asObservable();
    }
    gethouse(id: number): Promise<HouseModel> {
        return this.httpClient.get(`api/v1/houses/${id}`)
            .toPromise()
            .then((res: any) => res);
    }
    getUserhouse(id: string): Promise<HouseModel[]> {
        return this.httpClient.get(`api/v1/userHouses/${id}`)
            .toPromise()
            .then((res: any) => res);
    }
    setNewllHouse(address: string, price: string, ownerinfo: string, desc: string
        , contactInfo: string, img: string[], fromDate: string, toDate: string) {
            console.log(toDate);
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
                .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        };
        this.newHouse = new HouseModel(address, price, ownerinfo, desc, contactInfo, img, true, fromDate, toDate);
        return this.httpClient.post('api/v1/houses', this.newHouse, options)
            .toPromise()
            .then((newHouses) => {
                this.getAllHouses();
                this.router.navigate(['/success']);
            })
            .catch((e) => {
                console.log(e);
            });
    }
    deleteHouse(id: number) {
        return this.httpClient.delete(`api/v1/userHouses/${id}`)
            .toPromise()
            .then((res: any) => {
                this.router.navigate(['/']);
               // console.log(res);
            });
    }
    setCurrentPage(currentPage: number) {
        this.currentPage = currentPage;
    }
    getCurrentPage(): number {
        return this.currentPage;
    }
}
