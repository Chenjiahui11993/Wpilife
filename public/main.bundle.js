webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Service/book-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var book_model_1 = __webpack_require__("../../../../../src/app/book/book-model.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var BookService = /** @class */ (function () {
    function BookService(httpClient) {
        this.httpClient = httpClient;
        this._bookSource = new BehaviorSubject_1.BehaviorSubject([]);
    }
    BookService.prototype.getALLBooks = function () {
        var _this = this;
        this.httpClient.get('api/v1/books')
            .toPromise()
            .then(function (res) {
            _this._bookSource.next(res);
        })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
        return this._bookSource.asObservable();
    };
    BookService.prototype.getBook = function (id) {
        return this.httpClient.get("api/v1/books/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
    };
    BookService.prototype.setBook = function (name, department, owwnerID, price, contactInfo, img) {
        var _this = this;
        var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.newBook = new book_model_1.BookModel(name, department, owwnerID, price, contactInfo, img);
        return this.httpClient.post('api/v1/books', this.newBook, options)
            .toPromise()
            .then(function (newBook) {
            _this.getALLBooks();
        })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
    };
    BookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;


/***/ }),

/***/ "../../../../../src/app/Service/house-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var house_model_1 = __webpack_require__("../../../../../src/app/house/house.model.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HouseService = /** @class */ (function () {
    function HouseService(httpClient) {
        this.httpClient = httpClient;
        this._housesSource = new BehaviorSubject_1.BehaviorSubject([]);
    }
    HouseService.prototype.getAllHouses = function () {
        var _this = this;
        this.httpClient.get('api/v1/houses')
            .toPromise()
            .then(function (houses) {
            _this._housesSource.next(houses);
        })
            .catch(function (e) {
            console.log(e);
        });
        return this._housesSource.asObservable();
    };
    HouseService.prototype.gethouse = function (id) {
        return this.httpClient.get("api/v1/houses/" + id)
            .toPromise()
            .then(function (res) { return res; });
    };
    HouseService.prototype.setNewllHouse = function (address, desc, price, ownerinfo, contactInfo, img) {
        var _this = this;
        var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.newHouse = new house_model_1.HouseModel(address, desc, price, ownerinfo, contactInfo, img);
        this.httpClient.post('api/v1/houses', this.newHouse, options)
            .toPromise()
            .then(function (newHouses) {
            _this.getAllHouses();
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    HouseService.prototype.setCurrentPage = function (currentPage) {
        this.currentPage = currentPage;
    };
    HouseService.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    HouseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HouseService);
    return HouseService;
}());
exports.HouseService = HouseService;


/***/ }),

/***/ "../../../../../src/app/Service/product-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
var product_model_1 = __webpack_require__("../../../../../src/app/product/product-model.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ProductService = /** @class */ (function () {
    function ProductService(httpClient) {
        this.httpClient = httpClient;
        this._productSource = new BehaviorSubject_1.BehaviorSubject([]);
    }
    // productModel: ProductModel[] = [new ProductModel('1', 'First product name', 500, 1,
    //     'first product', ['../../../assets/product-single-1.jpg',
    //         '../../../assets/01.jpg', '../../../assets/product-single-3.jpg',
    //         '../../../assets/product-single-4.jpg'], 'Product'),
    // new ProductModel('2', 'Second product name', 500, 2,
    //     'second product', ['../../../assets/01.jpg'], 'Product'),
    // new ProductModel('3', 'Third product name', 500, 3,
    //     'third product', ['../../../assets/product-single-3.jpg'], 'Product'),
    // new ProductModel('4', '4th product name', 500, 4, '4th product',
    //     ['../../../assets/product-single-4.jpg'], 'Product'),
    // new ProductModel('5', '5th name', 500, 5, '5th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('6', '5th name', 500, 6, '6th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('7', '7th name', 500, 7, '7th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('8', '8th name', 500, 8, '8th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('9', '9th name', 500, 9, '9th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('10', '10th name', 500, 10, '10th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('11', '11th name', 500, 11, '11th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // new ProductModel('12', '12th name', 500, 12, '12th product',
    //     ['../../../assets/product-single-5.jpg'], 'Product'),
    // ];
    ProductService.prototype.getProduct = function (id) {
        return this.httpClient.get("api/v1/products/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
    };
    ProductService.prototype.getAllProduct = function () {
        var _this = this;
        this.httpClient.get('api/v1/products')
            .toPromise()
            .then(function (res) {
            _this._productSource.next(res);
        })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
        return this._productSource.asObservable();
    };
    ProductService.prototype.setProduct = function (name, price, ownerID, desc, contactInfo, img) {
        var _this = this;
        var options = { headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.newProduct = new product_model_1.ProductModel(name, price, ownerID, desc, contactInfo, img);
        return this.httpClient.post('api/v1/products', this.newProduct, options)
            .toPromise()
            .then(function (newProducts) {
            _this.getAllProduct();
            return newProducts; // get New Product list
        })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
    };
    ProductService.prototype.setCurrentPage = function (pageNumber) {
        this.pageNumber = pageNumber;
    };
    ProductService.prototype.getCurrentPage = function () {
        return this.pageNumber;
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var home_component_component_1 = __webpack_require__("../../../../../src/app/home-page/home-component.component.ts");
var house_component_component_1 = __webpack_require__("../../../../../src/app/house/house-component.component.ts");
var product_component_1 = __webpack_require__("../../../../../src/app/product/product.component.ts");
var product_detail_component_1 = __webpack_require__("../../../../../src/app/product/product-detail/product-detail.component.ts");
var test_component_1 = __webpack_require__("../../../../../src/app/test/test.component.ts");
var product_desc_component_1 = __webpack_require__("../../../../../src/app/product/product-detail/product-desc/product-desc.component.ts");
var product_contact_component_1 = __webpack_require__("../../../../../src/app/product/product-detail/product-contact/product-contact.component.ts");
var house_detail_component_1 = __webpack_require__("../../../../../src/app/house/house-detail/house-detail.component.ts");
var house_desc_component_1 = __webpack_require__("../../../../../src/app/house/house-detail/house-desc/house-desc.component.ts");
var house_contact_component_1 = __webpack_require__("../../../../../src/app/house/house-detail/house-contact/house-contact.component.ts");
var book_component_1 = __webpack_require__("../../../../../src/app/book/book.component.ts");
var book_detail_component_1 = __webpack_require__("../../../../../src/app/book/book-detail/book-detail.component.ts");
var new_students_component_1 = __webpack_require__("../../../../../src/app/new-students/new-students.component.ts");
var sell_component_1 = __webpack_require__("../../../../../src/app/sell/sell.component.ts");
var appRouter = [
    { path: '', component: home_component_component_1.HomeComponentComponent },
    { path: 'sell', component: sell_component_1.SellComponent },
    { path: 'book-list', component: book_component_1.BookComponent },
    { path: 'book-list/:id', component: book_detail_component_1.BookDetailComponent },
    { path: 'house-list', component: house_component_component_1.HouseComponentComponent },
    { path: 'house-list/:id', component: house_detail_component_1.HouseDetailComponent, children: [
            { path: ':id/desc', component: house_desc_component_1.HouseDescComponent },
            { path: ':id/contact', component: house_contact_component_1.HouseContactComponent }
        ] },
    { path: 'product-list', component: product_component_1.ProductComponent },
    { path: 'product-list/:id', component: product_detail_component_1.ProductDetailComponent, children: [
            { path: ':id/desc', component: product_desc_component_1.ProductDescComponent },
            { path: ':id/contact', component: product_contact_component_1.ProductContactComponent }
        ] },
    { path: 'test', component: test_component_1.TestComponent },
    { path: 'survival-guide', component: new_students_component_1.NewStudentsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRouter)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng2_page_scroll_1 = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        ng2_page_scroll_1.PageScrollConfig.defaultDuration = 500;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng2_page_scroll_1 = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
var angular_font_awesome_1 = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var house_component_component_1 = __webpack_require__("../../../../../src/app/house/house-component.component.ts");
var home_component_component_1 = __webpack_require__("../../../../../src/app/home-page/home-component.component.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var product_component_1 = __webpack_require__("../../../../../src/app/product/product.component.ts");
var product_detail_component_1 = __webpack_require__("../../../../../src/app/product/product-detail/product-detail.component.ts");
var header_component_1 = __webpack_require__("../../../../../src/app/header/header.component.ts");
var nav_component_1 = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var ngx_carousel_1 = __webpack_require__("../../../../ngx-carousel/index.js");
var ngx_pagination_1 = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
__webpack_require__("../../../../hammerjs/hammer.js");
var test_component_1 = __webpack_require__("../../../../../src/app/test/test.component.ts");
var product_desc_component_1 = __webpack_require__("../../../../../src/app/product/product-detail/product-desc/product-desc.component.ts");
var product_contact_component_1 = __webpack_require__("../../../../../src/app/product/product-detail/product-contact/product-contact.component.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/Service/product-service.ts");
var house_service_1 = __webpack_require__("../../../../../src/app/Service/house-service.ts");
var house_detail_component_1 = __webpack_require__("../../../../../src/app/house/house-detail/house-detail.component.ts");
var house_desc_component_1 = __webpack_require__("../../../../../src/app/house/house-detail/house-desc/house-desc.component.ts");
var house_contact_component_1 = __webpack_require__("../../../../../src/app/house/house-detail/house-contact/house-contact.component.ts");
var book_component_1 = __webpack_require__("../../../../../src/app/book/book.component.ts");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var list_1 = __webpack_require__("../../../material/esm5/list.es5.js");
var book_service_1 = __webpack_require__("../../../../../src/app/Service/book-service.ts");
var book_detail_component_1 = __webpack_require__("../../../../../src/app/book/book-detail/book-detail.component.ts");
var tabs_1 = __webpack_require__("../../../material/esm5/tabs.es5.js");
var new_students_component_1 = __webpack_require__("../../../../../src/app/new-students/new-students.component.ts");
var radio_1 = __webpack_require__("../../../material/esm5/radio.es5.js");
var select_1 = __webpack_require__("../../../material/esm5/select.es5.js");
var sell_component_1 = __webpack_require__("../../../../../src/app/sell/sell.component.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                house_component_component_1.HouseComponentComponent,
                home_component_component_1.HomeComponentComponent,
                product_component_1.ProductComponent,
                product_detail_component_1.ProductDetailComponent,
                header_component_1.HeaderComponent,
                nav_component_1.NavComponent,
                test_component_1.TestComponent,
                product_desc_component_1.ProductDescComponent,
                product_contact_component_1.ProductContactComponent,
                house_detail_component_1.HouseDetailComponent,
                house_desc_component_1.HouseDescComponent,
                house_contact_component_1.HouseContactComponent,
                book_component_1.BookComponent,
                book_detail_component_1.BookDetailComponent,
                new_students_component_1.NewStudentsComponent,
                sell_component_1.SellComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                forms_1.FormsModule,
                ng2_page_scroll_1.Ng2PageScrollModule,
                ngx_carousel_1.NgxCarouselModule,
                angular_font_awesome_1.AngularFontAwesomeModule,
                ngx_pagination_1.NgxPaginationModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatButtonModule,
                material_1.MatCheckboxModule,
                list_1.MatListModule,
                tabs_1.MatTabsModule,
                radio_1.MatRadioModule,
                select_1.MatSelectModule,
                forms_1.ReactiveFormsModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                http_1.HttpClientModule
            ],
            providers: [
                product_service_1.ProductService,
                house_service_1.HouseService,
                book_service_1.BookService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/book/book-detail/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"fh5co-loader\"></div>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a routerLink=\"\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li class=\"has-dropdown active\">\n                <a routerLink=\"/product-list\">Shop</a>\n                <ul class=\"dropdown\">\n                  <li>\n                    <a href=\"single.html\">Single Shop</a>\n                  </li>\n                </ul>\n              </li>\n              <li>\n                <a href=\"about.html\">About</a>\n              </li>\n              <li class=\"has-dropdown\">\n                <a href=\"services.html\">Services</a>\n                <ul class=\"dropdown\">\n                  <li>\n                    <a href=\"#\">Web Design</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">eCommerce</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Branding</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">API</a>\n                  </li>\n                </ul>\n              </li>\n              <li>\n                <a href=\"contact.html\">Contact</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\n            <ul>\n              <li class=\"search\">\n                <div class=\"input-group\">\n                  <input type=\"text\" placeholder=\"Search..\">\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-primary\" type=\"button\">\n                      <i class=\"icon-search\"></i>\n                    </button>\n                  </span>\n                </div>\n              </li>\n              <li class=\"shopping-cart\">\n                <a href=\"#\" class=\"cart\">\n                  <span>\n                    <small>0</small>\n                    <i class=\"icon-shopping-cart\"></i>\n                  </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>Book Details</h1>\n                <h2>Free html5 templates Made</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n          \n            <div>\n              <ngx-carousel [inputs]=\"Config\">\n                <ngx-item *ngFor=\"let bookImg of bookModel.imgUrl\" class=\"bannerStyle \" NgxCarouselItem>\n                  <img [src]=\"bookImg\" alt=\"house\" width=\"100%\" #test2 id=\"img1\">\n                </ngx-item>\n                <i NgxCarouselPrev class=\"leftRs fa fa-arrow-left fa-3x\" aria-hidden=\"true\"></i>\n                <i NgxCarouselNext class=\"rightRs fa fa-arrow-right fa-3x\" aria-hidden=\"true\"></i>\n              </ngx-carousel>\n            </div>\n          \n\n\n            <div class=\"row animate-box\">\n              <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n                <h2>{{bookModel.department}}</h2>\n                <p>\n                  <a href=\"#\" class=\"btn btn-primary btn-outline btn-lg\">Post your Product to Sell</a>\n                  <a href=\"#\" class=\"btn btn-primary btn-outline btn-lg\">Compare</a>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n            <ul class=\"nav nav-tabs\">\n              <mat-tab-group>\n\n                <mat-tab label=\"Book detail\">\n                  <div class=\"col-md-8 \">\n                      <h4>Book Detail</h4>\n                      <ul>\n                          <li>{{bookModel.name}}\n                          </li>\n                          <li>{{bookModel.price}}</li>\n                          <li>Veritatis tenetur odio delectus quibusdam officiis est.</li>\n                          <li>Magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis officiis est.</li>\n                        </ul>\n                  </div>\n                </mat-tab>\n\n                <mat-tab label=\"Contact Info\">\n\n\n                  <div class=\"col-md-8\">\n                    <h4>Book Owner contact info</h4>\n                    <ul>\n                      <li>{{bookModel.contactInfo}}\n                      </li>\n                      <li>{{bookModel.owwnerID}}</li>\n                      <li>Veritatis tenetur odio delectus quibusdam officiis est.</li>\n                      <li>Magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis officiis est.</li>\n                    </ul>\n                    <ul>\n                      <li>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci eius\n                      </li>\n                      <li>adipisci dignissimos consectetur magni quas eius nobis reprehenderit soluta eligendi</li>\n                      <li>Veritatis tenetur odio delectus quibusdam officiis est.</li>\n                      <li>Magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur officiis\n                        est.</li>\n                    </ul>\n                  </div>\n\n\n                </mat-tab>\n              </mat-tab-group>\n\n            </ul>\n          </div>\n        </div>\n        <!-- Tabs -->\n        <router-outlet></router-outlet>\n        <div class=\"col-md-10 col-md-offset-1\">\n          <h3>Happy Buyers</h3>\n          <div class=\"feed\">\n            <div>\n              <blockquote>\n                <p>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni\n                  quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam\n                  officiis est.\n                </p>\n              </blockquote>\n              <h3>&mdash; Louie Knight</h3>\n              <span class=\"rate\">\n                <i class=\"icon-star2\"></i>\n                <i class=\"icon-star2\"></i>\n                <i class=\"icon-star2\"></i>\n                <i class=\"icon-star2\"></i>\n                <i class=\"icon-star2\"></i>\n              </span>\n            </div>\n            <div>\n              <blockquote>\n                <p>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni\n                  quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam\n                  officiis est.\n                </p>\n              </blockquote>\n              <h3>&mdash; Joefrey Gwapo</h3>\n              <span class=\"rate\">\n                <i class=\"icon-star2\"></i>\n                <i class=\"icon-star2\"></i>\n                <i class=\"icon-star2\"></i>\n                <i class=\"icon-star2\"></i>\n                <i class=\"icon-star2\"></i>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"fh5co-started\">\n    <div class=\"container\">\n      <div class=\"row animate-box\">\n        <!-- UY BEGIN -->\n        <div id=\"uyan_frame\"></div>\n        <script type=\"text/javascript\" src=\"http://v2.uyan.cc/code/uyan.js?uid=2158295\"></script>\n        <!-- UY END -->\n      </div>\n    </div>\n  </div>\n\n  <footer id=\"fh5co-footer\" role=\"contentinfo\">\n    <div class=\"container\">\n      <div class=\"row row-pb-md\">\n        <div class=\"col-md-4 fh5co-widget\">\n          <h3>Shop.</h3>\n          <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto\n            culpa amet.\n          </p>\n        </div>\n        <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n          <ul class=\"fh5co-footer-links\">\n            <li>\n              <a href=\"#\">About</a>\n            </li>\n            <li>\n              <a href=\"#\">Help</a>\n            </li>\n            <li>\n              <a href=\"#\">Contact</a>\n            </li>\n            <li>\n              <a href=\"#\">Terms</a>\n            </li>\n            <li>\n              <a href=\"#\">Meetups</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n          <ul class=\"fh5co-footer-links\">\n            <li>\n              <a href=\"#\">Shop</a>\n            </li>\n            <li>\n              <a href=\"#\">Privacy</a>\n            </li>\n            <li>\n              <a href=\"#\">Testimonials</a>\n            </li>\n            <li>\n              <a href=\"#\">Handbook</a>\n            </li>\n            <li>\n              <a href=\"#\">Held Desk</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n          <ul class=\"fh5co-footer-links\">\n            <li>\n              <a href=\"#\">Find Designers</a>\n            </li>\n            <li>\n              <a href=\"#\">Find Developers</a>\n            </li>\n            <li>\n              <a href=\"#\">Teams</a>\n            </li>\n            <li>\n              <a href=\"#\">Advertise</a>\n            </li>\n            <li>\n              <a href=\"#\">API</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"row copyright\">\n        <div class=\"col-md-12 text-center\">\n          <p>\n            <small class=\"block\">Copyright &copy; 2017.Company name All rights reserved.\n              <a target=\"_blank\" href=\"http://guantaow.taobao.com/\">厚朴网络淘宝店</a>\n              <a target=\"_blank\" href=\"http://www.moobnn.com\">网页模板</a>\n            </small>\n          </p>\n          <p>\n            <ul class=\"fh5co-social-icons\">\n              <li>\n                <a href=\"#\">\n                  <i class=\"icon-twitter\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"icon-facebook\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"icon-linkedin\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"icon-dribbble\"></i>\n                </a>\n              </li>\n            </ul>\n        </div>\n      </div>\n\n    </div>\n  </footer>\n  <div class=\"gototop js-top\">\n    <a href=\"#\" class=\"js-gotop\">\n      <i class=\"icon-arrow-up\"></i>\n    </a>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/book/book-detail/book-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var book_service_1 = __webpack_require__("../../../../../src/app/Service/book-service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(bookService, activatedRoute) {
        this.bookService = bookService;
        this.activatedRoute = activatedRoute;
        this.Config = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            point: {
                visible: true
            },
            loop: true,
            touch: false
        };
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.bookService.getBook(this.id)
            .then(function (book) {
            _this.bookModel = book;
            console.log(_this.bookModel);
            return _this.bookModel;
        })
            .catch(function (e) {
            console.log(e);
        });
        // console.log(this.bookModel);
        console.log(typeof this.id);
    };
    BookDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-book-detail',
            template: __webpack_require__("../../../../../src/app/book/book-detail/book-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css"), __webpack_require__("../../../../../src/app/product/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [book_service_1.BookService, router_1.ActivatedRoute])
    ], BookDetailComponent);
    return BookDetailComponent;
}());
exports.BookDetailComponent = BookDetailComponent;


/***/ }),

/***/ "../../../../../src/app/book/book-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BookModel = /** @class */ (function () {
    function BookModel(name, department, owwnerID, price, contactInfo, img) {
        this.name = name;
        this.department = department;
        this.owwnerID = owwnerID;
        this.price = price;
        this.contactInfo = contactInfo;
        this.imgUrl = img;
    }
    return BookModel;
}());
exports.BookModel = BookModel;


/***/ }),

