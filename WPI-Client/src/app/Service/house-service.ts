import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { HouseModel } from '../house/house.model';
import { Injectable } from '@angular/core';
@Injectable()
export class HouseService {
    currentPage: number;
    newHouse: HouseModel;
    private _housesSource = new BehaviorSubject<HouseModel[]>([]);
    constructor(private httpClient: HttpClient) { }
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
    setNewllHouse(address: string, desc: string
        , price: number, ownerinfo: string, contactInfo: string) {
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.newHouse = new HouseModel(address, desc, price, ownerinfo, contactInfo);
        this.httpClient.post('api/v1/houses', this.newHouse, options)
        .toPromise()
        .then((newHouses) => {
            this.getAllHouses();
        })
        .catch((e) => {
            console.log(e);
        });
    }
    setCurrentPage(currentPage: number) {
        this.currentPage = currentPage;
    }
    getCurrentPage(): number {
        return this.currentPage;
    }
}
