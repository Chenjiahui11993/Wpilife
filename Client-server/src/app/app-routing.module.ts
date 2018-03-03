import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { HomeComponentComponent } from './home-page/home-component.component';
import { HouseComponentComponent } from './house/house-component.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { TestComponent } from './test/test.component';
import { ProductDescComponent } from './product/product-detail/product-desc/product-desc.component';
import { ProductContactComponent } from './product/product-detail/product-contact/product-contact.component';
import { HouseDetailComponent } from './house/house-detail/house-detail.component';
import { HouseDescComponent } from './house/house-detail/house-desc/house-desc.component';
import { HouseContactComponent } from './house/house-detail/house-contact/house-contact.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

const appRouter: Routes = [
    { path: '',  component: HomeComponentComponent },
    { path: 'book-list', component: BookComponent },
    { path: 'book-list/:id', component: BookDetailComponent },
    { path: 'house-list', component: HouseComponentComponent },
    { path: 'house-list/:id', component: HouseDetailComponent, children: [
    {  path: ':id/desc', component: HouseDescComponent },
    { path: ':id/contact', component: HouseContactComponent}
    ]},
    { path: 'product-list', component: ProductComponent },
    { path: 'product-list/:id', component: ProductDetailComponent, children: [
    { path: ':id/desc', component: ProductDescComponent },
    { path: ':id/contact', component: ProductContactComponent }
    ]},
    { path: 'test', component: TestComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(appRouter) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