/***/ "../../../../../src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n\t<div id=\"page\">\r\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\r\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li class=\"has-dropdown\">\r\n\t\t\t\t\t\t\t\t<a href=\"product.html\">Shop</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"single.html\">Single Shop</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"about.html\">About</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"has-dropdown\">\r\n\t\t\t\t\t\t\t\t<a href=\"services.html\">Services</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Web Design</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">eCommerce</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Branding</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">API</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"contact.html\">Contact</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li class=\"search\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search..\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-search\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"shopping-cart\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"cart\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t<small>0</small>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"icon-shopping-cart\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</nav>\r\n\r\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\r\n\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\r\n\t\t\t\t\t\t<div class=\"display-t\">\r\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\r\n\t\t\t\t\t\t\t\t<h1>Book store</h1>\r\n\t\t\t\t\t\t\t\t<h2>Find your most helpful text book with the best price!</h2>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\r\n\t\t<div id=\"fh5co-product\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row animate-box\">\r\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\r\n\t\t\t\t\t\t<span>Cool Stuff</span>\r\n\t\t\t\t\t\t<h2>Products.</h2>\r\n\t\t\t\t\t\t<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor\r\n\t\t\t\t\t\t\teius.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3 choice\">\r\n\t\t\t\t\t\t<div class=\"product\">\r\n\t\t\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t\t\t<i>Please select department:</i>\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\tselected:{{selectedDept}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<mat-selection-list #Dept [(ngModel)]=\"selectedDept\" (selectionChange)=\"onChange()\">\r\n\t\t\t\t\t\t\t<mat-list-option *ngFor=\"let Department of Departments\" [value]=\"Department\">\r\n\t\t\t\t\t\t\t\t{{Department}}\r\n\t\t\t\t\t\t\t</mat-list-option>\r\n\t\t\t\t\t\t</mat-selection-list>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-3 text-center\" *ngFor=\"let Book of AllBooks | paginate: {id:'Book',\r\n\t\t\t\t\t\t                                                                        itemsPerPage: 6, \r\n\t\t\t                                                                                    currentPage: p }\">\r\n\t\t\t\t\t\t<div class=\"product\" (click)=\"ToBookDetail(Book.id)\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"product-grid\" [style.background-image]=\"'url('+Book.imgUrl[0]+')'\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t\t\t\t<i>{{Book.name}}</i>\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price\">{{Book.department}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<pagination-controls class=\"pageButton\" id=\"Book\" (pageChange)=\"p = $event\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\"\r\n\t\t\t\t screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\r\n\t\t\t\t</pagination-controls>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<footer id=\"fh5co-footer\" role=\"contentinfo\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row row-pb-md\">\r\n\t\t\t\t\t<div class=\"col-md-4 fh5co-widget\">\r\n\t\t\t\t\t\t<h3>Shop.</h3>\r\n\t\t\t\t\t\t<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa\r\n\t\t\t\t\t\t\tamet.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\r\n\t\t\t\t\t\t<ul class=\"fh5co-footer-links\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">About</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Help</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Contact</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Terms</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Meetups</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\r\n\t\t\t\t\t\t<ul class=\"fh5co-footer-links\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Shop</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Privacy</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Testimonials</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Handbook</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Held Desk</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\r\n\t\t\t\t\t\t<ul class=\"fh5co-footer-links\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Find Designers</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Find Developers</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Teams</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Advertise</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">API</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"row copyright\">\r\n\t\t\t\t\t<div class=\"col-md-12 text-center\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<small class=\"block\">Copyright &copy; 2017.Company name All rights reserved.\r\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://guantaow.taobao.com/\">厚朴网络淘宝店</a>\r\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://www.moobnn.com\">网页模板</a>\r\n\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<ul class=\"fh5co-social-icons\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"icon-twitter\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"icon-facebook\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"icon-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"icon-dribbble\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</footer>\r\n\t</div>\r\n\r\n\t<div class=\"gototop js-top\">\r\n\t\t<a href=\"#\" class=\"js-gotop\">\r\n\t\t\t<i class=\"icon-arrow-up\"></i>\r\n\t\t</a>\r\n\t</div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/book/book.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var book_service_1 = __webpack_require__("../../../../../src/app/Service/book-service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var BookComponent = /** @class */ (function () {
    function BookComponent(bookService, router, activateRouter) {
        this.bookService = bookService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.selectedDept = ['cs'];
        this.Departments = ['Computer Science', 'Electrical Engineering', 'ESL', 'Data Science', 'MSIT', 'Marketing', 'Others'];
        this.AllBooks = [];
        this.books = [];
        this.selectedBook = [];
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionBooks = this.bookService.getALLBooks()
            .subscribe(function (allBooks) {
            _this.AllBooks = allBooks;
            _this.books = allBooks;
        });
        console.log(this.AllBooks);
    };
    BookComponent.prototype.ngOnDestroy = function () {
        this.subscriptionBooks.unsubscribe();
    };
    BookComponent.prototype.ToBookDetail = function (id) {
        this.router.navigate(['/book-list', id]);
    };
    BookComponent.prototype.onChange = function (value) {
        var _this = this;
        this.selectedBook = [];
        this.AllBooks = this.books;
        this.AllBooks.forEach(function (book) {
            if (_this.selectedDept.includes(book.department)) {
                _this.selectedBook.push(book);
            }
        });
        if (this.selectedBook.length === 0) {
            return 0;
        }
        this.AllBooks = this.selectedBook;
        console.log(this.AllBooks);
    };
    BookComponent = __decorate([
        core_1.Component({
            selector: 'app-book',
            template: __webpack_require__("../../../../../src/app/book/book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [book_service_1.BookService, router_1.Router, router_1.ActivatedRoute])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;


/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\r\n\tfont-family: 'Lato', sans-serif;\r\n\ttext-rendering: optimizeLegibility !important;\r\n\t-webkit-font-smoothing: antialiased !important;\r\n\tcolor: #5a5a5a;\r\n}\r\nh1 {\r\n}\r\nh1 strong {\r\n\tfont-weight: 900;\r\n}\r\nh2 {\r\n\ttext-transform: uppercase;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n}\r\nh3 {\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n}\r\nh4 {\r\n\ttext-transform: capitalize;\r\n}\r\nh5 {\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tline-height: 20px;\r\n}\r\np {\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\np.intro {\r\n\tfont-size: 16px;\r\n\tmargin: 12px 0 0;\r\n\tline-height: 24px;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\na {\r\n\tcolor: #D2527F\r\n}\r\na:hover, a:focus {\r\n\ttext-decoration: none;\r\n\tcolor: #9D3D5F;\r\n}\r\n.clearfix:after {\r\n\tvisibility: hidden;\r\n\tdisplay: block;\r\n\tfont-size: 0;\r\n\tcontent: \" \";\r\n\tclear: both;\r\n\theight: 0;\r\n}\r\n.clearfix {\r\n\tdisplay: inline-block;\r\n}\r\n* html .clearfix {\r\n\theight: 1%;\r\n}\r\n.clearfix {\r\n\tdisplay: block;\r\n}\r\nul, ol {\r\n\tpadding: 0;\r\n\twebkit-padding: 0;\r\n\tmoz-padding: 0;\r\n}\r\n/* Navigation */\r\n/* Home Style */\r\nheader {\r\n\tbackground: url(" + escape(__webpack_require__("../../../../../src/assets/wpi-main.jpg")) + ") no-repeat bottom center fixed;\r\n\tbackground-size: cover;\r\n\tcolor: #cfcfcf;\r\n\tposition: relative;\r\n\theight: 100%;\r\n}\r\nheader p {\r\n\tcolor: #ffffff;\r\n\tfont-size: 22px;\r\n}\r\n.intro-text {\r\n\tposition: relative;\r\n\tpadding-top: 250px;\r\n\tpadding-right: 0;\r\n\tpadding-left: 0;\r\n\tpadding-bottom: 200px;\r\n}\r\n.intro-text H1 {\r\n\tfont-size: 40px;\r\n\ttext-transform: uppercase;\r\n\tcolor: #fff;\r\n}\r\n.color {\r\n\tcolor: #D2527F;\r\n}\r\na.fa.fa-angle-down {\r\n\tpadding: 10px 15px;\r\n\tcolor: #fff;\r\n\tfont-size: 24px;\r\n\tmargin-top: 100px;\r\n\tborder: 0px solid #E74C3C;\r\n\t-webkit-transition: all 0.5s;\r\n\ttransition: all 0.5s;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #D2527F;\r\n}\r\na.fa.fa-angle-down:hover {\r\n\tbackground: #9D3D5F;\r\n}\r\n@media (max-width: 768px) {\r\n\t.content {\r\n\t\tpadding: 40% 0 0;\r\n\t}\r\n\t}\r\n@media (max-width: 603px) {\r\n\t#menu.navbar-default {\r\n\t\tbackground-color: rgba(0, 0, 0, 0.7);\r\n\t}\r\n\tlabel {\r\n\t\tfloat: none !important\r\n\t}\r\n\t.pull-left.fnav, .pull-right.fnav {\r\n\t\tfloat: none !important;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.hover-bg .hover-text {\r\n\t\tpadding: 12% 10%;\r\n\t}\r\n\t}\r\n@media (max-width: 360px) {\r\n\t.hover-bg .hover-text {\r\n\t\tpadding: 22% 10%;\r\n\t}\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"text-center\" name=\"home\">\n  <div class=\"intro-text\">\n    <h1>Welcome to <strong><span class=\"color\">WPILIFE2.0</span></strong></h1>\n    <p>We are dedicated to <strong>make our</strong> & <strong>life</strong> in WPI much eaiser.</p>\n    <a href=\"#services-section\" class=\"fa fa-angle-down page-scroll\"> </a> </div>\n</header>\n "

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../../../../src/app/home-page/home-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\r\n\tfont-family: 'Lato', sans-serif;\r\n\ttext-rendering: optimizeLegibility !important;\r\n\t-webkit-font-smoothing: antialiased !important;\r\n\tcolor: #5a5a5a;\r\n}\r\nh1 strong {\r\n\tfont-weight: 900;\r\n}\r\nh2 {\r\n\ttext-transform: uppercase;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n}\r\nh3 {\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n}\r\nh4 {\r\n\ttext-transform: capitalize;\r\n}\r\nh5 {\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tline-height: 20px;\r\n}\r\n#services-section p,#works-section p,#about-section p,#team-section p,#testimonials-section p #contact-section p {\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\np.intro {\r\n\tfont-size: 16px;\r\n\tmargin: 12px 0 0;\r\n\tline-height: 24px;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\na {\r\n\tcolor: #D2527F\r\n}\r\na:hover, a:focus {\r\n\ttext-decoration: none;\r\n\tcolor: #9D3D5F;\r\n}\r\n.clearfix:after {\r\n\tvisibility: hidden;\r\n\tdisplay: block;\r\n\tfont-size: 0;\r\n\tcontent: \" \";\r\n\tclear: both;\r\n\theight: 0;\r\n}\r\n.clearfix {\r\n\tdisplay: inline-block;\r\n}\r\n* html .clearfix {\r\n\theight: 1%;\r\n}\r\n.clearfix {\r\n\tdisplay: block;\r\n}\r\nul, ol {\r\n\tpadding: 0;\r\n\twebkit-padding: 0;\r\n\tmoz-padding: 0;\r\n}\r\n/* Navigation */\r\n/* Home Style */\r\n/* About Section */\r\n#about-section {\r\n\tpadding: 80px 0;\r\n\tbackground-color: #eee;\r\n}\r\n#about-section i {\r\n\tfloat: left;\r\n\tdisplay: block;\r\n\tmargin-right: 15px;\r\n\tcolor: #D2527F;\r\n\tfont-size: 24px;\r\n}\r\n#about-section p {\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 30px;\r\n}\r\n/* Team Section */\r\n#team-section {\r\n\tpadding: 80px 0;\r\n}\r\n.section-title.center {\r\n\tpadding: 30px 0;\r\n}\r\n.section-title h2, .section-title.center h2 {\r\n\tfont-weight: 400;\r\n\tmargin-bottom: 30px;\r\n}\r\n.section-title.center hr {\r\n\theight: 1px;\r\n\twidth: 60px;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tbackground: #D2527F;\r\n\tborder: 0;\r\n}\r\n#team-section .item {\r\n\tpadding: 0;\r\n\tmargin: 15px;\r\n\ttext-align: center;\r\n}\r\nimg.img-circle.team-img {\r\n\twidth: 120px;\r\n\theight: 120px;\r\n\tborder: 4px solid transparent;\r\n\t-webkit-transition: all 0.5s;\r\n\ttransition: all 0.5s;\r\n}\r\n#team-section .team .thumbnail:hover>img.img-circle.team-img {\r\n\tborder: 4px solid #D2527F;\r\n\tfont-size: medium;\r\n}\r\n#team-section .thumbnail {\r\n\tbackground: transparent;\r\n\tborder: 0;\r\n}\r\n#team-section .thumbnail .caption {\r\n\tpadding: 9px;\r\n\tcolor: #5a5a5a;\r\n}\r\n.owl-theme .owl-controls .owl-page span {\r\n\tdisplay: block;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin: 5px 7px;\r\n\tfilter: Alpha(Opacity=1);\r\n\topacity: 1;\r\n\tborder-radius: 0;\r\n\tbackground: #FFFFFF;\r\n\t-webkit-transition: all 0.5s;\r\n\ttransition: all 0.5s;\r\n}\r\n.owl-theme .owl-controls .owl-page.active span, .owl-theme .owl-controls.clickable .owl-page:hover span {\r\n\tfilter: Alpha(Opacity=100);\r\n\topacity: 1;\r\n\tbackground: #D2527F;\r\n}\r\n.owl-theme .owl-controls .owl-page.active span {\r\n\tbackground: #D2527F;\r\n}\r\n.copyrights{text-indent:-9999px;height:0;line-height:0;font-size:0;overflow:hidden;}\r\n/* Services Section */\r\n#services-section {\r\n\tpadding: 80px 0;\r\n\tbackground-color: #eee;\r\n}\r\n.space {\r\n\tmargin-top: 40px;\r\n}\r\n#services-section i.fa {\r\n\tfont-size: 40px;\r\n\tborder: 2px solid #fff;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tpadding: 27px 25px;\r\n\tmargin-bottom: 10px;\r\n\tborder-radius: 50%;\r\n\t-webkit-transition: all 0.5s;\r\n\ttransition: all 0.5s;\r\n\tcolor: #D2527F;\r\n}\r\n#services-section i.fa.fa-mobile {\r\n\tfont-size: 50px;\r\n\tpadding: 20px 25px;\r\n}\r\n#services-section .service:hover>i.fa {\r\n\tborder: 2px solid #D2527F;\r\n\tbackground: #D2527F;\r\n\tcolor: #ffffff;\r\n}\r\n/* Gallery Section \r\n==============================*/\r\n#works-section {\r\n\tpadding: 80px 0;\r\n}\r\n.categories {\r\n\tpadding-bottom: 30px;\r\n\ttext-align: center;\r\n}\r\nul.cat li {\r\n\tdisplay: inline-block;\r\n}\r\n#works-section li.pull-right {\r\n\tmargin-top: 10px;\r\n}\r\nol.type li {\r\n\tdisplay: inline-block;\r\n\tmargin-left: 20px;\r\n}\r\nol.type li:after {\r\n\tcontent: ' | ';\r\n\tmargin-left: 20px;\r\n}\r\nol.type li:last-child:after {\r\n\tcontent: '';\r\n}\r\nol.type li a {\r\n\tcolor: #222222\r\n}\r\nol.type li a.active {\r\n\tcolor: #D2527F;\r\n\tfont-weight: bold;\r\n}\r\nol.type li a:hover {\r\n\tcolor: #D2527F;\r\n}\r\n.isotope-item {\r\n\tz-index: 2\r\n}\r\n.isotope-hidden.isotope-item {\r\n\tz-index: 1\r\n}\r\n.isotope, .isotope .isotope-item {\r\n\t/* change duration value to whatever you like */\r\n\t-webkit-transition-duration: 0.8s;\r\n\ttransition-duration: 0.8s;\r\n}\r\n.isotope-item {\r\n\tmargin-right: -1px;\r\n\t-webkit-backface-visibility: hidden;\r\n\tbackface-visibility: hidden;\r\n}\r\n.isotope {\r\n\t-webkit-backface-visibility: hidden;\r\n\tbackface-visibility: hidden;\r\n\t-webkit-transition-property: height, width;\r\n\ttransition-property: height, width;\r\n}\r\n.isotope .isotope-item {\r\n\t-webkit-backface-visibility: hidden;\r\n\tbackface-visibility: hidden;\r\n\t-webkit-transition-property: -webkit-transform, opacity;\r\n\t-webkit-transition-property: opacity, -webkit-transform;\r\n\ttransition-property: opacity, -webkit-transform;\r\n\ttransition-property: transform, opacity;\r\n\ttransition-property: transform, opacity, -webkit-transform;\r\n}\r\n.portfolio-item {\r\n\tmargin-bottom: 30px;\r\n}\r\n.portfolio-item .hover-bg {\r\n\theight: 260px;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n}\r\n.hover-bg .hover-text {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin: 0 auto;\r\n\tcolor: #ffffff;\r\n\tbackground: rgba(0, 0, 0, 0.66);\r\n\tpadding: 25% 0;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\topacity: 0;\r\n\t-webkit-transition: all 0.5s;\r\n\ttransition: all 0.5s;\r\n}\r\n.hover-bg .hover-text>h4 {\r\n\topacity: 0;\r\n\t-webkit-transform: translateY(100%);\r\n\ttransform: translateY(100%);\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n}\r\n.hover-bg:hover .hover-text>h4 {\r\n\topacity: 1;\r\n\t-webkit-backface-visibility: hidden;\r\n\t-webkit-transform: translateY(0);\r\n\ttransform: translateY(0);\r\n}\r\n.hover-bg .hover-text>i {\r\n\topacity: 0;\r\n\t-webkit-transform: translateY(0);\r\n\ttransform: translateY(0);\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n}\r\n.hover-bg:hover .hover-text>i {\r\n\topacity: 1;\r\n\t-webkit-backface-visibility: hidden;\r\n\t-webkit-transform: translateY(100%);\r\n\ttransform: translateY(100%);\r\n}\r\n.hover-bg:hover .hover-text {\r\n\topacity: 1;\r\n}\r\n#works-section i.fa {\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tborder: 1px solid #D2527F;\r\n\tfont-size: 20px;\r\n\tpadding: 5px;\r\n\tborder-radius: 50%;\r\n\tcolor: #D2527F;\r\n}\r\n/* Testimonials Section */\r\n#testimonials-section {\r\n\tbackground: url(" + escape(__webpack_require__("../../../../../src/assets/testimonial-bg.jpg")) + ");\r\n\tbackground-size: cover;\r\n\tbackground-position: top;\r\n\tbackground-attachment: fixed;\r\n\tbackground-repeat: no-repeat;\r\n\tcolor: #ffffff;\r\n\tpadding: 80px 0;\r\n}\r\n#testimonial {\r\n\tpadding: 30px 0;\r\n}\r\n#testimonial .item {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: auto;\r\n}\r\n#testimonial .item p {\r\n\tfont-weight: 400;\r\n\tmargin: 30px 0;\r\n\tcolor: #eee;\r\n}\r\n/* Contact Section */\r\n#contact-section {\r\n\tpadding: 80px 0;\r\n}\r\n#contact-section h3 {\r\n\tfont-size: 20px;\r\n\tfont-weight: 400;\r\n\ttext-transform: uppercase;\r\n}\r\n#contact-section form {\r\n\tpadding: 30px 0;\r\n}\r\n#contact-section .fa {\r\n\tcolor: #D2527F;\r\n\tmargin-bottom: 10px;\r\n}\r\n#contact-section label {\r\n\tfont-size: 12px;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\tfloat: left;\r\n}\r\n#contact-section .form-control {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tpadding: 6px 12px;\r\n\tfont-size: 14px;\r\n\tline-height: 1.42857143;\r\n\tcolor: #555;\r\n\tbackground-color: #fff;\r\n\tbackground-image: none;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 2px;\r\n\t-webkit-box-shadow: none;\r\n\tbox-shadow: none;\r\n\t-webkit-transition: none;\r\n\ttransition: none;\r\n}\r\n#contact-section .form-control:focus {\r\n\tborder-color: inherit;\r\n\toutline: 0;\r\n\t-webkit-box-shadow: transparent;\r\n\tbox-shadow: transparent;\r\n}\r\n#contact-section .btn {\r\n\tbackground: #D2527F;\r\n\tborder: 0;\r\n\tborder-radius: 4px;\r\n\tpadding: 10px 20px;\r\n\tcolor: #ffffff;\r\n\ttext-transform: uppercase;\r\n}\r\n#contact-section .btn:hover, #contact-section .btn:focus {\r\n\tbackground: #9D3D5F;\r\n}\r\n.btn:active, .btn.active {\r\n\tbackground-image: none;\r\n\toutline: 0;\r\n\t-webkit-box-shadow: none;\r\n\tbox-shadow: none;\r\n}\r\na:focus, .btn:focus, .btn:active:focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn.active.focus {\r\n\toutline: none;\r\n\toutline-offset: none;\r\n}\r\n/* Footer */\r\nnav#footer {\r\n\tbackground: #222222;\r\n\tcolor: #ddd;\r\n\tpadding: 30px 0 25px 0;\r\n}\r\nnav#footer .fnav {\r\n\tvertical-align: middle;\r\n}\r\nul.footer-social li {\r\n\tdisplay: inline-block;\r\n\tmargin-right: 10px;\r\n}\r\nnav#footer p {\r\n\tfont-size: 12px;\r\n\tmargin-top: 10px;\r\n}\r\n#footer i.fa {\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tfont-size: 20px;\r\n\tpadding: 4px 5px;\r\n\tcolor: #ddd;\r\n\t-webkit-transition: all 0.5s;\r\n\ttransition: all 0.5s;\r\n}\r\n#footer i.fa:hover {\r\n\tcolor: #D2527F;\r\n}\r\n.mat-tab-labels{\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center; /* align items in Main Axis */\r\n\twidth: 100%;\r\n}\r\n.cat .mat-tab-body-content{\r\n\theight: 100%;\r\n\twidth: 100%;\r\n    overflow: hidden;\r\n}\r\n@media (max-width: 768px) {\r\n\t.content {\r\n\t\tpadding: 40% 0 0;\r\n\t}\r\n\t}\r\n@media (max-width: 603px) {\r\n\t#menu.navbar-default {\r\n\t\tbackground-color: rgba(0, 0, 0, 0.7);\r\n\t}\r\n\tlabel {\r\n\t\tfloat: none !important\r\n\t}\r\n\t.pull-left.fnav, .pull-right.fnav {\r\n\t\tfloat: none !important;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.hover-bg .hover-text {\r\n\t\tpadding: 12% 10%;\r\n\t}\r\n\t}\r\n@media (max-width: 360px) {\r\n\t.hover-bg .hover-text {\r\n\t\tpadding: 22% 10%;\r\n\t}\r\n\t}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-component.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<body>\n  <!-- Navigation\n    ==========================================-->\n  <app-nav></app-nav>\n\n  <!-- Header -->\n\n  <app-header></app-header>\n  <!-- Services Section -->\n  <div id=\"services-section\" class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"section-title center\">\n        <h2>Shopping\n          <strong>Section</strong>\n        </h2>\n        <hr>\n        <div class=\"clearfix\"></div>\n        <p>There you can find almost whatever you want.</p>\n      </div>\n      <div class=\"space\"></div>\n      <div class=\"row\">\n        <div class=\"col-md-3 col-sm-6 service\">\n          <i [routerLink]=\"['house-list']\" class=\"fa fa-home\"></i>\n          <h4>\n            <strong>House/Apartment Rent</strong>\n          </h4>\n          <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>\n        </div>\n        <div class=\"col-md-3 col-sm-6 service\">\n          <i [routerLink]=\"'book-list'\" class=\"fa fa-book\"></i>\n          <h4>\n            <strong>Book</strong>\n          </h4>\n          <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.</p>\n        </div>\n        <div class=\"col-md-3 col-sm-6 service\">\n          <i [routerLink]=\"'product-list'\" class=\"fa fa-bed\"></i>\n          <h4>\n            <strong>Others</strong>\n          </h4>\n          <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>\n        </div>\n        <div class=\"col-md-3 col-sm-6 service\">\n          <i [routerLink]=\"'sell'\" class=\"fa fa-money\"></i>\n          <h4>\n            <strong>Sell your Product</strong>\n          </h4>\n          <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Portfolio Section -->\n  <div id=\"works-section\">\n    <div class=\"container\">\n      <!-- Container -->\n      <div class=\"section-title text-center center\">\n        <h2>Recent\n          <strong>Product</strong>\n        </h2>\n        <hr>\n        <div class=\"clearfix\"></div>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>\n      </div>\n      <div class=\"categories\">   \n          <mat-tab-group>   \n              <mat-tab label=\"House\">\n                  <div class=\"col-sm-6 col-md-3 col-lg-3 web\" *ngFor=\"let house of showHouses;let i of index\">\n                      <div class=\"portfolio-item\" >\n                        <div class=\"hover-bg\">\n                          <a [routerLink]=\"['book-list', house.id]\" >\n                            <div class=\"hover-text\">\n                              <h4>{{house.Address}}</h4>\n                              <small>{{house.price}}</small>\n                              <div class=\"clearfix\"></div>\n                              <i class=\"fa fa-plus\"></i>\n                            </div>\n                            <img [src]=\"house.imgUrl[0]\" class=\"img-responsive\" alt=\"Project Title\"> </a>\n                        </div>\n                      </div>\n                    </div>\n              </mat-tab>\n            <mat-tab label=\"Book\">\n                <div class=\"col-sm-6 col-md-3 col-lg-3 web\" *ngFor=\"let book of showBooks;let i of index\">\n                    <div class=\"portfolio-item\" >\n                      <div class=\"hover-bg\">\n                        <a [routerLink]=\"['book-list', book.id]\" >\n                          <div class=\"hover-text\">\n                            <h4>{{book.name}}</h4>\n                            <small>{{book.department}}</small>\n                            <div class=\"clearfix\"></div>\n                            <i class=\"fa fa-plus\"></i>\n                          </div>\n                          <img [src]=\"book.imgUrl[0]\" class=\"img-responsive\" alt=\"Project Title\"> </a>\n                      </div>\n                    </div>\n                  </div>\n            </mat-tab>\n            <mat-tab label=\"Others\">\n                <div class=\"col-sm-6 col-md-3 col-lg-3 web\" *ngFor=\"let product of showProducts;let i of index\">\n                    <div class=\"portfolio-item\" >\n                      <div class=\"hover-bg\">\n                        <a [routerLink]=\"['product-list', product.id]\">\n                          <div class=\"hover-text\">\n                            <h4>{{product.name}}</h4>\n                            <small>{{product.price}}</small>\n                            <div class=\"clearfix\"></div>\n                            <i class=\"fa fa-plus\"></i>\n                          </div>\n                          <img [src]=\"product.imgUrl[0]\" class=\"img-responsive\" alt=\"Project Title\">  </a>\n                      </div>\n                    </div>\n                  </div>  \n            </mat-tab>\n          </mat-tab-group>\n\n        <div class=\"clearfix\"></div>\n      </div>\n\n    </div>\n  </div>\n  <!-- About Section -->\n  <div id=\"about-section\">\n    <div class=\"container\">\n      <div class=\"section-title text-center center\">\n        <h2>\n          <strong>New</strong> Students</h2>\n        <hr>\n        <div class=\"clearfix\"></div>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <img src=\"../../assets/about.png\" class=\"img-responsive\"> </div>\n        <div class=\"col-md-6\">\n          <div class=\"about-text\" [routerLink]=\"['survival-guide']\">\n            <i class=\"fa fa-users\"></i>\n            <h4>Survival Guide</h4>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh\n              ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh ante facilisis\n              bibendum.</p>\n            <i class=\"fa fa-puzzle-piece\"></i>\n            <h4>Airport pickup</h4>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh\n              ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh ante facilisis\n              bibendum.</p>\n            <i class=\"fa fa-check-square-o\"></i>\n            <h4>Temporary Residence</h4>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh\n              ante facilisis bibendum dolor feugiat at.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Team Section -->\n  <div id=\"team-section\" class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"section-title center\">\n        <h2>Meet the\n          <strong>team</strong>\n        </h2>\n        <hr>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>\n      </div>\n      <div id=\"row\">\n        <div class=\"col-md-3 col-sm-6 team\">\n          <div class=\"thumbnail\">\n            <img src=\"../../assets/t01.jpg\" alt=\"...\" class=\"img-circle team-img\">\n            <div class=\"caption\">\n              <h3>Jessica Wally</h3>\n              <p>Founder</p>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 team\">\n          <div class=\"thumbnail\">\n            <img src=\"../../assets/t02.jpg\" alt=\"...\" class=\"img-circle team-img\">\n            <div class=\"caption\">\n              <h3>Mike Sloan</h3>\n              <p>Web Designer</p>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 team\">\n          <div class=\"thumbnail\">\n            <img src=\"../../assets/t03.jpg\" alt=\"...\" class=\"img-circle team-img\">\n            <div class=\"caption\">\n              <h3>Michele Doe</h3>\n              <p>Web Designer</p>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 team\">\n          <div class=\"thumbnail\">\n            <img src=\"../../assets/t04.jpg\" alt=\"...\" class=\"img-circle team-img\">\n            <div class=\"caption\">\n              <h3>Larry Evans</h3>\n              <p>Project Manager</p>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Testimonials Section -->\n  <div id=\"testimonials-section\" class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"section-title center\">\n        <h2>What\n          <strong>clients</strong> say</h2>\n        <hr>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n          <div id=\"testimonial\" class=\"owl-carousel owl-theme\">\n            <div class=\"item\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo\n                nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>\n              <p>\n                <strong>John DOE</strong>, CEO, Company.</p>\n            </div>\n            <div class=\"item\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo\n                nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>\n              <p>\n                <strong>Jenny DOE</strong>, CEO, Company.</p>\n            </div>\n            <div class=\"item\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo\n                nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam.</p>\n              <p>\n                <strong>John DOEn</strong>, CEO, Company.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Contact Section -->\n  <div id=\"contact-section\" class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"section-title center\">\n        <h2>\n          <strong>Contact</strong> us</h2>\n        <hr>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>\n      </div>\n      <div class=\"col-md-8 col-md-offset-2\">\n        <div class=\"col-md-4\">\n          <i class=\"fa fa-map-marker fa-2x\"></i>\n          <p>100 Insitute Road\n            <br> Worcester, MA 01609</p>\n        </div>\n        <div class=\"col-md-4\">\n          <i class=\"fa fa-envelope-o fa-2x\"></i>\n          <p>hbchenjh@gmail.com</p>\n        </div>\n        <div class=\"col-md-4\">\n          <i class=\"fa fa-phone fa-2x\"></i>\n          <p> +1 800 123 1234</p>\n        </div>\n        <hr>\n        <div class=\"clearfix\"></div>\n      </div>\n      <div class=\"col-md-8 col-md-offset-2\">\n        <hr>\n        <h3>Leave us a message</h3>\n        <form>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Name\">\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Email\">\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" rows=\"4\" placeholder=\"Message\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\">Send Message</button>\n        </form>\n      </div>\n    </div>\n  </div>\n  <nav id=\"footer\">\n    <div class=\"container\">\n      <div class=\"pull-left fnav\">\n        <p>Copyright &copy; 2015 Creativ. More Templates\n          <a href=\"http://www.moobnn.com/\" target=\"_blank\" title=\"模板在线\">模板在线</a>\n          <a href=\"http://guantaow.taobao.com\" target=\"_blank\">厚朴网络 淘宝店</a> - Collect from\n          <a href=\"http://www.moobnn.com/\" title=\"模板在线\" target=\"_blank\">模板在线</a>\n          <a href=\"http://guantaow.taobao.com\" target=\"_blank\">厚朴网络 淘宝店</a>\n        </p>\n      </div>\n      <div class=\"pull-right fnav\">\n        <ul class=\"footer-social\">\n          <li>\n            <a href=\"#\">\n              <i class=\"fa fa-facebook\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n              <i class=\"fa fa-dribbble\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"#\">\n              <i class=\"fa fa-linkedin\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/home-page/home-component.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var core_2 = __webpack_require__("../../../core/esm5/core.js");
var house_service_1 = __webpack_require__("../../../../../src/app/Service/house-service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/Service/product-service.ts");
var book_service_1 = __webpack_require__("../../../../../src/app/Service/book-service.ts");
var HomeComponentComponent = /** @class */ (function () {
    function HomeComponentComponent(houserService, bookService, productService) {
        this.houserService = houserService;
        this.bookService = bookService;
        this.productService = productService;
        this.bookModel = [];
        this.productModel = [];
        this.houseModel = [];
        this.showBooks = [];
        this.showProducts = [];
        this.showHouses = [];
    }
    HomeComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionHouse = this.houserService.getAllHouses()
            .subscribe(function (allhouse) {
            _this.houseModel = allhouse;
            _this.houseLength = _this.houseModel.length;
            _this.showHouses = _this.houseModel.slice((_this.houseLength - 8), _this.houseLength);
        });
        this.subscriptionBooks = this.bookService.getALLBooks()
            .subscribe(function (allBooks) {
            _this.bookModel = allBooks;
            _this.bookLength = _this.bookModel.length;
            _this.showBooks = _this.bookModel.slice((_this.bookLength - 8), _this.bookLength);
        });
        this.subscriptionProducts = this.productService.getAllProduct()
            .subscribe(function (allProduct) {
            _this.productModel = allProduct;
            _this.productLength = _this.productModel.length;
            _this.showProducts = _this.productModel.slice((_this.productLength - 8), _this.productLength);
        });
    };
    HomeComponentComponent.prototype.ngOnDestroy = function () {
        this.subscriptionProducts.unsubscribe();
        this.subscriptionBooks.unsubscribe();
        this.subscriptionHouse.unsubscribe();
    };
    HomeComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-home-component',
            template: __webpack_require__("../../../../../src/app/home-page/home-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-component.component.css")],
            encapsulation: core_2.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [house_service_1.HouseService, book_service_1.BookService, product_service_1.ProductService])
    ], HomeComponentComponent);
    return HomeComponentComponent;
}());
exports.HomeComponentComponent = HomeComponentComponent;


/***/ }),

