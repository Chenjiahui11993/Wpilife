import { BookModel } from '../book/book-model';
export class BookService {
    bookModel: BookModel[] = [
                             new BookModel(1, 'Database', 'Computer Science', 1, 10, '2018.3.2', 'wechat:123456',
                             'http://www.metuchenlibrary.org/wp-content/uploads/2014/08/esl.jpg'),
                             new BookModel(2, 'Database', 'ECE', 1, 11, '2018.3.2', 'wechat:123456',
                             'http://www.metuchenlibrary.org/wp-content/uploads/2014/08/esl.jpg'),
                             new BookModel(3, 'Database', 'ESL', 1, 12, '2018.3.2', 'wechat:123456',
                             'http://www.metuchenlibrary.org/wp-content/uploads/2014/08/esl.jpg'),
                             new BookModel(4, 'Database', 'Data Science', 1, 13, '2018.3.2', 'wechat:123456',
                             'http://www.metuchenlibrary.org/wp-content/uploads/2014/08/esl.jpg'),
                             new BookModel(5, 'Database', 'MSIT', 1, 14, '2018.3.2', 'wechat:123456',
                             'http://www.metuchenlibrary.org/wp-content/uploads/2014/08/esl.jpg'),
                             new BookModel(6, 'Database', 'Marketing', 1, 15, '2018.3.2', 'wechat:123456',
                             'http://www.metuchenlibrary.org/wp-content/uploads/2014/08/esl.jpg'),
                             new BookModel(7, 'Database', 'Computer Science', 1, 16, '2018.3.2', 'wechat:123456',
                             'http://www.metuchenlibrary.org/wp-content/uploads/2014/08/esl.jpg'),
                             new BookModel(8, 'Database', 'Computer Science', 1, 17, '2018.3.2', 'wechat:123456',
                             'http://www.metuchenlibrary.org/wp-content/uploads/2014/08/esl.jpg'),
                             new BookModel(9, 'Database', 'Computer Science', 1, 18, '2018.3.2', 'wechat:123456',
                             'http://www.metuchenlibrary.org/wp-content/uploads/2014/08/esl.jpg'),
                             new BookModel(10, 'Database', 'Computer Science', 1, 19, '2018.3.2', 'wechat:123456',
                             'http://www.metuchenlibrary.org/wp-content/uploads/2014/08/esl.jpg'),
                             new BookModel(11, 'Database', 'Computer Science', 1, 20, '2018.3.2', 'wechat:123456',
                             'http://www.metuchenlibrary.org/wp-content/uploads/2014/08/esl.jpg'),
                             new BookModel(12, 'Database', 'Computer Science', 1, 21, '2018.3.2', 'wechat:123456',
                             'http://www.metuchenlibrary.org/wp-content/uploads/2014/08/esl.jpg')];
    currentPageNumber: number;
    getALLBooks(): BookModel[] {
        return this.bookModel;
    }
   getBook(id: number): BookModel {
       return this.bookModel[id];
   }
   setBook(id: number, name: string, department: string, owwnerID: number, price: number, date: string, contactInfo: string, img: string) {
    this.bookModel.push(new BookModel(id, name, department, owwnerID, price, date, contactInfo, img));
   }
}
