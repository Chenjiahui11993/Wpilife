import { HouseModel } from '../house/house.model';
export class HouseService {
    currentPage: number;
    houses: HouseModel[] = [
        new HouseModel(1, '23 bowdoin St apt1', 'poor house', ['https://i.ytimg.com/vi/Xx6t0gmQ_Tw/maxresdefault.jpg'], 1500,
         '2018.8', 'wechat'),
        new HouseModel(2, '23 bowdoin St apt2', 'much poor house',
         ['https://cdn.torontolife.com/wp-content/uploads/2017/08/toronto-house-for-sale-53-burnhamthorpe-crescent-1-1200x628.jpg'],
         1000, '2018.8', 'wechat'),
        new HouseModel(3, '23 bowdoin St apt3', ' the sorest poor house',
        ['http://www.eplans.com/house-plans/media/catalog/product/a/m/ama879-fr-re-co.jpg'],
        500, '2018.8', 'wechat'),
        new HouseModel(4, '23 bowdoin St apt3', ' the sorest poor house',
        ['http://www.eplans.com/house-plans/media/catalog/product/a/m/ama879-fr-re-co.jpg'],
        500, '2018.8', 'wechat'),
        new HouseModel(5, '23 bowdoin St apt3', ' the sorest poor house',
        ['http://www.eplans.com/house-plans/media/catalog/product/a/m/ama879-fr-re-co.jpg'],
        500, '2018.8', 'wechat'),
        new HouseModel(6, '23 bowdoin St apt3', ' the sorest poor house',
        ['http://www.eplans.com/house-plans/media/catalog/product/a/m/ama879-fr-re-co.jpg'],
        500, '2018.8', 'wechat'),
        new HouseModel(7, '23 bowdoin St apt3', ' the sorest poor house',
        ['http://www.eplans.com/house-plans/media/catalog/product/a/m/ama879-fr-re-co.jpg'],
        500, '2018.8', 'wechat'),
        new HouseModel(8, '23 bowdoin St apt3', ' the sorest poor house',
        ['http://www.eplans.com/house-plans/media/catalog/product/a/m/ama879-fr-re-co.jpg'],
        500, '2018.8', 'wechat'),
        new HouseModel(9, '23 bowdoin St apt3', ' the sorest poor house',
        ['http://www.eplans.com/house-plans/media/catalog/product/a/m/ama879-fr-re-co.jpg'],
        500, '2018.8', 'wechat'),
        new HouseModel(10, '23 bowdoin St apt3', ' the sorest poor house',
        ['http://www.eplans.com/house-plans/media/catalog/product/a/m/ama879-fr-re-co.jpg'],
        500, '2018.8', 'wechat'),
        new HouseModel(11, '23 bowdoin St apt3', ' the sorest poor house',
        ['http://www.eplans.com/house-plans/media/catalog/product/a/m/ama879-fr-re-co.jpg'],
        500, '2018.8', 'wechat'),
        new HouseModel(12, '23 bowdoin St apt3', ' the sorest poor house',
        ['http://www.eplans.com/house-plans/media/catalog/product/a/m/ama879-fr-re-co.jpg'],
        500, '2018.8', 'wechat'),
      ];
    getAllHouses(): HouseModel[] {
        return this.houses;
    }
    gethouse(id: number): HouseModel {
        return this.houses[id];
    }
    setNewllHouse(id: number, address: string, desc: string, imgPath: string[], price: number, date: string, ownerinfo: string) {
       this.houses.push(new HouseModel(id, address, desc, imgPath, price, date, ownerinfo ));
    }
    setCurrentPage(currentPage: number) {
    this.currentPage = currentPage;
    }
    getCurrentPage(): number {
     return this.currentPage;
    }
}