/***/ "../../../../../src/app/house/house-component.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"has-dropdown\">\n\t\t\t\t\t\t\t\t<a href=\"product.html\">Shop</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"single.html\">Single Shop</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"about.html\">About</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"has-dropdown\">\n\t\t\t\t\t\t\t\t<a href=\"services.html\">Services</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Web Design</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">eCommerce</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Branding</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">API</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"contact.html\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"search\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search..\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-search\"></i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"shopping-cart\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"cart\">\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<small>0</small>\n\t\t\t\t\t\t\t\t\t\t<i class=\"icon-shopping-cart\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</nav>\n\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>House Section</h1>\n\t\t\t\t\t\t\t\t<h2>Find your new life in America</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t<span>Cool Stuff</span>\n\t\t\t\t\t\t<h2>House.</h2>\n\t\t\t\t\t\t<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor\n\t\t\t\t\t\t\teius.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\n\t\t\t\t<div class=\"row\">\t\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-md-4 text-center\" *ngFor=\"let house of houses | paginate: { id:'house',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   itemsPerPage: 6, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t   currentPage: hp }\">\n\t\t\t\t\t\t<div class=\"product\" (click)=\"toHouseDetail(house.id)\" >\n\t\t\t\t\t\t\t<div class=\"product-grid\" [style.background-image]=\"'url('+house.imgUrl[0]+')'\">\n\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t<i>{{house.Address}}</i>\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t<span class=\"price\">{{house.price}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<pagination-controls class=\"pageButton\" id=\"house\" (pageChange)=\"hp = $event\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\"\n\t\t\t\t\tscreenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n\t\t\t\t   </pagination-controls>\t\t\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<footer id=\"fh5co-footer\" role=\"contentinfo\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row row-pb-md\">\n\t\t\t\t\t<div class=\"col-md-4 fh5co-widget\">\n\t\t\t\t\t\t<h3>Shop.</h3>\n\t\t\t\t\t\t<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa\n\t\t\t\t\t\t\tamet.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n\t\t\t\t\t\t<ul class=\"fh5co-footer-links\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">About</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Help</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Terms</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Meetups</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n\t\t\t\t\t\t<ul class=\"fh5co-footer-links\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Shop</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Privacy</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Testimonials</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Handbook</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Held Desk</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n\t\t\t\t\t\t<ul class=\"fh5co-footer-links\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Find Designers</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Find Developers</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Teams</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">Advertise</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">API</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row copyright\">\n\t\t\t\t\t<div class=\"col-md-12 text-center\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<small class=\"block\">Copyright &copy; 2017.Company name All rights reserved.\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://guantaow.taobao.com/\">厚朴网络淘宝店</a>\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://www.moobnn.com\">网页模板</a>\n\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<ul class=\"fh5co-social-icons\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-twitter\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-facebook\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-linkedin\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-dribbble\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</footer>\n\t</div>\n\n\t<div class=\"gototop js-top\">\n\t\t<a href=\"#\" class=\"js-gotop\">\n\t\t\t<i class=\"icon-arrow-up\"></i>\n\t\t</a>\n\t</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/house/house-component.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var house_service_1 = __webpack_require__("../../../../../src/app/Service/house-service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var HouseComponentComponent = /** @class */ (function () {
    function HouseComponentComponent(houseService, router, activateRouter) {
        this.houseService = houseService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.houses = [];
        this.hp = houseService.getCurrentPage();
    }
    HouseComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRouter.params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.houseSubscription = this.houseService.getAllHouses()
            .subscribe(function (allHouse) { return _this.houses = allHouse; });
    };
    HouseComponentComponent.prototype.ngOnDestroy = function () {
        this.houseSubscription.unsubscribe();
    };
    HouseComponentComponent.prototype.toHouseDetail = function (id) {
        this.temp = id / 6;
        this.hp = Math.ceil(this.temp);
        this.houseService.setCurrentPage(this.hp);
        this.router.navigate(['/house-list', id, id, 'desc']);
        // this.house = this.houseService.gethouse((id - 1));
        console.log('这是第' + id + '个房子');
    };
    HouseComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-house-component',
            template: __webpack_require__("../../../../../src/app/house/house-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [house_service_1.HouseService, router_1.Router, router_1.ActivatedRoute])
    ], HouseComponentComponent);
    return HouseComponentComponent;
}());
exports.HouseComponentComponent = HouseComponentComponent;


/***/ }),

/***/ "../../../../../src/app/house/house-detail/house-contact/house-contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/house/house-detail/house-contact/house-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <h3>Product Owner contact info</h3>\n      <ul>\n        <li>{{house.contactInfo}}</li>\n        <li>Veritatis tenetur odio delectus quibusdam officiis est.</li>\n        <li>Magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam\n          officiis est.</li>\n      </ul>\n      <ul>\n        <li>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas\n          eius</li>\n        <li>adipisci dignissimos consectetur magni quas eius nobis reprehenderit soluta eligendi</li>\n        <li>Veritatis tenetur odio delectus quibusdam officiis est.</li>\n        <li>Magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam\n          officiis est.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/house/house-detail/house-contact/house-contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var house_service_1 = __webpack_require__("../../../../../src/app/Service/house-service.ts");
var HouseContactComponent = /** @class */ (function () {
    function HouseContactComponent(houseService, router, activateRoute) {
        this.houseService = houseService;
        this.router = router;
        this.activateRoute = activateRoute;
    }
    HouseContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.houseService.gethouse(this.id)
            .then(function (house) { return _this.house = house; });
        console.log(this.house.ownerinfo);
    };
    HouseContactComponent = __decorate([
        core_1.Component({
            selector: 'app-house-contact',
            template: __webpack_require__("../../../../../src/app/house/house-detail/house-contact/house-contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/house/house-detail/house-contact/house-contact.component.css")]
        }),
        __metadata("design:paramtypes", [house_service_1.HouseService, router_1.Router, router_1.ActivatedRoute])
    ], HouseContactComponent);
    return HouseContactComponent;
}());
exports.HouseContactComponent = HouseContactComponent;


/***/ }),

/***/ "../../../../../src/app/house/house-detail/house-desc/house-desc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/house/house-detail/house-desc/house-desc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <span class=\"price\"> ${{house.price}}</span>\n      <h2>Product detail</h2>\n      <p>{{house.description}}\n      </p>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h2 class=\"uppercase\">Keep it simple</h2>\n          <p>Ullam dolorum iure dolore dicta fuga ipsa velit veritatis</p>\n        </div>\n        <div class=\"col-md-6\">\n          <h2 class=\"uppercase\">Less is more</h2>\n          <p>Ullam dolorum iure dolore dicta fuga ipsa velit veritatis</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/house/house-detail/house-desc/house-desc.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var house_service_1 = __webpack_require__("../../../../../src/app/Service/house-service.ts");
var HouseDescComponent = /** @class */ (function () {
    function HouseDescComponent(houseService, router, activateRoute) {
        this.houseService = houseService;
        this.router = router;
        this.activateRoute = activateRoute;
    }
    HouseDescComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.houseService.gethouse(this.id)
            .then(function (house) { return _this.house = house; });
    };
    HouseDescComponent = __decorate([
        core_1.Component({
            selector: 'app-house-desc',
            template: __webpack_require__("../../../../../src/app/house/house-detail/house-desc/house-desc.component.html"),
            styles: [__webpack_require__("../../../../../src/app/house/house-detail/house-desc/house-desc.component.css")]
        }),
        __metadata("design:paramtypes", [house_service_1.HouseService, router_1.Router, router_1.ActivatedRoute])
    ], HouseDescComponent);
    return HouseDescComponent;
}());
exports.HouseDescComponent = HouseDescComponent;


/***/ }),

/***/ "../../../../../src/app/house/house-detail/house-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div class=\"fh5co-loader\"></div>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a routerLink=\"\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"has-dropdown active\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/product-list\">Shop</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"single.html\">Single Shop</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"about.html\">About</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"has-dropdown\">\n\t\t\t\t\t\t\t\t<a href=\"services.html\">Services</a>\n\t\t\t\t\t\t\t\t<ul class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Web Design</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">eCommerce</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Branding</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">API</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"contact.html\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"search\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search..\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-search\"></i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"shopping-cart\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"cart\">\n\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t<small>0</small>\n\t\t\t\t\t\t\t\t\t\t<i class=\"icon-shopping-cart\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>House Details</h1>\n\t\t\t\t\t\t\t\t<h2>Free html5 templates Made</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\n                      \n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ngx-carousel [inputs]=\"Config\">\n\t\t\t\t\t\t\t\t<ngx-item *ngFor=\"let houseImg of houseDetail.imgUrl\" class=\"bannerStyle \" NgxCarouselItem>\n\t\t\t\t\t\t\t\t\t<img [src]=\"houseImg\" alt=\"house\" width=\"100%\" #test2 id=\"img1\">\n\t\t\t\t\t\t\t\t</ngx-item>\n\t\t\t\t\t\t\t\t<i NgxCarouselPrev class=\"leftRs fa fa-arrow-left fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i NgxCarouselNext class=\"rightRs fa fa-arrow-right fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</ngx-carousel>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\n\n\t\t\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t\t\t<h2>{{houseDetail.Address}}</h2>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-outline btn-lg\">Post your Product to Sell</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-outline btn-lg\">Compare</a>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\n\t\t\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t\t\t<li class=\"list-group-item-heading\" role=\"presentation\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact: true}\">\n\t\t\t\t\t\t\t\t<a [routerLink]=\"[id, 'desc']\" >House detail</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item-heading\"  role=\"presentation\" routerLinkActive=\"active\"  >\n\t\t\t\t\t\t\t\t<a [routerLink]=\"[id, 'contact']\">Contact info</a>\n\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Tabs -->\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\n\t\t\t\t\t<h3>Happy Buyers</h3>\n\t\t\t\t\t<div class=\"feed\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<blockquote>\n\t\t\t\t\t\t\t\t<p>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas\n\t\t\t\t\t\t\t\t\teius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis\n\t\t\t\t\t\t\t\t\test.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</blockquote>\n\t\t\t\t\t\t\t<h3>&mdash; Louie Knight</h3>\n\t\t\t\t\t\t\t<span class=\"rate\">\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<blockquote>\n\t\t\t\t\t\t\t\t<p>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas\n\t\t\t\t\t\t\t\t\teius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis\n\t\t\t\t\t\t\t\t\test.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</blockquote>\n\t\t\t\t\t\t\t<h3>&mdash; Joefrey Gwapo</h3>\n\t\t\t\t\t\t\t<span class=\"rate\">\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div id=\"fh5co-started\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row animate-box\">\n\t\t\t\t<!-- UY BEGIN -->\n              <div id=\"uyan_frame\"></div>\n              <script type=\"text/javascript\" src=\"http://v2.uyan.cc/code/uyan.js?uid=2158295\"></script>\n               <!-- UY END -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<footer id=\"fh5co-footer\" role=\"contentinfo\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row row-pb-md\">\n\t\t\t\t<div class=\"col-md-4 fh5co-widget\">\n\t\t\t\t\t<h3>Shop.</h3>\n\t\t\t\t\t<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa\n\t\t\t\t\t\tamet.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n\t\t\t\t\t<ul class=\"fh5co-footer-links\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">About</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Help</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Contact</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Terms</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Meetups</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n\t\t\t\t\t<ul class=\"fh5co-footer-links\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Shop</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Privacy</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Testimonials</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Handbook</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Held Desk</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n\t\t\t\t\t<ul class=\"fh5co-footer-links\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Find Designers</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Find Developers</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Teams</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">Advertise</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href=\"#\">API</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row copyright\">\n\t\t\t\t<div class=\"col-md-12 text-center\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<small class=\"block\">Copyright &copy; 2017.Company name All rights reserved.\n\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://guantaow.taobao.com/\">厚朴网络淘宝店</a>\n\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://www.moobnn.com\">网页模板</a>\n\t\t\t\t\t\t</small>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<ul class=\"fh5co-social-icons\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-twitter\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-facebook\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-linkedin\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon-dribbble\"></i>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</footer>\n\t<div class=\"gototop js-top\">\n\t\t<a href=\"#\" class=\"js-gotop\">\n\t\t\t<i class=\"icon-arrow-up\"></i>\n\t\t</a>\n\t</div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/house/house-detail/house-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var house_service_1 = __webpack_require__("../../../../../src/app/Service/house-service.ts");
var HouseDetailComponent = /** @class */ (function () {
    function HouseDetailComponent(houseService, router, activateRouter) {
        this.houseService = houseService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.Config = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            point: {
                visible: true
            },
            loop: true,
            touch: false
        };
    }
    HouseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRouter.params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.houseService.gethouse((this.id))
            .then(function (house) {
            _this.houseDetail = house;
            console.log(_this.houseDetail);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    HouseDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-house-detail',
            template: __webpack_require__("../../../../../src/app/house/house-detail/house-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css"), __webpack_require__("../../../../../src/app/product/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [house_service_1.HouseService, router_1.Router, router_1.ActivatedRoute])
    ], HouseDetailComponent);
    return HouseDetailComponent;
}());
exports.HouseDetailComponent = HouseDetailComponent;


/***/ }),

/***/ "../../../../../src/app/house/house.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HouseModel = /** @class */ (function () {
    function HouseModel(Address, desc, price, ownerinfo, contactInfo, img) {
        this.Address = Address;
        this.description = desc;
        this.price = price;
        this.ownerinfo = ownerinfo;
        this.contactInfo = contactInfo;
        this.imgUrl = img;
    }
    return HouseModel;
}());
exports.HouseModel = HouseModel;


