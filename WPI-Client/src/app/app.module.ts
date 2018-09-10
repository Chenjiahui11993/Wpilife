import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2PageScrollModule} from 'ng2-page-scroll';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { HouseComponentComponent } from './component/house/house-component.component';
import { HomeComponentComponent } from './component/home-page/home-component.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCarouselModule } from 'ngx-carousel';
import {NgxPaginationModule} from 'ngx-pagination';
import 'hammerjs';
import { TestComponent } from './component/test/test.component';
import { ProductService } from '../app/Service/product-service';
import { PaymentService } from '../app/Service/paymentService';
import { CollaborationService } from '../app/Service/collaboration.service';
import { HouseService } from './Service/house-service';
import { HouseDetailComponent } from './component/house/house-detail/house-detail.component';
import { BookComponent } from './component/book/book.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule,  MatIconModule, MatInputModule} from '@angular/material';
import { MatListModule} from '@angular/material/list';
import { BookService } from './Service/book-service';
import { BookDetailComponent } from './component/book/book-detail/book-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NewStudentsComponent } from './component/new-students/new-students.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SellComponent } from './component/sell/sell.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';
import { CodingComponent } from './component/coding/coding.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthService } from './Service/auth.service';
import { CallbackComponent } from './component/callback/callback.component';
import { AuthGuardService } from './Service/auth.guard.service';
import { ErrorComponent } from './component/error/error.component';
import { SuccessComponent } from './component/success/success.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { SearchPipe } from './Pipe/search.pipe';
import { HouseSearchPipe } from './Pipe/house-search.pipe';
import { ProductSearchPipe } from './Pipe/product-search.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { DemandComponent } from './component/demand/demand.component';
import { DemandService } from './Service/demand.service';
import { PickUpComponent } from './component/pick-up/pick-up.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { CodingStartComponent } from './component/coding/coding-start/coding-start.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaysuccessComponent } from './component/paysuccess/paysuccess.component';
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
    HouseDetailComponent,
    BookComponent,
    BookDetailComponent,
    NewStudentsComponent,
    SellComponent,
    FooterComponent,
    CodingComponent,
    ProfileComponent,
    CallbackComponent,
    ErrorComponent,
    SuccessComponent,
    NotFoundComponent,
    SearchPipe,
    HouseSearchPipe,
    ProductSearchPipe,
    DemandComponent,
    PickUpComponent,
    CodingStartComponent,
    PaymentComponent,
    PaysuccessComponent,
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
    MatListModule,
    MatTabsModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
              ProductService,
              HouseService,
              BookService,
              CollaborationService,
              AuthService,
              AuthGuardService,
              DemandService,
              PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
