import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { BookModel } from '../book/book-model';
import { Injectable } from '@angular/core';
@Injectable()
export class BookService {
    newBook: BookModel;
    private _bookSource = new BehaviorSubject<BookModel[]>([]);
    constructor(private httpClient: HttpClient) { }
    currentPageNumber: number;
    getALLBooks(): Observable<BookModel[]> {
        this.httpClient.get('api/v1/books')
            .toPromise()
            .then((res: any) => {
                this._bookSource.next(res);
            })
            .catch((e) => {
                return Promise.reject(e.body || e);
            });
         return this._bookSource.asObservable();
    }
    getBook(id: number): Promise<BookModel> {
        return this.httpClient.get(`api/v1/books/${id}`)
            .toPromise()
            .then((res: any) => res)
            .catch((e) => {
                return Promise.reject(e.body || e);
            });
    }
    setBook(name: string, department: string, owwnerID: number,
        price: number, contactInfo: string, img: string[]) {
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.newBook = new BookModel(name, department, owwnerID, price, contactInfo, img);
        return this.httpClient.post('api/v1/books', this.newBook, options)
            .toPromise()
            .then((newBook) => {
                this.getALLBooks();
            })
            .catch((e) => {
                return Promise.reject(e.body || e);
            });

    }
}