/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\r\n\tfont-family: 'Lato', sans-serif;\r\n\ttext-rendering: optimizeLegibility !important;\r\n\t-webkit-font-smoothing: antialiased !important;\r\n\tcolor: #5a5a5a;\r\n}\r\nh1 {\r\n}\r\nh1 strong {\r\n\tfont-weight: 900;\r\n}\r\nh2 {\r\n\ttext-transform: uppercase;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n}\r\nh3 {\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n}\r\nh4 {\r\n\ttext-transform: capitalize;\r\n}\r\nh5 {\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tline-height: 20px;\r\n}\r\np {\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\np.intro {\r\n\tfont-size: 16px;\r\n\tmargin: 12px 0 0;\r\n\tline-height: 24px;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\na {\r\n\tcolor: #D2527F\r\n}\r\na:hover, a:focus {\r\n\ttext-decoration: none;\r\n\tcolor: #9D3D5F;\r\n}\r\n.clearfix:after {\r\n\tvisibility: hidden;\r\n\tdisplay: block;\r\n\tfont-size: 0;\r\n\tcontent: \" \";\r\n\tclear: both;\r\n\theight: 0;\r\n}\r\n.clearfix {\r\n\tdisplay: inline-block;\r\n}\r\n* html .clearfix {\r\n\theight: 1%;\r\n}\r\n.clearfix {\r\n\tdisplay: block;\r\n}\r\nul, ol {\r\n\tpadding: 0;\r\n\twebkit-padding: 0;\r\n\tmoz-padding: 0;\r\n}\r\n#menu {\r\n\tpadding: 20px;\r\n\t-webkit-transition: all 0.8s;\r\n\ttransition: all 0.8s;\r\n}\r\n#menu.navbar-default {\r\n\tbackground-color: rgba(248, 248, 248, 0);\r\n\tborder-color: rgba(231, 231, 231, 0);\r\n}\r\n#menu a.navbar-brand {\r\n\ttext-transform: uppercase;\r\n\tfont-size: 22px;\r\n\tcolor: #fff;\r\n\tfont-weight: 900;\r\n}\r\n#menu.navbar-default .navbar-nav > li > a {\r\n\ttext-transform: uppercase;\r\n\tcolor: #FFF;\r\n\tfont-size: 12px;\r\n\tletter-spacing: 1px;\r\n}\r\n#menu.navbar-default .navbar-nav > li > a:hover {\r\n\tcolor: #D2527F;\r\n}\r\n.on {\r\n\tbackground-color: #222222 !important;\r\n\tpadding: 0 !important;\r\n}\r\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\r\n\tcolor: #D2527F !important;\r\n\tbackground-color: transparent;\r\n\tfont-weight: 700;\r\n}\r\n.navbar-toggle {\r\n\tborder-radius: 0;\r\n}\r\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\r\n\tbackground-color: #D2527F;\r\n\tborder-color: #D2527F;\r\n}\r\n.navbar-default .navbar-toggle:hover>.icon-bar {\r\n\tbackground-color: #FFF;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"menu\" class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\"> \n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n      <a class=\"navbar-brand\" href=\"index.html\">WPI<strong><span class=\"color\">.</span></strong></a> \n      <p class = \"navbar-text\">Make your life eaiser in WPI</p>\n     </div>\n    \n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a pageScroll href=\"#home\">Home</a></li>\n        <li><a pageScroll href=\"#services-section\" >Shop</a></li>\n        <li><a pageScroll href=\"#works-section\" >Carpooling</a></li>\n        <li><a pageScroll href=\"#about-section\" >New Students</a></li>\n        <li><a pageScroll href=\"#team-section\" >Event</a></li>\n        <li><a pageScroll href=\"#testimonials-section\">Testimonials</a></li>\n        <li><a pageScroll href=\"#contact-section\" >Contact</a></li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse --> \n  </div>\n  <!-- /.container-fluid --> \n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "../../../../../src/app/new-students/new-students.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.example-radio-group {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  #example-radio-button {\r\n    margin: 5px;\r\n    font-weight: bold;\r\n  }\r\n  .example-selected-value {\r\n    margin: 15px 0;  \r\n  }\r\n  article p {\r\ntext-indent:25px;\r\n}\r\n  article h2 {\r\n    color: brown;\r\n}\r\n  body {\r\n    font-family: \"Playfair Display\", serif;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 1.7;\r\n    color: #828282;\r\n    background: #fff;\r\n  }\r\n  #page {\r\n    position: relative;\r\n    overflow-x: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  .offcanvas #page {\r\n    overflow: hidden;\r\n    position: absolute;\r\n  }\r\n  .offcanvas #page:after {\r\n    -webkit-transition: 2s;\r\n    transition: 2s;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 101;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    content: \"\";\r\n  }\r\n  a {\r\n    color: #d1c286;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  a:hover, a:active, a:focus {\r\n    color: #d1c286;\r\n    outline: none;\r\n    text-decoration: none;\r\n  }\r\n  p {\r\n    margin-bottom: 20px;\r\n  }\r\n  .copyrights{\r\n      text-indent:-9999px;\r\n      height:0;\r\n      line-height:0;\r\n      font-size:0;\r\n      overflow:hidden;\r\n  }\r\n  h1, h2, h3, h4, h5, h6, figure {\r\n    color: #000;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n    font-weight: 400;\r\n    margin: 0 0 20px 0;\r\n  }\r\n  ::-webkit-selection {\r\n    color: #fff;\r\n    background: #d1c286;\r\n  }\r\n  ::-moz-selection {\r\n    color: #fff;\r\n    background: #d1c286;\r\n  }\r\n  ::selection {\r\n    color: #fff;\r\n    background: #d1c286;\r\n  }\r\n  .fh5co-nav {\r\n    padding: 18px 0;\r\n    background: #fff;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-nav {\r\n      padding: 20px 0;\r\n    }\r\n  }\r\n  .fh5co-nav #fh5co-logo {\r\n    font-size: 20px;\r\n    margin: 0;\r\n    padding: 0;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n  }\r\n  .fh5co-nav a {\r\n    padding: 5px 10px;\r\n    color: #000;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-nav .menu-1, .fh5co-nav .menu-2 {\r\n      display: none;\r\n    }\r\n  }\r\n  .fh5co-nav .menu-2 li.search {\r\n    float: left;\r\n    width: 83%;\r\n    font-family: \"Playfair Display\", serif;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    padding: 0;\r\n    margin: -5px 0 0 0;\r\n  }\r\n  .fh5co-nav .menu-2 li input[type=text] {\r\n    padding: 6px 10px;\r\n    width: 40%;\r\n    border: none;\r\n    float: right;\r\n    font-size: 13px;\r\n    margin-top: 4px;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  .fh5co-nav .menu-2 li input[type=text]:focus {\r\n    width: 100%;\r\n    outline: none;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n  .fh5co-nav .menu-2 li button {\r\n    margin-top: 4px;\r\n    padding: 5px;\r\n    background: transparent;\r\n    border: none;\r\n  }\r\n  .fh5co-nav .menu-2 li button i {\r\n    color: rgba(0, 0, 0, 0.5);\r\n  }\r\n  .fh5co-nav .menu-2 li button:hover, .fh5co-nav .menu-2 li button:focus {\r\n    background: transparent !important;\r\n  }\r\n  .fh5co-nav .menu-2 li button:hover i, .fh5co-nav .menu-2 li button:focus i {\r\n    color: black;\r\n  }\r\n  .fh5co-nav .menu-2 li.shopping-cart {\r\n    float: right;\r\n  }\r\n  .fh5co-nav .menu-2 li a.cart {\r\n    color: black;\r\n  }\r\n  .fh5co-nav .menu-2 li a.cart span {\r\n    position: relative;\r\n  }\r\n  .fh5co-nav .menu-2 li a.cart span small {\r\n    position: absolute;\r\n    top: -20px;\r\n    right: -15px;\r\n    padding: 10px 6px;\r\n    line-height: 0;\r\n    font-size: 11px;\r\n    background: #d1c286;\r\n    color: white;\r\n    border-radius: 50%;\r\n  }\r\n  .fh5co-nav ul {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  .fh5co-nav ul li {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    display: inline-block;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n  }\r\n  .fh5co-nav ul li a {\r\n    font-size: 13px;\r\n    padding: 30px 10px;\r\n    text-transform: uppercase;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  .fh5co-nav ul li a:hover, .fh5co-nav ul li a:focus, .fh5co-nav ul li a:active {\r\n    color: black;\r\n  }\r\n  .fh5co-nav ul li a.cart {\r\n    color: black;\r\n  }\r\n  .fh5co-nav ul li a.cart span {\r\n    position: relative;\r\n  }\r\n  .fh5co-nav ul li a.cart span small {\r\n    position: absolute;\r\n    top: -20px;\r\n    right: -15px;\r\n    padding: 10px 6px;\r\n    line-height: 0;\r\n    font-size: 11px;\r\n    background: #d1c286;\r\n    color: white;\r\n    border-radius: 50%;\r\n  }\r\n  .fh5co-nav ul li.has-dropdown {\r\n    position: relative;\r\n  }\r\n  .fh5co-nav ul li.has-dropdown .dropdown {\r\n    width: 150px;\r\n    -webkit-box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);\r\n    box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);\r\n    z-index: 1002;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 0;\r\n    text-align: left;\r\n    background: #000;\r\n    padding: 20px;\r\n    border-radius: 4px;\r\n    -webkit-transition: 0s;\r\n    transition: 0s;\r\n  }\r\n  .fh5co-nav ul li.active > a {\r\n    color: #000 !important;\r\n  }\r\n  .fh5co-nav ul li .form-group {\r\n    border: 1px solid red;\r\n    width: 100%;\r\n  }\r\n  #fh5co-hero .btn {\r\n    font-size: 24px;\r\n  }\r\n  #fh5co-hero .btn.btn-primary {\r\n    padding: 14px 30px !important;\r\n  }\r\n  #fh5co-hero .flexslider {\r\n    border: none;\r\n    z-index: 1;\r\n    margin-bottom: 0;\r\n  }\r\n  #fh5co-hero .flexslider .slides {\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n  #fh5co-hero .flexslider .slides li {\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    min-height: 700px;\r\n  }\r\n  #fh5co-hero .flexslider .flex-control-nav {\r\n    bottom: 40px;\r\n    z-index: 1000;\r\n  }\r\n  #fh5co-hero .flexslider .flex-control-nav li a {\r\n    background: rgba(255, 255, 255, 0.2);\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    width: 12px;\r\n    height: 12px;\r\n    cursor: pointer;\r\n  }\r\n  #fh5co-hero .flexslider .flex-control-nav li a.flex-active {\r\n    cursor: pointer;\r\n    background: rgba(255, 255, 255, 0.7);\r\n  }\r\n  #fh5co-hero .flexslider .flex-direction-nav {\r\n    display: none;\r\n  }\r\n  #fh5co-hero .flexslider .slider-text {\r\n    display: table;\r\n    opacity: 0;\r\n    min-height: 700px;\r\n  }\r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    min-height: 700px;\r\n  }\r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner h2 {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    color: #000;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-hero .flexslider .slider-text > .slider-text-inner h2 {\r\n      font-size: 40px;\r\n    }\r\n  }\r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner .desc {\r\n    background: rgba(255, 255, 255, 0.9);\r\n    padding: 40px;\r\n  }\r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner .desc .price {\r\n    font-size: 14px;\r\n    letter-spacing: 3px;\r\n    display: block;\r\n    margin-bottom: 20px;\r\n  }\r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner .btn {\r\n    font-size: 18px;\r\n  }\r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner .fh5co-lead {\r\n    font-size: 20px;\r\n    color: #fff;\r\n  }\r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner .fh5co-lead .icon-heart {\r\n    color: #d9534f;\r\n  }\r\n  #fh5co-header,\r\n  #fh5co-counter,\r\n  .fh5co-bg {\r\n    background-size: cover;\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n  }\r\n  .fh5co-bg {\r\n    background-size: cover;\r\n    background-position: center center;\r\n    position: relative;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n  }\r\n  #fh5co-counter {\r\n    height: 500px;\r\n  }\r\n  #fh5co-counter .display-t,\r\n  #fh5co-counter .display-tc {\r\n    height: 500px;\r\n    display: table;\r\n    width: 100%;\r\n  }\r\n  @media screen and (max-width: 992px) {\r\n    #fh5co-counter {\r\n      height: inherit;\r\n      padding: 7em 0;\r\n    }\r\n    #fh5co-counter .display-t,\r\n    #fh5co-counter .display-tc {\r\n      height: inherit;\r\n    }\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-counter {\r\n      height: inherit;\r\n      padding: 7em 0;\r\n    }\r\n    #fh5co-counter .display-t,\r\n    #fh5co-counter .display-tc {\r\n      height: inherit;\r\n    }\r\n  }\r\n  .fh5co-cover {\r\n    height: 800px;\r\n    background-size: cover;\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n  .fh5co-cover .overlay {\r\n    z-index: 0;\r\n    position: absolute;\r\n    bottom: 0;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n  }\r\n  .fh5co-cover > .fh5co-container {\r\n    position: relative;\r\n    z-index: 10;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-cover {\r\n      height: 600px;\r\n    }\r\n  }\r\n  .fh5co-cover .display-t,\r\n  .fh5co-cover .display-tc {\r\n    z-index: 9;\r\n    height: 900px;\r\n    display: table;\r\n    width: 100%;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-cover .display-t,\r\n    .fh5co-cover .display-tc {\r\n      height: 600px;\r\n    }\r\n  }\r\n  .fh5co-cover.fh5co-cover-sm {\r\n    height: 600px;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-cover.fh5co-cover-sm {\r\n      height: 400px;\r\n    }\r\n  }\r\n  .fh5co-cover.fh5co-cover-sm .display-t,\r\n  .fh5co-cover.fh5co-cover-sm .display-tc {\r\n    height: 600px;\r\n    display: table;\r\n    width: 100%;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-cover.fh5co-cover-sm .display-t,\r\n    .fh5co-cover.fh5co-cover-sm .display-tc {\r\n      height: 400px;\r\n    }\r\n  }\r\n  .about-content {\r\n    margin-bottom: 7em;\r\n  }\r\n  .about-content img {\r\n    border: 1px solid rgba(0, 0, 0, 0.05);\r\n    padding: 10px;\r\n  }\r\n  .about-content .desc {\r\n    margin-bottom: 3em;\r\n  }\r\n  .fh5co-staff {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n  }\r\n  .fh5co-staff img {\r\n    width: 170px;\r\n    margin-bottom: 20px;\r\n    border-radius: 50%;\r\n  }\r\n  .fh5co-staff h3 {\r\n    font-size: 24px;\r\n    margin-bottom: 5px;\r\n  }\r\n  .fh5co-staff p {\r\n    margin-bottom: 30px;\r\n  }\r\n  .fh5co-staff .role {\r\n    color: #bfbfbf;\r\n    margin-bottom: 30px;\r\n    font-weight: normal;\r\n    display: block;\r\n  }\r\n  .fh5co-social-icons {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  .fh5co-social-icons li {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    display: -moz-inline-stack;\r\n    display: inline-block;\r\n    zoom: 1;\r\n    *display: inline;\r\n  }\r\n  .fh5co-social-icons li a {\r\n    display: -moz-inline-stack;\r\n    display: inline-block;\r\n    zoom: 1;\r\n    *display: inline;\r\n    color: #d1c286;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n  }\r\n  .fh5co-social-icons li a i {\r\n    font-size: 20px;\r\n  }\r\n  .fh5co-contact-info ul {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  .fh5co-contact-info ul li {\r\n    padding: 0 0 0 40px;\r\n    margin: 0 0 30px 0;\r\n    list-style: none;\r\n    position: relative;\r\n  }\r\n  .fh5co-contact-info ul li:before {\r\n    color: #d1c286;\r\n    position: absolute;\r\n    left: 0;\r\n    top: .05em;\r\n    font-family: 'icomoon';\r\n    speak: none;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    line-height: 1;\r\n    /* Better Font Rendering =========== */\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n  .fh5co-contact-info ul li.address:before {\r\n    font-size: 30px;\r\n    content: \"\\E9D1\";\r\n  }\r\n  .fh5co-contact-info ul li.phone:before {\r\n    font-size: 23px;\r\n    content: \"\\E9F4\";\r\n  }\r\n  .fh5co-contact-info ul li.email:before {\r\n    font-size: 23px;\r\n    content: \"\\E9DA\";\r\n  }\r\n  .fh5co-contact-info ul li.url:before {\r\n    font-size: 23px;\r\n    content: \"\\E9AF\";\r\n  }\r\n  #fh5co-header .display-tc,\r\n  #fh5co-counter .display-tc,\r\n  .fh5co-cover .display-tc {\r\n    display: table-cell !important;\r\n    vertical-align: middle;\r\n  }\r\n  #fh5co-header .display-tc h1, #fh5co-header .display-tc h2,\r\n  #fh5co-counter .display-tc h1,\r\n  #fh5co-counter .display-tc h2,\r\n  .fh5co-cover .display-tc h1,\r\n  .fh5co-cover .display-tc h2 {\r\n    margin: 0;\r\n    padding: 0;\r\n    color: white;\r\n  }\r\n  #fh5co-header .display-tc h1,\r\n  #fh5co-counter .display-tc h1,\r\n  .fh5co-cover .display-tc h1 {\r\n    margin-bottom: 0px;\r\n    font-size: 60px;\r\n    line-height: 1.5;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-header .display-tc h1,\r\n    #fh5co-counter .display-tc h1,\r\n    .fh5co-cover .display-tc h1 {\r\n      font-size: 40px;\r\n    }\r\n  }\r\n  #fh5co-header .display-tc h2,\r\n  #fh5co-counter .display-tc h2,\r\n  .fh5co-cover .display-tc h2 {\r\n    font-size: 20px;\r\n    line-height: 1.5;\r\n    margin-bottom: 30px;\r\n    font-family: \"Playfair Display\", serif;\r\n  }\r\n  #fh5co-header .display-tc h2 a,\r\n  #fh5co-counter .display-tc h2 a,\r\n  .fh5co-cover .display-tc h2 a {\r\n    color: rgba(255, 255, 255, 0.7);\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.6);\r\n  }\r\n  #fh5co-header .display-tc .btn,\r\n  #fh5co-counter .display-tc .btn,\r\n  .fh5co-cover .display-tc .btn {\r\n    padding: 15px 30px;\r\n    background: #d1c286 !important;\r\n    color: #fff;\r\n    border: none !important;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n  }\r\n  #fh5co-header .display-tc .btn:hover,\r\n  #fh5co-counter .display-tc .btn:hover,\r\n  .fh5co-cover .display-tc .btn:hover {\r\n    background: #d1c286 !important;\r\n    -webkit-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75) !important;\r\n    box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75) !important;\r\n  }\r\n  #fh5co-header .display-tc .form-inline .form-group,\r\n  #fh5co-counter .display-tc .form-inline .form-group,\r\n  .fh5co-cover .display-tc .form-inline .form-group {\r\n    width: 100% !important;\r\n    margin-bottom: 10px;\r\n  }\r\n  #fh5co-header .display-tc .form-inline .form-group .form-control,\r\n  #fh5co-counter .display-tc .form-inline .form-group .form-control,\r\n  .fh5co-cover .display-tc .form-inline .form-group .form-control {\r\n    width: 100%;\r\n    background: #fff;\r\n    border: none;\r\n  }\r\n  #fh5co-counter {\r\n    text-align: center;\r\n  }\r\n  #fh5co-counter .counter {\r\n    font-size: 50px;\r\n    margin-bottom: 10px;\r\n    color: #000;\r\n    font-weight: 100;\r\n    display: block;\r\n  }\r\n  #fh5co-counter .counter-label {\r\n    margin-bottom: 0;\r\n    text-transform: uppercase;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    letter-spacing: 1px;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n  }\r\n  #fh5co-counter .feature-center {\r\n    padding: 40px 20px;\r\n    background: rgba(255, 255, 255, 0.8);\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-counter .feature-center {\r\n      margin-bottom: 50px;\r\n    }\r\n  }\r\n  #fh5co-counter .icon {\r\n    width: 70px;\r\n    height: 70px;\r\n    text-align: center;\r\n    background: #d1c286;\r\n    -webkit-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);\r\n    box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);\r\n    margin-bottom: 20px;\r\n  }\r\n  #fh5co-counter .icon i {\r\n    height: 70px;\r\n    color: #fff;\r\n  }\r\n  #fh5co-counter .icon i:before {\r\n    display: block;\r\n    text-align: center;\r\n    margin-left: 3px;\r\n  }\r\n  .fh5co-bg-section {\r\n    background: rgba(0, 0, 0, 0.05);\r\n  }\r\n  #fh5co-services,\r\n  #fh5co-started,\r\n  #fh5co-testimonial,\r\n  #fh5co-started,\r\n  #fh5co-product,\r\n  #fh5co-about,\r\n  #fh5co-contact,\r\n  #fh5co-footer {\r\n    padding: 7em 0;\r\n    clear: both;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-services,\r\n    #fh5co-started,\r\n    #fh5co-testimonial,\r\n    #fh5co-started,\r\n    #fh5co-product,\r\n    #fh5co-about,\r\n    #fh5co-contact,\r\n    #fh5co-footer {\r\n      padding: 3em 0;\r\n    }\r\n  }\r\n  .feature-center {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 40px;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    .feature-center {\r\n      margin-bottom: 50px;\r\n    }\r\n  }\r\n  .feature-center .desc {\r\n    padding-left: 180px;\r\n  }\r\n  .feature-center .icon {\r\n    width: 90px;\r\n    height: 90px;\r\n    background: #d1c286;\r\n    display: table;\r\n    text-align: center;\r\n    margin: 0 auto 30px auto;\r\n    border-radius: 50%;\r\n  }\r\n  .feature-center .icon i {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    height: 90px;\r\n    font-size: 40px;\r\n    line-height: 40px;\r\n    color: #fff;\r\n  }\r\n  .feature-center p, .feature-center h3 {\r\n    margin-bottom: 30px;\r\n  }\r\n  .feature-center h3 {\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n    font-weight: 600;\r\n  }\r\n  .product {\r\n    margin-bottom: 40px;\r\n  }\r\n  .product .product-grid {\r\n    background-size: cover;\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    height: 350px;\r\n    margin-bottom: 20px;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  .product .product-grid .sale {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n    padding: 10px;\r\n    z-index: 100;\r\n    background: #d1c286;\r\n    color: #fff;\r\n    border-radius: 50%;\r\n  }\r\n  .product .product-grid .inner {\r\n    display: table;\r\n    height: 350px;\r\n    width: 100%;\r\n    opacity: 0;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    .product .product-grid .inner {\r\n      opacity: 1;\r\n      background: transparent;\r\n    }\r\n  }\r\n  .product .product-grid .inner p {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n  .product .product-grid .inner p .icon {\r\n    padding: 7px 10px;\r\n    color: #fff;\r\n    background: #d1c286;\r\n  }\r\n  .product .product-grid .inner p .icon:hover, .product .product-grid .inner p .icon:focus {\r\n    color: #d1c286;\r\n    background: #fff;\r\n  }\r\n  .product .desc h3 {\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n    line-height: 24px;\r\n  }\r\n  .product .desc h3 a {\r\n    color: #000;\r\n  }\r\n  .product .desc .price {\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n  }\r\n  .product:hover .product-grid, .product:focus .product-grid {\r\n    -webkit-box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\r\n    -ms-box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\r\n    -o-box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\r\n    box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\r\n  }\r\n  .product:hover .inner, .product:focus .inner {\r\n    opacity: 1;\r\n  }\r\n  .product:hover .desc h3 a, .product:focus .desc h3 a {\r\n    color: #d1c286;\r\n  }\r\n  .product-carousel {\r\n    margin-bottom: 7em;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-nav {\r\n    clear: both;\r\n    margin: 0 0 3em 0;\r\n    padding: 3px;\r\n    float: left;\r\n    width: 100%;\r\n    background: #f2f2f2;\r\n    border-radius: 4px;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-nav li {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 33.33%;\r\n    text-align: center;\r\n    list-style: none;\r\n    display: -moz-inline-stack;\r\n    display: inline-block;\r\n    zoom: 1;\r\n    *display: inline;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-nav li .icon {\r\n    font-size: 30px;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-nav li a {\r\n    padding: 20px;\r\n    width: 100%;\r\n    float: left;\r\n    border-radius: 4px;\r\n    color: #b3b3b3;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-nav li a:hover {\r\n    color: #4d4d4d;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-nav li.active a {\r\n    background: #fff;\r\n    color: #d1c286;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-content-wrap {\r\n    clear: both;\r\n    position: relative;\r\n    top: 70px;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-content-wrap .tab-content {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-content-wrap .tab-content.active {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-content-wrap .tab-content .price {\r\n    letter-spacing: 2px;\r\n    border: 2px solid #d1c286;\r\n    display: inline-block;\r\n    margin-bottom: 20px;\r\n    padding: 7px 20px 10px 20px;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-content-wrap ul {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-bottom: 3em;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-content-wrap ul li {\r\n    list-style: none;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n    padding-left: 30px;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-content-wrap ul li:before {\r\n    font-family: 'icomoon';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    content: '\\E116';\r\n  }\r\n  .fh5co-tabs .fh5co-tab-content-wrap .feed {\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 7em;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-content-wrap .feed > div {\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 1em;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-content-wrap .feed > div blockquote {\r\n    border-left: 0;\r\n    padding: 20px;\r\n    background: rgba(0, 0, 0, 0.04);\r\n  }\r\n  .fh5co-tabs .fh5co-tab-content-wrap .feed > div h3 {\r\n    font-family: \"Playfair Display\", serif;\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    padding-right: 20px;\r\n  }\r\n  .fh5co-tabs .fh5co-tab-content-wrap .feed > div .rate {\r\n    color: #ffba00;\r\n  }\r\n  .fh5co-tabs .icon-xlg {\r\n    font-size: 400px;\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-tabs .icon-xlg {\r\n      font-size: 300px;\r\n    }\r\n  }\r\n  @media screen and (max-width: 480px) {\r\n    .fh5co-tabs .icon-xlg {\r\n      font-size: 200px;\r\n    }\r\n  }\r\n  .fh5co-tabs .icon-xlg i {\r\n    color: #d1c286;\r\n  }\r\n  .fh5co-heading {\r\n    margin-bottom: 5em;\r\n  }\r\n  .fh5co-heading.fh5co-heading-sm {\r\n    margin-bottom: 2em;\r\n  }\r\n  .fh5co-heading h2 {\r\n    font-size: 24px;\r\n    margin-bottom: 20px;\r\n    line-height: 1.5;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    color: #000;\r\n  }\r\n  .fh5co-heading p {\r\n    font-size: 18px;\r\n    line-height: 1.5;\r\n    color: #828282;\r\n  }\r\n  .fh5co-heading span {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    letter-spacing: 2px;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n  }\r\n  #fh5co-testimonial {\r\n    background: #efefef;\r\n  }\r\n  #fh5co-testimonial .testimony-slide {\r\n    text-align: center;\r\n  }\r\n  #fh5co-testimonial .testimony-slide span {\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n    font-weight: 700;\r\n    display: block;\r\n  }\r\n  #fh5co-testimonial .testimony-slide figure {\r\n    margin-bottom: 10px;\r\n    display: -moz-inline-stack;\r\n    display: inline-block;\r\n    zoom: 1;\r\n    *display: inline;\r\n  }\r\n  #fh5co-testimonial .testimony-slide figure img {\r\n    width: 100px;\r\n    border-radius: 50%;\r\n  }\r\n  #fh5co-testimonial .testimony-slide blockquote {\r\n    border: none;\r\n    margin: 30px auto;\r\n    width: 50%;\r\n    position: relative;\r\n    padding: 0;\r\n  }\r\n  @media screen and (max-width: 992px) {\r\n    #fh5co-testimonial .testimony-slide blockquote {\r\n      width: 100%;\r\n    }\r\n  }\r\n  #fh5co-testimonial .arrow-thumb {\r\n    position: absolute;\r\n    top: 40%;\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  #fh5co-testimonial .arrow-thumb a {\r\n    font-size: 32px;\r\n    color: #dadada;\r\n  }\r\n  #fh5co-testimonial .arrow-thumb a:hover, #fh5co-testimonial .arrow-thumb a:focus, #fh5co-testimonial .arrow-thumb a:active {\r\n    text-decoration: none;\r\n  }\r\n  #fh5co-started {\r\n    background: #d1c286;\r\n  }\r\n  #fh5co-started .fh5co-heading h2 {\r\n    color: #fff;\r\n    margin-bottom: 20px !important;\r\n  }\r\n  #fh5co-started .fh5co-heading p {\r\n    color: rgba(255, 255, 255, 0.6);\r\n  }\r\n  #fh5co-started .form-control {\r\n    background: rgba(255, 255, 255, 0.2);\r\n    border: none !important;\r\n    color: #fff;\r\n    font-size: 16px !important;\r\n    width: 100%;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  #fh5co-started .form-control::-webkit-input-placeholder {\r\n    color: #fff;\r\n  }\r\n  #fh5co-started .form-control:-moz-placeholder {\r\n    /* Firefox 18- */\r\n    color: #fff;\r\n  }\r\n  #fh5co-started .form-control::-moz-placeholder {\r\n    /* Firefox 19+ */\r\n    color: #fff;\r\n  }\r\n  #fh5co-started .form-control:-ms-input-placeholder {\r\n    color: #fff;\r\n  }\r\n  #fh5co-started .form-control:focus {\r\n    background: rgba(255, 255, 255, 0.3);\r\n  }\r\n  #fh5co-started .btn {\r\n    height: 54px;\r\n    border: none !important;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    color: #fff;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n  }\r\n  #fh5co-started .form-inline .form-group {\r\n    width: 100% !important;\r\n    margin-bottom: 10px;\r\n  }\r\n  #fh5co-started .form-inline .form-group .form-control {\r\n    width: 100%;\r\n  }\r\n  #fh5co-footer {\r\n    background: #efefef;\r\n  }\r\n  #fh5co-footer .fh5co-footer-links {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  #fh5co-footer .fh5co-footer-links li {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n  }\r\n  #fh5co-footer .fh5co-footer-links li a {\r\n    color: #000;\r\n    text-decoration: none;\r\n  }\r\n  #fh5co-footer .fh5co-footer-links li a:hover {\r\n    text-decoration: underline;\r\n  }\r\n  #fh5co-footer .fh5co-widget {\r\n    margin-bottom: 30px;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-footer .fh5co-widget {\r\n      text-align: left;\r\n    }\r\n  }\r\n  #fh5co-footer .fh5co-widget h3 {\r\n    margin-bottom: 15px;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n  }\r\n  #fh5co-footer .copyright .block {\r\n    display: block;\r\n  }\r\n  #map {\r\n    height: 500px;\r\n    width: 100%;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    #map {\r\n      height: 400px;\r\n    }\r\n  }\r\n  @media screen and (max-width: 480px) {\r\n    #map {\r\n      height: 200px;\r\n    }\r\n  }\r\n  #fh5co-offcanvas {\r\n    position: absolute;\r\n    z-index: 1901;\r\n    width: 270px;\r\n    background: black;\r\n    top: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    padding: 45px 40px 40px 40px;\r\n    overflow-y: auto;\r\n    display: none;\r\n    -webkit-transform: translateX(270px);\r\n    transform: translateX(270px);\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-offcanvas {\r\n      display: block;\r\n    }\r\n  }\r\n  .offcanvas #fh5co-offcanvas {\r\n    -webkit-transform: translateX(0px);\r\n    transform: translateX(0px);\r\n  }\r\n  #fh5co-offcanvas a {\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n  #fh5co-offcanvas a:hover {\r\n    color: rgba(255, 255, 255, 0.8);\r\n  }\r\n  #fh5co-offcanvas ul {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  #fh5co-offcanvas ul li {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n  }\r\n  #fh5co-offcanvas ul li.search {\r\n    float: left;\r\n    width: 100%;\r\n    font-family: \"Playfair Display\", serif;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    padding: 0;\r\n    margin: 5px 0 0 0;\r\n  }\r\n  #fh5co-offcanvas ul li input[type=text] {\r\n    padding: 6px 10px;\r\n    width: 100%;\r\n    border: 1px solid rgba(255, 255, 255, 0.1);\r\n    float: right;\r\n    font-size: 13px;\r\n    margin-top: 4px;\r\n    background: transparent;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  #fh5co-offcanvas ul li input[type=text]:focus {\r\n    width: 100%;\r\n    outline: none;\r\n  }\r\n  #fh5co-offcanvas ul li button {\r\n    margin-top: 4px;\r\n    padding: 6px;\r\n    background: rgba(255, 255, 255, 0.1);\r\n    border: 1px solid rgba(255, 255, 255, 0.1);\r\n    margin-left: 1px;\r\n  }\r\n  #fh5co-offcanvas ul li button i {\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n  #fh5co-offcanvas ul li button:hover, #fh5co-offcanvas ul li button:focus {\r\n    background: transparent !important;\r\n  }\r\n  #fh5co-offcanvas ul li button:hover i, #fh5co-offcanvas ul li button:focus i {\r\n    color: white;\r\n  }\r\n  #fh5co-offcanvas ul li.shopping-cart {\r\n    float: left;\r\n  }\r\n  #fh5co-offcanvas ul li a.cart {\r\n    display: block;\r\n    margin-top: 30px;\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n  #fh5co-offcanvas ul li a.cart span {\r\n    position: relative;\r\n  }\r\n  #fh5co-offcanvas ul li a.cart span small {\r\n    position: absolute;\r\n    top: -20px;\r\n    right: -15px;\r\n    padding: 10px 6px;\r\n    line-height: 0;\r\n    font-size: 11px;\r\n    background: #d1c286;\r\n    color: white;\r\n    border-radius: 50%;\r\n  }\r\n  #fh5co-offcanvas ul li > ul {\r\n    padding-left: 20px;\r\n    display: none;\r\n  }\r\n  #fh5co-offcanvas ul li.offcanvas-has-dropdown > a {\r\n    display: block;\r\n    position: relative;\r\n  }\r\n  #fh5co-offcanvas ul li.offcanvas-has-dropdown > a:after {\r\n    position: absolute;\r\n    right: 0px;\r\n    font-family: 'icomoon';\r\n    speak: none;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    line-height: 1;\r\n    /* Better Font Rendering =========== */\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    content: \"\\E921\";\r\n    font-size: 20px;\r\n    color: rgba(255, 255, 255, 0.2);\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  #fh5co-offcanvas ul li.offcanvas-has-dropdown.active a:after {\r\n    -webkit-transform: rotate(-180deg);\r\n    transform: rotate(-180deg);\r\n  }\r\n  .uppercase {\r\n    font-size: 14px;\r\n    color: #000;\r\n    margin-bottom: 10px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n  }\r\n  .gototop {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    z-index: 999;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  .gototop.active {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n  .gototop a {\r\n    width: 50px;\r\n    height: 50px;\r\n    display: table;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 4px;\r\n  }\r\n  .gototop a i {\r\n    height: 50px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n  .gototop a:hover, .gototop a:active, .gototop a:focus {\r\n    text-decoration: none;\r\n    outline: none;\r\n  }\r\n  .fh5co-nav-toggle {\r\n    width: 25px;\r\n    height: 25px;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n  }\r\n  .fh5co-nav-toggle.active i::before, .fh5co-nav-toggle.active i::after {\r\n    background: #444;\r\n  }\r\n  .fh5co-nav-toggle:hover, .fh5co-nav-toggle:focus, .fh5co-nav-toggle:active {\r\n    outline: none;\r\n    border-bottom: none !important;\r\n  }\r\n  .fh5co-nav-toggle i {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 25px;\r\n    height: 2px;\r\n    color: #252525;\r\n    font: bold 14px/.4 Helvetica;\r\n    text-transform: uppercase;\r\n    text-indent: -55px;\r\n    background: #252525;\r\n    -webkit-transition: all .2s ease-out;\r\n    transition: all .2s ease-out;\r\n  }\r\n  .fh5co-nav-toggle i::before, .fh5co-nav-toggle i::after {\r\n    content: '';\r\n    width: 25px;\r\n    height: 2px;\r\n    background: #252525;\r\n    position: absolute;\r\n    left: 0;\r\n    -webkit-transition: all .2s ease-out;\r\n    transition: all .2s ease-out;\r\n  }\r\n  .fh5co-nav-toggle.fh5co-nav-white > i {\r\n    color: #fff;\r\n    background: #000;\r\n  }\r\n  .fh5co-nav-toggle.fh5co-nav-white > i::before, .fh5co-nav-toggle.fh5co-nav-white > i::after {\r\n    background: #000;\r\n  }\r\n  .fh5co-nav-toggle i::before {\r\n    top: -7px;\r\n  }\r\n  .fh5co-nav-toggle i::after {\r\n    bottom: -7px;\r\n  }\r\n  .fh5co-nav-toggle:hover i::before {\r\n    top: -10px;\r\n  }\r\n  .fh5co-nav-toggle:hover i::after {\r\n    bottom: -10px;\r\n  }\r\n  .fh5co-nav-toggle.active i {\r\n    background: transparent;\r\n  }\r\n  .fh5co-nav-toggle.active i::before {\r\n    background: #fff;\r\n    top: 0;\r\n    -webkit-transform: rotateZ(45deg);\r\n    transform: rotateZ(45deg);\r\n  }\r\n  .fh5co-nav-toggle.active i::after {\r\n    background: #fff;\r\n    bottom: 0;\r\n    -webkit-transform: rotateZ(-45deg);\r\n    transform: rotateZ(-45deg);\r\n  }\r\n  .fh5co-nav-toggle {\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 10px;\r\n    z-index: 21;\r\n    padding: 6px 0 0 0;\r\n    display: block;\r\n    margin: 0 auto;\r\n    display: none;\r\n    height: 44px;\r\n    width: 44px;\r\n    z-index: 2001;\r\n    border-bottom: none !important;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-nav-toggle {\r\n      display: block;\r\n    }\r\n  }\r\n  .btn {\r\n    margin-right: 4px;\r\n    margin-bottom: 4px;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    border-radius: 2px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    padding: 8px 20px;\r\n  }\r\n  .btn.btn-md {\r\n    padding: 8px 20px !important;\r\n  }\r\n  .btn.btn-lg {\r\n    padding: 18px 36px !important;\r\n  }\r\n  .btn:hover, .btn:active, .btn:focus {\r\n    -webkit-box-shadow: none !important;\r\n            box-shadow: none !important;\r\n    outline: none !important;\r\n  }\r\n  .btn-primary {\r\n    background: #d1c286;\r\n    color: #fff;\r\n    border: 2px solid #d1c286;\r\n  }\r\n  .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n    background: #d8cb98 !important;\r\n    border-color: #d8cb98 !important;\r\n  }\r\n  .btn-primary.btn-outline {\r\n    background: transparent;\r\n    color: #d1c286;\r\n    border: 2px solid #d1c286;\r\n  }\r\n  .btn-primary.btn-outline:hover, .btn-primary.btn-outline:focus, .btn-primary.btn-outline:active {\r\n    background: #d1c286;\r\n    color: #fff;\r\n  }\r\n  .btn-success {\r\n    background: #5cb85c;\r\n    color: #fff;\r\n    border: 2px solid #5cb85c;\r\n  }\r\n  .btn-success:hover, .btn-success:focus, .btn-success:active {\r\n    background: #4cae4c !important;\r\n    border-color: #4cae4c !important;\r\n  }\r\n  .btn-success.btn-outline {\r\n    background: transparent;\r\n    color: #5cb85c;\r\n    border: 2px solid #5cb85c;\r\n  }\r\n  .btn-success.btn-outline:hover, .btn-success.btn-outline:focus, .btn-success.btn-outline:active {\r\n    background: #5cb85c;\r\n    color: #fff;\r\n  }\r\n  .btn-info {\r\n    background: #5bc0de;\r\n    color: #fff;\r\n    border: 2px solid #5bc0de;\r\n  }\r\n  .btn-info:hover, .btn-info:focus, .btn-info:active {\r\n    background: #46b8da !important;\r\n    border-color: #46b8da !important;\r\n  }\r\n  .btn-info.btn-outline {\r\n    background: transparent;\r\n    color: #5bc0de;\r\n    border: 2px solid #5bc0de;\r\n  }\r\n  .btn-info.btn-outline:hover, .btn-info.btn-outline:focus, .btn-info.btn-outline:active {\r\n    background: #5bc0de;\r\n    color: #fff;\r\n  }\r\n  .btn-warning {\r\n    background: #f0ad4e;\r\n    color: #fff;\r\n    border: 2px solid #f0ad4e;\r\n  }\r\n  .btn-warning:hover, .btn-warning:focus, .btn-warning:active {\r\n    background: #eea236 !important;\r\n    border-color: #eea236 !important;\r\n  }\r\n  .btn-warning.btn-outline {\r\n    background: transparent;\r\n    color: #f0ad4e;\r\n    border: 2px solid #f0ad4e;\r\n  }\r\n  .btn-warning.btn-outline:hover, .btn-warning.btn-outline:focus, .btn-warning.btn-outline:active {\r\n    background: #f0ad4e;\r\n    color: #fff;\r\n  }\r\n  .btn-danger {\r\n    background: #d9534f;\r\n    color: #fff;\r\n    border: 2px solid #d9534f;\r\n  }\r\n  .btn-danger:hover, .btn-danger:focus, .btn-danger:active {\r\n    background: #d43f3a !important;\r\n    border-color: #d43f3a !important;\r\n  }\r\n  .btn-danger.btn-outline {\r\n    background: transparent;\r\n    color: #d9534f;\r\n    border: 2px solid #d9534f;\r\n  }\r\n  .btn-danger.btn-outline:hover, .btn-danger.btn-outline:focus, .btn-danger.btn-outline:active {\r\n    background: #d9534f;\r\n    color: #fff;\r\n  }\r\n  .btn-outline {\r\n    background: none;\r\n    border: 2px solid gray;\r\n    font-size: 16px;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  .btn-outline:hover, .btn-outline:focus, .btn-outline:active {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n  }\r\n  .btn.with-arrow {\r\n    position: relative;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  .btn.with-arrow i {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 50%;\r\n    margin-top: -8px;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n  }\r\n  .btn.with-arrow:hover {\r\n    padding-right: 50px;\r\n  }\r\n  .btn.with-arrow:hover i {\r\n    color: #fff;\r\n    right: 18px;\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n  .form-control {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    background: transparent;\r\n    border: 2px solid rgba(0, 0, 0, 0.1);\r\n    height: 54px;\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n  }\r\n  .form-control:active, .form-control:focus {\r\n    outline: none;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border-color: #d1c286;\r\n  }\r\n  .row-pb-md {\r\n    padding-bottom: 4em !important;\r\n  }\r\n  .row-pb-sm {\r\n    padding-bottom: 2em !important;\r\n  }\r\n  .pageButton {\r\n    margin: 0 auto;\r\n  }\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-students/new-students.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a [routerLink]=\"['']\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li class=\"has-dropdown\">\n                <a href=\"product.html\">Shop</a>\n                <ul class=\"dropdown\">\n                  <li>\n                    <a href=\"single.html\">Single Shop</a>\n                  </li>\n                </ul>\n              </li>\n              <li>\n                <a href=\"about.html\">About</a>\n              </li>\n              <li class=\"has-dropdown\">\n                <a href=\"services.html\">Services</a>\n                <ul class=\"dropdown\">\n                  <li>\n                    <a href=\"#\">Web Design</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">eCommerce</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Branding</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">API</a>\n                  </li>\n                </ul>\n              </li>\n              <li>\n                <a href=\"contact.html\">Contact</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\n            <ul>\n              <li class=\"search\">\n                <div class=\"input-group\">\n                  <input type=\"text\" placeholder=\"Search..\">\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-primary\" type=\"button\">\n                      <i class=\"icon-search\"></i>\n                    </button>\n                  </span>\n                </div>\n              </li>\n              <li class=\"shopping-cart\">\n                <a href=\"#\" class=\"cart\">\n                  <span>\n                    <small>0</small>\n                    <i class=\"icon-shopping-cart\"></i>\n                  </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n    </nav>\n\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>New Students Survival Guide</h1>\n                <h2>Prepare your life in WPI</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <span>Made by WPI CSSA</span>\n            <h2>WPI CSSA OFFICAL GUIDE</h2>\n            <p>If there are something unclear to you, please let us know.\n            </p>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-3 choice\">\n            <div class=\"product\">\n              <h3>\n                <i>Catalog:</i>\n              </h3>\n            </div>\n            <mat-radio-group class=\"example-radio-group\" id =\"example-radio-group\" [(ngModel)]=\"selected\">\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let index of Indexs\" [value]=\"index\">\n                {{index}}\n              </mat-radio-button>\n            </mat-radio-group>\n            <div class=\"example-selected-value\">Your favorite season is: {{selected}}</div>\n          </div>\n\n          <div class=\"col-md-9 text-center\">\n            <article [ngSwitch]=\"selected\">\n              <div *ngSwitchCase=\"'Prelude'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <p align=\"left\">亲爱的同学:</p>\n                <p align=\"left\">你好!</p>\n                <p align=\"justify\">\n                  首先我们代表WPI中国学生学者联谊会Chinese Students & Scholars Association(CSSA)欢迎您来WPI学习深造! WPI地处美国历史最悠久的马萨诸塞州,不仅人文气息浓厚,而且高科技产业由于众多大学的支撑而非常发达。对于WPI的同学来说,无论理工文商,这里都是学习和工作的理想地点。\n                </p>\n                <p align=\"justify\">\n                  WPI CSSA主要是由来自中国的学生和学者组成的志愿性组织。目前我们已有超过300名成员,其中包括学生、教授、访问学者及家属等。CSSA的主要任务是为中国学生学者提供一些生活和学习上的帮助,包括接新生、帮助新生安顿和适应这里的生活、举办中秋晚会、春节晚会等具有中国特色的活动等等。\n                </p>\n                <p align=\"justify\">\n                  这本新生手册主要是为了帮助刚来到美国,来到Worcester的新同学、朋友们尽快地适应这里的生活、学习和工作。本手册经过WPI中国学生学者联谊会成员们的共同努力制作而成。这里, 我们向所有参与编写和校正的同学们表示深深的感谢!\n                </p>\n                <p align=\"justify\">\n                  本手册中不足之处恳请大家及时指正,我们会不断地更新和完善。本手册中出现的一些网上购物地点或者订机票代理等的电话,完全是同学们平时积累的经验所得,不存在任何商业广告行为。\n                </p>\n                <p align=\"justify\">\n                  我们也真诚地希望能有更多热心的同学、朋友们加入WPI中国学生学者联谊会,互相帮助,共同努力, 更好地为这里的中国学生学者们服务!\n                </p>\n                <p align=\"justify\">\n                  最后, 祝大家在WPI过得愉快、充实!\n                </p>\n                <p align=\"right\">\n                  CSSA 敬上 2017年夏\n                </p>\n              </div>\n              <div *ngSwitchCase=\"'Introduction'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <p align=\"left\">\n                  (1) CSSA 2017 FALL QQ 群:107266431\n                </p>\n                <p align=\"left\">\n                  此群为\n                  <span style=\"background-color:#FFE500;\">实名制</span>\n                </p>\n              </div>\n              <div *ngSwitchCase=\"'Before come to America'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Flight'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'After Arrival'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Life in WPI'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Come back to China'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Postscript'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Appendix'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Acknowledgments'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <footer id=\"fh5co-footer\" role=\"contentinfo\">\n      <div class=\"container\">\n        <div class=\"row row-pb-md\">\n          <div class=\"col-md-4 fh5co-widget\">\n            <h3>Shop.</h3>\n            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto\n              culpa amet.\n            </p>\n          </div>\n          <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n            <ul class=\"fh5co-footer-links\">\n              <li>\n                <a href=\"#\">About</a>\n              </li>\n              <li>\n                <a href=\"#\">Help</a>\n              </li>\n              <li>\n                <a href=\"#\">Contact</a>\n              </li>\n              <li>\n                <a href=\"#\">Terms</a>\n              </li>\n              <li>\n                <a href=\"#\">Meetups</a>\n              </li>\n            </ul>\n          </div>\n\n          <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n            <ul class=\"fh5co-footer-links\">\n              <li>\n                <a href=\"#\">Shop</a>\n              </li>\n              <li>\n                <a href=\"#\">Privacy</a>\n              </li>\n              <li>\n                <a href=\"#\">Testimonials</a>\n              </li>\n              <li>\n                <a href=\"#\">Handbook</a>\n              </li>\n              <li>\n                <a href=\"#\">Held Desk</a>\n              </li>\n            </ul>\n          </div>\n\n          <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n            <ul class=\"fh5co-footer-links\">\n              <li>\n                <a href=\"#\">Find Designers</a>\n              </li>\n              <li>\n                <a href=\"#\">Find Developers</a>\n              </li>\n              <li>\n                <a href=\"#\">Teams</a>\n              </li>\n              <li>\n                <a href=\"#\">Advertise</a>\n              </li>\n              <li>\n                <a href=\"#\">API</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"row copyright\">\n          <div class=\"col-md-12 text-center\">\n            <p>\n              <small class=\"block\">Copyright &copy; 2017.Company name All rights reserved.\n                <a target=\"_blank\" href=\"http://guantaow.taobao.com/\">厚朴网络淘宝店</a>\n                <a target=\"_blank\" href=\"http://www.moobnn.com\">网页模板</a>\n              </small>\n            </p>\n            <ul class=\"fh5co-social-icons\">\n              <li>\n                <a href=\"#\">\n                  <i class=\"icon-twitter\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"icon-facebook\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"icon-linkedin\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"icon-dribbble\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n    </footer>\n  </div>\n\n  <div class=\"gototop js-top\">\n    <a href=\"#\" class=\"js-gotop\">\n      <i class=\"icon-arrow-up\"></i>\n    </a>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/new-students/new-students.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var core_2 = __webpack_require__("../../../core/esm5/core.js");
var NewStudentsComponent = /** @class */ (function () {
    function NewStudentsComponent() {
        this.Indexs = [
            'Prelude',
            'Introduction',
            'Before come to America',
            'Flight',
            'After Arrival',
            'Life in WPI',
            'Come back to China',
            'Postscript',
            'Appendix',
            'Acknowledgments',
        ];
        this.selected = 'Prelude';
    }
    NewStudentsComponent.prototype.ngOnInit = function () {
    };
    NewStudentsComponent = __decorate([
        core_1.Component({
            selector: 'app-new-students',
            template: __webpack_require__("../../../../../src/app/new-students/new-students.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-students/new-students.component.css")],
            encapsulation: core_2.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], NewStudentsComponent);
    return NewStudentsComponent;
}());
exports.NewStudentsComponent = NewStudentsComponent;


/***/ }),

