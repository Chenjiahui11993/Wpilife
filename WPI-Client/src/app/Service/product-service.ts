import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { ProductModel } from '../product/product-model';
import { Injectable } from '@angular/core';
@Injectable()
export class ProductService {
    newProduct: ProductModel;
    private _productSource = new BehaviorSubject<ProductModel[]>([]);
    pageNumber: number;
    constructor(private httpClient: HttpClient) { }
    getProduct(id: number): Promise<ProductModel> {
        return this.httpClient.get(`api/v1/products/${id}`)
            .toPromise()
            .then((res: any) => res)
            .catch((e) => {
            return Promise.reject(e.body || e);
            });
    }
    getAllProduct(): Observable<ProductModel[]> {
        this.httpClient.get('api/v1/products')
            .toPromise()
            .then((res: any) => {
                this._productSource.next(res);
            })
            .catch((e) => {
                return Promise.reject(e.body || e);
            });
        return this._productSource.asObservable();
    }
    setProduct(name: string, price: number, ownerID: number,
        desc: string, contactInfo: string, img: string[]): Promise<ProductModel> { // TODO AUTH
        const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        this.newProduct = new ProductModel(name, price, ownerID, desc, contactInfo, img);
        return this.httpClient.post('api/v1/products', this.newProduct, options)
        .toPromise()
        .then((newProducts: any) => {
            this.getAllProduct();
            return newProducts; // get New Product list
        })
        .catch((e) => {
            return Promise.reject(e.body || e);
        });
    }
    setCurrentPage(pageNumber: number) {
        this.pageNumber = pageNumber;
    }
    getCurrentPage(): number {
        return this.pageNumber;
    }

}
