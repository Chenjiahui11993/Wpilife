import { ProductModel } from '../product/product-model';
export class ProductService {
    pageNumber: number;
    productModel: ProductModel[] = [new ProductModel('1', 'First product name', 500, 1,
                                                     'first product', ['../../../assets/product-single-1.jpg']),
                                    new ProductModel('2', 'Second product name', 500, 2,
                                                     'second product', ['../../../assets/01.jpg']),
                                    new ProductModel('3', 'Third product name', 500, 3,
                                                     'third product', ['../../../assets/product-single-3.jpg']),
                                    new ProductModel('4', '4th product name', 500, 4, '4th product',
                                                     ['../../../assets/product-single-4.jpg']),
                                    new ProductModel('5', '5th name', 500, 5, '5th product',
                                                     ['../../../assets/product-single-5.jpg']),
                                    new ProductModel('6', '5th name', 500, 6, '6th product',
                                                     ['../../../assets/product-single-5.jpg']),
                                                     new ProductModel('7', '7th name', 500, 7, '7th product',
                                                     ['../../../assets/product-single-5.jpg']),
                                                     new ProductModel('8', '8th name', 500, 8, '8th product',
                                                     ['../../../assets/product-single-5.jpg']),
                                                     new ProductModel('9', '9th name', 500, 9, '9th product',
                                                     ['../../../assets/product-single-5.jpg']),
                                                     new ProductModel('10', '10th name', 500, 10, '10th product',
                                                     ['../../../assets/product-single-5.jpg']),
                                                     new ProductModel('11', '11th name', 500, 11, '11th product',
                                                     ['../../../assets/product-single-5.jpg']),
                                                     new ProductModel('12', '12th name', 500, 12, '12th product',
                                                     ['../../../assets/product-single-5.jpg']),
];
    getProduct (id: number): ProductModel {
      return this.productModel[id];
    }
    getAllProduct(): ProductModel[]  {
        return this.productModel;
    }
    setProduct(id: string, name: string, price: number, ownerID: number, desc: string, img: string[]) {
        this.productModel.push(new ProductModel(id, name, price, ownerID, desc, img));
    }
    setCurrentPage(pageNumber: number) {
     this.pageNumber = pageNumber;
    }
    getCurrentPage(): number {
     return this.pageNumber;
    }

}