/***/ "../../../../../src/app/product/product-detail/product-contact/product-contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-detail/product-contact/product-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <h3>Product Owner contact info</h3>\n      <ul>\n        <li>{{owner}}\n         </li>\n        <li>{{contact}}</li>\n        <li>Veritatis tenetur odio delectus quibusdam officiis est.</li>\n        <li>Magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam\n          officiis est.</li>\n      </ul>\n      <ul>\n        <li>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas\n          eius</li>\n        <li>adipisci dignissimos consectetur magni quas eius nobis reprehenderit soluta eligendi</li>\n        <li>Veritatis tenetur odio delectus quibusdam officiis est.</li>\n        <li>Magni quas eius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam\n          officiis est.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product/product-detail/product-contact/product-contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var product_service_1 = __webpack_require__("../../../../../src/app/Service/product-service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ProductContactComponent = /** @class */ (function () {
    function ProductContactComponent(productService, activateRouter, router) {
        this.productService = productService;
        this.activateRouter = activateRouter;
        this.router = router;
    }
    ProductContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRouter.params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.productService.getProduct(this.id)
            .then(function (product) {
            _this.ProductDetail = product;
            _this.owner = _this.ProductDetail.ownerID;
            _this.contact = _this.ProductDetail.contactInfo;
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    ProductContactComponent = __decorate([
        core_1.Component({
            selector: 'app-product-contact',
            template: __webpack_require__("../../../../../src/app/product/product-detail/product-contact/product-contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product-detail/product-contact/product-contact.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, router_1.ActivatedRoute, router_1.Router])
    ], ProductContactComponent);
    return ProductContactComponent;
}());
exports.ProductContactComponent = ProductContactComponent;


/***/ }),

/***/ "../../../../../src/app/product/product-detail/product-desc/product-desc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-detail/product-desc/product-desc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-md-10 col-md-offset-1\">\n      <span class=\"price\"> ${{price}}</span>\n      <h2>Product detail</h2>\n      <p>{{desc}}\n      </p>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h2 class=\"uppercase\">Keep it simple</h2>\n          <p>Ullam dolorum iure dolore dicta fuga ipsa velit veritatis</p>\n        </div>\n        <div class=\"col-md-6\">\n          <h2 class=\"uppercase\">Less is more</h2>\n          <p>Ullam dolorum iure dolore dicta fuga ipsa velit veritatis</p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/product-detail/product-desc/product-desc.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var product_service_1 = __webpack_require__("../../../../../src/app/Service/product-service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ProductDescComponent = /** @class */ (function () {
    function ProductDescComponent(productService, activateRouter, router) {
        this.productService = productService;
        this.activateRouter = activateRouter;
        this.router = router;
    }
    ProductDescComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRouter.params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.productService.getProduct(this.id)
            .then(function (product) {
            _this.ProductDetail = product;
            _this.price = _this.ProductDetail.price;
            _this.desc = _this.ProductDetail.description;
        })
            .catch(function (e) {
            console.log(e);
        });
        this.price = this.ProductDetail.price;
        this.desc = this.ProductDetail.description;
        console.log(this.desc);
    };
    ProductDescComponent = __decorate([
        core_1.Component({
            selector: 'app-product-desc',
            template: __webpack_require__("../../../../../src/app/product/product-detail/product-desc/product-desc.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product-detail/product-desc/product-desc.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, router_1.ActivatedRoute, router_1.Router])
    ], ProductDescComponent);
    return ProductDescComponent;
}());
exports.ProductDescComponent = ProductDescComponent;


/***/ }),

/***/ "../../../../../src/app/product/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#img1 { \r\n    float: left;\r\n}\r\n.clx {\r\n    clear: both;\r\n}\r\n.leftRs {\r\n        position: absolute;\r\n        margin: auto;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 50px;\r\n        height: 50px;\r\n        left: 0px;\r\n        z-index: 1;\r\n        display: none;\r\n    }\r\n.rightRs {\r\n        position: absolute;\r\n        margin: auto;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 50px;\r\n        height: 50px;\r\n        right: 0;\r\n        z-index: 1;\r\n        display: none;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n\t<div class=\"fh5co-loader\"></div>\r\n\t<div id=\"page\">\r\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\r\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\r\n\t\t\t\t\t\t\t<a routerLink=\"\">WPI.</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li class=\"has-dropdown active\">\r\n\t\t\t\t\t\t\t\t<a routerLink=\"/product-list\">Shop</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"single.html\">Single Shop</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"about.html\">About</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"has-dropdown\">\r\n\t\t\t\t\t\t\t\t<a href=\"services.html\">Services</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Web Design</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">eCommerce</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Branding</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">API</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"contact.html\">Contact</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li class=\"search\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search..\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-search\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"shopping-cart\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"cart\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t<small>0</small>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"icon-shopping-cart\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</nav>\r\n\r\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\r\n\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\r\n\t\t\t\t\t\t<div class=\"display-t\">\r\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\r\n\t\t\t\t\t\t\t\t<h1>Product Details</h1>\r\n\t\t\t\t\t\t\t\t<h2>Free html5 templates Made</h2>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\r\n\t\t<div id=\"fh5co-product\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\r\n\r\n\t\t\t\t\t\t<div class=\"carouselBox\">\r\n\t\t\t\t\t\t\t<div #test2 id=\"img1\">\r\n\t\t\t\t\t\t\t<ngx-carousel [inputs]=\"Config\">\r\n\t\t\t\t\t\t\t\t<ngx-item *ngFor=\"let img of ProductDetail.imgUrl\" class=\"bannerStyle \" NgxCarouselItem>\t\t\r\n\t\t\t\t\t\t\t\t\t<img [src]=\"img\" alt=\"user\" width=\"100%\" >\t\r\n\t\t\t\t\t\t\t\t</ngx-item>\r\n\t\t\t\t\t\t\t\t<i NgxCarouselPrev class=\"leftRs fa fa-arrow-left fa-3x\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t<i NgxCarouselNext class=\"rightRs fa fa-arrow-right fa-3x\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t</ngx-carousel>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"clx\"></div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"row animate-box\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\r\n\t\t\t\t\t\t\t\t<h2>{{ProductDetail.name}}</h2>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-outline btn-lg\">Post your Product to Sell</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-primary btn-outline btn-lg\">Compare</a>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\r\n\t\t\t\t\t\t<ul class=\"nav nav-tabs\">\r\n\t\t\t\t\t\t\t<li class=\"list-group-item-heading\" role=\"presentation\" routerLinkActive=\"active\"  [routerLinkActiveOptions]=\"{exact: true}\">\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"[id, 'desc']\" >Product detail</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"list-group-item-heading\"  role=\"presentation\" routerLinkActive=\"active\"  >\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"[id, 'contact']\">Contact info</a>\r\n\t\t\t\t\t\t\t</li>\t\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- Tabs -->\r\n\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\r\n\t\t\t\t\t<h3>Happy Buyers</h3>\r\n\t\t\t\t\t<div class=\"feed\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<blockquote>\r\n\t\t\t\t\t\t\t\t<p>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas\r\n\t\t\t\t\t\t\t\t\teius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis\r\n\t\t\t\t\t\t\t\t\test.\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</blockquote>\r\n\t\t\t\t\t\t\t<h3>&mdash; Louie Knight</h3>\r\n\t\t\t\t\t\t\t<span class=\"rate\">\r\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<blockquote>\r\n\t\t\t\t\t\t\t\t<p>Paragraph placeat quis fugiat provident veritatis quia iure a debitis adipisci dignissimos consectetur magni quas\r\n\t\t\t\t\t\t\t\t\teius nobis reprehenderit soluta eligendi quo reiciendis fugit? Veritatis tenetur odio delectus quibusdam officiis\r\n\t\t\t\t\t\t\t\t\test.\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</blockquote>\r\n\t\t\t\t\t\t\t<h3>&mdash; Joefrey Gwapo</h3>\r\n\t\t\t\t\t\t\t<span class=\"rate\">\r\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\r\n\t\t\t\t\t\t\t\t<i class=\"icon-star2\"></i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div id=\"fh5co-started\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row animate-box\">\r\n\t\t\t\t<!-- UY BEGIN -->\r\n              <div id=\"uyan_frame\"></div>\r\n              <script type=\"text/javascript\" src=\"http://v2.uyan.cc/code/uyan.js?uid=2158295\"></script>\r\n               <!-- UY END -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<footer id=\"fh5co-footer\" role=\"contentinfo\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row row-pb-md\">\r\n\t\t\t\t<div class=\"col-md-4 fh5co-widget\">\r\n\t\t\t\t\t<h3>Shop.</h3>\r\n\t\t\t\t\t<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa\r\n\t\t\t\t\t\tamet.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\r\n\t\t\t\t\t<ul class=\"fh5co-footer-links\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">About</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Help</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Contact</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Terms</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Meetups</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\r\n\t\t\t\t\t<ul class=\"fh5co-footer-links\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Shop</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Privacy</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Testimonials</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Handbook</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Held Desk</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\r\n\t\t\t\t\t<ul class=\"fh5co-footer-links\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Find Designers</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Find Developers</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Teams</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">Advertise</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">API</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row copyright\">\r\n\t\t\t\t<div class=\"col-md-12 text-center\">\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<small class=\"block\">Copyright &copy; 2017.Company name All rights reserved.\r\n\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://guantaow.taobao.com/\">厚朴网络淘宝店</a>\r\n\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://www.moobnn.com\">网页模板</a>\r\n\t\t\t\t\t\t</small>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<ul class=\"fh5co-social-icons\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"icon-twitter\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"icon-facebook\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"icon-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"icon-dribbble\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</footer>\r\n\t<div class=\"gototop js-top\">\r\n\t\t<a href=\"#\" class=\"js-gotop\">\r\n\t\t\t<i class=\"icon-arrow-up\"></i>\r\n\t\t</a>\r\n\t</div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/product/product-detail/product-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var product_service_1 = __webpack_require__("../../../../../src/app/Service/product-service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(productService, activateRouter, router) {
        this.productService = productService;
        this.activateRouter = activateRouter;
        this.router = router;
        this.itemsList = [];
        this.Config = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            point: {
                visible: true
            },
            loop: true,
            touch: false
        };
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRouter.params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.productService.getProduct((this.id))
            .then(function (product) {
            _this.ProductDetail = product;
            console.log('2222' + _this.ProductDetail);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-product-detail',
            template: __webpack_require__("../../../../../src/app/product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css"), __webpack_require__("../../../../../src/app/product/product-detail/product-detail.component.css")],
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, router_1.ActivatedRoute, router_1.Router])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;


/***/ }),

