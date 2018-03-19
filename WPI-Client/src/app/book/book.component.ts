import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookModel } from './book-model';
import { BookService } from '../Service/book-service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['../product/product.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  selectedDept: string[] = ['cs'];
  Departments = ['Computer Science', 'Electrical Engineering', 'ESL', 'Data Science', 'MSIT', 'Marketing', 'Others'];
  AllBooks: BookModel[] = [];
  books: BookModel[] = [];
  selectedBook: BookModel [] = [];
  subscriptionBooks: Subscription;
  constructor(private bookService: BookService, private router: Router, private activateRouter: ActivatedRoute) {

   }

  ngOnInit() {
    this.subscriptionBooks = this.bookService.getALLBooks()
    .subscribe((allBooks) => {
      this.AllBooks = allBooks;
      this.books = allBooks;
    });
    console.log(this.AllBooks);
  }
  ngOnDestroy() {
  this.subscriptionBooks.unsubscribe();
  }
  ToBookDetail(id: number) {
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
    console.log(this.AllBooks);
  }

}
