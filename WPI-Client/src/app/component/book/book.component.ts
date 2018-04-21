import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookModel } from './book-model';
import { FormControl } from '@angular/forms';
import { BookService } from '../../Service/book-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
 // import { SearchBoxService } from '../Service/search-box.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['../product/product.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  searchBox: FormControl = new FormControl();
  searchValue = '';
  selectedDept: string[] = ['cs'];
  Departments = ['Computer Science', 'Electrical Engineering', 'ESL', 'Data Science', 'MSIT', 'Marketing', 'Others'];
  AllBooks: BookModel[] = [];
  books: BookModel[] = [];
  selectedBook: BookModel[] = [];
  subscriptionBooks: Subscription;
  subscriptionInput: Subscription;
  bp: number;
  constructor(private bookService: BookService, private router: Router,
    private activateRouter: ActivatedRoute) {
    this.bp = this.bookService.getCurrentPage();
  }

  ngOnInit() {
    this.subscriptionBooks = this.bookService.getALLBooks()
      .subscribe((allBooks) => {
        this.AllBooks = allBooks;
        this.AllBooks = this.AllBooks.reverse();
        this.books = allBooks;
        this.books = this.books.reverse();
      });
    this.subscriptionInput = this.searchBox
      .valueChanges
      .debounceTime(200)
      .subscribe(
        term => {
          this.searchValue = term;
        }
      );
  }
  ngOnDestroy() {
    this.subscriptionBooks.unsubscribe();
  }
  ToBookDetail(id: number) {
    this.bookService.setCurrentPage(this.bp);
    this.router.navigate(['/book-list', id]);
  }
  onChange(value: any) {
    this.selectedBook = [];
    this.AllBooks = this.books;
    this.AllBooks.forEach((book) => {
      if (this.selectedDept.includes(book.department)) {
        this.selectedBook.push(book);
      }
    });
    if (this.selectedBook.length === 0) {
      return 0;
    }
    this.AllBooks = this.selectedBook;
  }
  getPageNumber(event) {
    this.bp = event;
  }

}