/***/ "../../../../../src/app/product/product-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProductModel = /** @class */ (function () {
    function ProductModel(name, price, ownerID, desc, contactInfo, img) {
        this.name = name;
        this.price = price;
        this.ownerID = ownerID;
        this.description = desc;
        this.imgUrl = img;
        this.contactInfo = contactInfo;
    }
    return ProductModel;
}());
exports.ProductModel = ProductModel;


/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    font-family: \"Playfair Display\", serif;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 1.7;\r\n    color: #828282;\r\n    background: #fff;\r\n  }\r\n  \r\n  #page {\r\n    position: relative;\r\n    overflow-x: hidden;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  .offcanvas #page {\r\n    overflow: hidden;\r\n    position: absolute;\r\n  }\r\n  \r\n  .offcanvas #page:after {\r\n    -webkit-transition: 2s;\r\n    transition: 2s;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 101;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    content: \"\";\r\n  }\r\n  \r\n  a {\r\n    color: #d1c286;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  a:hover, a:active, a:focus {\r\n    color: #d1c286;\r\n    outline: none;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  p {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .copyrights{\r\n      text-indent:-9999px;\r\n      height:0;\r\n      line-height:0;\r\n      font-size:0;\r\n      overflow:hidden;\r\n  }\r\n  \r\n  h1, h2, h3, h4, h5, h6, figure {\r\n    color: #000;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n    font-weight: 400;\r\n    margin: 0 0 20px 0;\r\n  }\r\n  \r\n  ::-webkit-selection {\r\n    color: #fff;\r\n    background: #d1c286;\r\n  }\r\n  \r\n  ::-moz-selection {\r\n    color: #fff;\r\n    background: #d1c286;\r\n  }\r\n  \r\n  ::selection {\r\n    color: #fff;\r\n    background: #d1c286;\r\n  }\r\n  \r\n  .fh5co-nav {\r\n    padding: 18px 0;\r\n    background: #fff;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-nav {\r\n      padding: 20px 0;\r\n    }\r\n  }\r\n  \r\n  .fh5co-nav #fh5co-logo {\r\n    font-size: 20px;\r\n    margin: 0;\r\n    padding: 0;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n  }\r\n  \r\n  .fh5co-nav a {\r\n    padding: 5px 10px;\r\n    color: #000;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-nav .menu-1, .fh5co-nav .menu-2 {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  .fh5co-nav .menu-2 li.search {\r\n    float: left;\r\n    width: 83%;\r\n    font-family: \"Playfair Display\", serif;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    padding: 0;\r\n    margin: -5px 0 0 0;\r\n  }\r\n  \r\n  .fh5co-nav .menu-2 li input[type=text] {\r\n    padding: 6px 10px;\r\n    width: 40%;\r\n    border: none;\r\n    float: right;\r\n    font-size: 13px;\r\n    margin-top: 4px;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .fh5co-nav .menu-2 li input[type=text]:focus {\r\n    width: 100%;\r\n    outline: none;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .fh5co-nav .menu-2 li button {\r\n    margin-top: 4px;\r\n    padding: 5px;\r\n    background: transparent;\r\n    border: none;\r\n  }\r\n  \r\n  .fh5co-nav .menu-2 li button i {\r\n    color: rgba(0, 0, 0, 0.5);\r\n  }\r\n  \r\n  .fh5co-nav .menu-2 li button:hover, .fh5co-nav .menu-2 li button:focus {\r\n    background: transparent !important;\r\n  }\r\n  \r\n  .fh5co-nav .menu-2 li button:hover i, .fh5co-nav .menu-2 li button:focus i {\r\n    color: black;\r\n  }\r\n  \r\n  .fh5co-nav .menu-2 li.shopping-cart {\r\n    float: right;\r\n  }\r\n  \r\n  .fh5co-nav .menu-2 li a.cart {\r\n    color: black;\r\n  }\r\n  \r\n  .fh5co-nav .menu-2 li a.cart span {\r\n    position: relative;\r\n  }\r\n  \r\n  .fh5co-nav .menu-2 li a.cart span small {\r\n    position: absolute;\r\n    top: -20px;\r\n    right: -15px;\r\n    padding: 10px 6px;\r\n    line-height: 0;\r\n    font-size: 11px;\r\n    background: #d1c286;\r\n    color: white;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .fh5co-nav ul {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  .fh5co-nav ul li {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    display: inline-block;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n  }\r\n  \r\n  .fh5co-nav ul li a {\r\n    font-size: 13px;\r\n    padding: 30px 10px;\r\n    text-transform: uppercase;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  .fh5co-nav ul li a:hover, .fh5co-nav ul li a:focus, .fh5co-nav ul li a:active {\r\n    color: black;\r\n  }\r\n  \r\n  .fh5co-nav ul li a.cart {\r\n    color: black;\r\n  }\r\n  \r\n  .fh5co-nav ul li a.cart span {\r\n    position: relative;\r\n  }\r\n  \r\n  .fh5co-nav ul li a.cart span small {\r\n    position: absolute;\r\n    top: -20px;\r\n    right: -15px;\r\n    padding: 10px 6px;\r\n    line-height: 0;\r\n    font-size: 11px;\r\n    background: #d1c286;\r\n    color: white;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .fh5co-nav ul li.has-dropdown {\r\n    position: relative;\r\n  }\r\n  \r\n  .fh5co-nav ul li.has-dropdown .dropdown {\r\n    width: 150px;\r\n    -webkit-box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);\r\n    box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);\r\n    z-index: 1002;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 0;\r\n    text-align: left;\r\n    background: #000;\r\n    padding: 20px;\r\n    border-radius: 4px;\r\n    -webkit-transition: 0s;\r\n    transition: 0s;\r\n  }\r\n  \r\n  .fh5co-nav ul li.has-dropdown .dropdown:before {\r\n    bottom: 100%;\r\n    left: 40px;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    pointer-events: none;\r\n    border-bottom-color: #000;\r\n    border-width: 8px;\r\n    margin-left: -8px;\r\n  }\r\n  \r\n  .fh5co-nav ul li.has-dropdown .dropdown li {\r\n    display: block;\r\n    margin-bottom: 7px;\r\n  }\r\n  \r\n  .fh5co-nav ul li.has-dropdown .dropdown li:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .fh5co-nav ul li.has-dropdown .dropdown li a {\r\n    padding: 2px 0;\r\n    display: block;\r\n    color: #999999;\r\n    line-height: 1.2;\r\n    text-transform: none;\r\n    font-size: 15px;\r\n  }\r\n  \r\n  .fh5co-nav ul li.has-dropdown .dropdown li a:hover {\r\n    color: #fff;\r\n  }\r\n  \r\n  .fh5co-nav ul li.has-dropdown:hover a, .fh5co-nav ul li.has-dropdown:focus a {\r\n    color: #000;\r\n  }\r\n  \r\n  .fh5co-nav ul li.active > a {\r\n    color: #000 !important;\r\n  }\r\n  \r\n  .fh5co-nav ul li .form-group {\r\n    border: 1px solid red;\r\n    width: 100%;\r\n  }\r\n  \r\n  #fh5co-hero .btn {\r\n    font-size: 24px;\r\n  }\r\n  \r\n  #fh5co-hero .btn.btn-primary {\r\n    padding: 14px 30px !important;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider {\r\n    border: none;\r\n    z-index: 1;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .slides {\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .slides li {\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    min-height: 700px;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .flex-control-nav {\r\n    bottom: 40px;\r\n    z-index: 1000;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .flex-control-nav li a {\r\n    background: rgba(255, 255, 255, 0.2);\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    width: 12px;\r\n    height: 12px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .flex-control-nav li a.flex-active {\r\n    cursor: pointer;\r\n    background: rgba(255, 255, 255, 0.7);\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .flex-direction-nav {\r\n    display: none;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .slider-text {\r\n    display: table;\r\n    opacity: 0;\r\n    min-height: 700px;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    min-height: 700px;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner h2 {\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    color: #000;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-hero .flexslider .slider-text > .slider-text-inner h2 {\r\n      font-size: 40px;\r\n    }\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner .desc {\r\n    background: rgba(255, 255, 255, 0.9);\r\n    padding: 40px;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner .desc .price {\r\n    font-size: 14px;\r\n    letter-spacing: 3px;\r\n    display: block;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner .btn {\r\n    font-size: 18px;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner .fh5co-lead {\r\n    font-size: 20px;\r\n    color: #fff;\r\n  }\r\n  \r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner .fh5co-lead .icon-heart {\r\n    color: #d9534f;\r\n  }\r\n  \r\n  #fh5co-header,\r\n  #fh5co-counter,\r\n  .fh5co-bg {\r\n    background-size: cover;\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n  }\r\n  \r\n  .fh5co-bg {\r\n    background-size: cover;\r\n    background-position: center center;\r\n    position: relative;\r\n    width: 100%;\r\n    float: left;\r\n    position: relative;\r\n  }\r\n  \r\n  #fh5co-counter {\r\n    height: 500px;\r\n  }\r\n  \r\n  #fh5co-counter .display-t,\r\n  #fh5co-counter .display-tc {\r\n    height: 500px;\r\n    display: table;\r\n    width: 100%;\r\n  }\r\n  \r\n  @media screen and (max-width: 992px) {\r\n    #fh5co-counter {\r\n      height: inherit;\r\n      padding: 7em 0;\r\n    }\r\n    #fh5co-counter .display-t,\r\n    #fh5co-counter .display-tc {\r\n      height: inherit;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-counter {\r\n      height: inherit;\r\n      padding: 7em 0;\r\n    }\r\n    #fh5co-counter .display-t,\r\n    #fh5co-counter .display-tc {\r\n      height: inherit;\r\n    }\r\n  }\r\n  \r\n  .fh5co-cover {\r\n    height: 800px;\r\n    background-size: cover;\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n  \r\n  .fh5co-cover .overlay {\r\n    z-index: 0;\r\n    position: absolute;\r\n    bottom: 0;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n  }\r\n  \r\n  .fh5co-cover > .fh5co-container {\r\n    position: relative;\r\n    z-index: 10;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-cover {\r\n      height: 600px;\r\n    }\r\n  }\r\n  \r\n  .fh5co-cover .display-t,\r\n  .fh5co-cover .display-tc {\r\n    z-index: 9;\r\n    height: 900px;\r\n    display: table;\r\n    width: 100%;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-cover .display-t,\r\n    .fh5co-cover .display-tc {\r\n      height: 600px;\r\n    }\r\n  }\r\n  \r\n  .fh5co-cover.fh5co-cover-sm {\r\n    height: 600px;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-cover.fh5co-cover-sm {\r\n      height: 400px;\r\n    }\r\n  }\r\n  \r\n  .fh5co-cover.fh5co-cover-sm .display-t,\r\n  .fh5co-cover.fh5co-cover-sm .display-tc {\r\n    height: 600px;\r\n    display: table;\r\n    width: 100%;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-cover.fh5co-cover-sm .display-t,\r\n    .fh5co-cover.fh5co-cover-sm .display-tc {\r\n      height: 400px;\r\n    }\r\n  }\r\n  \r\n  .about-content {\r\n    margin-bottom: 7em;\r\n  }\r\n  \r\n  .about-content img {\r\n    border: 1px solid rgba(0, 0, 0, 0.05);\r\n    padding: 10px;\r\n  }\r\n  \r\n  .about-content .desc {\r\n    margin-bottom: 3em;\r\n  }\r\n  \r\n  .fh5co-staff {\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .fh5co-staff img {\r\n    width: 170px;\r\n    margin-bottom: 20px;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .fh5co-staff h3 {\r\n    font-size: 24px;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .fh5co-staff p {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .fh5co-staff .role {\r\n    color: #bfbfbf;\r\n    margin-bottom: 30px;\r\n    font-weight: normal;\r\n    display: block;\r\n  }\r\n  \r\n  .fh5co-social-icons {\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  .fh5co-social-icons li {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    display: -moz-inline-stack;\r\n    display: inline-block;\r\n    zoom: 1;\r\n    *display: inline;\r\n  }\r\n  \r\n  .fh5co-social-icons li a {\r\n    display: -moz-inline-stack;\r\n    display: inline-block;\r\n    zoom: 1;\r\n    *display: inline;\r\n    color: #d1c286;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n  }\r\n  \r\n  .fh5co-social-icons li a i {\r\n    font-size: 20px;\r\n  }\r\n  \r\n  .fh5co-contact-info ul {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  .fh5co-contact-info ul li {\r\n    padding: 0 0 0 40px;\r\n    margin: 0 0 30px 0;\r\n    list-style: none;\r\n    position: relative;\r\n  }\r\n  \r\n  .fh5co-contact-info ul li:before {\r\n    color: #d1c286;\r\n    position: absolute;\r\n    left: 0;\r\n    top: .05em;\r\n    font-family: 'icomoon';\r\n    speak: none;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    line-height: 1;\r\n    /* Better Font Rendering =========== */\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n  \r\n  .fh5co-contact-info ul li.address:before {\r\n    font-size: 30px;\r\n    content: \"\\E9D1\";\r\n  }\r\n  \r\n  .fh5co-contact-info ul li.phone:before {\r\n    font-size: 23px;\r\n    content: \"\\E9F4\";\r\n  }\r\n  \r\n  .fh5co-contact-info ul li.email:before {\r\n    font-size: 23px;\r\n    content: \"\\E9DA\";\r\n  }\r\n  \r\n  .fh5co-contact-info ul li.url:before {\r\n    font-size: 23px;\r\n    content: \"\\E9AF\";\r\n  }\r\n  \r\n  #fh5co-header .display-tc,\r\n  #fh5co-counter .display-tc,\r\n  .fh5co-cover .display-tc {\r\n    display: table-cell !important;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  #fh5co-header .display-tc h1, #fh5co-header .display-tc h2,\r\n  #fh5co-counter .display-tc h1,\r\n  #fh5co-counter .display-tc h2,\r\n  .fh5co-cover .display-tc h1,\r\n  .fh5co-cover .display-tc h2 {\r\n    margin: 0;\r\n    padding: 0;\r\n    color: white;\r\n  }\r\n  \r\n  #fh5co-header .display-tc h1,\r\n  #fh5co-counter .display-tc h1,\r\n  .fh5co-cover .display-tc h1 {\r\n    margin-bottom: 0px;\r\n    font-size: 60px;\r\n    line-height: 1.5;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-header .display-tc h1,\r\n    #fh5co-counter .display-tc h1,\r\n    .fh5co-cover .display-tc h1 {\r\n      font-size: 40px;\r\n    }\r\n  }\r\n  \r\n  #fh5co-header .display-tc h2,\r\n  #fh5co-counter .display-tc h2,\r\n  .fh5co-cover .display-tc h2 {\r\n    font-size: 20px;\r\n    line-height: 1.5;\r\n    margin-bottom: 30px;\r\n    font-family: \"Playfair Display\", serif;\r\n  }\r\n  \r\n  #fh5co-header .display-tc h2 a,\r\n  #fh5co-counter .display-tc h2 a,\r\n  .fh5co-cover .display-tc h2 a {\r\n    color: rgba(255, 255, 255, 0.7);\r\n    border-bottom: 1px solid rgba(255, 255, 255, 0.6);\r\n  }\r\n  \r\n  #fh5co-header .display-tc .btn,\r\n  #fh5co-counter .display-tc .btn,\r\n  .fh5co-cover .display-tc .btn {\r\n    padding: 15px 30px;\r\n    background: #d1c286 !important;\r\n    color: #fff;\r\n    border: none !important;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  #fh5co-header .display-tc .btn:hover,\r\n  #fh5co-counter .display-tc .btn:hover,\r\n  .fh5co-cover .display-tc .btn:hover {\r\n    background: #d1c286 !important;\r\n    -webkit-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75) !important;\r\n    box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75) !important;\r\n  }\r\n  \r\n  #fh5co-header .display-tc .form-inline .form-group,\r\n  #fh5co-counter .display-tc .form-inline .form-group,\r\n  .fh5co-cover .display-tc .form-inline .form-group {\r\n    width: 100% !important;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  #fh5co-header .display-tc .form-inline .form-group .form-control,\r\n  #fh5co-counter .display-tc .form-inline .form-group .form-control,\r\n  .fh5co-cover .display-tc .form-inline .form-group .form-control {\r\n    width: 100%;\r\n    background: #fff;\r\n    border: none;\r\n  }\r\n  \r\n  #fh5co-counter {\r\n    text-align: center;\r\n  }\r\n  \r\n  #fh5co-counter .counter {\r\n    font-size: 50px;\r\n    margin-bottom: 10px;\r\n    color: #000;\r\n    font-weight: 100;\r\n    display: block;\r\n  }\r\n  \r\n  #fh5co-counter .counter-label {\r\n    margin-bottom: 0;\r\n    text-transform: uppercase;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    letter-spacing: 1px;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n  }\r\n  \r\n  #fh5co-counter .feature-center {\r\n    padding: 40px 20px;\r\n    background: rgba(255, 255, 255, 0.8);\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-counter .feature-center {\r\n      margin-bottom: 50px;\r\n    }\r\n  }\r\n  \r\n  #fh5co-counter .icon {\r\n    width: 70px;\r\n    height: 70px;\r\n    text-align: center;\r\n    background: #d1c286;\r\n    -webkit-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);\r\n    box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  #fh5co-counter .icon i {\r\n    height: 70px;\r\n    color: #fff;\r\n  }\r\n  \r\n  #fh5co-counter .icon i:before {\r\n    display: block;\r\n    text-align: center;\r\n    margin-left: 3px;\r\n  }\r\n  \r\n  .fh5co-bg-section {\r\n    background: rgba(0, 0, 0, 0.05);\r\n  }\r\n  \r\n  #fh5co-services,\r\n  #fh5co-started,\r\n  #fh5co-testimonial,\r\n  #fh5co-started,\r\n  #fh5co-product,\r\n  #fh5co-about,\r\n  #fh5co-contact,\r\n  #fh5co-footer {\r\n    padding: 7em 0;\r\n    clear: both;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-services,\r\n    #fh5co-started,\r\n    #fh5co-testimonial,\r\n    #fh5co-started,\r\n    #fh5co-product,\r\n    #fh5co-about,\r\n    #fh5co-contact,\r\n    #fh5co-footer {\r\n      padding: 3em 0;\r\n    }\r\n  }\r\n  \r\n  .feature-center {\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    float: left;\r\n    width: 100%;\r\n    margin-bottom: 40px;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .feature-center {\r\n      margin-bottom: 50px;\r\n    }\r\n  }\r\n  \r\n  .feature-center .desc {\r\n    padding-left: 180px;\r\n  }\r\n  \r\n  .feature-center .icon {\r\n    width: 90px;\r\n    height: 90px;\r\n    background: #d1c286;\r\n    display: table;\r\n    text-align: center;\r\n    margin: 0 auto 30px auto;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .feature-center .icon i {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    height: 90px;\r\n    font-size: 40px;\r\n    line-height: 40px;\r\n    color: #fff;\r\n  }\r\n  \r\n  .feature-center p, .feature-center h3 {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  .feature-center h3 {\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    letter-spacing: 1px;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .product {\r\n    margin-bottom: 40px;\r\n  }\r\n  \r\n  .product .product-grid {\r\n    background-size: cover;\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    position: relative;\r\n    height: 350px;\r\n    margin-bottom: 20px;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .product .product-grid .sale {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 10px;\r\n    padding: 10px;\r\n    z-index: 100;\r\n    background: #d1c286;\r\n    color: #fff;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .product .product-grid .inner {\r\n    display: table;\r\n    height: 350px;\r\n    width: 100%;\r\n    opacity: 0;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .product .product-grid .inner {\r\n      opacity: 1;\r\n      background: transparent;\r\n    }\r\n  }\r\n  \r\n  .product .product-grid .inner p {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .product .product-grid .inner p .icon {\r\n    padding: 7px 10px;\r\n    color: #fff;\r\n    background: #d1c286;\r\n  }\r\n  \r\n  .product .product-grid .inner p .icon:hover, .product .product-grid .inner p .icon:focus {\r\n    color: #d1c286;\r\n    background: #fff;\r\n  }\r\n  \r\n  .product .desc h3 {\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    text-transform: uppercase;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n    line-height: 24px;\r\n  }\r\n  \r\n  .product .desc h3 a {\r\n    color: #000;\r\n  }\r\n  \r\n  .product .desc .price {\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .product:hover .product-grid, .product:focus .product-grid {\r\n    -webkit-box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\r\n    -ms-box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\r\n    -o-box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\r\n    box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\r\n  }\r\n  \r\n  .product:hover .inner, .product:focus .inner {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .product:hover .desc h3 a, .product:focus .desc h3 a {\r\n    color: #d1c286;\r\n  }\r\n  \r\n  .product-carousel {\r\n    margin-bottom: 7em;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-nav {\r\n    clear: both;\r\n    margin: 0 0 3em 0;\r\n    padding: 3px;\r\n    float: left;\r\n    width: 100%;\r\n    background: #f2f2f2;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-nav li {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 33.33%;\r\n    text-align: center;\r\n    list-style: none;\r\n    display: -moz-inline-stack;\r\n    display: inline-block;\r\n    zoom: 1;\r\n    *display: inline;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-nav li .icon {\r\n    font-size: 30px;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-nav li a {\r\n    padding: 20px;\r\n    width: 100%;\r\n    float: left;\r\n    border-radius: 4px;\r\n    color: #b3b3b3;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-nav li a:hover {\r\n    color: #4d4d4d;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-nav li.active a {\r\n    background: #fff;\r\n    color: #d1c286;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-content-wrap {\r\n    clear: both;\r\n    position: relative;\r\n    top: 70px;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-content-wrap .tab-content {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-content-wrap .tab-content.active {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-content-wrap .tab-content .price {\r\n    letter-spacing: 2px;\r\n    border: 2px solid #d1c286;\r\n    display: inline-block;\r\n    margin-bottom: 20px;\r\n    padding: 7px 20px 10px 20px;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-content-wrap ul {\r\n    padding: 0;\r\n    margin: 0;\r\n    margin-bottom: 3em;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-content-wrap ul li {\r\n    list-style: none;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n    padding-left: 30px;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-content-wrap ul li:before {\r\n    font-family: 'icomoon';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    content: '\\E116';\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-content-wrap .feed {\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 7em;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-content-wrap .feed > div {\r\n    width: 100%;\r\n    float: left;\r\n    margin-bottom: 1em;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-content-wrap .feed > div blockquote {\r\n    border-left: 0;\r\n    padding: 20px;\r\n    background: rgba(0, 0, 0, 0.04);\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-content-wrap .feed > div h3 {\r\n    font-family: \"Playfair Display\", serif;\r\n    font-size: 18px;\r\n    display: inline-block;\r\n    padding-right: 20px;\r\n  }\r\n  \r\n  .fh5co-tabs .fh5co-tab-content-wrap .feed > div .rate {\r\n    color: #ffba00;\r\n  }\r\n  \r\n  .fh5co-tabs .icon-xlg {\r\n    font-size: 400px;\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-tabs .icon-xlg {\r\n      font-size: 300px;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 480px) {\r\n    .fh5co-tabs .icon-xlg {\r\n      font-size: 200px;\r\n    }\r\n  }\r\n  \r\n  .fh5co-tabs .icon-xlg i {\r\n    color: #d1c286;\r\n  }\r\n  \r\n  .fh5co-heading {\r\n    margin-bottom: 5em;\r\n  }\r\n  \r\n  .fh5co-heading.fh5co-heading-sm {\r\n    margin-bottom: 2em;\r\n  }\r\n  \r\n  .fh5co-heading h2 {\r\n    font-size: 24px;\r\n    margin-bottom: 20px;\r\n    line-height: 1.5;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    color: #000;\r\n  }\r\n  \r\n  .fh5co-heading p {\r\n    font-size: 18px;\r\n    line-height: 1.5;\r\n    color: #828282;\r\n  }\r\n  \r\n  .fh5co-heading span {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    letter-spacing: 2px;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n  }\r\n  \r\n  #fh5co-testimonial {\r\n    background: #efefef;\r\n  }\r\n  \r\n  #fh5co-testimonial .testimony-slide {\r\n    text-align: center;\r\n  }\r\n  \r\n  #fh5co-testimonial .testimony-slide span {\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n    font-weight: 700;\r\n    display: block;\r\n  }\r\n  \r\n  #fh5co-testimonial .testimony-slide figure {\r\n    margin-bottom: 10px;\r\n    display: -moz-inline-stack;\r\n    display: inline-block;\r\n    zoom: 1;\r\n    *display: inline;\r\n  }\r\n  \r\n  #fh5co-testimonial .testimony-slide figure img {\r\n    width: 100px;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  #fh5co-testimonial .testimony-slide blockquote {\r\n    border: none;\r\n    margin: 30px auto;\r\n    width: 50%;\r\n    position: relative;\r\n    padding: 0;\r\n  }\r\n  \r\n  @media screen and (max-width: 992px) {\r\n    #fh5co-testimonial .testimony-slide blockquote {\r\n      width: 100%;\r\n    }\r\n  }\r\n  \r\n  #fh5co-testimonial .arrow-thumb {\r\n    position: absolute;\r\n    top: 40%;\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n  \r\n  #fh5co-testimonial .arrow-thumb a {\r\n    font-size: 32px;\r\n    color: #dadada;\r\n  }\r\n  \r\n  #fh5co-testimonial .arrow-thumb a:hover, #fh5co-testimonial .arrow-thumb a:focus, #fh5co-testimonial .arrow-thumb a:active {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  #fh5co-started {\r\n    background: #d1c286;\r\n  }\r\n  \r\n  #fh5co-started .fh5co-heading h2 {\r\n    color: #fff;\r\n    margin-bottom: 20px !important;\r\n  }\r\n  \r\n  #fh5co-started .fh5co-heading p {\r\n    color: rgba(255, 255, 255, 0.6);\r\n  }\r\n  \r\n  #fh5co-started .form-control {\r\n    background: rgba(255, 255, 255, 0.2);\r\n    border: none !important;\r\n    color: #fff;\r\n    font-size: 16px !important;\r\n    width: 100%;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  #fh5co-started .form-control::-webkit-input-placeholder {\r\n    color: #fff;\r\n  }\r\n  \r\n  #fh5co-started .form-control:-moz-placeholder {\r\n    /* Firefox 18- */\r\n    color: #fff;\r\n  }\r\n  \r\n  #fh5co-started .form-control::-moz-placeholder {\r\n    /* Firefox 19+ */\r\n    color: #fff;\r\n  }\r\n  \r\n  #fh5co-started .form-control:-ms-input-placeholder {\r\n    color: #fff;\r\n  }\r\n  \r\n  #fh5co-started .form-control:focus {\r\n    background: rgba(255, 255, 255, 0.3);\r\n  }\r\n  \r\n  #fh5co-started .btn {\r\n    height: 54px;\r\n    border: none !important;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    color: #fff;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n  }\r\n  \r\n  #fh5co-started .form-inline .form-group {\r\n    width: 100% !important;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  #fh5co-started .form-inline .form-group .form-control {\r\n    width: 100%;\r\n  }\r\n  \r\n  #fh5co-footer {\r\n    background: #efefef;\r\n  }\r\n  \r\n  #fh5co-footer .fh5co-footer-links {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  #fh5co-footer .fh5co-footer-links li {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  #fh5co-footer .fh5co-footer-links li a {\r\n    color: #000;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  #fh5co-footer .fh5co-footer-links li a:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  #fh5co-footer .fh5co-widget {\r\n    margin-bottom: 30px;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-footer .fh5co-widget {\r\n      text-align: left;\r\n    }\r\n  }\r\n  \r\n  #fh5co-footer .fh5co-widget h3 {\r\n    margin-bottom: 15px;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  #fh5co-footer .copyright .block {\r\n    display: block;\r\n  }\r\n  \r\n  #map {\r\n    height: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    #map {\r\n      height: 400px;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 480px) {\r\n    #map {\r\n      height: 200px;\r\n    }\r\n  }\r\n  \r\n  #fh5co-offcanvas {\r\n    position: absolute;\r\n    z-index: 1901;\r\n    width: 270px;\r\n    background: black;\r\n    top: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    padding: 45px 40px 40px 40px;\r\n    overflow-y: auto;\r\n    display: none;\r\n    -webkit-transform: translateX(270px);\r\n    transform: translateX(270px);\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-offcanvas {\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .offcanvas #fh5co-offcanvas {\r\n    -webkit-transform: translateX(0px);\r\n    transform: translateX(0px);\r\n  }\r\n  \r\n  #fh5co-offcanvas a {\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n  \r\n  #fh5co-offcanvas a:hover {\r\n    color: rgba(255, 255, 255, 0.8);\r\n  }\r\n  \r\n  #fh5co-offcanvas ul {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li.search {\r\n    float: left;\r\n    width: 100%;\r\n    font-family: \"Playfair Display\", serif;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    padding: 0;\r\n    margin: 5px 0 0 0;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li input[type=text] {\r\n    padding: 6px 10px;\r\n    width: 100%;\r\n    border: 1px solid rgba(255, 255, 255, 0.1);\r\n    float: right;\r\n    font-size: 13px;\r\n    margin-top: 4px;\r\n    background: transparent;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li input[type=text]:focus {\r\n    width: 100%;\r\n    outline: none;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li button {\r\n    margin-top: 4px;\r\n    padding: 6px;\r\n    background: rgba(255, 255, 255, 0.1);\r\n    border: 1px solid rgba(255, 255, 255, 0.1);\r\n    margin-left: 1px;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li button i {\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li button:hover, #fh5co-offcanvas ul li button:focus {\r\n    background: transparent !important;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li button:hover i, #fh5co-offcanvas ul li button:focus i {\r\n    color: white;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li.shopping-cart {\r\n    float: left;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li a.cart {\r\n    display: block;\r\n    margin-top: 30px;\r\n    color: rgba(255, 255, 255, 0.5);\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li a.cart span {\r\n    position: relative;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li a.cart span small {\r\n    position: absolute;\r\n    top: -20px;\r\n    right: -15px;\r\n    padding: 10px 6px;\r\n    line-height: 0;\r\n    font-size: 11px;\r\n    background: #d1c286;\r\n    color: white;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li > ul {\r\n    padding-left: 20px;\r\n    display: none;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li.offcanvas-has-dropdown > a {\r\n    display: block;\r\n    position: relative;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li.offcanvas-has-dropdown > a:after {\r\n    position: absolute;\r\n    right: 0px;\r\n    font-family: 'icomoon';\r\n    speak: none;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    line-height: 1;\r\n    /* Better Font Rendering =========== */\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    content: \"\\E921\";\r\n    font-size: 20px;\r\n    color: rgba(255, 255, 255, 0.2);\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  #fh5co-offcanvas ul li.offcanvas-has-dropdown.active a:after {\r\n    -webkit-transform: rotate(-180deg);\r\n    transform: rotate(-180deg);\r\n  }\r\n  \r\n  .uppercase {\r\n    font-size: 14px;\r\n    color: #000;\r\n    margin-bottom: 10px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .gototop {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    z-index: 999;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  \r\n  .gototop.active {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n  \r\n  .gototop a {\r\n    width: 50px;\r\n    height: 50px;\r\n    display: table;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .gototop a i {\r\n    height: 50px;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .gototop a:hover, .gototop a:active, .gototop a:focus {\r\n    text-decoration: none;\r\n    outline: none;\r\n  }\r\n  \r\n  .fh5co-nav-toggle {\r\n    width: 25px;\r\n    height: 25px;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .fh5co-nav-toggle.active i::before, .fh5co-nav-toggle.active i::after {\r\n    background: #444;\r\n  }\r\n  \r\n  .fh5co-nav-toggle:hover, .fh5co-nav-toggle:focus, .fh5co-nav-toggle:active {\r\n    outline: none;\r\n    border-bottom: none !important;\r\n  }\r\n  \r\n  .fh5co-nav-toggle i {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 25px;\r\n    height: 2px;\r\n    color: #252525;\r\n    font: bold 14px/.4 Helvetica;\r\n    text-transform: uppercase;\r\n    text-indent: -55px;\r\n    background: #252525;\r\n    -webkit-transition: all .2s ease-out;\r\n    transition: all .2s ease-out;\r\n  }\r\n  \r\n  .fh5co-nav-toggle i::before, .fh5co-nav-toggle i::after {\r\n    content: '';\r\n    width: 25px;\r\n    height: 2px;\r\n    background: #252525;\r\n    position: absolute;\r\n    left: 0;\r\n    -webkit-transition: all .2s ease-out;\r\n    transition: all .2s ease-out;\r\n  }\r\n  \r\n  .fh5co-nav-toggle.fh5co-nav-white > i {\r\n    color: #fff;\r\n    background: #000;\r\n  }\r\n  \r\n  .fh5co-nav-toggle.fh5co-nav-white > i::before, .fh5co-nav-toggle.fh5co-nav-white > i::after {\r\n    background: #000;\r\n  }\r\n  \r\n  .fh5co-nav-toggle i::before {\r\n    top: -7px;\r\n  }\r\n  \r\n  .fh5co-nav-toggle i::after {\r\n    bottom: -7px;\r\n  }\r\n  \r\n  .fh5co-nav-toggle:hover i::before {\r\n    top: -10px;\r\n  }\r\n  \r\n  .fh5co-nav-toggle:hover i::after {\r\n    bottom: -10px;\r\n  }\r\n  \r\n  .fh5co-nav-toggle.active i {\r\n    background: transparent;\r\n  }\r\n  \r\n  .fh5co-nav-toggle.active i::before {\r\n    background: #fff;\r\n    top: 0;\r\n    -webkit-transform: rotateZ(45deg);\r\n    transform: rotateZ(45deg);\r\n  }\r\n  \r\n  .fh5co-nav-toggle.active i::after {\r\n    background: #fff;\r\n    bottom: 0;\r\n    -webkit-transform: rotateZ(-45deg);\r\n    transform: rotateZ(-45deg);\r\n  }\r\n  \r\n  .fh5co-nav-toggle {\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 10px;\r\n    z-index: 21;\r\n    padding: 6px 0 0 0;\r\n    display: block;\r\n    margin: 0 auto;\r\n    display: none;\r\n    height: 44px;\r\n    width: 44px;\r\n    z-index: 2001;\r\n    border-bottom: none !important;\r\n  }\r\n  \r\n  @media screen and (max-width: 768px) {\r\n    .fh5co-nav-toggle {\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .btn {\r\n    margin-right: 4px;\r\n    margin-bottom: 4px;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    border-radius: 2px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    padding: 8px 20px;\r\n  }\r\n  \r\n  .btn.btn-md {\r\n    padding: 8px 20px !important;\r\n  }\r\n  \r\n  .btn.btn-lg {\r\n    padding: 18px 36px !important;\r\n  }\r\n  \r\n  .btn:hover, .btn:active, .btn:focus {\r\n    -webkit-box-shadow: none !important;\r\n            box-shadow: none !important;\r\n    outline: none !important;\r\n  }\r\n  \r\n  .btn-primary {\r\n    background: #d1c286;\r\n    color: #fff;\r\n    border: 2px solid #d1c286;\r\n  }\r\n  \r\n  .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n    background: #d8cb98 !important;\r\n    border-color: #d8cb98 !important;\r\n  }\r\n  \r\n  .btn-primary.btn-outline {\r\n    background: transparent;\r\n    color: #d1c286;\r\n    border: 2px solid #d1c286;\r\n  }\r\n  \r\n  .btn-primary.btn-outline:hover, .btn-primary.btn-outline:focus, .btn-primary.btn-outline:active {\r\n    background: #d1c286;\r\n    color: #fff;\r\n  }\r\n  \r\n  .btn-success {\r\n    background: #5cb85c;\r\n    color: #fff;\r\n    border: 2px solid #5cb85c;\r\n  }\r\n  \r\n  .btn-success:hover, .btn-success:focus, .btn-success:active {\r\n    background: #4cae4c !important;\r\n    border-color: #4cae4c !important;\r\n  }\r\n  \r\n  .btn-success.btn-outline {\r\n    background: transparent;\r\n    color: #5cb85c;\r\n    border: 2px solid #5cb85c;\r\n  }\r\n  \r\n  .btn-success.btn-outline:hover, .btn-success.btn-outline:focus, .btn-success.btn-outline:active {\r\n    background: #5cb85c;\r\n    color: #fff;\r\n  }\r\n  \r\n  .btn-info {\r\n    background: #5bc0de;\r\n    color: #fff;\r\n    border: 2px solid #5bc0de;\r\n  }\r\n  \r\n  .btn-info:hover, .btn-info:focus, .btn-info:active {\r\n    background: #46b8da !important;\r\n    border-color: #46b8da !important;\r\n  }\r\n  \r\n  .btn-info.btn-outline {\r\n    background: transparent;\r\n    color: #5bc0de;\r\n    border: 2px solid #5bc0de;\r\n  }\r\n  \r\n  .btn-info.btn-outline:hover, .btn-info.btn-outline:focus, .btn-info.btn-outline:active {\r\n    background: #5bc0de;\r\n    color: #fff;\r\n  }\r\n  \r\n  .btn-warning {\r\n    background: #f0ad4e;\r\n    color: #fff;\r\n    border: 2px solid #f0ad4e;\r\n  }\r\n  \r\n  .btn-warning:hover, .btn-warning:focus, .btn-warning:active {\r\n    background: #eea236 !important;\r\n    border-color: #eea236 !important;\r\n  }\r\n  \r\n  .btn-warning.btn-outline {\r\n    background: transparent;\r\n    color: #f0ad4e;\r\n    border: 2px solid #f0ad4e;\r\n  }\r\n  \r\n  .btn-warning.btn-outline:hover, .btn-warning.btn-outline:focus, .btn-warning.btn-outline:active {\r\n    background: #f0ad4e;\r\n    color: #fff;\r\n  }\r\n  \r\n  .btn-danger {\r\n    background: #d9534f;\r\n    color: #fff;\r\n    border: 2px solid #d9534f;\r\n  }\r\n  \r\n  .btn-danger:hover, .btn-danger:focus, .btn-danger:active {\r\n    background: #d43f3a !important;\r\n    border-color: #d43f3a !important;\r\n  }\r\n  \r\n  .btn-danger.btn-outline {\r\n    background: transparent;\r\n    color: #d9534f;\r\n    border: 2px solid #d9534f;\r\n  }\r\n  \r\n  .btn-danger.btn-outline:hover, .btn-danger.btn-outline:focus, .btn-danger.btn-outline:active {\r\n    background: #d9534f;\r\n    color: #fff;\r\n  }\r\n  \r\n  .btn-outline {\r\n    background: none;\r\n    border: 2px solid gray;\r\n    font-size: 16px;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .btn-outline:hover, .btn-outline:focus, .btn-outline:active {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n  }\r\n  \r\n  .btn.with-arrow {\r\n    position: relative;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .btn.with-arrow i {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 50%;\r\n    margin-top: -8px;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n  }\r\n  \r\n  .btn.with-arrow:hover {\r\n    padding-right: 50px;\r\n  }\r\n  \r\n  .btn.with-arrow:hover i {\r\n    color: #fff;\r\n    right: 18px;\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n  \r\n  .form-control {\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    background: transparent;\r\n    border: 2px solid rgba(0, 0, 0, 0.1);\r\n    height: 54px;\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .form-control:active, .form-control:focus {\r\n    outline: none;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n    border-color: #d1c286;\r\n  }\r\n  \r\n  .row-pb-md {\r\n    padding-bottom: 4em !important;\r\n  }\r\n  \r\n  .row-pb-sm {\r\n    padding-bottom: 2em !important;\r\n  }\r\n  \r\n  .pageButton {\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .choice {\r\n    height: 600px;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n\t<div id=\"page\">\r\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\r\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li class=\"has-dropdown\">\r\n\t\t\t\t\t\t\t\t<a href=\"product.html\">Shop</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"single.html\">Single Shop</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"about.html\">About</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"has-dropdown\">\r\n\t\t\t\t\t\t\t\t<a href=\"services.html\">Services</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"dropdown\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Web Design</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">eCommerce</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Branding</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">API</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"contact.html\">Contact</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li class=\"search\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search..\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-search\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"shopping-cart\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"cart\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t<small>0</small>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"icon-shopping-cart\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</nav>\r\n\r\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\r\n\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\r\n\t\t\t\t\t\t<div class=\"display-t\">\r\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\r\n\t\t\t\t\t\t\t\t<h1>Household Item</h1>\r\n\t\t\t\t\t\t\t\t<h2>Free html5 templates Made</h2>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\r\n\t\t<div id=\"fh5co-product\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row animate-box\">\r\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\r\n\t\t\t\t\t\t<span>Cool Stuff</span>\r\n\t\t\t\t\t\t<h2>Products.</h2>\r\n\t\t\t\t\t\t<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor\r\n\t\t\t\t\t\t\teius.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row\">\t\t\t\t\r\n\t\t\t\t\t<div class=\"col-md-4 text-center\" *ngFor=\"let product of allProducts | paginate: { id:'product', itemsPerPage: 6, currentPage: p }\">\r\n\t\t\t\t\t\t<div class=\"product\" (click)=\"ToProductDetail(product.id)\">\r\n\t\t\t\t\t\t\t<div class=\"product-grid\" [style.background-image]=\"'url('+product.imgUrl[0]+')'\">\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t\t\t\t<i>{{product.name}}</i>\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price\">{{product.price}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<pagination-controls class=\"pageButton\" id=\"product\" (pageChange)=\"p = $event\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\"\r\n\t\t\t\t screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\r\n\t\t\t\t</pagination-controls>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<footer id=\"fh5co-footer\" role=\"contentinfo\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row row-pb-md\">\r\n\t\t\t\t\t<div class=\"col-md-4 fh5co-widget\">\r\n\t\t\t\t\t\t<h3>Shop.</h3>\r\n\t\t\t\t\t\t<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa\r\n\t\t\t\t\t\t\tamet.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\r\n\t\t\t\t\t\t<ul class=\"fh5co-footer-links\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">About</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Help</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Contact</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Terms</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Meetups</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\r\n\t\t\t\t\t\t<ul class=\"fh5co-footer-links\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Shop</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Privacy</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Testimonials</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Handbook</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Held Desk</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\r\n\t\t\t\t\t\t<ul class=\"fh5co-footer-links\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Find Designers</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Find Developers</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Teams</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">Advertise</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">API</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"row copyright\">\r\n\t\t\t\t\t<div class=\"col-md-12 text-center\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t<small class=\"block\">Copyright &copy; 2017.Company name All rights reserved.\r\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://guantaow.taobao.com/\">厚朴网络淘宝店</a>\r\n\t\t\t\t\t\t\t\t<a target=\"_blank\" href=\"http://www.moobnn.com\">网页模板</a>\r\n\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<ul class=\"fh5co-social-icons\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"icon-twitter\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"icon-facebook\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"icon-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"icon-dribbble\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</footer>\r\n\t</div>\r\n\r\n\t<div class=\"gototop js-top\">\r\n\t\t<a href=\"#\" class=\"js-gotop\">\r\n\t\t\t<i class=\"icon-arrow-up\"></i>\r\n\t\t</a>\r\n\t</div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var product_service_1 = __webpack_require__("../../../../../src/app/Service/product-service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, router, activatedRouter, sanitization) {
        this.productService = productService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.sanitization = sanitization;
        this.path = '../../assets/product-1.jpg';
        this.allProducts = [];
        this.p = this.productService.getCurrentPage();
        console.log(this.p);
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionProducts = this.productService.getAllProduct()
            .subscribe(function (allProducts) { return _this.allProducts = allProducts; });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.subscriptionProducts.unsubscribe();
    };
    ProductComponent.prototype.ToProductDetail = function (id) {
        this.temp = id / 6;
        this.p = Math.ceil(this.temp);
        // console.log(this.p);
        this.router.navigate(['/product-list', id, id, 'desc']);
        this.productService.setCurrentPage(this.p);
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router,
            router_1.ActivatedRoute, platform_browser_1.DomSanitizer])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "../../../../../src/app/sell/sell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group{\r\n    width: 100%;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sell/sell.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a [routerLink]=\"['']\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li class=\"has-dropdown\">\n                <a href=\"product.html\">Shop</a>\n                <ul class=\"dropdown\">\n                  <li>\n                    <a href=\"single.html\">Single Shop</a>\n                  </li>\n                </ul>\n              </li>\n              <li>\n                <a href=\"about.html\">About</a>\n              </li>\n              <li class=\"has-dropdown\">\n                <a href=\"services.html\">Services</a>\n                <ul class=\"dropdown\">\n                  <li>\n                    <a href=\"#\">Web Design</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">eCommerce</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Branding</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">API</a>\n                  </li>\n                </ul>\n              </li>\n              <li>\n                <a href=\"contact.html\">Contact</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\n            <ul>\n              <li class=\"search\">\n                <div class=\"input-group\">\n                  <input type=\"text\" placeholder=\"Search..\">\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-primary\" type=\"button\">\n                      <i class=\"icon-search\"></i>\n                    </button>\n                  </span>\n                </div>\n              </li>\n              <li class=\"shopping-cart\">\n                <a href=\"#\" class=\"cart\">\n                  <span>\n                    <small>0</small>\n                    <i class=\"icon-shopping-cart\"></i>\n                  </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n    </nav>\n\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>Sell Section</h1>\n                <h2>Your can Post your Product to Sell at Here</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <span>Cool Stuff</span>\n            <h2>House.</h2>\n            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam\n              dolor eius.\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-12 \">\n                <mat-form-field class=\"form-group\">\n                  <mat-select placeholder=\"Product Type\" [formControl]=\"selected\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"type\" [(value)]=\"type\"\n                    required>\n                    <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n                      {{option}}\n                    </mat-option>\n                  </mat-select>\n                  <mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error>\n                  <mat-hint *ngIf=\"!selected.touched\">Please select your product type</mat-hint>\n                </mat-form-field>\n                <div *ngIf=\"isOthers(type)\">\n                  <form action=\"submit\">\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Product Name</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"name\" [formControl]=\"productNameError\" [errorStateMatcher]=\"matcher\" name=\"productName\" required>\n                      <mat-error *ngIf=\"productNameError.hasError('required')\">Product Name are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Product Price</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"price\" [formControl]=\"productPriceError\" [errorStateMatcher]=\"matcher\" name=\"productPrice\" required>\n                      <mat-error *ngIf=\"productPriceError.hasError('required')\">Product Price are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Contact Information</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"contactInfo\" [formControl]=\"productContactError\" [errorStateMatcher]=\"matcher\" name=\"productContact\"\n                        required>\n                      <mat-error *ngIf=\"productContactError.hasError('required')\">Contact Information are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>create</mat-icon>\n                        <i> A Good Description make your product easy to sell</i>\n                      </mat-placeholder>\n                      <textarea [(ngModel)]=\"desc\" matInput matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" name=\"productDescp\">\n                             </textarea>\n                    </mat-form-field>\n\n                    <input type=\"file\" multiple name=\"logo\" (change)=\"onFileSelect($event)\">\n                    <div *ngFor=\"let time of times\">\n                      <input type=\"file\" multiple name=\"logo\" (change)=\"onFileSelect($event)\">\n                    </div>\n                    <div>\n                      <i class=\"fa fa-plus\" aria-hidden=\"true\" (click)=\"onSecondSelect()\"></i>\n                    </div>\n                    <button class=\"btn btn-primary\" (click)=\"upload()\" [disabled]=\"isBookDisable()\">Submit</button>\n                  </form>\n                </div>\n\n                <div *ngIf=\"isHouse(type)\">\n                  <form action=\"submit\">\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your House Address</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"address\" [formControl]=\"productNameError\" [errorStateMatcher]=\"matcher\" name=\"productName\" required>\n                      <mat-error *ngIf=\"productNameError.hasError('required')\">Product Name are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Rent fee (per Month)</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"price\" [formControl]=\"productPriceError\" [errorStateMatcher]=\"matcher\" name=\"productPrice\" required>\n                      <mat-error *ngIf=\"productPriceError.hasError('required')\">Product Price are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Contact Information</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"contactInfo\" [formControl]=\"productContactError\" [errorStateMatcher]=\"matcher\" name=\"productContact\"\n                        required>\n                      <mat-error *ngIf=\"productContactError.hasError('required')\">Contact Information are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>create</mat-icon>\n                        <i> You can provide other information which you think is necessary at here</i>\n                      </mat-placeholder>\n                      <textarea [(ngModel)]=\"desc\" matInput matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" name=\"productDescp\">\n                             </textarea>\n                    </mat-form-field>\n                    <input type=\"file\" multiple name=\"logo\" (change)=\"onFileSelect($event)\">\n                    <div *ngFor=\"let time of times\">\n                      <input type=\"file\" multiple name=\"logo\" (change)=\"onFileSelect($event)\">\n                    </div>\n                    <div>\n                      <i class=\"fa fa-plus\" aria-hidden=\"true\" (click)=\"onSecondSelect()\"></i>\n                    </div>\n                    <button class=\"btn btn-primary\" (click)=\"upload()\" [disabled]=\"isBookDisable()\">Submit</button>\n                  </form>\n                </div>\n\n                <div *ngIf=\"isBook(type)\">\n                  <form action=\"submit\">\n                    <mat-form-field class=\"form-group\">\n                      <mat-select placeholder=\"Book Major\" [formControl]=\"selectedBook\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"department\"\n                        [(value)]=\"department\" required>\n                        <mat-option *ngFor=\"let department of Departments\" [value]=\"department\">\n                          {{department}}\n                        </mat-option>\n                      </mat-select>\n                      <mat-error *ngIf=\"selectedBook.hasError('required')\">You must make a selection</mat-error>\n                      <mat-hint *ngIf=\"!selectedBook.touched\">Please select your product type</mat-hint>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Book Name</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"name\" [formControl]=\"productNameError\" [errorStateMatcher]=\"matcher\" name=\"productName\" required>\n                      <mat-error *ngIf=\"productNameError.hasError('required')\">Product Name are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Book Price</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"price\" [formControl]=\"productPriceError\" [errorStateMatcher]=\"matcher\" name=\"productPrice\" required>\n                      <mat-error *ngIf=\"productPriceError.hasError('required')\">Product Price are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Contact Information</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"contactInfo\" [formControl]=\"productContactError\" [errorStateMatcher]=\"matcher\" name=\"productContact\"\n                        required>\n                      <mat-error *ngIf=\"productContactError.hasError('required')\">Contact Information are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>create</mat-icon>\n                        <i> You can provide other information which you think is necessary at here</i>\n                      </mat-placeholder>\n                      <textarea [(ngModel)]=\"desc\" matInput matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" name=\"productDescp\">\n                             </textarea>\n                    </mat-form-field>\n                    <input type=\"file\" multiple name=\"logo\" (change)=\"onFileSelect($event)\">                   \n                     <div *ngFor=\"let time of times\">\n                      <input type=\"file\" multiple name=\"logo\" (change)=\"onFileSelect($event)\" >\n                    </div>\n                    <div>\n                      <i class=\"fa fa-plus\" aria-hidden=\"true\" (click)=\"onSecondSelect(i)\"></i>\n                    </div>\n                    <button class=\"btn btn-primary\" (click)=\"upload()\" [disabled]=\"isBookDisable()\">Submit</button>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <footer id=\"fh5co-footer\" role=\"contentinfo\">\n      <div class=\"container\">\n        <div class=\"row row-pb-md\">\n          <div class=\"col-md-4 fh5co-widget\">\n            <h3>Shop.</h3>\n            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto\n              culpa amet.\n            </p>\n          </div>\n          <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n            <ul class=\"fh5co-footer-links\">\n              <li>\n                <a href=\"#\">About</a>\n              </li>\n              <li>\n                <a href=\"#\">Help</a>\n              </li>\n              <li>\n                <a href=\"#\">Contact</a>\n              </li>\n              <li>\n                <a href=\"#\">Terms</a>\n              </li>\n              <li>\n                <a href=\"#\">Meetups</a>\n              </li>\n            </ul>\n          </div>\n\n          <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n            <ul class=\"fh5co-footer-links\">\n              <li>\n                <a href=\"#\">Shop</a>\n              </li>\n              <li>\n                <a href=\"#\">Privacy</a>\n              </li>\n              <li>\n                <a href=\"#\">Testimonials</a>\n              </li>\n              <li>\n                <a href=\"#\">Handbook</a>\n              </li>\n              <li>\n                <a href=\"#\">Held Desk</a>\n              </li>\n            </ul>\n          </div>\n\n          <div class=\"col-md-2 col-sm-4 col-xs-6 col-md-push-1\">\n            <ul class=\"fh5co-footer-links\">\n              <li>\n                <a href=\"#\">Find Designers</a>\n              </li>\n              <li>\n                <a href=\"#\">Find Developers</a>\n              </li>\n              <li>\n                <a href=\"#\">Teams</a>\n              </li>\n              <li>\n                <a href=\"#\">Advertise</a>\n              </li>\n              <li>\n                <a href=\"#\">API</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"row copyright\">\n          <div class=\"col-md-12 text-center\">\n            <p>\n              <small class=\"block\">Copyright &copy; 2017.Company name All rights reserved.\n                <a target=\"_blank\" href=\"http://guantaow.taobao.com/\">厚朴网络淘宝店</a>\n                <a target=\"_blank\" href=\"http://www.moobnn.com\">网页模板</a>\n              </small>\n            </p>\n            <ul class=\"fh5co-social-icons\">\n              <li>\n                <a href=\"#\">\n                  <i class=\"icon-twitter\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"icon-facebook\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"icon-linkedin\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"icon-dribbble\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n    </footer>\n  </div>\n\n  <div class=\"gototop js-top\">\n    <a href=\"#\" class=\"js-gotop\">\n      <i class=\"icon-arrow-up\"></i>\n    </a>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/sell/sell.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var product_service_1 = __webpack_require__("../../../../../src/app/Service/product-service.ts");
