import { Pipe, PipeTransform } from '@angular/core';
import { HouseModel } from '../component/house/house.model';
@Pipe({
  name: 'houseSearch'
})
export class HouseSearchPipe implements PipeTransform {

  transform(houses: HouseModel[], term: string): HouseModel[] {
    return houses.filter(house => house.Address.trim().toLocaleLowerCase().includes(term.toLocaleLowerCase()));
  }

}
