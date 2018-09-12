import { Pipe, PipeTransform } from '@angular/core';
import { BookModel } from '../component/book/book-model';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(books: BookModel[], term: string): BookModel[] {
  //  console.log(term);
   // console.log(books);
    return books.filter(book => book.name.trim().toLocaleLowerCase().includes(term.toLocaleLowerCase()));
    // console.log(book.name);
  }
}