var house_service_1 = __webpack_require__("../../../../../src/app/Service/house-service.ts");
var book_service_1 = __webpack_require__("../../../../../src/app/Service/book-service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
exports.MyErrorStateMatcher = MyErrorStateMatcher;
var SellComponent = /** @class */ (function () {
    function SellComponent(productService, houseService, bookService, httpClient) {
        this.productService = productService;
        this.houseService = houseService;
        this.bookService = bookService;
        this.httpClient = httpClient;
        this.Departments = ['Computer Science', 'Electrical Engineering', 'ESL', 'Data Science', 'MSIT', 'Marketing', 'Others'];
        this.ownerID = 0; // TODO: AUTH
        this.imgUrl = [];
        this.times = [];
        this.selectedFile = null;
        this.i = 0;
        this.fd = new FormData();
        this.selected = new forms_1.FormControl('valid', [
            forms_1.Validators.required
        ]);
        this.selectedBook = new forms_1.FormControl('valid', [
            forms_1.Validators.required
        ]);
        this.productNameError = new forms_1.FormControl('', [
            forms_1.Validators.required
        ]);
        this.productPriceError = new forms_1.FormControl('', [
            forms_1.Validators.required
        ]);
        this.productContactError = new forms_1.FormControl('', [
            forms_1.Validators.required
        ]);
        this.options = ['Book', 'House', 'Others'];
        this.matcher = new MyErrorStateMatcher();
    }
    SellComponent.prototype.upload = function () {
        var _this = this;
        this.httpClient.post('api/v1/image', this.fd)
            .subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
                _this.imgUrl[i] = "http://localhost:3000/api/v1/images/" + res[i].filename;
            }
            _this.addProduct(_this.type);
        });
    };
    SellComponent.prototype.addProduct = function (type) {
        if (type === 'Others') {
            this.productService.setProduct(this.name, this.price, this.ownerID, this.desc, this.contactInfo, this.imgUrl);
        }
        if (type === 'House') {
            this.houseService.setNewllHouse(this.address, this.desc, this.price, 'ownerOne', this.contactInfo, this.imgUrl);
        }
        if (type === 'Book') {
            this.bookService.setBook(this.name, this.department, 0, this.price, this.contactInfo, this.imgUrl);
        }
    };
    SellComponent.prototype.isOthers = function (option) {
        if (option === 'Others') {
            return true;
        }
    };
    SellComponent.prototype.isHouse = function (option) {
        if (option === 'House') {
            return true;
        }
    };
    SellComponent.prototype.isBook = function (option) {
        if (option === 'Book') {
            return true;
        }
    };
    SellComponent.prototype.isDisable = function () {
        if (this.productNameError.hasError('required') || this.productContactError.hasError('required') ||
            this.productPriceError.hasError('required') || this.selected.hasError('require')) {
            return true;
        }
        else {
            return false;
        }
    };
    SellComponent.prototype.isBookDisable = function () {
        if (this.productNameError.hasError('required') || this.productContactError.hasError('required') ||
            this.productPriceError.hasError('required') || this.selected.hasError('require') || this.selectedBook.hasError('require')) {
            return true;
        }
        else {
            return false;
        }
    };
    SellComponent.prototype.onSecondSelect = function (k) {
        this.i = this.i + 1;
        this.times.push(1);
        console.log(this.times);
    };
    SellComponent.prototype.onFileSelect = function (event) {
        if (event.target.files.length === 0 && this.times.length === 0) {
            this.fd.delete('logo');
            return 0;
        }
        else if (event.target.files.length !== 0) {
            this.selectedFile = event.target.files;
            for (var _i = 0, _a = this.selectedFile; _i < _a.length; _i++) {
                var file = _a[_i];
                this.fd.append('logo', file, file.name);
            }
        }
    };
    SellComponent.prototype.ngOnInit = function () {
    };
    SellComponent = __decorate([
        core_1.Component({
            selector: 'app-sell',
            template: __webpack_require__("../../../../../src/app/sell/sell.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css"), __webpack_require__("../../../../../src/app/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, house_service_1.HouseService,
            book_service_1.BookService, http_1.HttpClient])
    ], SellComponent);
    return SellComponent;
}());
exports.SellComponent = SellComponent;


