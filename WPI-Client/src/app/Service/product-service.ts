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
    // productModel: ProductModel[] = [new ProductModel('1', 'First product name', 500, 1,
    //     'first product', ['../../../assets/product-single-1.jpg',
    //         '../../../assets/01.jpg', '../../../assets/product-single-3.jpg',
    //         '../../../assets/product-single-4.jpg'], 'Product'),
    // new ProductModel('2', 'Second product name', 500, 2,
    //     'second product', ['../../../assets/01.jpg'], 'Product'),
    // new ProductModel('3', 'Third product name', 500, 3,
    //     'third product', ['../../../assets/product-single-3.jpg'], 'Product'),
    // new ProductModel('4', '4th product name', 500, 4, '4th product',
    //     ['../../../assets/product-single-4.jpg'], 'Product'),
    // new ProductModel('5', '5th name', 500, 5, '5th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('6', '5th name', 500, 6, '6th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('7', '7th name', 500, 7, '7th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('8', '8th name', 500, 8, '8th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('9', '9th name', 500, 9, '9th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('10', '10th name', 500, 10, '10th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('11', '11th name', 500, 11, '11th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('12', '12th name', 500, 12, '12th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // ];
    getProduct(id: number): Promise<ProductModel> {
        return this.httpClient.get(`api/v1/product/${id}`)
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
    setProduct(name: string, price: number, ownerID: number, desc: string, contactInfo: string, img: string[]) { // TODO AUTH
        const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        this.newProduct = new ProductModel(name, price, ownerID, desc, contactInfo, img);
        return this.httpClient.post('api/v1/products', this.newProduct, options)
        .toPromise()
        .then((newProducts) => {
            this.getAllProduct();
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
