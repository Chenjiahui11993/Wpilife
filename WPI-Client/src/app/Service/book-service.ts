import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import { BookModel } from '../component/book/book-model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class BookService {
    newBook: BookModel;
    currentPage: number;
    private _bookSource = new BehaviorSubject<BookModel[]>([]);
    constructor(private httpClient: HttpClient, private router: Router) { }
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
    getUserBooks(id: string): Promise<BookModel[]> {
        return this.httpClient.get(`api/v1/userBooks/${id}`)
            .toPromise()
            .then((res: any) => res)
            .catch((e) => {
                return Promise.reject(e.body || e);
            });
    }
    deleteBook(id: number) {
        return this.httpClient.delete(`api/v1/userBook/${id}`)
            .toPromise()
            .then((res: any) => {
                this.router.navigate(['/']);
                console.log(res);
            });
    }
    setBook(name: string, price: string, ownerID: string, desc: string,
        contactInfo: string, img: string[], department: string) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
                .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        };
        console.log(localStorage.getItem('access_token'));
        this.newBook = new BookModel(name, price, ownerID, desc, contactInfo, img, department, true);
        return this.httpClient.post('api/v1/books', this.newBook, options)
            .toPromise()
            .then((newBook) => {
                // this.getALLBooks().subscribe();
                this.router.navigate(['/success']);
            })
            .catch((e) => {
                return Promise.reject(e.body || e);
            });
    }
    getCurrentPage() {
        return this.currentPage;
    }
    setCurrentPage(page: number) {
        this.currentPage = page;
    }
}
