import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { ProductModel } from '../product/product-model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class ProductService {
    newProduct: ProductModel;
    private _productSource = new BehaviorSubject<ProductModel[]>([]);
    pageNumber: number;
    constructor(private httpClient: HttpClient, private router: Router) { }
    getProduct(id: number): Promise<ProductModel> {
        return this.httpClient.get(`api/v1/products/${id}`)
            .toPromise()
            .then((res: any) => res)
            .catch((e) => {
                return Promise.reject(e.body || e);
            });
    }
    getUserProduct(id: string): Promise<ProductModel[]> {
        console.log(id);
        console.log('xixixix');
        return this.httpClient.get(`api/v1/userproducts/${id}`)
            .toPromise()
            .then((res: any) => res)
            .catch((e) => {
                return Promise.reject(e.body || e);
            });
    }
    deleteProduct(id: number) {
        return this.httpClient.delete(`api/v1/userProduct/${id}`)
            .toPromise()
            .then((res: any) => {
                this.router.navigate(['/']);
                console.log(res);
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
    setProduct(name: string, price: number, ownerID: string,
        desc: string, contactInfo: string, img: string[], type: Boolean): Promise<ProductModel> { // TODO AUTH
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
                .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        };
        type = true;
        this.newProduct = new ProductModel(name, price, ownerID, desc, contactInfo, img, type);
        return this.httpClient.post('api/v1/products', this.newProduct, options)
            .toPromise()
            .then((newProducts: any) => {
                this.getAllProduct();
                this.router.navigate(['/success']);
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