/***/ }),

/***/ "../../../../../src/app/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group{\r\n  width: 100%;\r\n}\r\n.material-icons {\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  vertical-align: middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <h2>单图上传</h2>\r\n      <input type=\"file\" multiple name=\"logo\" (change)=\"onFileSelect($event)\">\r\n \r\n      <button (click)=\"upload()\">Submit</button>\r\n      <img src=\"http://localhost:3000/api/v1/images\" alt=\"\">\r\n"

/***/ }),

/***/ "../../../../../src/app/test/test.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var product_model_1 = __webpack_require__("../../../../../src/app/product/product-model.ts");
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
exports.MyErrorStateMatcher = MyErrorStateMatcher;
var TestComponent = /** @class */ (function () {
    function TestComponent(httpClient) {
        this.httpClient = httpClient;
        this.imgSrc = '../../../../WPI-Server/upload/1.png';
        this.product = new product_model_1.ProductModel('test', 100, 1, 'good', '123456', []);
        this.selectedFile = null;
    }
    TestComponent.prototype.onFileSelect = function (event) {
        this.selectedFile = event.target.files;
        console.log(event);
    };
    TestComponent.prototype.ngOnInit = function () {
        // this.httpClient.get('api/v1/images')
        // .subscribe();
    };
    TestComponent.prototype.upload = function () {
        var fd = new FormData();
        fd.append('logo', this.selectedFile[0], this.selectedFile.name);
        fd.append('logo', this.selectedFile[1], this.selectedFile.name);
        this.httpClient.post('api/v1/image', fd)
            .subscribe(function (res) { return console.log(res); });
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;


/***/ }),

/***/ "../../../../../src/assets/testimonial-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "testimonial-bg.e2b223346283a775cde0.jpg";

/***/ }),

/***/ "../../../../../src/assets/wpi-main.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wpi-main.8fe87dfbff9b0786626d.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../hammerjs/hammer.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map