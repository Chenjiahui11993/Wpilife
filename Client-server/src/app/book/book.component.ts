import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookModel } from './book-model';
import { BookService } from '../Service/book-service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['../product/product.component.css']
})
export class BookComponent implements OnInit {
  selectedDept: string[] = ['cs'];
  Departments = ['Computer Science', 'Electrical Engineering', 'ESL', 'Data Science', 'MSIT', 'Marketing', 'Others'];
  AllBooks: BookModel[] = [];
  selectedBook: BookModel [] = [];
  constructor(private bookService: BookService, private router: Router, private activateRouter: ActivatedRoute) {
    this.AllBooks = bookService.getALLBooks();
   }

  ngOnInit() {
  }
  ToBookDetail(id: number) {
    this.router.navigate(['/book-list', id]);
  }
  onChange(value: any) {
    this.selectedBook = [];
    this.AllBooks = this.bookService.getALLBooks();
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

}
