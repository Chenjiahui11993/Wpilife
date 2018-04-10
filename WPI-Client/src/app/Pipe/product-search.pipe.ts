import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../component/product/product-model';
@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: ProductModel[], term: string): ProductModel[] {
    return products.filter(product => product.name.trim().toLowerCase().includes(term));
  }

}
