import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2PageScrollModule} from 'ng2-page-scroll';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { HouseComponentComponent } from './house/house-component.component';
import { HomeComponentComponent } from './home-page/home-component.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxCarouselModule } from 'ngx-carousel';
import {NgxPaginationModule} from 'ngx-pagination';
import 'hammerjs';
import { TestComponent } from './test/test.component';
import { ProductDescComponent } from './product/product-detail/product-desc/product-desc.component';
import { ProductContactComponent } from './product/product-detail/product-contact/product-contact.component';
import { ProductService } from '../app/Service/product-service';
import { HouseService } from './Service/house-service';
import { HouseDetailComponent } from './house/house-detail/house-detail.component';
import { HouseDescComponent } from './house/house-detail/house-desc/house-desc.component';
import { HouseContactComponent } from './house/house-detail/house-contact/house-contact.component';
import { BookComponent } from './book/book.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { BookService } from './Service/book-service';
@NgModule({
  declarations: [
    AppComponent,
    HouseComponentComponent,
    HomeComponentComponent,
    ProductComponent,
    ProductDetailComponent,
    HeaderComponent,
    NavComponent,
    TestComponent,
    ProductDescComponent,
    ProductContactComponent,
    HouseDetailComponent,
    HouseDescComponent,
    HouseContactComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    Ng2PageScrollModule,
    NgxCarouselModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule
  ],
  providers: [
              ProductService,
              HouseService,
              BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
