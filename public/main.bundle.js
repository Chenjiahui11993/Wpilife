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

/***/ "../../../../../src/app/Pipe/house-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HouseSearchPipe = /** @class */ (function () {
    function HouseSearchPipe() {
    }
    HouseSearchPipe.prototype.transform = function (houses, term) {
        return houses.filter(function (house) { return house.Address.trim().toLocaleLowerCase().includes(term.toLocaleLowerCase()); });
    };
    HouseSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'houseSearch'
        })
    ], HouseSearchPipe);
    return HouseSearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/Pipe/product-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductSearchPipe = /** @class */ (function () {
    function ProductSearchPipe() {
    }
    ProductSearchPipe.prototype.transform = function (products, term) {
        return products.filter(function (product) { return product.name.trim().toLocaleLowerCase().includes(term.toLocaleLowerCase()); });
    };
    ProductSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'productSearch'
        })
    ], ProductSearchPipe);
    return ProductSearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/Pipe/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (books, term) {
        //  console.log(term);
        // console.log(books);
        return books.filter(function (book) { return book.name.trim().toLocaleLowerCase().includes(term.toLocaleLowerCase()); });
        // console.log(book.name);
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/Service/auth.guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/sell']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/Service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_variables__ = __webpack_require__("../../../../../src/app/Service/auth0-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].clientID,
            domain: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain,
            responseType: 'token id_token',
            audience: "https://" + __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain + "/api/v2/",
            redirectUri: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].callbackURL,
            scope: 'openid profile postBooks'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
                //  console.log('hahaha');
                _this.router.navigate(['/']);
            }
            else if (err) {
                _this.router.navigate(['/']);
                //   console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    // get User profile
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access Token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/Service/auth0-variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: 'uzLB9DST8Ug7tZUOgZwVPHXliqxwKh1S',
    domain: 'wpilife.auth0.com',
    callbackURL: 'http://18.221.7.15/callback'
};


/***/ }),

/***/ "../../../../../src/app/Service/book-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_book_book_model__ = __webpack_require__("../../../../../src/app/component/book/book-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookService = /** @class */ (function () {
    function BookService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this._bookSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
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
    BookService.prototype.getUserBooks = function (id) {
        return this.httpClient.get("api/v1/userBooks/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
    };
    BookService.prototype.deleteBook = function (id) {
        var _this = this;
        return this.httpClient.delete("api/v1/userBook/" + id)
            .toPromise()
            .then(function (res) {
            _this.router.navigate(['/']);
        });
    };
    BookService.prototype.setBook = function (name, price, ownerID, desc, contactInfo, img, department, today) {
        var _this = this;
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
                .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        };
        this.newBook = new __WEBPACK_IMPORTED_MODULE_3__component_book_book_model__["a" /* BookModel */](name, price, ownerID, desc, contactInfo, img, department, true, today);
        return this.httpClient.post('api/v1/books', this.newBook, options)
            .toPromise()
            .then(function (newBook) {
            _this.getALLBooks();
            _this.router.navigate(['/success']);
        })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
    };
    BookService.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    BookService.prototype.setCurrentPage = function (page) {
        this.currentPage = page;
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "../../../../../src/app/Service/collaboration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaborationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollaborationService = /** @class */ (function () {
    function CollaborationService() {
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId' + sessionId });
        // this.collaborationSocket.on('message', (message) => {
        //   console.log('message receive from server' + message);
        // });
        this.collaborationSocket.on('change', function (delta) {
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]); //  show on editor
        });
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit('change', delta);
    };
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit('restoreBuffer');
    };
    CollaborationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CollaborationService);
    return CollaborationService;
}());



/***/ }),

/***/ "../../../../../src/app/Service/demand.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemandService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_demand_demand_model__ = __webpack_require__("../../../../../src/app/component/demand/demand-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DemandService = /** @class */ (function () {
    function DemandService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.demandLists = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    DemandService.prototype.getDemandList = function () {
        var _this = this;
        this.httpClient.get('api/v1/demands')
            .subscribe(function (e) {
            _this.demandLists.next(e);
        });
        return this.demandLists.asObservable();
    };
    DemandService.prototype.setDemandList = function (name, contactInfo, desc, ownerID, today) {
        var _this = this;
        var demandItem = new __WEBPACK_IMPORTED_MODULE_5__component_demand_demand_model__["a" /* DemandModel */](name, contactInfo, desc, ownerID, true, today);
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
                .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        };
        return this.httpClient.post('api/v1/demands', demandItem, options)
            .toPromise()
            .then(function (e) { return _this.router.navigate(['/success']); })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
    };
    DemandService.prototype.setCurrentPage = function (currentPage) {
        this.currentPage = currentPage;
    };
    DemandService.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    DemandService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* Router */]])
    ], DemandService);
    return DemandService;
}());



/***/ }),

/***/ "../../../../../src/app/Service/house-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_house_house_model__ = __webpack_require__("../../../../../src/app/component/house/house.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HouseService = /** @class */ (function () {
    function HouseService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this._housesSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
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
    HouseService.prototype.getUserhouse = function (id) {
        return this.httpClient.get("api/v1/userHouses/" + id)
            .toPromise()
            .then(function (res) { return res; });
    };
    HouseService.prototype.setNewllHouse = function (address, price, ownerinfo, desc, contactInfo, img, fromDate, toDate) {
        var _this = this;
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
                .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        };
        this.newHouse = new __WEBPACK_IMPORTED_MODULE_3__component_house_house_model__["a" /* HouseModel */](address, price, ownerinfo, desc, contactInfo, img, true, fromDate, toDate);
        return this.httpClient.post('api/v1/houses', this.newHouse, options)
            .toPromise()
            .then(function (newHouses) {
            _this.getAllHouses();
            _this.router.navigate(['/success']);
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    HouseService.prototype.deleteHouse = function (id) {
        var _this = this;
        return this.httpClient.delete("api/v1/userHouses/" + id)
            .toPromise()
            .then(function (res) {
            _this.router.navigate(['/']);
            // console.log(res);
        });
    };
    HouseService.prototype.setCurrentPage = function (currentPage) {
        this.currentPage = currentPage;
    };
    HouseService.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    HouseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */]])
    ], HouseService);
    return HouseService;
}());



/***/ }),

/***/ "../../../../../src/app/Service/product-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_product_product_model__ = __webpack_require__("../../../../../src/app/component/product/product-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductService = /** @class */ (function () {
    function ProductService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this._productSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    ProductService.prototype.getProduct = function (id) {
        return this.httpClient.get("api/v1/products/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
    };
    ProductService.prototype.getUserProduct = function (id) {
        console.log(id);
        console.log('xixixix');
        return this.httpClient.get("api/v1/userproducts/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
    };
    ProductService.prototype.deleteProduct = function (id) {
        var _this = this;
        return this.httpClient.delete("api/v1/userProduct/" + id)
            .toPromise()
            .then(function (res) {
            _this.router.navigate(['/']);
            //    console.log(res);
        });
    };
    ProductService.prototype.getAllProduct = function () {
        var _this = this;
        this.httpClient.get('api/v1/products')
            .toPromise()
            .then(function (res) {
            _this._productSource.next(res);
            _this.getAllProduct();
        })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
        return this._productSource.asObservable();
    };
    ProductService.prototype.setProduct = function (name, price, ownerID, desc, contactInfo, img, type, today) {
        var _this = this;
        var options = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
                .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        };
        type = true;
        this.newProduct = new __WEBPACK_IMPORTED_MODULE_3__component_product_product_model__["a" /* ProductModel */](name, price, ownerID, desc, contactInfo, img, type, today);
        return this.httpClient.post('api/v1/products', this.newProduct, options)
            .toPromise()
            .then(function (newProducts) {
            _this.getAllProduct();
            _this.router.navigate(['/success']);
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
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* Router */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_home_page_home_component_component__ = __webpack_require__("../../../../../src/app/component/home-page/home-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_house_house_component_component__ = __webpack_require__("../../../../../src/app/component/house/house-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_product_product_component__ = __webpack_require__("../../../../../src/app/component/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_product_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/component/product/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_test_test_component__ = __webpack_require__("../../../../../src/app/component/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_house_house_detail_house_detail_component__ = __webpack_require__("../../../../../src/app/component/house/house-detail/house-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_book_book_component__ = __webpack_require__("../../../../../src/app/component/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_book_book_detail_book_detail_component__ = __webpack_require__("../../../../../src/app/component/book/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_new_students_new_students_component__ = __webpack_require__("../../../../../src/app/component/new-students/new-students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_sell_sell_component__ = __webpack_require__("../../../../../src/app/component/sell/sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__coding_coding_component__ = __webpack_require__("../../../../../src/app/coding/coding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_callback_callback_component__ = __webpack_require__("../../../../../src/app/component/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_profile_profile_component__ = __webpack_require__("../../../../../src/app/component/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Service_auth_guard_service__ = __webpack_require__("../../../../../src/app/Service/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_success_success_component__ = __webpack_require__("../../../../../src/app/component/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/component/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_error_error_component__ = __webpack_require__("../../../../../src/app/component/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_demand_demand_component__ = __webpack_require__("../../../../../src/app/component/demand/demand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_pick_up_pick_up_component__ = __webpack_require__("../../../../../src/app/component/pick-up/pick-up.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRouter = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__component_home_page_home_component_component__["a" /* HomeComponentComponent */] },
    { path: 'sell', component: __WEBPACK_IMPORTED_MODULE_11__component_sell_sell_component__["a" /* SellComponent */] },
    { path: 'editor', component: __WEBPACK_IMPORTED_MODULE_12__coding_coding_component__["a" /* CodingComponent */] },
    { path: 'book-list', component: __WEBPACK_IMPORTED_MODULE_8__component_book_book_component__["a" /* BookComponent */] },
    { path: 'book-list/:id', component: __WEBPACK_IMPORTED_MODULE_9__component_book_book_detail_book_detail_component__["a" /* BookDetailComponent */] },
    { path: 'house-list', component: __WEBPACK_IMPORTED_MODULE_3__component_house_house_component_component__["a" /* HouseComponentComponent */] },
    {
        path: 'house-list/:id', component: __WEBPACK_IMPORTED_MODULE_7__component_house_house_detail_house_detail_component__["a" /* HouseDetailComponent */]
    },
    { path: 'product-list', component: __WEBPACK_IMPORTED_MODULE_4__component_product_product_component__["a" /* ProductComponent */] },
    {
        path: 'product-list/:id', component: __WEBPACK_IMPORTED_MODULE_5__component_product_product_detail_product_detail_component__["a" /* ProductDetailComponent */]
    },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_6__component_test_test_component__["a" /* TestComponent */] },
    { path: 'survival-guide', component: __WEBPACK_IMPORTED_MODULE_10__component_new_students_new_students_component__["a" /* NewStudentsComponent */] },
    { path: 'pickup', component: __WEBPACK_IMPORTED_MODULE_20__component_pick_up_pick_up_component__["a" /* PickUpComponent */] },
    { path: 'demand-list', component: __WEBPACK_IMPORTED_MODULE_19__component_demand_demand_component__["a" /* DemandComponent */] },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_13__component_callback_callback_component__["a" /* CallbackComponent */] },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_14__component_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_15__Service_auth_guard_service__["a" /* AuthGuardService */]]
    },
    { path: 'success', component: __WEBPACK_IMPORTED_MODULE_16__component_success_success_component__["a" /* SuccessComponent */] },
    { path: 'Not-found', component: __WEBPACK_IMPORTED_MODULE_17__component_not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: 'error', component: __WEBPACK_IMPORTED_MODULE_18__component_error_error_component__["a" /* ErrorComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_17__component_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */].forRoot(appRouter)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_auth_service__ = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
        __WEBPACK_IMPORTED_MODULE_1_ng2_page_scroll__["b" /* PageScrollConfig */].defaultDuration = 500;
        auth.handleAuthentication();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Service_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__ = __webpack_require__("../../../../ng2-page-scroll/ng2-page-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_house_house_component_component__ = __webpack_require__("../../../../../src/app/component/house/house-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_home_page_home_component_component__ = __webpack_require__("../../../../../src/app/component/home-page/home-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_product_product_component__ = __webpack_require__("../../../../../src/app/component/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_product_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/component/product/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_header_header_component__ = __webpack_require__("../../../../../src/app/component/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_nav_nav_component__ = __webpack_require__("../../../../../src/app/component/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_test_test_component__ = __webpack_require__("../../../../../src/app/component/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_Service_product_service__ = __webpack_require__("../../../../../src/app/Service/product-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_Service_collaboration_service__ = __webpack_require__("../../../../../src/app/Service/collaboration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Service_house_service__ = __webpack_require__("../../../../../src/app/Service/house-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_house_house_detail_house_detail_component__ = __webpack_require__("../../../../../src/app/component/house/house-detail/house-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_book_book_component__ = __webpack_require__("../../../../../src/app/component/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Service_book_service__ = __webpack_require__("../../../../../src/app/Service/book-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__component_book_book_detail_book_detail_component__ = __webpack_require__("../../../../../src/app/component/book/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__component_new_students_new_students_component__ = __webpack_require__("../../../../../src/app/component/new-students/new-students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__component_sell_sell_component__ = __webpack_require__("../../../../../src/app/component/sell/sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__component_footer_footer_component__ = __webpack_require__("../../../../../src/app/component/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__coding_coding_component__ = __webpack_require__("../../../../../src/app/coding/coding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__component_profile_profile_component__ = __webpack_require__("../../../../../src/app/component/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Service_auth_service__ = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__component_callback_callback_component__ = __webpack_require__("../../../../../src/app/component/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Service_auth_guard_service__ = __webpack_require__("../../../../../src/app/Service/auth.guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__component_error_error_component__ = __webpack_require__("../../../../../src/app/component/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__component_success_success_component__ = __webpack_require__("../../../../../src/app/component/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__component_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/component/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__Pipe_search_pipe__ = __webpack_require__("../../../../../src/app/Pipe/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__Pipe_house_search_pipe__ = __webpack_require__("../../../../../src/app/Pipe/house-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__Pipe_product_search_pipe__ = __webpack_require__("../../../../../src/app/Pipe/product-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_material_divider__ = __webpack_require__("../../../material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__component_demand_demand_component__ = __webpack_require__("../../../../../src/app/component/demand/demand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__Service_demand_service__ = __webpack_require__("../../../../../src/app/Service/demand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__component_pick_up_pick_up_component__ = __webpack_require__("../../../../../src/app/component/pick-up/pick-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_house_house_component_component__["a" /* HouseComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_home_page_home_component_component__["a" /* HomeComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_9__component_product_product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_21__component_house_house_detail_house_detail_component__["a" /* HouseDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_22__component_book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_27__component_book_book_detail_book_detail_component__["a" /* BookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_new_students_new_students_component__["a" /* NewStudentsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__component_sell_sell_component__["a" /* SellComponent */],
                __WEBPACK_IMPORTED_MODULE_34__component_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_35__coding_coding_component__["a" /* CodingComponent */],
                __WEBPACK_IMPORTED_MODULE_36__component_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_38__component_callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_40__component_error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_41__component_success_success_component__["a" /* SuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_42__component_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_43__Pipe_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_44__Pipe_house_search_pipe__["a" /* HouseSearchPipe */],
                __WEBPACK_IMPORTED_MODULE_45__Pipe_product_search_pipe__["a" /* ProductSearchPipe */],
                __WEBPACK_IMPORTED_MODULE_48__component_demand_demand_component__["a" /* DemandComponent */],
                __WEBPACK_IMPORTED_MODULE_50__component_pick_up_pick_up_component__["a" /* PickUpComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_page_scroll__["a" /* Ng2PageScrollModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_carousel__["a" /* NgxCarouselModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_46__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_47__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_51__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material__["e" /* MatNativeDateModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__app_Service_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_20__Service_house_service__["a" /* HouseService */],
                __WEBPACK_IMPORTED_MODULE_26__Service_book_service__["a" /* BookService */],
                __WEBPACK_IMPORTED_MODULE_19__app_Service_collaboration_service__["a" /* CollaborationService */],
                __WEBPACK_IMPORTED_MODULE_37__Service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_39__Service_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_49__Service_demand_service__["a" /* DemandService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/coding/coding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen {\r\n    #editor {\r\n        height:600px;\r\n    }\r\n    .lang-select {\r\n        width: 100px;\r\n        margin-right: 10px;\r\n        float: left;\r\n      }\r\n      header .btn {\r\n        margin: 0 5px;\r\n        float: left;\r\n      }\r\n      footer .btn {\r\n        margin: 0 5px;\r\n      }\r\n      .editor-footer, .editor-header {\r\n        margin: 10px 0;\r\n      }\r\n      .cursor {\r\n        /*position:absolute;*/\r\n        background: rgba(0, 250, 0, 0.5);\r\n        z-index: 40;\r\n        width: 2px !important;\r\n      }\r\n      .select {\r\n          overflow: hidden;\r\n      }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coding/coding.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"fh5co-loader\"></div>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a routerLink=\"\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li class=\"has-dropdown active\">\n                <a routerLink=\"/product-list\">Shop</a>\n                <ul class=\"dropdown\">\n                  <li>\n                    <a href=\"single.html\">Single Shop</a>\n                  </li>\n                </ul>\n              </li>\n              <li>\n                <a href=\"about.html\">About</a>\n              </li>\n              <li class=\"has-dropdown\">\n                <a href=\"services.html\">Services</a>\n                <ul class=\"dropdown\">\n                  <li>\n                    <a href=\"#\">Web Design</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">eCommerce</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">Branding</a>\n                  </li>\n                  <li>\n                    <a href=\"#\">API</a>\n                  </li>\n                </ul>\n              </li>\n              <li>\n                <a href=\"contact.html\">Contact</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\n            <ul>\n              <li class=\"search\">\n                <div class=\"input-group\">\n                  <input type=\"text\" placeholder=\"Search..\">\n                  <span class=\"input-group-btn\">\n                    <button class=\"btn btn-primary\" type=\"button\">\n                      <i class=\"icon-search\"></i>\n                    </button>\n                  </span>\n                </div>\n              </li>\n              <li class=\"shopping-cart\">\n                <a href=\"#\" class=\"cart\">\n                  <span>\n                    <small>0</small>\n                    <i class=\"icon-shopping-cart\"></i>\n                  </span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>Online Coding Judge System</h1>\n                <h2>Have Fun With Your Code Here!</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n          <div class=\"row animate-box\">\n              <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n                <span>Enjoy Coding</span>\n                <h2>Coding Section.</h2>\n                <p>This Section is under testing now, if you find some bugs or have any suggestions, please let us know. We are very appriciated it.\n                </p>\n              </div>\n            </div>\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n\n              <section>\n                  <header class=\"editor-header\">\n                    <div class=\"select\">\n                        <select class=\"form-control lang-select\" name=\"language\"\n                        [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n                        <option *ngFor=\"let language of languages\" [value]=\"language\">\n                          {{language}}\n                        </option>\n                       </select>\n                       <!--reset button -->\n                       <!-- Button trigger modal -->\n                       <button type=\"button\" id=\"reset\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n                         Reset\n                       </button>\n                    </div>\n                    \n                \n                    <!-- Modal -->\n                    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                      <div class=\"modal-dialog\" role=\"document\">\n                        <div class=\"modal-content\">\n                          <div class=\"modal-header\">\n                            <h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you sure</h5>\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                              <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                          </div>\n                          <div class=\"modal-body\">\n                            You will lose current code in the editor, are you sure?\n                          </div>\n                          <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n                            (click)=\"resetEditor()\">Reset</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </header>\n                  <div class=\"row\">\n                    <div id=\"editor\">\n                    </div>\n                  </div><!-- This is the body -->\n                  <footer class=\"editor-footer\">\n                      <button type=\"button\" class=\"btn btn-success pull-right\" \n                      (click)=\"submit()\">Submit Solution</button>\n                  </footer>\n                </section>\n\n\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/coding/coding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_collaboration_service__ = __webpack_require__("../../../../../src/app/Service/collaboration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodingComponent = /** @class */ (function () {
    function CodingComponent(collaborationService, router) {
        this.collaborationService = collaborationService;
        this.router = router;
        this.languages = ['Java', 'Python'];
        this.language = 'Java';
        this.defaultContent = {
            Java: "public class Example {\n    public static void main(String[] args) {\n        // Type your Java code here\n    }\n  }",
            Python: "class Solution:\n  def example():\n       #Write your Python code here"
        };
    }
    CodingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params
            .subscribe(function (params) {
            _this.sessionId = params['id'];
        });
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/eclipse');
        this.resetEditor();
        this.collaborationService.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        this.editor.on('change', function (e) {
            console.log('editor change' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange !== e) {
                _this.collaborationService.change(JSON.stringify(e));
            }
        });
        this.collaborationService.restoreBuffer(); // load previous data
    };
    CodingComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    CodingComponent.prototype.submit = function () {
        var userCode = this.editor.getValue();
        console.log(userCode);
    };
    CodingComponent.prototype.resetEditor = function () {
        this.editor.setValue(this.defaultContent.Java);
        this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
    };
    CodingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-coding',
            template: __webpack_require__("../../../../../src/app/coding/coding.component.html"),
            styles: [__webpack_require__("../../../../../src/app/coding/coding.component.css"), __webpack_require__("../../../../../src/app/component/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Service_collaboration_service__["a" /* CollaborationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CodingComponent);
    return CodingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/book/book-detail/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"fh5co-loader\"></div>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a routerLink=\"\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/test'\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>Book Details</h1>\n                <h2>Our Goal is makeing your life much earier in WPI</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n\n            <div>\n              <ngx-carousel [inputs]=\"Config\">\n                <ngx-item *ngFor=\"let bookImg of imgurl\" class=\"bannerStyle \" NgxCarouselItem>\n                  <img [src]=\"bookImg\" alt=\"house\" width=\"100%\" #test2 id=\"img1\">\n                </ngx-item>\n                <i NgxCarouselPrev class=\"leftRs fa fa-arrow-left fa-3x\" aria-hidden=\"true\"></i>\n                <i NgxCarouselNext class=\"rightRs fa fa-arrow-right fa-3x\" aria-hidden=\"true\"></i>\n              </ngx-carousel>\n            </div>\n            <div class=\"row animate-box\">\n              <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n                <h2>{{department}}</h2>\n                <p>\n                  <a [routerLink]=\"'/sell'\" class=\"btn btn-primary btn-outline btn-lg\">Post your Product to Sell</a>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n            <ul class=\"nav nav-tabs\">\n              <mat-tab-group>\n                <mat-tab label=\"Book detail\">\n                  <div class=\"col-md-12 \">\n                    <mat-list>\n                      <mat-list-item>Book Name: {{name}}</mat-list-item>\n                      <mat-divider></mat-divider>\n                      <mat-list-item>Book Price: {{price}}$</mat-list-item>\n                      <mat-divider></mat-divider>\n                      <mat-list-item>Book department: {{department}}</mat-list-item>\n                    </mat-list>\n                  </div>\n                </mat-tab>\n                <mat-tab label=\"Contact Info\">\n                  <div class=\"col-md-12\">\n                    <mat-list>\n                      <mat-list-item>Contact information: {{contactInfo}}</mat-list-item>\n                      <mat-divider></mat-divider>\n                      <mat-list-item>Post date: {{date}}</mat-list-item>\n                      <mat-divider></mat-divider>\n                      <mat-list-item>Book Description: {{desc}}</mat-list-item>\n                      <mat-divider></mat-divider>\n                    </mat-list>\n                  </div>\n                </mat-tab>\n              </mat-tab-group>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/book/book-detail/book-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_book_service__ = __webpack_require__("../../../../../src/app/Service/book-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(bookService, activatedRoute, router) {
        this.bookService = bookService;
        this.activatedRoute = activatedRoute;
        this.router = router;
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
            //  this.id = +params['id'];
            _this.bookService.getBook(+params['id'])
                .then(function (book) {
                _this.bookModel = book;
                _this.imgurl = _this.bookModel.imgUrl;
                _this.department = _this.bookModel.department;
                _this.name = _this.bookModel.name;
                _this.contactInfo = _this.bookModel.contactInfo;
                _this.price = _this.bookModel.price;
                _this.ownerID = _this.bookModel.ownerID;
                _this.desc = _this.bookModel.description;
                _this.date = _this.bookModel.today;
                //  console.log(this.bookModel);
                // return this.bookModel;
            })
                .catch(function (e) {
                _this.router.navigate(['/Not-found']);
            });
        });
        // console.log(this.bookModel);
        //  console.log(typeof this.id);
    };
    BookDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book-detail',
            template: __webpack_require__("../../../../../src/app/component/book/book-detail/book-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/product/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Service_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/book/book-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookModel; });
var BookModel = /** @class */ (function () {
    function BookModel(name, price, ownerID, desc, contactInfo, img, department, type, today) {
        this.name = name;
        this.department = department;
        this.ownerID = ownerID;
        this.price = price;
        this.contactInfo = contactInfo;
        this.description = desc;
        this.imgUrl = img;
        this.type = type;
        this.today = today;
    }
    return BookModel;
}());



/***/ }),

/***/ "../../../../../src/app/component/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n\t<div id=\"page\">\r\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\r\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li class=\"search\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search...\" [formControl]=\"searchBox\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-search\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</nav>\r\n\r\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\r\n\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\r\n\t\t\t\t\t\t<div class=\"display-t\">\r\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\r\n\t\t\t\t\t\t\t\t<h1>Book store</h1>\r\n\t\t\t\t\t\t\t\t<h2>Find your most helpful text book with the best price!</h2>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\r\n\t\t<div id=\"fh5co-product\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row animate-box\">\r\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\r\n\t\t\t\t\t\t<span>Cool Stuff</span>\r\n\t\t\t\t\t\t<h2>Book-list.</h2>\r\n\t\t\t\t\t\t<p>If you find some bugs or have some suggestions, please contack us at: hbchenjh@gmail.com. We are hearing all the time.\r\n\t\t\t\t\t\t\tyour feedback makes our website better!\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3 choice\">\r\n\t\t\t\t\t\t<div class=\"product\">\r\n\t\t\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t\t\t<i>Please select department:</i>\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\tselected:{{selectedDept}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<mat-selection-list #Dept [(ngModel)]=\"selectedDept\" (selectionChange)=\"onChange()\">\r\n\t\t\t\t\t\t\t<mat-list-option *ngFor=\"let Department of Departments\" [value]=\"Department\">\r\n\t\t\t\t\t\t\t\t{{Department}}\r\n\t\t\t\t\t\t\t</mat-list-option>\r\n\t\t\t\t\t\t</mat-selection-list>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-3 text-center\" *ngFor=\"let Book of AllBooks| search: searchValue | paginate: {id:'Book',\r\n\t\t\t\t\t\t                                                                        itemsPerPage: 6, \r\n\t\t\t                                                                                    currentPage: bp }\">\r\n\t\t\t\t\t\t<div class=\"product\" (click)=\"ToBookDetail(Book.id)\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"product-grid\" [style.background-image]=\"'url('+Book.imgUrl[0]+')'\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t\t\t\t<i>{{Book.name}}</i>\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t\t<span class=\"price\">{{Book.department}}</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<pagination-controls class=\"pageButton\" id=\"Book\" (pageChange)=\"getPageNumber($event)\" maxSize=\"9\" directionLinks=\"true\"\r\n\t\t\t\t autoHide=\"true\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\r\n\t\t\t\t</pagination-controls>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<app-footer></app-footer>\r\n\t</div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_book_service__ = __webpack_require__("../../../../../src/app/Service/book-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { SearchBoxService } from '../Service/search-box.service';
var BookComponent = /** @class */ (function () {
    function BookComponent(bookService, router, activateRouter) {
        this.bookService = bookService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.searchBox = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.searchValue = '';
        this.selectedDept = ['cs'];
        this.Departments = ['Computer Science', 'Electrical Engineering', 'ESL', 'Data Science', 'MSIT', 'Marketing', 'Others'];
        this.AllBooks = [];
        this.books = [];
        this.selectedBook = [];
        this.bp = this.bookService.getCurrentPage();
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionBooks = this.bookService.getALLBooks()
            .subscribe(function (allBooks) {
            _this.AllBooks = allBooks;
            _this.AllBooks = _this.AllBooks.reverse();
            _this.books = allBooks;
            _this.books = _this.books.reverse();
        });
        this.subscriptionInput = this.searchBox
            .valueChanges
            .debounceTime(200)
            .subscribe(function (term) {
            _this.searchValue = term;
        });
    };
    BookComponent.prototype.ngOnDestroy = function () {
        this.subscriptionBooks.unsubscribe();
    };
    BookComponent.prototype.ToBookDetail = function (id) {
        this.bookService.setCurrentPage(this.bp);
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
    };
    BookComponent.prototype.getPageNumber = function (event) {
        this.bp = event;
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book',
            template: __webpack_require__("../../../../../src/app/component/book/book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Service_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/callback/callback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading {\r\n    position: absolute;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #fff;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = /** @class */ (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-callback',
            template: __webpack_require__("../../../../../src/app/component/callback/callback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/demand/demand-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemandModel; });
var DemandModel = /** @class */ (function () {
    function DemandModel(name, contactInfo, desc, ownerID, type, today) {
        this.name = name;
        this.contactInfo = contactInfo;
        this.description = desc;
        this.ownerID = ownerID;
        this.type = type;
        this.today = today;
    }
    return DemandModel;
}());



/***/ }),

/***/ "../../../../../src/app/component/demand/demand.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#demandbox{\r\n    border: 1px solid peru;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/demand/demand.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a [routerLink]=\"['']\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/test'\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>Demand List</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <h2>Items in Demand.</h2>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center\" id=\"demandbox\" *ngFor=\"let demand of demandList | paginate: { id:'demands',\n\t\t\t\t\t\t                                                                             itemsPerPage: 4, \n                                                                                         currentPage: dp }\">\n            <mat-list>\n              <mat-list-item>demand name: {{demand.name}}</mat-list-item>\n              <mat-divider></mat-divider>\n              <mat-list-item>demand Description:: {{demand.description}}</mat-list-item>\n              <mat-divider></mat-divider>\n              <mat-list-item>Contact Information: {{demand.contactInfo}}</mat-list-item>\n              <mat-divider></mat-divider>\n              <mat-list-item>Post date: {{demand.today}}</mat-list-item>\n              <mat-divider></mat-divider>\n            </mat-list>\n          </div>\n        </div>\n        <pagination-controls class=\"pageButton\" id=\"demands\" (pageChange)=\"dp = $event\" maxSize=\"20\" directionLinks=\"true\" autoHide=\"true\"\n          screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/demand/demand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_demand_service__ = __webpack_require__("../../../../../src/app/Service/demand.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemandComponent = /** @class */ (function () {
    function DemandComponent(demandService) {
        this.demandService = demandService;
        this.demandList = [];
    }
    DemandComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.demandService.getDemandList()
            .subscribe(function (demandList) {
            _this.demandList = demandList;
        });
    };
    DemandComponent.prototype.getPageNumber = function (event) {
        this.dp = event;
        //  console.log(event);
    };
    DemandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-demand',
            template: __webpack_require__("../../../../../src/app/component/demand/demand.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/demand/demand.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Service_demand_service__["a" /* DemandService */]])
    ], DemandComponent);
    return DemandComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a [routerLink]=\"['']\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a href=\"contact.html\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>Server Error!</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <h2>ERROR.</h2>\n          </div>\n        </div>\n        <h1>\n          There must be something wrong with the server, please contact: hbchenjh@gmail.com! Thank you very much!\n        </h1>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/component/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  a {\r\n    color: #d1c286;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  a:hover, a:active, a:focus {\r\n    color: #d1c286;\r\n    outline: none;\r\n    text-decoration: none;\r\n  }\r\n  p {\r\n    margin-bottom: 20px;\r\n  }\r\n  .copyrights{\r\n      text-indent:-9999px;\r\n      height:0;\r\n      line-height:0;\r\n      font-size:0;\r\n      overflow:hidden;\r\n  }\r\n  h3 {\r\n    color: #000;\r\n    font-family: \"Montserrat\", Arial, sans-serif;\r\n    font-weight: 400;\r\n    margin: 0 0 20px 0;\r\n  }\r\n  .fh5co-social-icons li {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    display: -moz-inline-stack;\r\n    display: inline-block;\r\n    zoom: 1;\r\n    *display: inline;\r\n  }\r\n  .fh5co-social-icons li a {\r\n    display: -moz-inline-stack;\r\n    display: inline-block;\r\n    zoom: 1;\r\n    *display: inline;\r\n    color: #d1c286;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n  }\r\n  .fh5co-social-icons li a i {\r\n    font-size: 20px;\r\n  }\r\n  .fh5co-contact-info ul {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  .fh5co-contact-info ul li {\r\n    padding: 0 0 0 40px;\r\n    margin: 0 0 30px 0;\r\n    list-style: none;\r\n    position: relative;\r\n  }\r\n  .fh5co-contact-info ul li:before {\r\n    color: #d1c286;\r\n    position: absolute;\r\n    left: 0;\r\n    top: .05em;\r\n    font-family: 'icomoon';\r\n    speak: none;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    line-height: 1;\r\n    /* Better Font Rendering =========== */\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n  .fh5co-contact-info ul li.address:before {\r\n    font-size: 30px;\r\n    content: \"\\E9D1\";\r\n  }\r\n  .fh5co-contact-info ul li.phone:before {\r\n    font-size: 23px;\r\n    content: \"\\E9F4\";\r\n  }\r\n  .fh5co-contact-info ul li.email:before {\r\n    font-size: 23px;\r\n    content: \"\\E9DA\";\r\n  }\r\n  .fh5co-contact-info ul li.url:before {\r\n    font-size: 23px;\r\n    content: \"\\E9AF\";\r\n  }\r\n  #fh5co-contact,\r\n  #fh5co-footer {\r\n    padding: 7em 0;\r\n    clear: both;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-contact,\r\n    #fh5co-footer {\r\n      padding: 3em 0;\r\n    }\r\n  }\r\n  #fh5co-footer {\r\n    background: #efefef;\r\n  }\r\n  #fh5co-footer .fh5co-footer-links {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  #fh5co-footer .fh5co-footer-links li {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n  }\r\n  #fh5co-footer .fh5co-footer-links li a {\r\n    color: #000;\r\n    text-decoration: none;\r\n  }\r\n  #fh5co-footer .fh5co-footer-links li a:hover {\r\n    text-decoration: underline;\r\n  }\r\n  #fh5co-footer .fh5co-widget {\r\n    margin-bottom: 30px;\r\n  }\r\n  @media screen and (max-width: 768px) {\r\n    #fh5co-footer .fh5co-widget {\r\n      text-align: left;\r\n    }\r\n  }\r\n  #fh5co-footer .fh5co-widget h3 {\r\n    margin-bottom: 15px;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase;\r\n  }\r\n  #fh5co-footer .copyright .block {\r\n    display: block;\r\n  }\r\n  .row-pb-md {\r\n    padding-bottom: 4em !important;\r\n  }\r\n  .row-pb-sm {\r\n    padding-bottom: 2em !important;\r\n  }\r\n \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"fh5co-footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"row row-pb-md\">\n      <div class=\"col-md-8 col-md-offset-1 fh5co-widget\">\n        <h3>Attention:</h3>\n        <p> WPILIFE(WPICSSA) website just provide a platform. Everyone in WPI can register with his/her WPI email, and can submit what he/she want to sell. We try to make things as easy as possible.\n            If this item interests you, you can contact the owner directly! [You can find the contact info of Owner below]\n            Thanks for your support!\n        </p>\n      </div>\n    </div>\n    <div class=\"row copyright\">\n      <div class=\"col-md-12 text-center\">\n        <p>\n          <small class=\"block\">Copyright WPILIEF Team@2018 All rights reserved.   \n          </small>\n        </p>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/component/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\r\n\tfont-family: 'Lato', sans-serif;\r\n\ttext-rendering: optimizeLegibility !important;\r\n\t-webkit-font-smoothing: antialiased !important;\r\n\tcolor: #5a5a5a;\r\n}\r\nh1 {\r\n}\r\nh1 strong {\r\n\tfont-weight: 900;\r\n}\r\nh2 {\r\n\ttext-transform: uppercase;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n}\r\nh3 {\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n}\r\nh4 {\r\n\ttext-transform: capitalize;\r\n}\r\nh5 {\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tline-height: 20px;\r\n}\r\np {\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\np.intro {\r\n\tfont-size: 16px;\r\n\tmargin: 12px 0 0;\r\n\tline-height: 24px;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\np.newwebsite{\r\n\tcolor: orange !important;\r\n\tfont-size: 16px;\r\n\tmargin: 12px 0 0;\r\n\tline-height: 24px;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\tcursor: pointer;\r\n}\r\na {\r\n\tcolor: #D2527F\r\n}\r\na:hover, a:focus {\r\n\ttext-decoration: none;\r\n\tcolor: #9D3D5F;\r\n}\r\n.clearfix:after {\r\n\tvisibility: hidden;\r\n\tdisplay: block;\r\n\tfont-size: 0;\r\n\tcontent: \" \";\r\n\tclear: both;\r\n\theight: 0;\r\n}\r\n.clearfix {\r\n\tdisplay: inline-block;\r\n}\r\n* html .clearfix {\r\n\theight: 1%;\r\n}\r\n.clearfix {\r\n\tdisplay: block;\r\n}\r\nul, ol {\r\n\tpadding: 0;\r\n\twebkit-padding: 0;\r\n\tmoz-padding: 0;\r\n}\r\n/* Navigation */\r\n/* Home Style */\r\nheader {\r\n\tbackground: url(" + escape(__webpack_require__("../../../../../src/assets/wpi-main.jpg")) + ") no-repeat bottom center fixed;\r\n\tbackground-size: cover;\r\n\tcolor: #cfcfcf;\r\n\tposition: relative;\r\n\theight: 100%;\r\n}\r\nheader p {\r\n\tcolor: #ffffff;\r\n\tfont-size: 22px;\r\n}\r\n.intro-text {\r\n\tposition: relative;\r\n\tpadding-top: 250px;\r\n\tpadding-right: 0;\r\n\tpadding-left: 0;\r\n\tpadding-bottom: 200px;\r\n}\r\n.intro-text H1 {\r\n\tfont-size: 40px;\r\n\ttext-transform: uppercase;\r\n\tcolor: #fff;\r\n}\r\n.color {\r\n\tcolor: #D2527F;\r\n}\r\na.fa.fa-angle-down {\r\n\tpadding: 10px 15px;\r\n\tcolor: #fff;\r\n\tfont-size: 24px;\r\n\tmargin-top: 100px;\r\n\tborder: 0px solid #E74C3C;\r\n\t-webkit-transition: all 0.5s;\r\n\ttransition: all 0.5s;\r\n\tborder-radius: 50%;\r\n\tbackground-color: #D2527F;\r\n}\r\na.fa.fa-angle-down:hover {\r\n\tbackground: #9D3D5F;\r\n}\r\n@media (max-width: 768px) {\r\n\t.content {\r\n\t\tpadding: 40% 0 0;\r\n\t}\r\n\t}\r\n@media (max-width: 603px) {\r\n\t#menu.navbar-default {\r\n\t\tbackground-color: rgba(0, 0, 0, 0.7);\r\n\t}\r\n\tlabel {\r\n\t\tfloat: none !important\r\n\t}\r\n\t.pull-left.fnav, .pull-right.fnav {\r\n\t\tfloat: none !important;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.hover-bg .hover-text {\r\n\t\tpadding: 12% 10%;\r\n\t}\r\n\t}\r\n@media (max-width: 360px) {\r\n\t.hover-bg .hover-text {\r\n\t\tpadding: 22% 10%;\r\n\t}\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"text-center\" name=\"home\">\n  <div class=\"intro-text\">\n    <h1>Welcome to\n      <strong>\n        <span class=\"color\">WPICSSA</span>\n      </strong>(Alpha 1.1)</h1>\n    <p>We are dedicated to\n      <strong>make our</strong> &\n      <strong>life</strong> in WPI much easier.</p>\n    <p class=\"newwebsite\" [routerLink]=\"'/test'\">Important: About our new WPILIFE !</p>\n  </div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/component/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/component/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/home-page/home-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\r\n\tfont-family: 'Lato', sans-serif;\r\n\ttext-rendering: optimizeLegibility !important;\r\n\t-webkit-font-smoothing: antialiased !important;\r\n\tcolor: #5a5a5a;\r\n}\r\nh1 strong {\r\n\tfont-weight: 900;\r\n}\r\nh2 {\r\n\ttext-transform: uppercase;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n}\r\nh3 {\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n}\r\nh4 {\r\n\ttext-transform: capitalize;\r\n}\r\nh5 {\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tline-height: 20px;\r\n}\r\n#services-section p,#works-section p,#about-section p,#team-section p,#testimonials-section p #contact-section p {\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\np.intro {\r\n\tfont-size: 16px;\r\n\tmargin: 12px 0 0;\r\n\tline-height: 24px;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\na {\r\n\tcolor: #D2527F\r\n}\r\na:hover, a:focus {\r\n\ttext-decoration: none;\r\n\tcolor: #9D3D5F;\r\n}\r\n.clearfix:after {\r\n\tvisibility: hidden;\r\n\tdisplay: block;\r\n\tfont-size: 0;\r\n\tcontent: \" \";\r\n\tclear: both;\r\n\theight: 0;\r\n}\r\n.clearfix {\r\n\tdisplay: inline-block;\r\n}\r\n* html .clearfix {\r\n\theight: 1%;\r\n}\r\n.clearfix {\r\n\tdisplay: block;\r\n}\r\nul, ol {\r\n\tpadding: 0;\r\n\twebkit-padding: 0;\r\n\tmoz-padding: 0;\r\n}\r\n/* Navigation */\r\n/* Home Style */\r\n/* About Section */\r\n#about-section {\r\n\tpadding: 80px 0;\r\n\tbackground-color: #eee;\r\n}\r\n#about-section i {\r\n\tfloat: left;\r\n\tdisplay: block;\r\n\tmargin-right: 15px;\r\n\tcolor: #D2527F;\r\n\tfont-size: 24px;\r\n}\r\n#about-section p {\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 30px;\r\n}\r\n/* Team Section */\r\n#team-section {\r\n\tpadding: 80px 0;\r\n}\r\n.section-title.center {\r\n\tpadding: 30px 0;\r\n}\r\n.section-title h2, .section-title.center h2 {\r\n\tfont-weight: 400;\r\n\tmargin-bottom: 30px;\r\n}\r\n.section-title.center hr {\r\n\theight: 1px;\r\n\twidth: 60px;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\tbackground: #D2527F;\r\n\tborder: 0;\r\n}\r\n#team-section .item {\r\n\tpadding: 0;\r\n\tmargin: 15px;\r\n\ttext-align: center;\r\n}\r\nimg.img-circle.team-img {\r\n\twidth: 120px;\r\n\theight: 120px;\r\n\tborder: 4px solid transparent;\r\n\t-webkit-transition: all 0.5s;\r\n\ttransition: all 0.5s;\r\n}\r\n#team-section .team .thumbnail:hover>img.img-circle.team-img {\r\n\tborder: 4px solid #D2527F;\r\n\tfont-size: medium;\r\n}\r\n#team-section .thumbnail {\r\n\tbackground: transparent;\r\n\tborder: 0;\r\n}\r\n#team-section .thumbnail .caption {\r\n\tpadding: 9px;\r\n\tcolor: #5a5a5a;\r\n}\r\n.owl-theme .owl-controls .owl-page span {\r\n\tdisplay: block;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tmargin: 5px 7px;\r\n\tfilter: Alpha(Opacity=1);\r\n\topacity: 1;\r\n\tborder-radius: 0;\r\n\tbackground: #FFFFFF;\r\n\t-webkit-transition: all 0.5s;\r\n\ttransition: all 0.5s;\r\n}\r\n.owl-theme .owl-controls .owl-page.active span, .owl-theme .owl-controls.clickable .owl-page:hover span {\r\n\tfilter: Alpha(Opacity=100);\r\n\topacity: 1;\r\n\tbackground: #D2527F;\r\n}\r\n.owl-theme .owl-controls .owl-page.active span {\r\n\tbackground: #D2527F;\r\n}\r\n.copyrights{text-indent:-9999px;height:0;line-height:0;font-size:0;overflow:hidden;}\r\n/* Services Section */\r\n#services-section {\r\n\tpadding: 80px 0;\r\n\tbackground-color: #eee;\r\n}\r\n.space {\r\n\tmargin-top: 40px;\r\n}\r\n#services-section i.fa {\r\n\tfont-size: 40px;\r\n\tborder: 2px solid #fff;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tpadding: 27px 25px;\r\n\tmargin-bottom: 10px;\r\n\tborder-radius: 50%;\r\n\t-webkit-transition: all 0.5s;\r\n\ttransition: all 0.5s;\r\n\tcolor: #D2527F;\r\n}\r\n#services-section i.fa.fa-mobile {\r\n\tfont-size: 50px;\r\n\tpadding: 20px 25px;\r\n}\r\n#services-section .service:hover>i.fa {\r\n\tborder: 2px solid #D2527F;\r\n\tbackground: #D2527F;\r\n\tcolor: #ffffff;\r\n}\r\n/* Gallery Section \r\n==============================*/\r\n#works-section {\r\n\tpadding: 80px 0;\r\n}\r\n.categories {\r\n\tpadding-bottom: 30px;\r\n\ttext-align: center;\r\n}\r\nul.cat li {\r\n\tdisplay: inline-block;\r\n}\r\n#works-section li.pull-right {\r\n\tmargin-top: 10px;\r\n}\r\nol.type li {\r\n\tdisplay: inline-block;\r\n\tmargin-left: 20px;\r\n}\r\nol.type li:after {\r\n\tcontent: ' | ';\r\n\tmargin-left: 20px;\r\n}\r\nol.type li:last-child:after {\r\n\tcontent: '';\r\n}\r\nol.type li a {\r\n\tcolor: #222222\r\n}\r\nol.type li a.active {\r\n\tcolor: #D2527F;\r\n\tfont-weight: bold;\r\n}\r\nol.type li a:hover {\r\n\tcolor: #D2527F;\r\n}\r\n.isotope-item {\r\n\tz-index: 2\r\n}\r\n.isotope-hidden.isotope-item {\r\n\tz-index: 1\r\n}\r\n.isotope, .isotope .isotope-item {\r\n\t/* change duration value to whatever you like */\r\n\t-webkit-transition-duration: 0.8s;\r\n\ttransition-duration: 0.8s;\r\n}\r\n.isotope-item {\r\n\tmargin-right: -1px;\r\n\t-webkit-backface-visibility: hidden;\r\n\tbackface-visibility: hidden;\r\n}\r\n.isotope {\r\n\t-webkit-backface-visibility: hidden;\r\n\tbackface-visibility: hidden;\r\n\t-webkit-transition-property: height, width;\r\n\ttransition-property: height, width;\r\n}\r\n.isotope .isotope-item {\r\n\t-webkit-backface-visibility: hidden;\r\n\tbackface-visibility: hidden;\r\n\t-webkit-transition-property: -webkit-transform, opacity;\r\n\t-webkit-transition-property: opacity, -webkit-transform;\r\n\ttransition-property: opacity, -webkit-transform;\r\n\ttransition-property: transform, opacity;\r\n\ttransition-property: transform, opacity, -webkit-transform;\r\n}\r\n.portfolio-item {\r\n\tmargin-bottom: 30px;\r\n}\r\n.portfolio-item .hover-bg {\r\n\theight: 260px;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n}\r\n.hover-bg .hover-text {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin: 0 auto;\r\n\tcolor: #ffffff;\r\n\tbackground: rgba(0, 0, 0, 0.66);\r\n\tpadding: 25% 0;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\topacity: 0;\r\n\t-webkit-transition: all 0.5s;\r\n\ttransition: all 0.5s;\r\n}\r\n.hover-bg .hover-text>h4 {\r\n\topacity: 0;\r\n\t-webkit-transform: translateY(100%);\r\n\ttransform: translateY(100%);\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n}\r\n.hover-bg:hover .hover-text>h4 {\r\n\topacity: 1;\r\n\t-webkit-backface-visibility: hidden;\r\n\t-webkit-transform: translateY(0);\r\n\ttransform: translateY(0);\r\n}\r\n.hover-bg .hover-text>i {\r\n\topacity: 0;\r\n\t-webkit-transform: translateY(0);\r\n\ttransform: translateY(0);\r\n\t-webkit-transition: all 0.3s;\r\n\ttransition: all 0.3s;\r\n}\r\n.hover-bg:hover .hover-text>i {\r\n\topacity: 1;\r\n\t-webkit-backface-visibility: hidden;\r\n\t-webkit-transform: translateY(100%);\r\n\ttransform: translateY(100%);\r\n}\r\n.hover-bg:hover .hover-text {\r\n\topacity: 1;\r\n}\r\n#works-section i.fa {\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tborder: 1px solid #D2527F;\r\n\tfont-size: 20px;\r\n\tpadding: 5px;\r\n\tborder-radius: 50%;\r\n\tcolor: #D2527F;\r\n}\r\n/* Testimonials Section */\r\n#testimonials-section {\r\n\tbackground: url(" + escape(__webpack_require__("../../../../../src/assets/testimonial-bg.jpg")) + ");\r\n\tbackground-size: cover;\r\n\tbackground-position: top;\r\n\tbackground-attachment: fixed;\r\n\tbackground-repeat: no-repeat;\r\n\tcolor: #ffffff;\r\n\tpadding: 80px 0;\r\n}\r\n#testimonial {\r\n\tpadding: 30px 0;\r\n}\r\n#testimonial .item {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: auto;\r\n}\r\n#testimonial .item p {\r\n\tfont-weight: 400;\r\n\tmargin: 30px 0;\r\n\tcolor: #eee;\r\n}\r\n/* Contact Section */\r\n#contact-section {\r\n\tpadding: 80px 0;\r\n}\r\n#contact-section h3 {\r\n\tfont-size: 20px;\r\n\tfont-weight: 400;\r\n\ttext-transform: uppercase;\r\n}\r\n#contact-section form {\r\n\tpadding: 30px 0;\r\n}\r\n#contact-section .fa {\r\n\tcolor: #D2527F;\r\n\tmargin-bottom: 10px;\r\n}\r\n#contact-section label {\r\n\tfont-size: 12px;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n\tfloat: left;\r\n}\r\n#contact-section .form-control {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tpadding: 6px 12px;\r\n\tfont-size: 14px;\r\n\tline-height: 1.42857143;\r\n\tcolor: #555;\r\n\tbackground-color: #fff;\r\n\tbackground-image: none;\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 2px;\r\n\t-webkit-box-shadow: none;\r\n\tbox-shadow: none;\r\n\t-webkit-transition: none;\r\n\ttransition: none;\r\n}\r\n#contact-section .form-control:focus {\r\n\tborder-color: inherit;\r\n\toutline: 0;\r\n\t-webkit-box-shadow: transparent;\r\n\tbox-shadow: transparent;\r\n}\r\n#contact-section .btn {\r\n\tbackground: #D2527F;\r\n\tborder: 0;\r\n\tborder-radius: 4px;\r\n\tpadding: 10px 20px;\r\n\tcolor: #ffffff;\r\n\ttext-transform: uppercase;\r\n}\r\n#contact-section .btn:hover, #contact-section .btn:focus {\r\n\tbackground: #9D3D5F;\r\n}\r\n.btn:active, .btn.active {\r\n\tbackground-image: none;\r\n\toutline: 0;\r\n\t-webkit-box-shadow: none;\r\n\tbox-shadow: none;\r\n}\r\na:focus, .btn:focus, .btn:active:focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn.active.focus {\r\n\toutline: none;\r\n\toutline-offset: none;\r\n}\r\n/* Footer */\r\nnav#footer {\r\n\tbackground: #222222;\r\n\tcolor: #ddd;\r\n\tpadding: 30px 0 25px 0;\r\n}\r\nnav#footer .fnav {\r\n\tvertical-align: middle;\r\n}\r\nul.footer-social li {\r\n\tdisplay: inline-block;\r\n\tmargin-right: 10px;\r\n}\r\nnav#footer p {\r\n\tfont-size: 12px;\r\n\tmargin-top: 10px;\r\n}\r\n#footer i.fa {\r\n\theight: 30px;\r\n\twidth: 30px;\r\n\tfont-size: 20px;\r\n\tpadding: 4px 5px;\r\n\tcolor: #ddd;\r\n\t-webkit-transition: all 0.5s;\r\n\ttransition: all 0.5s;\r\n}\r\n#footer i.fa:hover {\r\n\tcolor: #D2527F;\r\n}\r\n.mat-tab-labels{\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center; /* align items in Main Axis */\r\n\twidth: 100%;\r\n}\r\n.cat .mat-tab-body-content{\r\n\theight: 100%;\r\n\twidth: 100%;\r\n    overflow: hidden;\r\n}\r\n@media (max-width: 768px) {\r\n\t.content {\r\n\t\tpadding: 40% 0 0;\r\n\t}\r\n\t}\r\n@media (max-width: 603px) {\r\n\t#menu.navbar-default {\r\n\t\tbackground-color: rgba(0, 0, 0, 0.7);\r\n\t}\r\n\tlabel {\r\n\t\tfloat: none !important\r\n\t}\r\n\t.pull-left.fnav, .pull-right.fnav {\r\n\t\tfloat: none !important;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.hover-bg .hover-text {\r\n\t\tpadding: 12% 10%;\r\n\t}\r\n\t}\r\n@media (max-width: 360px) {\r\n\t.hover-bg .hover-text {\r\n\t\tpadding: 22% 10%;\r\n\t}\r\n\t}\r\n#survival-guide{\r\n\t\tcursor: pointer;\r\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/home-page/home-component.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n  <body> \n  <!-- Navigation\n    ==========================================-->\n  <app-nav></app-nav>\n  <!-- Header -->\n  <app-header></app-header>\n  <!-- Services Section -->\n  <div id=\"services-section\" class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"section-title center\">\n        <h2>Shopping\n          <strong>Section</strong>\n        </h2>\n        <hr>\n        <div class=\"clearfix\"></div>\n        <p>There you can find almost everything you want.</p>\n      </div>\n      <div class=\"space\"></div>\n      <div class=\"row\">\n        <div class=\"col-md-2 col-md-offset-1 col-sm-6 service\">\n          <i [routerLink]=\"['house-list']\" class=\"fa fa-home\"></i>\n          <h4>\n            <strong>House/Apartment Rent</strong>\n          </h4>\n          <p>Please make sure house condition when sign a lease </p>\n        </div>\n        <div class=\"col-md-2 col-sm-6 service\">\n          <i [routerLink]=\"'book-list'\" class=\"fa fa-book\"></i>\n          <h4>\n            <strong>Book</strong>\n          </h4>\n          <p>ECE, CS, MSIT, Marketing....All here.</p>\n        </div>\n        <div class=\"col-md-2 col-sm-6 service\">\n          <i [routerLink]=\"'product-list'\" class=\"fa fa-bed\"></i>\n          <h4>\n            <strong>Others</strong>\n          </h4>\n          <p>Cars, Bed.....</p>\n        </div>\n        <div class=\"col-md-2 col-sm-6 service\">\n          <i [routerLink]=\"'demand-list'\" class=\"fa fa-tag\"></i>\n          <h4>\n            <strong>Demand list</strong>\n          </h4>\n          <p>Someone needs those things.</p>\n        </div>\n        <div class=\"col-md-2 col-sm-6 service\">\n          <i [routerLink]=\"'sell'\" class=\"fa fa-money\"></i>\n          <h4>\n            <strong>Sell your Product</strong>\n          </h4>\n          <p>We are glad to help you save money.</p>\n        </div>  \n      </div>\n    </div>\n  </div>\n  <!-- Portfolio Section -->\n  <div id=\"works-section\">\n    <div class=\"container\">\n      <!-- Container -->\n      <div class=\"section-title text-center center\">\n        <h2>Recent\n          <strong>Product</strong>\n        </h2>\n        <hr>\n        <div class=\"clearfix\"></div>\n      </div>\n      <div class=\"categories\">   \n          <mat-tab-group>   \n              <mat-tab label=\"House\">\n                  <div class=\"col-sm-6 col-md-3 col-lg-3 web\" *ngFor=\"let house of showHouses;let i of index\">\n                      <div class=\"portfolio-item\" >\n                        <div class=\"hover-bg\">\n                          <a [routerLink]=\"['house-list', house.id]\" >\n                            <div class=\"hover-text\">\n                              <h4>{{house.Address}}</h4>\n                              <small>{{house.price}}</small>\n                              <div class=\"clearfix\"></div>\n                              <i class=\"fa fa-plus\"></i>\n                            </div>\n                            <img [src]=\"house.imgUrl[0]\" class=\"img-responsive\" alt=\"Project Title\"> </a>\n                        </div>\n                      </div>\n                    </div>\n              </mat-tab>\n            <mat-tab label=\"Book\">\n                <div class=\"col-sm-6 col-md-3 col-lg-3 web\" *ngFor=\"let book of showBooks;let i of index\">\n                    <div class=\"portfolio-item\" >\n                      <div class=\"hover-bg\">\n                        <a [routerLink]=\"['book-list', book.id]\" >\n                          <div class=\"hover-text\">\n                            <h4>{{book.name}}</h4>\n                            <small>{{book.department}}</small>\n                            <div class=\"clearfix\"></div>\n                            <i class=\"fa fa-plus\"></i>\n                          </div>\n                          <img [src]=\"book.imgUrl[0]\" class=\"img-responsive\" alt=\"Project Title\"> </a>\n                      </div>\n                    </div>\n                  </div>\n            </mat-tab>\n            <mat-tab label=\"Others\">\n                <div class=\"col-sm-6 col-md-3 col-lg-3 web\" *ngFor=\"let product of showProducts;let i of index\">\n                    <div class=\"portfolio-item\" >\n                      <div class=\"hover-bg\">\n                        <a [routerLink]=\"['product-list', product.id]\">\n                          <div class=\"hover-text\">\n                            <h4>{{product.name}}</h4>\n                            <small>{{product.price}}</small>\n                            <div class=\"clearfix\"></div>\n                            <i class=\"fa fa-plus\"></i>\n                          </div>\n                          <img [src]=\"product.imgUrl[0]\" class=\"img-responsive\" alt=\"Project Title\">  </a>\n                      </div>\n                    </div>\n                  </div>  \n            </mat-tab>\n          </mat-tab-group>\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n  </div>\n  <!-- About Section -->\n  <div id=\"about-section\">\n    <div class=\"container\">\n      <div class=\"section-title text-center center\">\n        <h2>\n          <strong>New</strong> Students</h2>\n        <hr>\n        <div class=\"clearfix\"></div>\n        <p>Welcome to WPI, we are waiting for you!</p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <img src=\"../../assets/11.jpg\" class=\"img-responsive\"> </div>\n        <div class=\"col-md-6\">\n          <div class=\"about-text\" >\n            <i class=\"fa fa-users\"></i>\n            <h4 [routerLink]= \"['survival-guide']\"><a id=\"survival-guide\">Survival Guide</a></h4>\n            <p>New Students? Look Here, we have prepare everything for you.</p>\n            <i class=\"fa fa-puzzle-piece\"></i>\n            <h4 [routerLink]= \"['pickup']\"><a id=\"survival-guide\">Airport pickup</a></h4>\n            <p>For more information, please click it.</p>\n            <i class=\"fa fa-check-square-o\"></i>\n            <h4>Temporary Residence<a id=\"survival-guide\"></a></h4>\n            <p>This section is still under construciton.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Team Section -->\n  <!-- Testimonials Section -->\n  <div id=\"testimonials-section\" class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"section-title center\">\n        <h2>Up \n          <strong>Coming</strong> Events</h2>\n        <hr>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n          <div id=\"testimonial\">\n            <div class=\"item\">\n              <p>Congrulations! WPI CSSA New website just finished at 4/15/2018.Now version 1.1 let's play with it!.</p>\n              <p>\n             <!--<strong>John DOE</strong>, CEO, Company.</p> -->   \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"team-section\" class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"section-title center\">\n        <h2>Meet the\n          <strong>team</strong>\n        </h2>\n        <hr>\n        <p>Our team is a multicultural team. We are here to make our life eaiser in WPI</p>\n      </div>\n      <div id=\"row\">\n        <div class=\"col-md-3 col-sm-6 team\">\n          <div class=\"thumbnail\">\n            <img src=\"../../assets/Jiahui1.jpg\" alt=\"...\" class=\"img-circle team-img\">\n            <div class=\"caption\">\n              <h3>Jiahui Chen</h3>\n              <p>Main developer of WPICSSA</p>\n              <p>Front and Back End design. Proficiency in Angular 2+ CSS3 HTML5 JAVA Node.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 team\">\n          <div class=\"thumbnail\">\n            <img src=\"../../assets/muzammil pic2.jpg\" alt=\"...\" class=\"img-circle team-img\">\n            <div class=\"caption\">\n              <h3>Muzammil</h3>\n              <p>Database Designer/marketing manager</p>\n              <p>Good at Mysql, Python, Java.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 team\">\n          <div class=\"thumbnail\">\n            <img src=\"../../assets/bao.jpg\" alt=\"...\" class=\"img-circle team-img\">\n            <div class=\"caption\">\n              <h3>YuXiang Bao</h3>\n              <p>Web Designer/CSSA Contacts</p>\n              <p>Good at HTML5 CSS3 Jquery. NLP</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 team\">\n          <div class=\"thumbnail\">\n            <img src=\"../../assets/t04.jpg\" alt=\"...\" class=\"img-circle team-img\">\n            <div class=\"caption\">\n              <h3>Mo Cheng</h3>\n              <p>Data Analyst/marketing</p>\n              <p>Android and Hadoop.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Contact Section -->\n  <div id=\"contact-section\" class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"section-title center\">\n        <h2>\n          <strong>Contact</strong> us</h2>\n        <hr>\n        <p>If you have any suggestion or want to join our R & D team team, please contact us:</p>\n      </div>\n      <div class=\"col-md-8 col-md-offset-2\">\n        <div class=\"col-md-6\">\n          <i class=\"fa fa-map-marker fa-2x\"></i>\n          <p>100 Insitute Road\n            <br> Worcester, MA 01609</p>\n        </div>\n        <div class=\"col-md-6\">\n          <i class=\"fa fa-envelope-o fa-2x\"></i>\n          <p>hbchenjh@gmail.com</p>\n        </div>\n        <hr>\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n  </div>\n  <nav id=\"footer\">\n    <div class=\"container\">\n      <div class=\"pull-left fnav\">\n        <p>Copyright &copy; 2018 \n          <a href=\"http://wpilife.org/\" target=\"_blank\" title=\"模板在线\">WPILife Team </a>\n        </p>\n      </div>\n      <div class=\"pull-right fnav\">\n        <ul class=\"footer-social\">\n          <li>\n            <a href=\"https://www.facebook.com/WPI-CSSA-506053402753513/\">\n              <i class=\"fa fa-facebook\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://twitter.com/wpicssa?lang=en\" target=\"_blank\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://weibo.com/u/2693929980\" target=\"_blank\">\n              <i class=\"fa fa-dribbble\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/component/home-page/home-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_house_service__ = __webpack_require__("../../../../../src/app/Service/house-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Service_product_service__ = __webpack_require__("../../../../../src/app/Service/product-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Service_book_service__ = __webpack_require__("../../../../../src/app/Service/book-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponentComponent = /** @class */ (function () {
    function HomeComponentComponent(houserService, bookService, productService, location, router) {
        this.houserService = houserService;
        this.bookService = bookService;
        this.productService = productService;
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
        this.bookModel = [];
        this.productModel = [];
        this.houseModel = [];
        this.showBooks = [];
        this.showProducts = [];
        this.showHouses = [];
        this.houserService.setCurrentPage(0);
        this.bookService.setCurrentPage(0);
        this.productService.setCurrentPage(0);
    }
    HomeComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lastPoppedUrl = '/';
        this.location.subscribe(function (ev) {
            //  console.log(ev.url + 'zhi xing le');
            if (ev.url === '') {
                //  console.log('kongde');
                _this.lastPoppedUrl = '/';
            }
            else {
                _this.lastPoppedUrl = ev.url;
            }
        });
        this.router.events.subscribe(function (ev) {
            if (ev instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationStart */]) {
                if (ev.url !== _this.lastPoppedUrl) {
                    //    console.log('show ye bao cun' + this.lastPoppedUrl);
                    //    console.log('show ye bao cun 2' + ev.url);
                    _this.yScrollStack.push(window.scrollY);
                }
            }
            else if (ev instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]) {
                if (ev.url === _this.lastPoppedUrl) {
                    //   console.log('pi pei le ');
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else {
                    window.scrollTo(0, 0);
                }
            }
        });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-component',
            template: __webpack_require__("../../../../../src/app/component/home-page/home-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/home-page/home-component.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Service_house_service__["a" /* HouseService */], __WEBPACK_IMPORTED_MODULE_5__Service_book_service__["a" /* BookService */],
            __WEBPACK_IMPORTED_MODULE_4__Service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], HomeComponentComponent);
    return HomeComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/house/house-component.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"search\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search..\" [formControl]=\"searchBox\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>House Section</h1>\n\t\t\t\t\t\t\t\t<h2>Find your new life in America</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t<span>Cool Stuff</span>\n\t\t\t\t\t\t<h2>House.</h2>\n\t\t\t\t\t\t<p>If you find some bugs or have some suggestions, please contack us at: hbchenjh@gmail.com. We are hearing all the time.\n\t\t\t\t\t\t\tyour feedback makes our website better!\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4 text-center\" *ngFor=\"let house of houses | houseSearch: searchValue | paginate: { id:'house',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t     itemsPerPage: 6, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t     currentPage: hp };let i = index\">\n\t\t\t\t\t\t<div class=\"product\" (click)=\"toHouseDetail(house.id,i)\">\n\t\t\t\t\t\t\t<div class=\"product-grid\" [style.background-image]=\"'url('+house.imgUrl[0]+')'\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t<i>{{house.Address}}</i>\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t<span class=\"price\">{{house.price}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<pagination-controls class=\"pageButton\" id=\"house\" (pageChange)=\"getPageNumber($event)\" maxSize=\"9\" directionLinks=\"true\"\n\t\t\t\t autoHide=\"true\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n\t\t\t\t</pagination-controls>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-footer></app-footer>\n\t</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/house/house-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_house_service__ = __webpack_require__("../../../../../src/app/Service/house-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HouseComponentComponent = /** @class */ (function () {
    function HouseComponentComponent(houseService, router, activateRouter) {
        this.houseService = houseService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.houses = [];
        this.searchBox = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.searchValue = '';
        this.hp = houseService.getCurrentPage();
    }
    HouseComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRouter.params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.houseSubscription = this.houseService.getAllHouses()
            .subscribe(function (allHouse) {
            _this.houses = allHouse;
            _this.houses = _this.houses.reverse();
        });
        this.subscriptionInput = this.searchBox
            .valueChanges
            .debounceTime(200)
            .subscribe(function (term) {
            _this.searchValue = term;
        });
    };
    HouseComponentComponent.prototype.ngOnDestroy = function () {
        this.houseSubscription.unsubscribe();
    };
    HouseComponentComponent.prototype.toHouseDetail = function (id, page) {
        //  console.log(page + '这是显示得第几个');
        this.houseService.setCurrentPage(this.hp);
        this.router.navigate(['/house-list', id]);
        // this.house = this.houseService.gethouse((id - 1));
        //  console.log('这是第' + id + '个房子');
    };
    HouseComponentComponent.prototype.getPageNumber = function (event) {
        this.hp = event;
        //  console.log(event);
    };
    HouseComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-house-component',
            template: __webpack_require__("../../../../../src/app/component/house/house-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Service_house_service__["a" /* HouseService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], HouseComponentComponent);
    return HouseComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/house/house-detail/house-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div class=\"fh5co-loader\"></div>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a routerLink=\"\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>House Details</h1>\n\t\t\t\t\t\t\t\t<h2>Our Goal is makeing your life much earier in WPI</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\n\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ngx-carousel [inputs]=\"Config\">\n\t\t\t\t\t\t\t\t<ngx-item *ngFor=\"let houseImg of imgUrl\" class=\"bannerStyle \" NgxCarouselItem>\n\t\t\t\t\t\t\t\t\t<img [src]=\"houseImg\" alt=\"house\" width=\"100%\" #test2 id=\"img1\">\n\t\t\t\t\t\t\t\t</ngx-item>\n\t\t\t\t\t\t\t\t<i NgxCarouselPrev class=\"leftRs fa fa-arrow-left fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i NgxCarouselNext class=\"rightRs fa fa-arrow-right fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</ngx-carousel>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t\t\t<h2>{{address}}</h2>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\" class=\"btn btn-primary btn-outline btn-lg\">Post your Product to Sell</a>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\n\t\t\t\t\t\t<mat-tab-group>\n\t\t\t\t\t\t\t<mat-tab label=\"House detail\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t\t\t\t<p>House Address: {{address}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\n\t\t\t\t\t\t\t\t\t\t\t<p>Rent fee(per month) : {{price}}$</p>\n\t\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\n\t\t\t\t\t\t\t\t\t\t\t<p>House available date: {{availableDate}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\n\t\t\t\t\t\t\t\t\t\t\t<p>House contract end date: {{endDay}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t<mat-tab label=\"Contact Info\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t\t\t<p>Contact information: {{contact}}</p>\n\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\n\t\t\t\t\t\t\t\t\t\t<p>House Description: {{desc}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t</mat-tab-group>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<app-footer></app-footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/house/house-detail/house-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_house_service__ = __webpack_require__("../../../../../src/app/Service/house-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HouseDetailComponent = /** @class */ (function () {
    function HouseDetailComponent(houseService, router, activateRouter) {
        this.houseService = houseService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.imgUrl = [];
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
            _this.address = _this.houseDetail.Address;
            _this.desc = _this.houseDetail.description;
            _this.contact = _this.houseDetail.contactInfo;
            _this.price = _this.houseDetail.price;
            _this.ownerID = _this.houseDetail.ownerID;
            _this.imgUrl = _this.houseDetail.imgUrl;
            _this.availableDate = _this.houseDetail.fromDate;
            _this.endDay = _this.houseDetail.toDate;
        })
            .catch(function (e) {
            _this.router.navigate(['/Not-found']);
        });
    };
    HouseDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-house-detail',
            template: __webpack_require__("../../../../../src/app/component/house/house-detail/house-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/product/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Service_house_service__["a" /* HouseService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], HouseDetailComponent);
    return HouseDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/house/house.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HouseModel; });
var HouseModel = /** @class */ (function () {
    function HouseModel(Address, price, ownerID, desc, contactInfo, img, type, fromDate, toDate) {
        this.Address = Address;
        this.price = price;
        this.description = desc;
        this.ownerID = ownerID;
        this.contactInfo = contactInfo;
        this.imgUrl = img;
        this.type = type;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }
    return HouseModel;
}());



/***/ }),

/***/ "../../../../../src/app/component/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\r\n\tfont-family: 'Lato', sans-serif;\r\n\ttext-rendering: optimizeLegibility !important;\r\n\t-webkit-font-smoothing: antialiased !important;\r\n\tcolor: #5a5a5a;\r\n}\r\nh1 {\r\n}\r\nh1 strong {\r\n\tfont-weight: 900;\r\n}\r\nh2 {\r\n\ttext-transform: uppercase;\r\n\tline-height: 20px;\r\n\tmargin: 0;\r\n}\r\nh3 {\r\n\tfont-size: 16px;\r\n\tfont-weight: 700;\r\n}\r\nh4 {\r\n\ttext-transform: capitalize;\r\n}\r\nh5 {\r\n\ttext-transform: uppercase;\r\n\tfont-weight: 700;\r\n\tline-height: 20px;\r\n}\r\np {\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\np.intro {\r\n\tfont-size: 16px;\r\n\tmargin: 12px 0 0;\r\n\tline-height: 24px;\r\n\tfont-family: 'Open Sans', sans-serif;\r\n}\r\na {\r\n\tcolor: #D2527F\r\n}\r\na:hover, a:focus {\r\n\ttext-decoration: none;\r\n\tcolor: #9D3D5F;\r\n}\r\n.clearfix:after {\r\n\tvisibility: hidden;\r\n\tdisplay: block;\r\n\tfont-size: 0;\r\n\tcontent: \" \";\r\n\tclear: both;\r\n\theight: 0;\r\n}\r\n.clearfix {\r\n\tdisplay: inline-block;\r\n}\r\n* html .clearfix {\r\n\theight: 1%;\r\n}\r\n.clearfix {\r\n\tdisplay: block;\r\n}\r\nul, ol {\r\n\tpadding: 0;\r\n\twebkit-padding: 0;\r\n\tmoz-padding: 0;\r\n}\r\n#menu {\r\n\tpadding: 20px;\r\n\t-webkit-transition: all 0.8s;\r\n\ttransition: all 0.8s;\r\n}\r\n#menu.navbar-default {\r\n\tbackground-color: rgba(248, 248, 248, 0);\r\n\tborder-color: rgba(231, 231, 231, 0);\r\n}\r\n#menu a.navbar-brand {\r\n\ttext-transform: uppercase;\r\n\tfont-size: 22px;\r\n\tcolor: #fff;\r\n\tfont-weight: 900;\r\n}\r\n#menu.navbar-default .navbar-nav > li > a {\r\n\ttext-transform: uppercase;\r\n\tcolor: #FFF;\r\n\tfont-size: 12px;\r\n\tletter-spacing: 1px;\r\n}\r\n#menu.navbar-default .navbar-nav > li > a:hover {\r\n\tcolor: #D2527F;\r\n}\r\n.on {\r\n\tbackground-color: #222222 !important;\r\n\tpadding: 0 !important;\r\n}\r\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\r\n\tcolor: #D2527F !important;\r\n\tbackground-color: transparent;\r\n\tfont-weight: 700;\r\n}\r\n.navbar-toggle {\r\n\tborder-radius: 0;\r\n}\r\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\r\n\tbackground-color: #D2527F;\r\n\tborder-color: #D2527F;\r\n}\r\n.navbar-default .navbar-toggle:hover>.icon-bar {\r\n\tbackground-color: #FFF;\r\n}\r\n#login {\r\n\tcursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"menu\" class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\"> \n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n      <a class=\"navbar-brand\" href=\"index.html\">WPI<strong><span class=\"color\">.</span></strong></a> \n      <p class = \"navbar-text\">Make your life easier in WPI</p>\n     </div>\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a pageScroll href=\"#home\">Home</a></li>\n        <li><a pageScroll href=\"#services-section\" >Shop</a></li>\n        <li><a pageScroll href=\"#works-section\" >Recent Product</a></li>\n        <li><a pageScroll href=\"#about-section\" >New Students</a></li>\n        <li><a pageScroll href=\"#testimonials-section\" >Event</a></li>\n        <li><a pageScroll href=\"#team-section\" >About us</a></li>\n        <li *ngIf=\"auth.isAuthenticated()\"><a id=\"login\" [routerLink]=\"['profile']\" >Profile</a></li>\n        <li  *ngIf=\"!auth.isAuthenticated()\"><a id=\"login\" (click)=\"auth.login()\" >Login/SignUp</a></li>\n        <li  *ngIf=\"auth.isAuthenticated()\"><a id=\"login\" (click)=\"auth.logout()\" >Log Out</a></li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse --> \n  </div>\n  <!-- /.container-fluid --> \n</nav>"

/***/ }),

/***/ "../../../../../src/app/component/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_auth_service__ = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/component/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Service_auth_service__["a" /* AuthService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/new-students/new-students.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.example-radio-group {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  #example-radio-button {\r\n    margin: 5px;\r\n    font-weight: bold;\r\n  }\r\n  .example-selected-value {\r\n    margin: 15px 0;  \r\n  }\r\n  article p {\r\ntext-indent:25px;\r\nmargin-bottom: 20px;\r\ntext-align: left;\r\n}\r\n  article h2 {\r\n    color: brown;\r\n}\r\n  article li{\r\n  list-style:none;\r\n  margin:0;\r\n  text-align: left;\r\n}\r\n\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/new-students/new-students.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a [routerLink]=\"['']\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/test'\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>New Students Survival Guide</h1>\n                <h2>Prepare your life in WPI</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <span>Made by WPI CSSA</span>\n            <h2>WPI CSSA OFFICAL GUIDE(content is not finish)</h2>\n            <h3>If there are something unclear to you, please let us know.\n            </h3>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-3 choice\">\n            <div class=\"product\">\n              <h3>\n                <i>Catalog:</i>\n              </h3>\n            </div>\n            <mat-radio-group class=\"example-radio-group\" id=\"example-radio-group\" [(ngModel)]=\"selected\">\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let index of Indexs\" [value]=\"index\">\n                {{index}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n\n          <div class=\"col-md-9 text-center newstudent\">\n            <article [ngSwitch]=\"selected\">\n              <div *ngSwitchCase=\"'Prelude'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <p align=\"left\">亲爱的同学:</p>\n                <p align=\"left\">你好!</p>\n                <p align=\"justify\">\n                  首先我们代表WPI中国学生学者联谊会Chinese Students & Scholars Association(CSSA)欢迎您来WPI学习深造! WPI地处美国历史最悠久的马萨诸塞州,不仅人文气息浓厚,而且高科技产业由于众多大学的支撑而非常发达。对于WPI的同学来说,无论理工文商,这里都是学习和工作的理想地点。\n                </p>\n                <p align=\"justify\">\n                  WPI CSSA主要是由来自中国的学生和学者组成的志愿性组织。目前我们已有超过300名成员,其中包括学生、教授、访问学者及家属等。CSSA的主要任务是为中国学生学者提供一些生活和学习上的帮助,包括接新生、帮助新生安顿和适应这里的生活、举办中秋晚会、春节晚会等具有中国特色的活动等等。\n                  这本新生手册主要是为了帮助刚来到美国,来到Worcester的新同学、朋友们尽快地适应这里的生活、学习和工作。本手册经过WPI中国学生学者联谊会成员们的共同努力制作而成。这里, 我们向所有参与编写和校正的同学们表示深深的感谢!\n                  本手册中不足之处恳请大家及时指正,我们会不断地更新和完善。本手册中出现的一些网上购物地点或者订机票代理等的电话,完全是同学们平时积累的经验所得,不存在任何商业广告行为。 我们也真诚地希望能有更多热心的同学、朋友们加入WPI中国学生学者联谊会,互相帮助,共同努力,\n                  更好地为这里的中国学生学者们服务! 最后, 祝大家在WPI过得愉快、充实!\n                </p>\n                <p align=\"right\">\n                  CSSA 敬上 2017年夏\n                </p>\n              </div>\n              <div *ngSwitchCase=\"'Introduction'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <p>\n                  (1) CSSA 2018 FALL WeChat Group: 请加微信：chenjiahui11993, 备注专业姓名，之后会拉你入群，进群请备注姓名。\n                  <b>定时清理人员,请及时更改</b>。\n                </p>\n                <p>\n                  (2) WPILIFE网站</p>\n                <p align=\"left\"> WPILIF是一个CSSA官方的信息分享网站，网址是http://wpilife.org需要注册。 WPILIFE上会经常有学校活动信息发布，同时也有很多同学在该网站上出售物品， 新生也可以在这个网站以较低的价格买到学长学姐们的二手商品，给大家都提供了便利。\n                  发布商品教程请看http://wpilife.org/manual/6，非常简单明了！ 同时也请大家提高警惕，防范骗子，及时举报。</p>\n                <h2 align=\"left\">CSSA 简介</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <p>\n                  对WPI CSSA工作的意见与建议:\n                </p>\n                <p>\n                  请发邮件到: 151yuhongyi@gmail.com; yxq722@gmail.com\n                </p>\n                <p>\n                  对WPIFLIE 网站的意见与建议:\n                </p>\n                <p>\n                  请发邮件到: hbchenjh@gmail.com\n                </p>\n                <p>\n                  Chinese Students & Scholars Association (CSSA), 即中国学者联谊会:\n                </p>\n                <p>\n                  Email: cssa@wpi.edu\n                </p>\n                <p>\n                  Chinese Student Association (CSA), 即中国学生会:\n                </p>\n                <p>\n                  Email: csa@wpi.edu\n                </p>\n                <p>\n                  International House (IH), 即 WPI 的国际学生管理部门:\n                </p>\n                <p>\n                  Phone: +1-508-831-6030\n                </p>\n                <p>\n                  Email: ih@wpi.edu and website Webpage: http://www.wpi.edu/offices/ih/\n                </p>\n              </div>\n              <div *ngSwitchCase=\"'Before come to America'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <mat-tab-group>\n                  <mat-tab label=\"签证\">\n                    <p>网上的签经有很多,这里就不多说了。附上几个国内比较有名的留学论坛的签证版网址。</p>\n                    <ul>\n                      <li>太傻\n                        <a href=\"http://bbs.taisha.org/forum-73-1.html\">http://bbs.taisha.org/forum-73-1.html</a>\n                      </li>\n                      <li>一亩三分地\n                        <a href=\"http://www.1point3acres.com/bbs/\">http://www.1point3acres.com/bbs/</a>\n                      </li>\n                    </ul>\n                    <p>\n                      关于签证,这里要解释一下。你在美国能够呆多久不是签证官决定的, 而是你刚进入美国的机场的入境官决定的。他会根据你的签证和 I-20 来判断你在美国能呆多久。一般都是D/S（Duration of status）。 这意味着只要你不出美国,你可以一直待到结束学业。现在从大陆来的同学签证一般都是5年期的,意思是你可以在5年内无限次进出美国，但是也存在被check后只有一年的情况。如果你在签证过期后出了美国国境,再次回到美国就需要重新签证（一般即将过期的话最好也重新签,以免出问题，比如签证\n                      6.18到期,你打算6月1号的飞机回美国,就最好去重新签一个）。 International House的回复是一般WPI的学生签证过期又不想回家的,可以去墨西哥或者加拿大去重新签证。为什么不能在美国本土重新签证呢？因为管签证的是美国大使馆。在美国本土怎么可能有美国大使馆呢？\n                      （我觉得挺扯淡的。其他国家都行。如果签证过期之后,只要不出美国是没有问题的。因为签证代表的是你合法进入美国的期限，跟出去没有关系。）\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"订机票\">\n                    <p>\n                      可以找当地的机票代理，但因为是单程会比较贵。买的早可能更便宜，买的迟就贵。当然也看地区，一般从北京、上海、香港可能相对便宜，经停点越多越便宜。定机票后请将航程信息填入CSSA接机表，等统计完成后会放出统计结果，具体链接请见群分享或询问CSSA。\n                    </p>\n\n                    <p>\n                      <span>订机票时如果需要到第三个国家转机，请提前查好是否需要该国家的签证。</span>\n                    </p>\n\n                    <p>\n                      <span>建议订美国东部时间7pm之前到达的飞机，以防突发情况发生无人接机.</span>\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"找飞友&订limo\">\n                    <p>\n                      首先，limo不是加长凯迪拉克，它就是叫limo而已......一般也就是轿车或者van。 当大家签证办好之后请到新生群里询问一下在同一地区的同学，大家尽量约好一起飞。一是一路上互相有个照应，一起聊个天吃个饭什么的，等待时间长的话还可以轮流睡觉；二来是到伍斯特之后可以大家一起订limo去学校。学长姐们毕竟有限，他们也都有自己的事情要忙。\n                    </p>\n                    <p>\n                      <span>订 limo 的网站:</span>\n                    </p>\n                    <ul>\n                      <li>Knight Limo:\n                        <a href=\"www.knightlimo.com\">www.knightlimo.com</a>\n                      </li>\n                      <li>Worcester Limo:\n                        <a href=\"www.wlimo.com\">www.wlimo.com</a>\n                      </li>\n                    </ul>\n                    <p>\n                      注意，一辆车好像只能指定送到一个地点，这是规定，你可以试着跟司机说好话让他多送几个地点。成功率好像不高，成功的话记得多给小费，不然可能没有下次了。 订limo流程:订车的时候选择付现金，这样如果司机服务态度不好，比如不帮你提箱子之类的就少给点小费。\n\n                      <span>小费一般10%。</span>\n                    </p>\n                    <p>\n                      每年CSSA会组织学长学姐的老司机群提供有偿接机服务，详细信息请关注WPICSSA微信平台，请在官方新生群里发信息，会有CSSA的学长学姐联系老司机群的。\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"体检和疫苗\">\n                    <p>\n                      大家拿到offer的时候应该也同时看到学校要求要寄体检单子和疫苗注射的单子，如果没有请到此处下载\n                      <a href=\"http://www.wpi.edu/Admin/Health/forms.html\">http://www.wpi.edu/Admin/Health/forms.html</a>。在国内一般都是去各地的国际旅行卫生保健中心去体检（还有些同学去大医院也行，主要就是让他们填单子盖章）。带着身份证、体检表、2张二寸证件照、小时候的疫苗记录本、1000元人民币（其实用不了这么多）去就好了。\n                    </p>\n                    <p>\n                      因为可能要做一个TB皮试，有些地方不是每天可以做，所以去之前大家可以打个电话去问一下一周哪几天可以做TB皮试，不然可能就要多跑一趟。然后，如果疫苗本找不到了也没关系，大不了多扎几针\n                    </p>\n                    <p>\n                      体检和疫苗两个部分哪个先做都可以，完了会给一本黄色的体检证和一本深红疫苗证。这两个如果你去其他国家也会认，因为上面盖着中国国家检疫检验局的大章。虽然学校让把体检表寄回来，其实也可以来了以后再交。期间你的账号会被hold而已，大概就是不能自己在网上注课。学校网站上的四份表都要下载填写。体检要尽早，很多疫苗要打多次，然后其间要隔三四个星期，所以体检越早越好。\n                    </p>\n                    <p>\n                      体检表格指南请见附录。 另外请参考CD(有分地区介绍):\n                    </p>\n                    <ul>\n                      <li>\n                        <a href=\"http://www.chasedream.com/list.aspx?cid=36\">http://www.chasedream.com/list.aspx?cid=36</a>\n                      </li>\n                      <li>武汉\n                        <a href=\"http://parents.tiandaoedu.com/ready/17271.html\">http://parents.tiandaoedu.com/ready/17271.html</a>\n                      </li>\n                    </ul>\n                  </mat-tab>\n                  <mat-tab label=\"住房\">\n                    <p>\n                      1)临时住房\n                    </p>\n                    <p>\n                      a. 想要来之后再看房子的同学可以暂时住在International House三天，需要提前申请，租金是20美元/天/人。房子很紧，越早申请越好。\n                    </p>\n                    <p>\n                      b. 租不到International House住房的同学，可以找老生帮忙，借住几晚，按天付房租。建议价格20-25美元/天/人。这个钱是帮老生付你居住期间的水费电费网费等等。\n                    </p>\n                    <p>\n                      <span>强烈建议不要相信各种中介！！！！！如果非要租中介的房子请一定联系学长学姐实地考察，再三斟酌！尤其是中国房东的房子！这里重点强调！老中坑老中就是这么开始的。</span>\n                    </p>\n                    <p>\n                      2）关于房子\n                    </p>\n                    <p>\n                      首先，美国的房子分House和Apartment。House就比较有乡村风情，一幢一幢的房子。整幢租给你的话，可能就是大家公用一楼的厨房客厅，二楼各睡各屋；另一种就是House里两层或三层，每层住3个人，然后厨房客厅卧室都在一层。Apartment\n                      就是公寓了，公寓一般比较现代化，房子也会新一点。 新生可以在来之前就找好房子，如果你想亲自看看这边住房的条件再决定，也可以来了以后再找。按照所有权，房子大概分为以下两类：\n                    </p>\n                    <b>a. On-Campus</b>\n                    <p>\n                      On-campus的房子是学校的，分布在学校周围比较近的区域。月租500-600美元，包热水包电（美国这边未加热的水是免费的）；有家具（furnished）（一般有Twin size的床，桌子，椅子等）。500美元的是三个人share一层，3个Bedroom，一个卫生间，一个厨房，1-2个living\n                      room；600美元的是三个人share整个两层的House，一楼是厨房客厅，二楼是Bedrooms。\n                    </p>\n                    <p>\n                      学校的房子有一些有洗衣机和烘干机，免费无限量使用，另一些只有laundry room/center，收费。除了设备齐全、空间大之外，学校的房子不需要deposit，lease也比较灵活（每个月一签）。如果想搬走，大概提前一个半月通知管理员就可以。另外，学校还有专门的服务人员负责维修，如果是下水道堵了之类的小事情，一般都是免费的。\n                    </p>\n                    <p>\n                      申请学校的房子，请联系 Residential Services: Amy Beth Polonsky Phone: +1 508-831-5130; Email: apolonsky@wpi.edu 遇到高峰期，可能要排上比较久时间(运气好的话一般可以排到)。\n                      注意: 申请学校的房子不需要提前找好roommate,都是学校安排。\n                    </p>\n                    <b>b. Off-Campus</b>\n                    <p>\n                      Off-campus的房子一般是Owner的，也有个别是中介公司旗下的，有的距离学校很近，像West Street，隔条Institute Road就是学校；有的则比较远，像William Street,etc,走路大概需要10几分钟。 房子一层3-4个Bedroom是最普遍的房型，有的房子两层4-5个Bedroom，很多把Living\n                      room改造成Bedroom。很多时候是整体出租，需要大家租房之前自己找好室友。月租350-600美元不等。房租低的一般不包括任何Utilities，像电和气都得自己付。暖气分三种，烧油的，烧气的和电暖。\n                      烧油的，油大概570美元150 gallon，可以用一个多月；电暖大约 30 美元/月/人；气暖暂时不了解。一般烧油和气的不给力还贵。然后，如果是包水电暖的房子，注意问一下房东是不是有限制，比如暖气是不是随便开之类的。\n                    </p>\n                    <p>\n                      还有一点就是有的房子是带家具的，价格会高点，便宜的很多基本是没有家具的。对新生来说，住Furnished apartment会方便一点，毕竟第一年来什么都没有，要一样一样家具买起来还是挺累人的。如果找的是Unfurnished apartment，那么来了以后可以买点家具，例如Wal-Mart,\n                      Target, IKEA, Home Depot等。如果想找价廉物美的家具，可以去Yard sale看看，会比店里便宜不少，或者去上面的那个Craigslist上去淘，经常能遇见比较便宜的。旧家具还可以去Park\n                      Ave的Good Will，和Chandler Street上面的旧家具店买（如果早点儿来，还可以捡到路边的椅子，桌子之类的家具。床垫沙发之类的不要轻易往家里搬，容易藏匿bad bug)。 校外的房子，一般都要签一年或者至少9个月的lease，还要交safety\n                      deposit，第一个月和最后一个月的房租。在这里必须要提醒大家的是，一定要考虑清楚以后，才能慎重地签下你的lease。一不经意就可能碰到恶房东，可别小看这房东的作用，一个可怕的房东，会给你带来一年阴沉的心情，最后还可能拿不回押金。Nice的房东会很体贴，例如帮你修东西，整理草坪，放置家具等等。找房子最好自己看个仔细清楚明白。想买车的同学还要看租住的房子有没有停车位置，或者周围是否适合街边停车。冬天的时候路边有雪，街边停车位比较难找，有个固定车位还是挺方便的。\n                      房子的位置也要考虑，尽量离学校近一点。第一年没有车，住的远会比较麻烦。买车了以后可以考虑离学校远一点得房子（学校规定距离学校超过1 mile的可以办停车证）。下图是我们总结的所谓安全区，供参考。\n                    </p>\n                    <img src=\"http://wpilife.org/kindeditor/attached/image/20130821/20130821124622_59100.png\">\n                    <p>\n                      一般在学校附近区域内的房子综合条件比较理想，无论远近、安全、安静程度都比较好。总体来说，住房的综合条件由西向东，由北向南逐渐递减。Park Ave以西是一个山坡，也是可以考虑的。Highland以南的地区，在Dix street和Bowdoin\n                      street上现在也有很多中国学生租住。\n                    </p>\n                    <p>\n                      网上在线找房子有两个地方:\n                    </p>\n                    <ul>\n                      <li>\n                        WPI Apartment Finder System:\n                        <a href=\"http://www.wpi.edu/offices/rso/aptfinder.html\">http://www.wpi.edu/offices/rso/aptfinder.html</a>\n                      </li>\n                      <li>Craigslist网站Worcester地区WPI附近:\n                        <a href=\"http://worcester.craigslist.org/search/apa?query=WPI\">http://worcester.craigslist.org/search/apa?query=WPI</a>\n                      </li>\n                    </ul>\n                    <p>\n                      前者信息更新较慢，但是集中，都是针对WPI的。后者更新极其迅速，但是未必有很近的房子，而且很多重复的。在使用后面这个叫做craigslist的网站的时候，注意在搜索里打WPI，这样你不至于找到走一天也到不了WPI的房子了。 总而言之，不能简单比较房租，要比较加上各种因素以后的价钱和综合性能。\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"行李\">\n                    <b>a.限重及规定</b>\n                    <p>\n                      每个航空公司的限重是不同的，所以不在这里一一列出。所有情况可以在航空公司的官方网站找到。之前很多航空公司可以免费托运2个23KG的箱子，好像现在有规定只能带一个箱子了；托运箱子一般是30寸的。由于大家定的航空公司都不一样，而且是新规定，所以具体要求请同学们自行与航空公司确认。\n                      绝对不要超重。一般超过1-2KG不算超重。超重的话国内会罚500RMB。不要带任何肉类食品、土壤、植物、种子。真空包装的肉类（如烤鸭，临武鸭，绝味......怎么全都是鸭......）之类通常也会被没收。带太多的话，可能罚款；听说过罚款300美元的，但不确定罚款会不会视情况而定。进入美国的托运行李是不能上锁的，除非是TSA（transit\n                      security authority, 美国国土安全部下面的一个部门）同意的锁子。这些锁淘宝上有卖, 不过建议一点都不锁。由于有开箱检查的可能性,因此这种情况下上了锁可能会被直接撬开。可以用打包带捆好箱子,上面贴上个人信息。贵重物品请务必随身携带,谨防丢失。\n                    </p>\n                    <b>b.书本</b>\n                    <p>教材可以通过以下链接找到，因为每门课每一届用的书可能不一样，请务必先查证后再买：</p>\n                    <ul>\n                      <li>\n                        <a href=\"http://wpi.bncollege.com/webapp/wcs/stores/servlet/TBWizardView?\">http://wpi.bncollege.com/webapp/wcs/stores/servlet/TBWizardView?</a>\n                      </li>\n                      <li>\n                        <a href=\"catalogId=10001&storeId=32554&langId=-1\">catalogId=10001&storeId=32554&langId=-1</a>\n                      </li>\n                    </ul>\n                    <p>\n                      来之前问问这边的师兄师姐需要什么教科书,看看国内是否有影印版。否则这边教材很贵，国内人民币76元的书，这里可以卖122美元。不过如果你的行李超重就算了，还有其他办法省教材费。非要带的话，可以通过海运提前一两个月把一些你觉得很有用的但是又不能托运的书寄过来，让这边的师兄姐们代为接收。也可以在国内的当当网订购直接海运过来，每本书的运费是书价的一半。\n                    </p>\n                    <b>c.衣物服饰</b>\n                    <p>如果是夏天过来，T恤要多带一些，因为会换的比较勤快。但是T恤这边卖的很便宜，所以也要酌量携带。这里的夏天相对来说凉快一点，不过也有三十几度高温的日子。另外，需要带一些常用的大衣和外套；这里冬天经常下雪，室内外温差又大，可以买比较长，可以把膝盖都包住的羽绒服，这样在外面走的时候就不会太冷。\n                      不过羽绒服也可以在这儿买，价格可以接受,到了第二年打折也非常多,买了屯着很划算。 只是可能款式没有很好看。太长的羽绒服男生穿有点奇怪,不太建议。女生或者买比较好的长大衣；这边也比较普遍，国内的样式就是稍微好看一些。总之，原则就是外面要够厚，里面可以少穿一些，到了屋里把外套脱了也不会太热。另外对于女生来说，可以考虑在国内买一些小饰品，比较便宜好看，比如围巾，手套，毛袜什么的。然后就是这边都是人字拖比较多，喜欢传统拖鞋滴同学们可以从国内带过来。最后，衣服鞋子等在过节的时候打折很厉害，可以很便宜的价格买到不错的。例如感恩节，圣诞节和独立日等。总之，不建议带太多的衣物过来。不过这边穿衣服的风格跟国内不一样，喜欢日韩系的同学就多带几件喜欢的吧；喜欢T-shirt,牛仔，欧美风的就随意啦。\n                    </p>\n                    <p>\n                      正装:对于男生，带几件好点的衬衫加一套完整的西服西裤领带就好了。 女生除了上述西装（西裤可由西装裙代替），还要1-2件中/西式晚礼服。西装人手一套一定要的，参加各种面试没有正装是不会有开始的。有时会有什么晚宴之类的，或者有比较正式的场合，这种时候男生很简单，继续西装就可以了，女生就要穿礼服了。嫌麻烦的也可以来这边再买，美国正装礼服很多的，知名品牌也不会太贵。\n                    </p>\n                    <p>\n                      Business casual: 指的是衬衫或者polo式样的有领tshirt+高尔夫球裤。\n                    </p>\n                    <p>\n                      Business attire: 指的是一整套西装, 但是有时候也可以衬衫+西裤。\n                    </p>\n                    <p>\n                      泳装: 喜欢游泳的人可以买了带过来,国内式样花纹都漂亮很多,我指的是女式。男式的要买肥大,裤腿长一点的,紧身的那种老美会觉得你怪怪的。游泳眼镜最好也从国内带,特别是需要近视的那种的。\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"家居用品\">\n                    <p>对于某些对被子要求比较高的，可以带上一条国内高档被子，比如蚕丝被，鸭绒被，确实不用太厚，室内都挺暖和的。倒是这边的被子又贵又很普通。还有这边的被单也是非常丑，质量平平，价格昂贵，喜欢漂亮的同学建议自己从国内带过来。另外可以带一些对你个人意义比较大的东西，比如男女朋友照片，各类定情信物，父母照片等等。</p>\n                    <p>Worcester有半年是冬天，所以保暖很重要。不过北方的同学应该知道，北方的冬天虽然冷，但是暖气一开，屋子里还是很暖和的。同样，Worcester的冬天虽然有时会达到零下二十度的低温，但在房间里还是够暖和的。除非你不幸地碰到了一个吝啬的房东，而你们家暖气的控制开关又掌握在房东手里。非常怕冷的同学可以带一个电热毯过来（电热毯美国也有卖,不知道好不好用,叫heated\n                      pad）。打算住在学校公寓的就不用担心了，暖气都很足的\n                    </p>\n                    <p>\n                      衣架、洗发水、各种护肤品，在美国都是很便宜的；但这边配眼镜很贵，所以最好在国内配个两副带过来。 最好再带些常用感冒药，止痛药（牙疼，智齿），退烧药，消炎药，抗生素，胃药等，自己吃习惯了的药。女生的卫生用品这边都有卖，只是样式不多；月经止疼药也可以带一点，红糖和红枣这边买得到。中成药可能含有违禁成分，如果带的量大，请一定确定它是否能通过海关。\n                    </p>\n                    <b>电子产品</b>\n                    <p>1)笔记本电脑：</p>\n                    <p>个人建议是，如果还没买的话就来美国买。 这种电子产品美国的价格一般会比国内便宜很多，而且还会有学生折扣。如果自己已经有了笔记本，配置又还可以的话可以带过来，毕竟刚来的时候家里没有电脑可以上网，还是会有不少不方便的地方。\n                    </p>\n                    <p>\n                      2)手机:\n                    </p>\n                    <p>\n                      国内的手机也可以带过来，来之前确认一下你的那款手机可不可以在美国用。来这边新版一个手机也不贵，美国电话公司一般可以签两年合同免费拿手机。相对于这边的消费水平，这里手机话费是比较便宜的。很多人用包月服务随便打电话；短信偏贵，包月也不如国内划算。办了手机以后可以买国际电话卡，从美国达到中国一两美分一分钟；比如一种叫\n                      ecallchina的卡(www.ecallchina.com)，20刀能打1200分钟。手机/电话卡：国内手机卡有两种选择，一是停机，二是开国际漫游。建议至少开一个月的国际漫游，这样到了美国之后方便与接机的人联络，也便于给家人报平安。彻底停掉手机的同学可以先买Prepaid\n                      电话卡（淘宝上有卖），过来之后可以用别人的手机或者公用电话联络。\n                    </p>\n                    <p>\n                      3)相机，优盘和移动硬盘\n                    </p>\n                    <p>\n                      一般都是来了这边再买。网上有便宜的Deal,例如www.dealsea.com。国内有了就自己带过来吧。(小提示，买了Macbook系列的同学们，苹果的移动硬盘和Windows不兼容，需要装一个APP，不需要重新买一个Apple的移动硬盘。)\n                    </p>\n                    <p>\n                      家用电器\n                    </p>\n                    <p>\n                      只要是电器，大部分都不用带，包括插座，一是电压和频率不一样，上面提到的电热毯，因为是电阻丝发热。倒是影响不太大，功率低点而已。二是只要你想得到的，在国内看到过的，这边基本都有，而且都很便宜！例如男生的刮胡刀，甚至包括女生用的卷头发器和直发器......满店都是。特别的，就是有人带国内的豆浆机过来，这个记得要和厂家说好换成美式的电插头。不过现在豆浆机这边也有卖。变压器记得带一个，如果是带自己在中国买的电脑来，一般需要变压器。\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"厨房用品/其他\">\n                    <b>1)锅:</b>\n                    <p>\n                      基本有都有,就是换成RMB贵点。高压锅是个累赘不用带,这边在Wal-Mart和亚马逊可以买得到,比较便宜。 还要根据住处的炉子情况来决定用什么锅,比如电炉子,用平底锅比较好。美国的火都不是很旺。这边煮牛肉要去血水,肉很难煮软。有了高压锅就 方便很多了,红烧肉20分钟柔软无比。还可以压土豆泥~凹形铁锅这边的没有国内的好,不怕麻烦的可以带一只不粘锅过来。但其实这边也有卖。电饭锅,千万不用带,这边又便宜又好用,网购店购皆可。\n                    </p>\n                    <p>\n                      2)菜刀/餐具:\n                    </p>\n                    <p>\n                      好的大菜刀和砍 骨头的刀可以带。这边很少卖宽刀的,有也不好用。买把好的过来。案板不用带。带个两三块钱的小磨刀石,可能有用。如果对碗有偏好,可以带一两只自己很喜欢的碗过来。还有筷子,可以带几根。没有要求的话,中国/亚洲超市一般也都买得到。\n                    </p>\n                    <p>\n                      压蒜器,刨皮刀这种小东西可以考虑带一个好用的。这边有卖就是不太好用。\n                    </p>\n                    <p>\n                      这边中国店调料还是很全的,基本应有尽有不用自带调料。\n                    </p>\n                    <p>2)护肤用品</p>\n                    <p>\n                      关于平时的生活用品卫生用品,比如,洗发水、沐浴露之类的就别带了,这里超市里 卖得很便宜。喜欢护肤品的,那你来到美国就来对地方了,就算没有sale的时候,价格也 比国内便宜很多,所以你的瓶瓶罐罐甚至都不用带了。这边只是亚洲牌子的比较少,不过 也可以网购。而如果你喜欢的是欧洲的牌子,比如Clarins啊Nuxe之类的,美国价格和国\n                      内差不多,但是如果你喜欢Clinique, EsteeLauder或者Lancome等的话,那你完全可以把 现在用的东西送人了,一身轻松地来到美国开始新的shopping历程吧,这边真是既便宜小 样又多。\n                    </p>\n                    <p>\n                      文具\n                    </p>\n                    <p>\n                      美国人用黑色圆珠笔和铅笔的比较多,习惯用水性笔的同学可以自己带几只;带自动铅笔的记得多带几盒笔芯。美国人习惯用大本子,A4纸那么大的,喜欢小本子的同学也请自备。然后,剪刀,美工刀,尺子等等都是有的,只是不漂亮,价格比起国内稍微贵一点点。文具这些其实用的不多,现在基本都电子化了,所以按自己喜欢带吧\n                    </p>\n                    <p>\n                      小礼品\n                    </p>\n                    <p>\n                      可以带一点中国结之类由中国特色的小礼物,可以送给喜欢的朋友和老师。7.手机/电话卡国内手机卡有两种选择,一是停机,二是开国际漫游。建议至少开一个月的国际漫游,这样到了美国之后方便与接机的人联络,也便于给家人报平安。彻底停掉手机的同学可以先买Prepaid电话卡(淘宝上有卖),过来之后可以用别人的手机或者公用电话联络.\n                    </p>\n                  </mat-tab>\n                </mat-tab-group>\n              </div>\n              <div *ngSwitchCase=\"'Flight'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n\n              </div>\n              <div *ngSwitchCase=\"'After Arrival'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Life in WPI'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Come back to China'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Postscript'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Appendix'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Acknowledgments'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/new-students/new-students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewStudentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-students',
            template: __webpack_require__("../../../../../src/app/component/new-students/new-students.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/new-students/new-students.component.css"), __webpack_require__("../../../../../src/app/component/product/product.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], NewStudentsComponent);
    return NewStudentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</nav>\n\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>Sorry Page Not Found</h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t<h2>Not Found.</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<h1>\n\t\t\t\t\tPage not found!\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-footer></app-footer>\n\t</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/component/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/pick-up/pick-up.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a [routerLink]=\"['']\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/test'\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n    </nav>\n\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>AirPort Pick up!</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <h2>AirPort Pick up!</h2>\n            <p>If you find some bugs or have some suggestions, please contack us at: hbchenjh@gmail.com. We are hearing all the\n              time. your feedback makes our website better!\n            </p>\n          </div>\n        </div>\n        <div *ngIf=\"authService.isAuthenticated() else login\">\n          <h1>\n            For your safety, please add our CSSA member at:szx19951014 or L-T-H-123456. He will try his best to help you! Thanks!\n          </h1>\n        </div>\n        <ng-template #login>\n          <h4>\n            Please\n            <a id=\"login\" (click)=\"authService.login()\">Login</a> First to watch this section\n          </h4>\n        </ng-template>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/pick-up/pick-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_auth_service__ = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PickUpComponent = /** @class */ (function () {
    function PickUpComponent(authService) {
        this.authService = authService;
    }
    PickUpComponent.prototype.ngOnInit = function () {
    };
    PickUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pick-up',
            template: __webpack_require__("../../../../../src/app/component/pick-up/pick-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Service_auth_service__["a" /* AuthService */]])
    ], PickUpComponent);
    return PickUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/product/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clx {\r\n    clear: both;\r\n}\r\n    .leftRs {\r\n        position: absolute;\r\n        margin: auto;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 50px;\r\n        height: 50px;\r\n        left: 0px;\r\n        z-index: 1;\r\n        display: none;\r\n    }\r\n    .rightRs {\r\n        position: absolute;\r\n        margin: auto;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 50px;\r\n        height: 50px;\r\n        right: 0;\r\n        z-index: 1;\r\n        display: none;\r\n    }\r\n    .mat-tab-label{\r\n        margin: 0 30px;\r\n    }\r\n    mat-list-item{\r\n        display: block;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/product/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n\t<div class=\"fh5co-loader\"></div>\r\n\t<div id=\"page\">\r\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\r\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\r\n\t\t\t\t\t\t\t<a routerLink=\"\">WPI.</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</nav>\r\n\r\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../../assets/img_bg_2.jpg);\">\r\n\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\r\n\t\t\t\t\t\t<div class=\"display-t\">\r\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\r\n\t\t\t\t\t\t\t\t<h1>Product Details</h1>\r\n\t\t\t\t\t\t\t\t<h2>Our Goal is makeing your life much earier in WPI</h2>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\r\n\t\t<div id=\"fh5co-product\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\r\n\r\n\t\t\t\t\t\t<div class=\"carouselBox\">\r\n\t\t\t\t\t\t\t<div id=\"img1\">\r\n\t\t\t\t\t\t\t\t<ngx-carousel [inputs]=\"Config\">\r\n\t\t\t\t\t\t\t\t\t<ngx-item *ngFor=\"let img of imgUrl\" class=\"bannerStyle \" NgxCarouselItem>\r\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"img\" class=\"product\" alt=\"user\" width=\"100%\">\r\n\t\t\t\t\t\t\t\t\t</ngx-item>\r\n\t\t\t\t\t\t\t\t\t<i NgxCarouselPrev class=\"leftRs fa fa-arrow-left fa-3x\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t\t<i NgxCarouselNext class=\"rightRs fa fa-arrow-right fa-3x\" aria-hidden=\"true\"></i>\r\n\t\t\t\t\t\t\t\t</ngx-carousel>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"clx\"></div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t<div class=\"row animate-box\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\r\n\t\t\t\t\t\t\t\t<h2>{{name}}</h2>\r\n\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\" class=\"btn btn-primary btn-outline btn-lg\">Post your Product to Sell</a>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t<ul class=\"nav nav-tabs\">\r\n\t\t\t\t\t\t\t<mat-tab-group>\r\n\t\t\t\t\t\t\t\t<mat-tab label=\"Product detail\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 \">\r\n\t\t\t\t\t\t\t\t\t\t<p>Product Name: {{name}}</p>\r\n\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\r\n\t\t\t\t\t\t\t\t\t\t<p>Product Price : {{price}}$</p>\r\n\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\r\n\t\t\t\t\t\t\t\t\t\t<p>Product description: {{desc}}</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t\t\t<mat-tab label=\"Contact Info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 \">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Contact information: {{contactInfo}}</p>\r\n\t\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Post date: {{date}}</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</mat-tab>\r\n\t\t\t\t\t\t\t</mat-tab-group>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<app-footer></app-footer>\r\n\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/product/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_product_service__ = __webpack_require__("../../../../../src/app/Service/product-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(productService, activateRouter, router) {
        this.productService = productService;
        this.activateRouter = activateRouter;
        this.router = router;
        this.itemsList = [];
        this.imgUrl = [];
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
            _this.productService.getProduct((_this.id))
                .then(function (product) {
                _this.ProductDetail = product;
                _this.name = _this.ProductDetail.name;
                _this.price = _this.ProductDetail.price;
                _this.desc = _this.ProductDetail.description;
                _this.contactInfo = _this.ProductDetail.contactInfo;
                _this.imgUrl = _this.ProductDetail.imgUrl;
                _this.ownerID = _this.ProductDetail.ownerID;
                _this.date = _this.ProductDetail.today;
            })
                .catch(function (e) {
                _this.router.navigate(['/Not-found']);
            });
        });
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-detail',
            template: __webpack_require__("../../../../../src/app/component/product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/product/product-detail/product-detail.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/product/product-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModel; });
var ProductModel = /** @class */ (function () {
    function ProductModel(name, price, ownerID, desc, contactInfo, img, type, today) {
        this.name = name;
        this.price = price;
        this.ownerID = ownerID;
        this.description = desc;
        this.imgUrl = img;
        this.contactInfo = contactInfo;
        this.type = type;
        this.today = today;
    }
    return ProductModel;
}());



/***/ }),

/***/ "../../../../../src/app/component/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  font-family: \"Playfair Display\", serif;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  line-height: 1.7;\r\n  color: #828282;\r\n  background: #fff;\r\n}\r\n#page {\r\n  position: relative;\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\n.offcanvas #page {\r\n  overflow: hidden;\r\n  position: absolute;\r\n}\r\n.offcanvas #page:after {\r\n  -webkit-transition: 2s;\r\n  transition: 2s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 101;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  content: \"\";\r\n}\r\na {\r\n  color: #d1c286;\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\na:hover, a:active, a:focus {\r\n  color: #d1c286;\r\n  outline: none;\r\n  text-decoration: none;\r\n}\r\np {\r\n  margin-bottom: 20px;\r\n}\r\n.copyrights{\r\n    text-indent:-9999px;\r\n    height:0;\r\n    line-height:0;\r\n    font-size:0;\r\n    overflow:hidden;\r\n}\r\nh1, h2, h3, h4, h5, h6, figure {\r\n  color: #000;\r\n  font-family: \"Montserrat\", Arial, sans-serif;\r\n  font-weight: 400;\r\n  margin: 0 0 20px 0;\r\n}\r\n::-webkit-selection {\r\n  color: #fff;\r\n  background: #d1c286;\r\n}\r\n::-moz-selection {\r\n  color: #fff;\r\n  background: #d1c286;\r\n}\r\n::selection {\r\n  color: #fff;\r\n  background: #d1c286;\r\n}\r\n.fh5co-nav {\r\n  padding: 18px 0;\r\n  background: #fff;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .fh5co-nav {\r\n    padding: 20px 0;\r\n  }\r\n}\r\n.fh5co-nav #fh5co-logo {\r\n  font-size: 20px;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  font-family: \"Montserrat\", Arial, sans-serif;\r\n}\r\n.fh5co-nav a {\r\n  padding: 5px 10px;\r\n  color: #000;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .fh5co-nav .menu-1, .fh5co-nav .menu-2 {\r\n    display: none;\r\n  }\r\n}\r\n.fh5co-nav .menu-2 li.search {\r\n  float: left;\r\n  width: 83%;\r\n  font-family: \"Playfair Display\", serif;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  padding: 0;\r\n  margin: -5px 0 0 0;\r\n}\r\n.fh5co-nav .menu-2 li input[type=text] {\r\n  padding: 6px 10px;\r\n  width: 40%;\r\n  border: none;\r\n  float: right;\r\n  font-size: 13px;\r\n  margin-top: 4px;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n.fh5co-nav .menu-2 li input[type=text]:focus {\r\n  width: 100%;\r\n  outline: none;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n.fh5co-nav .menu-2 li button {\r\n  margin-top: 4px;\r\n  padding: 5px;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n.fh5co-nav .menu-2 li button i {\r\n  color: rgba(0, 0, 0, 0.5);\r\n}\r\n.fh5co-nav .menu-2 li button:hover, .fh5co-nav .menu-2 li button:focus {\r\n  background: transparent !important;\r\n}\r\n.fh5co-nav .menu-2 li button:hover i, .fh5co-nav .menu-2 li button:focus i {\r\n  color: black;\r\n}\r\n.fh5co-nav .menu-2 li.shopping-cart {\r\n  float: right;\r\n}\r\n.fh5co-nav .menu-2 li a.cart {\r\n  color: black;\r\n}\r\n.fh5co-nav .menu-2 li a.cart span {\r\n  position: relative;\r\n}\r\n.fh5co-nav .menu-2 li a.cart span small {\r\n  position: absolute;\r\n  top: -20px;\r\n  right: -15px;\r\n  padding: 10px 6px;\r\n  line-height: 0;\r\n  font-size: 11px;\r\n  background: #d1c286;\r\n  color: white;\r\n  border-radius: 50%;\r\n}\r\n.fh5co-nav ul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.fh5co-nav ul li {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  display: inline-block;\r\n  font-family: \"Montserrat\", Arial, sans-serif;\r\n}\r\n.fh5co-nav ul li a {\r\n  font-size: 13px;\r\n  padding: 30px 10px;\r\n  text-transform: uppercase;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\n.fh5co-nav ul li a:hover, .fh5co-nav ul li a:focus, .fh5co-nav ul li a:active {\r\n  color: black;\r\n}\r\n.fh5co-nav ul li a.cart {\r\n  color: black;\r\n}\r\n.fh5co-nav ul li a.cart span {\r\n  position: relative;\r\n}\r\n.fh5co-nav ul li a.cart span small {\r\n  position: absolute;\r\n  top: -20px;\r\n  right: -15px;\r\n  padding: 10px 6px;\r\n  line-height: 0;\r\n  font-size: 11px;\r\n  background: #d1c286;\r\n  color: white;\r\n  border-radius: 50%;\r\n}\r\n.fh5co-nav ul li.has-dropdown {\r\n  position: relative;\r\n}\r\n.fh5co-nav ul li.has-dropdown .dropdown {\r\n  width: 150px;\r\n  -webkit-box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);\r\n  box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);\r\n  z-index: 1002;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 40px;\r\n  left: 0;\r\n  text-align: left;\r\n  background: #000;\r\n  padding: 20px;\r\n  border-radius: 4px;\r\n  -webkit-transition: 0s;\r\n  transition: 0s;\r\n}\r\n.fh5co-nav ul li.has-dropdown .dropdown:before {\r\n  bottom: 100%;\r\n  left: 40px;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-bottom-color: #000;\r\n  border-width: 8px;\r\n  margin-left: -8px;\r\n}\r\n.fh5co-nav ul li.has-dropdown .dropdown li {\r\n  display: block;\r\n  margin-bottom: 7px;\r\n}\r\n.fh5co-nav ul li.has-dropdown .dropdown li:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.fh5co-nav ul li.has-dropdown .dropdown li a {\r\n  padding: 2px 0;\r\n  display: block;\r\n  color: #999999;\r\n  line-height: 1.2;\r\n  text-transform: none;\r\n  font-size: 15px;\r\n}\r\n.fh5co-nav ul li.has-dropdown .dropdown li a:hover {\r\n  color: #fff;\r\n}\r\n.fh5co-nav ul li.has-dropdown:hover a, .fh5co-nav ul li.has-dropdown:focus a {\r\n  color: #000;\r\n}\r\n.fh5co-nav ul li.active > a {\r\n  color: #000 !important;\r\n}\r\n.fh5co-nav ul li .form-group {\r\n  border: 1px solid red;\r\n  width: 100%;\r\n}\r\n#fh5co-hero .btn {\r\n  font-size: 24px;\r\n}\r\n#fh5co-hero .btn.btn-primary {\r\n  padding: 14px 30px !important;\r\n}\r\n#fh5co-hero .flexslider {\r\n  border: none;\r\n  z-index: 1;\r\n  margin-bottom: 0;\r\n}\r\n#fh5co-hero .flexslider .slides {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n#fh5co-hero .flexslider .slides li {\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  min-height: 700px;\r\n}\r\n#fh5co-hero .flexslider .flex-control-nav {\r\n  bottom: 40px;\r\n  z-index: 1000;\r\n}\r\n#fh5co-hero .flexslider .flex-control-nav li a {\r\n  background: rgba(255, 255, 255, 0.2);\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  width: 12px;\r\n  height: 12px;\r\n  cursor: pointer;\r\n}\r\n#fh5co-hero .flexslider .flex-control-nav li a.flex-active {\r\n  cursor: pointer;\r\n  background: rgba(255, 255, 255, 0.7);\r\n}\r\n#fh5co-hero .flexslider .flex-direction-nav {\r\n  display: none;\r\n}\r\n#fh5co-hero .flexslider .slider-text {\r\n  display: table;\r\n  opacity: 0;\r\n  min-height: 700px;\r\n}\r\n#fh5co-hero .flexslider .slider-text > .slider-text-inner {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  min-height: 700px;\r\n}\r\n#fh5co-hero .flexslider .slider-text > .slider-text-inner h2 {\r\n  font-size: 24px;\r\n  font-weight: 400;\r\n  color: #000;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner h2 {\r\n    font-size: 40px;\r\n  }\r\n}\r\n#fh5co-hero .flexslider .slider-text > .slider-text-inner .desc {\r\n  background: rgba(255, 255, 255, 0.9);\r\n  padding: 40px;\r\n}\r\n#fh5co-hero .flexslider .slider-text > .slider-text-inner .desc .price {\r\n  font-size: 14px;\r\n  letter-spacing: 3px;\r\n  display: block;\r\n  margin-bottom: 20px;\r\n}\r\n#fh5co-hero .flexslider .slider-text > .slider-text-inner .btn {\r\n  font-size: 18px;\r\n}\r\n#fh5co-hero .flexslider .slider-text > .slider-text-inner .fh5co-lead {\r\n  font-size: 20px;\r\n  color: #fff;\r\n}\r\n#fh5co-hero .flexslider .slider-text > .slider-text-inner .fh5co-lead .icon-heart {\r\n  color: #d9534f;\r\n}\r\n#fh5co-header,\r\n#fh5co-counter,\r\n.fh5co-bg {\r\n  background-size: cover;\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n}\r\n.fh5co-bg {\r\n  background-size: cover;\r\n  background-position: center center;\r\n  position: relative;\r\n  width: 100%;\r\n  float: left;\r\n  position: relative;\r\n}\r\n#fh5co-counter {\r\n  height: 500px;\r\n}\r\n#fh5co-counter .display-t,\r\n#fh5co-counter .display-tc {\r\n  height: 500px;\r\n  display: table;\r\n  width: 100%;\r\n}\r\n@media screen and (max-width: 992px) {\r\n  #fh5co-counter {\r\n    height: inherit;\r\n    padding: 7em 0;\r\n  }\r\n  #fh5co-counter .display-t,\r\n  #fh5co-counter .display-tc {\r\n    height: inherit;\r\n  }\r\n}\r\n@media screen and (max-width: 768px) {\r\n  #fh5co-counter {\r\n    height: inherit;\r\n    padding: 7em 0;\r\n  }\r\n  #fh5co-counter .display-t,\r\n  #fh5co-counter .display-tc {\r\n    height: inherit;\r\n  }\r\n}\r\n.fh5co-cover {\r\n  height: 800px;\r\n  background-size: cover;\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n  float: left;\r\n  width: 100%;\r\n}\r\n.fh5co-cover .overlay {\r\n  z-index: 0;\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n.fh5co-cover > .fh5co-container {\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .fh5co-cover {\r\n    height: 600px;\r\n  }\r\n}\r\n.fh5co-cover .display-t,\r\n.fh5co-cover .display-tc {\r\n  z-index: 9;\r\n  height: 900px;\r\n  display: table;\r\n  width: 100%;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .fh5co-cover .display-t,\r\n  .fh5co-cover .display-tc {\r\n    height: 600px;\r\n  }\r\n}\r\n.fh5co-cover.fh5co-cover-sm {\r\n  height: 600px;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .fh5co-cover.fh5co-cover-sm {\r\n    height: 400px;\r\n  }\r\n}\r\n.fh5co-cover.fh5co-cover-sm .display-t,\r\n.fh5co-cover.fh5co-cover-sm .display-tc {\r\n  height: 600px;\r\n  display: table;\r\n  width: 100%;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .fh5co-cover.fh5co-cover-sm .display-t,\r\n  .fh5co-cover.fh5co-cover-sm .display-tc {\r\n    height: 400px;\r\n  }\r\n}\r\n.about-content {\r\n  margin-bottom: 7em;\r\n}\r\n.about-content img {\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n  padding: 10px;\r\n}\r\n.about-content .desc {\r\n  margin-bottom: 3em;\r\n}\r\n.fh5co-staff {\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n.fh5co-staff img {\r\n  width: 170px;\r\n  margin-bottom: 20px;\r\n  border-radius: 50%;\r\n}\r\n.fh5co-staff h3 {\r\n  font-size: 24px;\r\n  margin-bottom: 5px;\r\n}\r\n.fh5co-staff p {\r\n  margin-bottom: 30px;\r\n}\r\n.fh5co-staff .role {\r\n  color: #bfbfbf;\r\n  margin-bottom: 30px;\r\n  font-weight: normal;\r\n  display: block;\r\n}\r\n.fh5co-social-icons {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.fh5co-social-icons li {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  display: -moz-inline-stack;\r\n  display: inline-block;\r\n  zoom: 1;\r\n  *display: inline;\r\n}\r\n.fh5co-social-icons li a {\r\n  display: -moz-inline-stack;\r\n  display: inline-block;\r\n  zoom: 1;\r\n  *display: inline;\r\n  color: #d1c286;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n.fh5co-social-icons li a i {\r\n  font-size: 20px;\r\n}\r\n.fh5co-contact-info ul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.fh5co-contact-info ul li {\r\n  padding: 0 0 0 40px;\r\n  margin: 0 0 30px 0;\r\n  list-style: none;\r\n  position: relative;\r\n}\r\n.fh5co-contact-info ul li:before {\r\n  color: #d1c286;\r\n  position: absolute;\r\n  left: 0;\r\n  top: .05em;\r\n  font-family: 'icomoon';\r\n  speak: none;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n  /* Better Font Rendering =========== */\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.fh5co-contact-info ul li.address:before {\r\n  font-size: 30px;\r\n  content: \"\\E9D1\";\r\n}\r\n.fh5co-contact-info ul li.phone:before {\r\n  font-size: 23px;\r\n  content: \"\\E9F4\";\r\n}\r\n.fh5co-contact-info ul li.email:before {\r\n  font-size: 23px;\r\n  content: \"\\E9DA\";\r\n}\r\n.fh5co-contact-info ul li.url:before {\r\n  font-size: 23px;\r\n  content: \"\\E9AF\";\r\n}\r\n#fh5co-header .display-tc,\r\n#fh5co-counter .display-tc,\r\n.fh5co-cover .display-tc {\r\n  display: table-cell !important;\r\n  vertical-align: middle;\r\n}\r\n#fh5co-header .display-tc h1, #fh5co-header .display-tc h2,\r\n#fh5co-counter .display-tc h1,\r\n#fh5co-counter .display-tc h2,\r\n.fh5co-cover .display-tc h1,\r\n.fh5co-cover .display-tc h2 {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: white;\r\n}\r\n#fh5co-header .display-tc h1,\r\n#fh5co-counter .display-tc h1,\r\n.fh5co-cover .display-tc h1 {\r\n  margin-bottom: 0px;\r\n  font-size: 60px;\r\n  line-height: 1.5;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  #fh5co-header .display-tc h1,\r\n  #fh5co-counter .display-tc h1,\r\n  .fh5co-cover .display-tc h1 {\r\n    font-size: 40px;\r\n  }\r\n}\r\n#fh5co-header .display-tc h2,\r\n#fh5co-counter .display-tc h2,\r\n.fh5co-cover .display-tc h2 {\r\n  font-size: 20px;\r\n  line-height: 1.5;\r\n  margin-bottom: 30px;\r\n  font-family: \"Playfair Display\", serif;\r\n}\r\n#fh5co-header .display-tc h2 a,\r\n#fh5co-counter .display-tc h2 a,\r\n.fh5co-cover .display-tc h2 a {\r\n  color: rgba(255, 255, 255, 0.7);\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.6);\r\n}\r\n#fh5co-header .display-tc .btn,\r\n#fh5co-counter .display-tc .btn,\r\n.fh5co-cover .display-tc .btn {\r\n  padding: 15px 30px;\r\n  background: #d1c286 !important;\r\n  color: #fff;\r\n  border: none !important;\r\n  font-size: 18px;\r\n  text-transform: uppercase;\r\n}\r\n#fh5co-header .display-tc .btn:hover,\r\n#fh5co-counter .display-tc .btn:hover,\r\n.fh5co-cover .display-tc .btn:hover {\r\n  background: #d1c286 !important;\r\n  -webkit-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75) !important;\r\n  box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75) !important;\r\n}\r\n#fh5co-header .display-tc .form-inline .form-group,\r\n#fh5co-counter .display-tc .form-inline .form-group,\r\n.fh5co-cover .display-tc .form-inline .form-group {\r\n  width: 100% !important;\r\n  margin-bottom: 10px;\r\n}\r\n#fh5co-header .display-tc .form-inline .form-group .form-control,\r\n#fh5co-counter .display-tc .form-inline .form-group .form-control,\r\n.fh5co-cover .display-tc .form-inline .form-group .form-control {\r\n  width: 100%;\r\n  background: #fff;\r\n  border: none;\r\n}\r\n#fh5co-counter {\r\n  text-align: center;\r\n}\r\n#fh5co-counter .counter {\r\n  font-size: 50px;\r\n  margin-bottom: 10px;\r\n  color: #000;\r\n  font-weight: 100;\r\n  display: block;\r\n}\r\n#fh5co-counter .counter-label {\r\n  margin-bottom: 0;\r\n  text-transform: uppercase;\r\n  color: rgba(0, 0, 0, 0.5);\r\n  letter-spacing: 1px;\r\n  font-family: \"Montserrat\", Arial, sans-serif;\r\n}\r\n#fh5co-counter .feature-center {\r\n  padding: 40px 20px;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n@media screen and (max-width: 768px) {\r\n  #fh5co-counter .feature-center {\r\n    margin-bottom: 50px;\r\n  }\r\n}\r\n#fh5co-counter .icon {\r\n  width: 70px;\r\n  height: 70px;\r\n  text-align: center;\r\n  background: #d1c286;\r\n  -webkit-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);\r\n  box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);\r\n  margin-bottom: 20px;\r\n}\r\n#fh5co-counter .icon i {\r\n  height: 70px;\r\n  color: #fff;\r\n}\r\n#fh5co-counter .icon i:before {\r\n  display: block;\r\n  text-align: center;\r\n  margin-left: 3px;\r\n}\r\n.fh5co-bg-section {\r\n  background: rgba(0, 0, 0, 0.05);\r\n}\r\n#fh5co-services,\r\n#fh5co-started,\r\n#fh5co-testimonial,\r\n#fh5co-started,\r\n#fh5co-product,\r\n#fh5co-about,\r\n#fh5co-contact,\r\n#fh5co-footer {\r\n  padding: 7em 0;\r\n  clear: both;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  #fh5co-services,\r\n  #fh5co-started,\r\n  #fh5co-testimonial,\r\n  #fh5co-started,\r\n  #fh5co-product,\r\n  #fh5co-about,\r\n  #fh5co-contact,\r\n  #fh5co-footer {\r\n    padding: 3em 0;\r\n  }\r\n}\r\n.feature-center {\r\n  padding-left: 20px;\r\n  padding-right: 20px;\r\n  float: left;\r\n  width: 100%;\r\n  margin-bottom: 40px;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .feature-center {\r\n    margin-bottom: 50px;\r\n  }\r\n}\r\n.feature-center .desc {\r\n  padding-left: 180px;\r\n}\r\n.feature-center .icon {\r\n  width: 90px;\r\n  height: 90px;\r\n  background: #d1c286;\r\n  display: table;\r\n  text-align: center;\r\n  margin: 0 auto 30px auto;\r\n  border-radius: 50%;\r\n}\r\n.feature-center .icon i {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  height: 90px;\r\n  font-size: 40px;\r\n  line-height: 40px;\r\n  color: #fff;\r\n}\r\n.feature-center p, .feature-center h3 {\r\n  margin-bottom: 30px;\r\n}\r\n.feature-center h3 {\r\n  text-transform: uppercase;\r\n  font-size: 15px;\r\n  letter-spacing: 1px;\r\n  font-weight: 600;\r\n}\r\n.product {\r\n  margin-bottom: 40px;\r\n}\r\n.product .product-grid {\r\n  background-size: cover;\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  position: relative;\r\n  height: 350px;\r\n  margin-bottom: 20px;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n.product .product-grid .sale {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n  padding: 10px;\r\n  z-index: 100;\r\n  background: #d1c286;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n}\r\n.product .product-grid .inner {\r\n  display: table;\r\n  height: 350px;\r\n  width: 100%;\r\n  opacity: 0;\r\n  background: rgba(0, 0, 0, 0.3);\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .product .product-grid .inner {\r\n    opacity: 1;\r\n    background: transparent;\r\n  }\r\n}\r\n.product .product-grid .inner p {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n.product .product-grid .inner p .icon {\r\n  padding: 7px 10px;\r\n  color: #fff;\r\n  background: #d1c286;\r\n}\r\n.product .product-grid .inner p .icon:hover, .product .product-grid .inner p .icon:focus {\r\n  color: #d1c286;\r\n  background: #fff;\r\n}\r\n.product .desc h3 {\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  margin-bottom: 5px;\r\n  font-weight: bold;\r\n  line-height: 20px;\r\n}\r\n.product .desc h3 a {\r\n  color: #000;\r\n}\r\n.product .desc .price {\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n}\r\n.product:hover .product-grid, .product:focus .product-grid {\r\n  -webkit-box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\r\n  -ms-box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\r\n  -o-box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\r\n  box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\r\n}\r\n.product:hover .inner, .product:focus .inner {\r\n  opacity: 1;\r\n}\r\n.product:hover .desc h3 a, .product:focus .desc h3 a {\r\n  color: #d1c286;\r\n}\r\n.product-carousel {\r\n  margin-bottom: 7em;\r\n}\r\n.fh5co-tabs .fh5co-tab-nav {\r\n  clear: both;\r\n  margin: 0 0 3em 0;\r\n  padding: 3px;\r\n  float: left;\r\n  width: 100%;\r\n  background: #f2f2f2;\r\n  border-radius: 4px;\r\n}\r\n.fh5co-tabs .fh5co-tab-nav li {\r\n  float: left;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 33.33%;\r\n  text-align: center;\r\n  list-style: none;\r\n  display: -moz-inline-stack;\r\n  display: inline-block;\r\n  zoom: 1;\r\n  *display: inline;\r\n}\r\n.fh5co-tabs .fh5co-tab-nav li .icon {\r\n  font-size: 30px;\r\n}\r\n.fh5co-tabs .fh5co-tab-nav li a {\r\n  padding: 20px;\r\n  width: 100%;\r\n  float: left;\r\n  border-radius: 4px;\r\n  color: #b3b3b3;\r\n}\r\n.fh5co-tabs .fh5co-tab-nav li a:hover {\r\n  color: #4d4d4d;\r\n}\r\n.fh5co-tabs .fh5co-tab-nav li.active a {\r\n  background: #fff;\r\n  color: #d1c286;\r\n}\r\n.fh5co-tabs .fh5co-tab-content-wrap {\r\n  clear: both;\r\n  position: relative;\r\n  top: 70px;\r\n}\r\n.fh5co-tabs .fh5co-tab-content-wrap .tab-content {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n.fh5co-tabs .fh5co-tab-content-wrap .tab-content.active {\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n.fh5co-tabs .fh5co-tab-content-wrap .tab-content .price {\r\n  letter-spacing: 2px;\r\n  border: 2px solid #d1c286;\r\n  display: inline-block;\r\n  margin-bottom: 20px;\r\n  padding: 7px 20px 10px 20px;\r\n}\r\n.fh5co-tabs .fh5co-tab-content-wrap ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  margin-bottom: 3em;\r\n}\r\n.fh5co-tabs .fh5co-tab-content-wrap ul li {\r\n  list-style: none;\r\n  margin-bottom: 20px;\r\n  position: relative;\r\n  padding-left: 30px;\r\n}\r\n.fh5co-tabs .fh5co-tab-content-wrap ul li:before {\r\n  font-family: 'icomoon';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  content: '\\E116';\r\n}\r\n.fh5co-tabs .fh5co-tab-content-wrap .feed {\r\n  width: 100%;\r\n  float: left;\r\n  margin-bottom: 7em;\r\n}\r\n.fh5co-tabs .fh5co-tab-content-wrap .feed > div {\r\n  width: 100%;\r\n  float: left;\r\n  margin-bottom: 1em;\r\n}\r\n.fh5co-tabs .fh5co-tab-content-wrap .feed > div blockquote {\r\n  border-left: 0;\r\n  padding: 20px;\r\n  background: rgba(0, 0, 0, 0.04);\r\n}\r\n.fh5co-tabs .fh5co-tab-content-wrap .feed > div h3 {\r\n  font-family: \"Playfair Display\", serif;\r\n  font-size: 18px;\r\n  display: inline-block;\r\n  padding-right: 20px;\r\n}\r\n.fh5co-tabs .fh5co-tab-content-wrap .feed > div .rate {\r\n  color: #ffba00;\r\n}\r\n.fh5co-tabs .icon-xlg {\r\n  font-size: 400px;\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .fh5co-tabs .icon-xlg {\r\n    font-size: 300px;\r\n  }\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .fh5co-tabs .icon-xlg {\r\n    font-size: 200px;\r\n  }\r\n}\r\n.fh5co-tabs .icon-xlg i {\r\n  color: #d1c286;\r\n}\r\n.fh5co-heading {\r\n  margin-bottom: 5em;\r\n}\r\n.fh5co-heading.fh5co-heading-sm {\r\n  margin-bottom: 2em;\r\n}\r\n.fh5co-heading h2 {\r\n  font-size: 24px;\r\n  margin-bottom: 20px;\r\n  line-height: 1.5;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  color: #000;\r\n}\r\n.fh5co-heading p {\r\n  font-size: 18px;\r\n  line-height: 1.5;\r\n  color: #828282;\r\n}\r\n.fh5co-heading span {\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  text-transform: uppercase;\r\n  font-size: 12px;\r\n  letter-spacing: 2px;\r\n  font-family: \"Montserrat\", Arial, sans-serif;\r\n}\r\n#fh5co-testimonial {\r\n  background: #efefef;\r\n}\r\n#fh5co-testimonial .testimony-slide {\r\n  text-align: center;\r\n}\r\n#fh5co-testimonial .testimony-slide span {\r\n  font-size: 12px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  font-weight: 700;\r\n  display: block;\r\n}\r\n#fh5co-testimonial .testimony-slide figure {\r\n  margin-bottom: 10px;\r\n  display: -moz-inline-stack;\r\n  display: inline-block;\r\n  zoom: 1;\r\n  *display: inline;\r\n}\r\n#fh5co-testimonial .testimony-slide figure img {\r\n  width: 100px;\r\n  border-radius: 50%;\r\n}\r\n#fh5co-testimonial .testimony-slide blockquote {\r\n  border: none;\r\n  margin: 30px auto;\r\n  width: 50%;\r\n  position: relative;\r\n  padding: 0;\r\n}\r\n@media screen and (max-width: 992px) {\r\n  #fh5co-testimonial .testimony-slide blockquote {\r\n    width: 100%;\r\n  }\r\n}\r\n#fh5co-testimonial .arrow-thumb {\r\n  position: absolute;\r\n  top: 40%;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n#fh5co-testimonial .arrow-thumb a {\r\n  font-size: 32px;\r\n  color: #dadada;\r\n}\r\n#fh5co-testimonial .arrow-thumb a:hover, #fh5co-testimonial .arrow-thumb a:focus, #fh5co-testimonial .arrow-thumb a:active {\r\n  text-decoration: none;\r\n}\r\n#fh5co-started {\r\n  background: #d1c286;\r\n}\r\n#fh5co-started .fh5co-heading h2 {\r\n  color: #fff;\r\n  margin-bottom: 20px !important;\r\n}\r\n#fh5co-started .fh5co-heading p {\r\n  color: rgba(255, 255, 255, 0.6);\r\n}\r\n#fh5co-started .form-control {\r\n  background: rgba(255, 255, 255, 0.2);\r\n  border: none !important;\r\n  color: #fff;\r\n  font-size: 16px !important;\r\n  width: 100%;\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\n#fh5co-started .form-control::-webkit-input-placeholder {\r\n  color: #fff;\r\n}\r\n#fh5co-started .form-control:-moz-placeholder {\r\n  /* Firefox 18- */\r\n  color: #fff;\r\n}\r\n#fh5co-started .form-control::-moz-placeholder {\r\n  /* Firefox 19+ */\r\n  color: #fff;\r\n}\r\n#fh5co-started .form-control:-ms-input-placeholder {\r\n  color: #fff;\r\n}\r\n#fh5co-started .form-control:focus {\r\n  background: rgba(255, 255, 255, 0.3);\r\n}\r\n#fh5co-started .btn {\r\n  height: 54px;\r\n  border: none !important;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  color: #fff;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  font-weight: 400;\r\n  padding-left: 50px;\r\n  padding-right: 50px;\r\n}\r\n#fh5co-started .form-inline .form-group {\r\n  width: 100% !important;\r\n  margin-bottom: 10px;\r\n}\r\n#fh5co-started .form-inline .form-group .form-control {\r\n  width: 100%;\r\n}\r\n#fh5co-footer {\r\n  background: #efefef;\r\n}\r\n#fh5co-footer .fh5co-footer-links {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n#fh5co-footer .fh5co-footer-links li {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n#fh5co-footer .fh5co-footer-links li a {\r\n  color: #000;\r\n  text-decoration: none;\r\n}\r\n#fh5co-footer .fh5co-footer-links li a:hover {\r\n  text-decoration: underline;\r\n}\r\n#fh5co-footer .fh5co-widget {\r\n  margin-bottom: 30px;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  #fh5co-footer .fh5co-widget {\r\n    text-align: left;\r\n  }\r\n}\r\n#fh5co-footer .fh5co-widget h3 {\r\n  margin-bottom: 15px;\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n}\r\n#fh5co-footer .copyright .block {\r\n  display: block;\r\n}\r\n#map {\r\n  height: 500px;\r\n  width: 100%;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  #map {\r\n    height: 400px;\r\n  }\r\n}\r\n@media screen and (max-width: 480px) {\r\n  #map {\r\n    height: 200px;\r\n  }\r\n}\r\n#fh5co-offcanvas {\r\n  position: absolute;\r\n  z-index: 1901;\r\n  width: 270px;\r\n  background: black;\r\n  top: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  padding: 45px 40px 40px 40px;\r\n  overflow-y: auto;\r\n  display: none;\r\n  -webkit-transform: translateX(270px);\r\n  transform: translateX(270px);\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  #fh5co-offcanvas {\r\n    display: block;\r\n  }\r\n}\r\n.offcanvas #fh5co-offcanvas {\r\n  -webkit-transform: translateX(0px);\r\n  transform: translateX(0px);\r\n}\r\n#fh5co-offcanvas a {\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n#fh5co-offcanvas a:hover {\r\n  color: rgba(255, 255, 255, 0.8);\r\n}\r\n#fh5co-offcanvas ul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n#fh5co-offcanvas ul li {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n#fh5co-offcanvas ul li.search {\r\n  float: left;\r\n  width: 100%;\r\n  font-family: \"Playfair Display\", serif;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  padding: 0;\r\n  margin: 5px 0 0 0;\r\n}\r\n#fh5co-offcanvas ul li input[type=text] {\r\n  padding: 6px 10px;\r\n  width: 100%;\r\n  border: 1px solid rgba(255, 255, 255, 0.1);\r\n  float: right;\r\n  font-size: 13px;\r\n  margin-top: 4px;\r\n  background: transparent;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n#fh5co-offcanvas ul li input[type=text]:focus {\r\n  width: 100%;\r\n  outline: none;\r\n}\r\n#fh5co-offcanvas ul li button {\r\n  margin-top: 4px;\r\n  padding: 6px;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  border: 1px solid rgba(255, 255, 255, 0.1);\r\n  margin-left: 1px;\r\n}\r\n#fh5co-offcanvas ul li button i {\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n#fh5co-offcanvas ul li button:hover, #fh5co-offcanvas ul li button:focus {\r\n  background: transparent !important;\r\n}\r\n#fh5co-offcanvas ul li button:hover i, #fh5co-offcanvas ul li button:focus i {\r\n  color: white;\r\n}\r\n#fh5co-offcanvas ul li.shopping-cart {\r\n  float: left;\r\n}\r\n#fh5co-offcanvas ul li a.cart {\r\n  display: block;\r\n  margin-top: 30px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n#fh5co-offcanvas ul li a.cart span {\r\n  position: relative;\r\n}\r\n#fh5co-offcanvas ul li a.cart span small {\r\n  position: absolute;\r\n  top: -20px;\r\n  right: -15px;\r\n  padding: 10px 6px;\r\n  line-height: 0;\r\n  font-size: 11px;\r\n  background: #d1c286;\r\n  color: white;\r\n  border-radius: 50%;\r\n}\r\n#fh5co-offcanvas ul li > ul {\r\n  padding-left: 20px;\r\n  display: none;\r\n}\r\n#fh5co-offcanvas ul li.offcanvas-has-dropdown > a:after {\r\n  position: absolute;\r\n  right: 0px;\r\n  font-family: 'icomoon';\r\n  speak: none;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n  /* Better Font Rendering =========== */\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  content: \"\\E921\";\r\n  font-size: 20px;\r\n  color: rgba(255, 255, 255, 0.2);\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n}\r\n#fh5co-offcanvas ul li.offcanvas-has-dropdown.active a:after {\r\n  -webkit-transform: rotate(-180deg);\r\n  transform: rotate(-180deg);\r\n}\r\n.uppercase {\r\n  font-size: 14px;\r\n  color: #000;\r\n  margin-bottom: 10px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .fh5co-nav-toggle {\r\n    display: block;\r\n  }\r\n}\r\n.btn {\r\n  margin-right: 4px;\r\n  margin-bottom: 4px;\r\n  font-family: \"Montserrat\", Arial, sans-serif;\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  border-radius: 2px;\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n  padding: 8px 20px;\r\n}\r\n.btn.btn-md {\r\n  padding: 8px 20px !important;\r\n}\r\n.btn.btn-lg {\r\n  padding: 18px 36px !important;\r\n}\r\n.btn:hover, .btn:active, .btn:focus {\r\n  -webkit-box-shadow: none !important;\r\n          box-shadow: none !important;\r\n  outline: none !important;\r\n}\r\n.btn-primary {\r\n  background: #d1c286;\r\n  color: #fff;\r\n  border: 2px solid #d1c286;\r\n}\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n  background: #d8cb98 !important;\r\n  border-color: #d8cb98 !important;\r\n}\r\n.btn-primary.btn-outline {\r\n  background: transparent;\r\n  color: #d1c286;\r\n  border: 2px solid #d1c286;\r\n}\r\n.btn-primary.btn-outline:hover, .btn-primary.btn-outline:focus, .btn-primary.btn-outline:active {\r\n  background: #d1c286;\r\n  color: #fff;\r\n}\r\n.btn-success {\r\n  background: #5cb85c;\r\n  color: #fff;\r\n  border: 2px solid #5cb85c;\r\n}\r\n.btn-success:hover, .btn-success:focus, .btn-success:active {\r\n  background: #4cae4c !important;\r\n  border-color: #4cae4c !important;\r\n}\r\n.btn-success.btn-outline {\r\n  background: transparent;\r\n  color: #5cb85c;\r\n  border: 2px solid #5cb85c;\r\n}\r\n.btn-success.btn-outline:hover, .btn-success.btn-outline:focus, .btn-success.btn-outline:active {\r\n  background: #5cb85c;\r\n  color: #fff;\r\n}\r\n.btn-info {\r\n  background: #5bc0de;\r\n  color: #fff;\r\n  border: 2px solid #5bc0de;\r\n}\r\n.btn-info:hover, .btn-info:focus, .btn-info:active {\r\n  background: #46b8da !important;\r\n  border-color: #46b8da !important;\r\n}\r\n.btn-info.btn-outline {\r\n  background: transparent;\r\n  color: #5bc0de;\r\n  border: 2px solid #5bc0de;\r\n}\r\n.btn-info.btn-outline:hover, .btn-info.btn-outline:focus, .btn-info.btn-outline:active {\r\n  background: #5bc0de;\r\n  color: #fff;\r\n}\r\n.btn-danger {\r\n  background: #d9534f;\r\n  color: #fff;\r\n  border: 2px solid #d9534f;\r\n}\r\n.btn-danger:hover, .btn-danger:focus, .btn-danger:active {\r\n  background: #d43f3a !important;\r\n  border-color: #d43f3a !important;\r\n}\r\n.btn-danger.btn-outline {\r\n  background: transparent;\r\n  color: #d9534f;\r\n  border: 2px solid #d9534f;\r\n}\r\n.btn-danger.btn-outline:hover, .btn-danger.btn-outline:focus, .btn-danger.btn-outline:active {\r\n  background: #d9534f;\r\n  color: #fff;\r\n}\r\n.btn-outline {\r\n  background: none;\r\n  border: 2px solid gray;\r\n  font-size: 16px;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n.btn-outline:hover, .btn-outline:focus, .btn-outline:active {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n.btn.with-arrow:hover {\r\n  padding-right: 50px;\r\n}\r\n.btn.with-arrow:hover i {\r\n  color: #fff;\r\n  right: 18px;\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n.row-pb-md {\r\n  padding-bottom: 4em !important;\r\n}\r\n.row-pb-sm {\r\n  padding-bottom: 2em !important;\r\n}\r\n.pageButton {\r\n  margin: 0 auto;\r\n}\r\n.choice {\r\n  height: 600px;\r\n}\r\n.desc h3{\r\n  white-space: nowrap;\r\n  text-overflow:ellipsis;\r\n  overflow:hidden;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n\t<div id=\"page\">\r\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\r\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li class=\"search\">\r\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search..\" [formControl]=\"searchBox\">\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</nav>\r\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\r\n\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\r\n\t\t\t\t\t\t<div class=\"display-t\">\r\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\r\n\t\t\t\t\t\t\t\t<h1>Others</h1>\r\n\t\t\t\t\t\t\t\t<h2>You can find Cars, bookshelf and almost everything here</h2>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<div id=\"fh5co-product\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row animate-box\">\r\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\r\n\t\t\t\t\t\t<span>Cool Stuff</span>\r\n\t\t\t\t\t\t<h2>Others.</h2>\r\n\t\t\t\t\t\t<p>If you find some bugs or have some suggestions, please contack us at: hbchenjh@gmail.com. We are hearing all the time.\r\n\t\t\t\t\t\t\tyour feedback makes our website better!\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-4 text-center\" *ngFor=\"let product of allProducts | productSearch: searchValue | paginate: { id:'product', itemsPerPage: 6, currentPage: p }\">\r\n\t\t\t\t\t\t<div class=\"product\" (click)=\"ToProductDetail(product.id)\">\r\n\t\t\t\t\t\t\t<div class=\"product-grid\" [style.background-image]=\"'url('+product.imgUrl[0]+')'\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"desc\">\r\n\t\t\t\t\t\t\t\t<h3>\r\n\t\t\t\t\t\t\t\t\t{{product.name}}\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"price\">{{product.price}}$</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<pagination-controls class=\"pageButton\" id=\"product\" (pageChange)=\"getPageNumber($event)\" maxSize=\"9\" directionLinks=\"true\"\r\n\t\t\t\t autoHide=\"true\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\r\n\t\t\t\t</pagination-controls>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<app-footer></app-footer>\r\n\t</div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_product_service__ = __webpack_require__("../../../../../src/app/Service/product-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, router, activatedRouter, sanitization) {
        this.productService = productService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.sanitization = sanitization;
        this.searchBox = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.searchValue = '';
        this.allProducts = [];
        this.p = this.productService.getCurrentPage();
        // console.log(this.p);
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionProducts = this.productService.getAllProduct()
            .subscribe(function (allProducts) {
            _this.allProducts = allProducts;
            _this.allProducts = _this.allProducts.reverse();
        });
        this.subscriptionInput = this.searchBox
            .valueChanges
            .debounceTime(200)
            .subscribe(function (term) {
            _this.searchValue = term;
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.subscriptionProducts.unsubscribe();
    };
    ProductComponent.prototype.ToProductDetail = function (id) {
        this.productService.setCurrentPage(this.p);
        this.router.navigate(['/product-list', id]);
        this.productService.setCurrentPage(this.p);
    };
    ProductComponent.prototype.getPageNumber = function (event) {
        this.p = event;
        //  console.log(event);
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/component/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-tab {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    overflow: hidden;\r\n}\r\na {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <div id=\"page\">\r\n        <nav class=\"fh5co-nav\" role=\"navigation\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3 col-xs-2\">\r\n                        <div id=\"fh5co-logo\">\r\n                            <a [routerLink]=\"['']\">WPI.</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-xs-6 text-center menu-1\">\r\n                        <ul>\r\n                            <li>\r\n                                <a [routerLink]=\"''\">Home</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'/house-list'\">House</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'/survival-guide'\">New Students</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'/test'\">Contact</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </nav>\r\n\r\n        <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\r\n            <div class=\"overlay\"></div>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8 col-md-offset-2 text-center\">\r\n                        <div class=\"display-t\">\r\n                            <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\r\n                                <h1>Personnal Page</h1>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </header>\r\n\r\n        <div id=\"fh5co-product\">\r\n            <div class=\"container\">\r\n                <div class=\"row animate-box\">\r\n                    <div class=\"col-md-10 col-md-offset-2 text-center fh5co-heading\">\r\n                        <h2>Your sell list.</h2>\r\n                        <p>This section is still under construction, more function will come soon...\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 text-center\" *ngFor=\"let product of productModel\">\r\n                        <div class=\"product\">\r\n                            <div class=\"product-grid\" [style.background-image]=\"'url('+product.imgUrl[0]+')'\">\r\n                            </div>\r\n                            <div class=\"desc\">\r\n                                <h3>\r\n                                    <i>{{product.name}}</i>\r\n                                </h3>\r\n                                <span class=\"price\">{{product.price}}</span>\r\n                                <br>\r\n                                <i>\r\n                                    <a (click)=\"onDeleteProduct(product)\">Delete this ITEM</a>\r\n                                </i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4 text-center\" *ngFor=\"let book of bookModel\">\r\n                        <div class=\"product\">\r\n                            <div class=\"product-grid\" [style.background-image]=\"'url('+book.imgUrl[0]+')'\">\r\n                            </div>\r\n                            <div class=\"desc\">\r\n                                <h3>\r\n                                    <i>{{book.name}}</i>\r\n                                </h3>\r\n                                <span class=\"price\">{{book.price}}</span>\r\n                                <br>\r\n                                <i>\r\n                                    <a (click)=\"onDeleteBook(book)\">Delete this ITEM</a>\r\n                                </i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4 text-center\" *ngFor=\"let house of houseModel\">\r\n                        <div class=\"product\">\r\n                            <div class=\"product-grid\" [style.background-image]=\"'url('+house.imgUrl[0]+')'\">\r\n                            </div>\r\n                            <div class=\"desc\">\r\n                                <h3>\r\n                                    <i>{{house.Address}}</i>\r\n                                </h3>\r\n                                <span class=\"price\">{{house.price}}</span>\r\n                                <br>\r\n                                <i>\r\n                                    <a (click)=\"onDeleteHouse(house)\">Delete this ITEM</a>\r\n                                </i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-footer></app-footer>\r\n    </div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_auth_service__ = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_book_service__ = __webpack_require__("../../../../../src/app/Service/book-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_product_service__ = __webpack_require__("../../../../../src/app/Service/product-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Service_house_service__ = __webpack_require__("../../../../../src/app/Service/house-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, bookService, productService, houseService) {
        this.authService = authService;
        this.bookService = bookService;
        this.productService = productService;
        this.houseService = houseService;
        this.bookModel = [];
        this.productModel = [];
        this.houseModel = [];
        // this.profile = JSON.parse(localStorage.getItem('profile'));
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.userProfile) {
            this.profile = this.authService.userProfile;
            this.getProducts(this.profile.name);
            this.getBooks(this.profile.name);
            this.getHouses(this.profile.name);
        }
        else {
            this.authService.getProfile(function (err, profile) {
                _this.profile = profile;
                _this.getProducts(_this.profile.name);
                _this.getBooks(_this.profile.name);
                _this.getHouses(_this.profile.name);
            });
        }
    };
    ProfileComponent.prototype.getProducts = function (name) {
        var _this = this;
        this.productService.getUserProduct(name)
            .then(function (products) {
            _this.productModel = products;
            console.log(_this.productModel);
        })
            .catch(function (e) { return console.log(e); });
    };
    ProfileComponent.prototype.getBooks = function (name) {
        var _this = this;
        this.bookService.getUserBooks(name)
            .then(function (books) {
            _this.bookModel = books;
            // console.log(this.productModel);
        })
            .catch(function (e) { return console.log(e); });
    };
    ProfileComponent.prototype.getHouses = function (name) {
        var _this = this;
        this.houseService.getUserhouse(name)
            .then(function (houses) {
            _this.houseModel = houses;
            console.log(_this.productModel);
        })
            .catch(function (e) { return console.log(e); });
    };
    ProfileComponent.prototype.onDeleteHouse = function (item) {
        this.houseService.deleteHouse(item.id);
    };
    ProfileComponent.prototype.onDeleteBook = function (item) {
        this.bookService.deleteBook(item.id);
    };
    ProfileComponent.prototype.onDeleteProduct = function (item) {
        this.productService.deleteProduct(+item.id);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/component/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__Service_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_3__Service_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_4__Service_house_service__["a" /* HouseService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/sell/sell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group{\r\n    width: 100%;\r\n  }\r\n  .plus {\r\n    height: 25px;\r\n    width: 40px;\r\n  }\r\n  h4 a {\r\n    cursor: pointer;\r\n  }\r\n  h4{\r\n    text-align: center;\r\n  }\r\n  ng-template{\r\n    margin: 0 auto;\r\n  }\r\n  #fileError{\r\n   color: red;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/sell/sell.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a [routerLink]=\"['']\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/test'\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>Sell Section</h1>\n                <h2>Your can Post your Product to Sell at Here</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <span>Cool Stuff</span>\n            <h2>Sell.</h2>\n            <p>If you find some bug or have some suggestions, please contack us at: hbchenjh@gmail.com. We are hearing all the\n              time. your feedback makes our website better!\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\" *ngIf=\"authService.isAuthenticated() else login\">\n                <mat-form-field class=\"form-group\">\n                  <mat-select placeholder=\"Product Type\" [formControl]=\"selected\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"type\" [(value)]=\"type\"\n                    required>\n                    <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n                      {{option}}\n                    </mat-option>\n                  </mat-select>\n                  <mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error>\n                  <mat-hint *ngIf=\"!selected.touched\">Please select your product type</mat-hint>\n                </mat-form-field>\n                <div *ngIf=\"isOthers(type)\">\n                  <form action=\"submit\">\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Product Name</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"name\" [formControl]=\"productNameError\" [errorStateMatcher]=\"matcher\" name=\"productName\" required>\n                      <mat-error *ngIf=\"productNameError.hasError('required')\">Product Name are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Product Price</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"price\" [formControl]=\"productPriceError\" [errorStateMatcher]=\"matcher\" name=\"productPrice\" required>\n                      <mat-error *ngIf=\"productPriceError.hasError('required')\">Product Price are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Contact Information</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"contactInfo\" [formControl]=\"productContactError\" [errorStateMatcher]=\"matcher\" name=\"productContact\"\n                        required>\n                      <mat-error *ngIf=\"productContactError.hasError('required')\">Contact Information are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input the date of today</i>\n                      </mat-placeholder>\n                      <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker3></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>create</mat-icon>\n                        <i> A Good Description make your product easy to sell</i>\n                      </mat-placeholder>\n                      <textarea [(ngModel)]=\"desc\" matInput matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" name=\"productDescp\">\n                      </textarea>\n                    </mat-form-field>\n                    <input type=\"file\" name=\"0\" (change)=\"onFileSelect($event)\">\n                    <p *ngIf=\"fileSizeError[0]\" id=\"fileError\">File error, file size must smaller than 1 MB, this file would not be uploaded, please select your file\n                      again, thanks</p>\n                    <p *ngIf=\"fileTypeError[0]\" id=\"fileError\">File error, file type must be jpg, png, bpm, this file would not be uploaded, jpeg, please select your\n                      file again, thanks</p>\n                    <div *ngFor=\"let time of names\">\n                      <input type=\"file\" [name]=\"time\" (change)=\"onFileSelect($event)\">\n                      <p *ngIf=\"checkFileError(time)\" id=\"fileError\">File error, file size must smaller than 1 MB, this file would not be uploaded, please select your file\n                        again, thanks</p>\n                      <p *ngIf=\"fileTypeError[time]\" id=\"fileError\">File error, file type must be jpg, png, bpm, this file would not be uploaded, jpeg, please select your\n                        file again, thanks</p>\n                    </div>\n                    <div *ngIf=\"plusSignal\" class=\"plus\">\n                      <i class=\"fa fa-plus\" aria-hidden=\"true\" (click)=\"onSecondSelect()\"></i>\n                    </div>\n                    <button *ngIf=\"!uploadProcess\" class=\"btn btn-primary\" (click)=\"upload()\" [disabled]=\"isBookDisable()\">Submit</button>\n                    <h3>\n                      {{ownerID}}\n                    </h3>\n                  </form>\n                </div>\n                <div *ngIf=\"isHouse(type)\">\n                  <form action=\"submit\">\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your House Address</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"address\" [formControl]=\"productNameError\" [errorStateMatcher]=\"matcher\" name=\"productName\" required>\n                      <mat-error *ngIf=\"productNameError.hasError('required')\">Product Name are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Rent fee (per Month)</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"price\" [formControl]=\"productPriceError\" [errorStateMatcher]=\"matcher\" name=\"productPrice\" required>\n                      <mat-error *ngIf=\"productPriceError.hasError('required')\">Product Price are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Contact Information</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"contactInfo\" [formControl]=\"productContactError\" [errorStateMatcher]=\"matcher\" name=\"productContact\"\n                        required>\n                      <mat-error *ngIf=\"productContactError.hasError('required')\">Contact Information are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input the house available date</i>\n                      </mat-placeholder>\n                      <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker3></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input the house contract date</i>\n                      </mat-placeholder>\n                      <input matInput [matDatepicker]=\"picker4\" [value]=\"dateTo.value\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker4></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>create</mat-icon>\n                        <i> You can provide other information which you think is necessary at here</i>\n                      </mat-placeholder>\n                      <textarea [(ngModel)]=\"desc\" matInput matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" name=\"productDescp\">\n                             </textarea>\n                    </mat-form-field>\n                    <input type=\"file\" name=\"0\" (change)=\"onFileSelect($event)\">\n                    <p *ngIf=\"fileSizeError[0]\" id=\"fileError\">File error, file size must smaller than 1 MB, this file would not be uploaded,please select your file\n                      again, thanks</p>\n                    <p *ngIf=\"fileTypeError[0]\" id=\"fileError\">File error, file type must be jpg, png, this file would not be uploaded, bpm, jpeg, please select your\n                      file again, thanks</p>\n                    <div *ngFor=\"let time of names\">\n                      <input type=\"file\" [name]=\"time\" (change)=\"onFileSelect($event)\">\n                      <p *ngIf=\"checkFileError(time)\" id=\"fileError\">File error, file size must smaller than 1 MB, please select your file again, thanks</p>\n                      <p *ngIf=\"fileTypeError[time]\" id=\"fileError\">File error, file type must be jpg, png, bpm, jpeg, please select your file again, thanks</p>\n                    </div>\n                    <div *ngIf=\"plusSignal\" class=\"plus\">\n                      <i class=\"fa fa-plus\" aria-hidden=\"true\" (click)=\"onSecondSelect()\"></i>\n                    </div>\n                    <button *ngIf=\"!uploadProcess\" class=\"btn btn-primary\" (click)=\"upload()\" [disabled]=\"isBookDisable()\">Submit</button>\n                    <h3>\n                      {{ownerID}}\n                    </h3>\n                  </form>\n                </div>\n                <!--demand list-->\n                <div *ngIf=\"isDemand(type)\">\n                  <form action=\"submit\">\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please tell us what you want</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"name\" [formControl]=\"productNameError\" [errorStateMatcher]=\"matcher\" name=\"productName\" required>\n                      <mat-error *ngIf=\"productNameError.hasError('required')\">Product Name are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Contact Information</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"contactInfo\" [formControl]=\"productContactError\" [errorStateMatcher]=\"matcher\" name=\"productContact\"\n                        required>\n                      <mat-error *ngIf=\"productContactError.hasError('required')\">Contact Information are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>create</mat-icon>\n                        <i> You can provide other information which you think is necessary at here</i>\n                      </mat-placeholder>\n                      <textarea [(ngModel)]=\"desc\" matInput matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" name=\"productDescp\">\n                             </textarea>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input the date of today</i>\n                      </mat-placeholder>\n                      <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker3></mat-datepicker>\n                    </mat-form-field>\n                    <button *ngIf=\"!uploadProcess\" class=\"btn btn-primary\" (click)=\"addProduct(type)\" [disabled]=\"isDemandDisable()\">Submit</button>\n                    <h3>\n                      {{ownerID}}\n                    </h3>\n                  </form>\n                </div>\n                <!--book section-->\n                <div *ngIf=\"isBook(type)\">\n                  <form action=\"submit\">\n                    <mat-form-field class=\"form-group\">\n                      <mat-select placeholder=\"Book Major\" [formControl]=\"selectedBook\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"department\"\n                        [(value)]=\"department\" required>\n                        <mat-option *ngFor=\"let department of Departments\" [value]=\"department\">\n                          {{department}}\n                        </mat-option>\n                      </mat-select>\n                      <mat-error *ngIf=\"selectedBook.hasError('required')\">You must make a selection</mat-error>\n                      <mat-hint *ngIf=\"!selectedBook.touched\">Please select your product type</mat-hint>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Book Name</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"name\" [formControl]=\"productNameError\" [errorStateMatcher]=\"matcher\" name=\"productName\" required>\n                      <mat-error *ngIf=\"productNameError.hasError('required')\">Product Name are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Book Price</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"price\" [formControl]=\"productPriceError\" [errorStateMatcher]=\"matcher\" name=\"productPrice\" required>\n                      <mat-error *ngIf=\"productPriceError.hasError('required')\">Product Price are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Contact Information</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"contactInfo\" [formControl]=\"productContactError\" [errorStateMatcher]=\"matcher\" name=\"productContact\"\n                        required>\n                      <mat-error *ngIf=\"productContactError.hasError('required')\">Contact Information are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input the date of today</i>\n                      </mat-placeholder>\n                      <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker3></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>create</mat-icon>\n                        <i> You can provide other information which you think is necessary at here</i>\n                      </mat-placeholder>\n                      <textarea [(ngModel)]=\"desc\" matInput matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" name=\"productDescp\">\n                             </textarea>\n                    </mat-form-field>\n                    <input type=\"file\" name=\"0\" (change)=\"onFileSelect($event)\">\n                    <p *ngIf=\"fileSizeError[0]\" id=\"fileError\">File error, file size must smaller than 1 MB, this file would not be uploaded, please select your file\n                      again, thanks</p>\n                    <p *ngIf=\"fileTypeError[0]\" id=\"fileError\">File error, file type must be jpg, png, bpm, this file would not be uploaded, jpeg, please select your\n                      file again, thanks</p>\n                    <div *ngFor=\"let time of names\">\n                      <input type=\"file\" [name]=\"time\" (change)=\"onFileSelect($event)\">\n                      <p *ngIf=\"checkFileError(time)\" id=\"fileError\">File error, file size must smaller than 1 MB, please select your file again, thanks</p>\n                      <p *ngIf=\"fileTypeError[time]\" id=\"fileError\">File error, file type must be jpg, png, bpm, jpeg, please select your file again, thanks</p>\n                    </div>\n                    <div *ngIf=\"plusSignal\" class=\"plus\" (click)=\"onSecondSelect(i)\">\n                      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                    </div>\n                    <button *ngIf=\"!uploadProcess\" class=\"btn btn-primary\" (click)=\"upload()\" [disabled]=\"isBookDisable()\">Submit</button>\n                    <h3>\n                      {{ownerID}}\n                    </h3>\n                  </form>\n                </div>\n                <mat-progress-spinner *ngIf=\"uploadProcess\" class=\"example-margin\" color=\"primary\" mode=\"indeterminate\" value=\"50\">\n                </mat-progress-spinner>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template #login>\n          <h4>\n            Please\n            <a id=\"login\" (click)=\"authService.login()\">Login</a> First to post your stuff to sell\n          </h4>\n        </ng-template>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/sell/sell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Service_product_service__ = __webpack_require__("../../../../../src/app/Service/product-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service_house_service__ = __webpack_require__("../../../../../src/app/Service/house-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Service_book_service__ = __webpack_require__("../../../../../src/app/Service/book-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Service_demand_service__ = __webpack_require__("../../../../../src/app/Service/demand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Service_auth_service__ = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









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

var SellComponent = /** @class */ (function () {
    function SellComponent(productService, houseService, demandService, bookService, httpClient, authService, router) {
        this.productService = productService;
        this.houseService = houseService;
        this.demandService = demandService;
        this.bookService = bookService;
        this.httpClient = httpClient;
        this.authService = authService;
        this.router = router;
        this.Departments = ['Computer Science', 'Electrical Engineering', 'ESL', 'Data Science', 'MSIT', 'Marketing', 'Others'];
        this.imgUrl = [];
        this.names = [];
        this.selectedFile = [];
        this.i = 0;
        this.fd = new FormData();
        this.size = 0;
        this.date = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](new Date());
        this.dateTo = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */](new Date());
        this.fileSizeError = [];
        this.fileTypeError = [];
        this.uploadProcess = false;
        this.plusSignal = true;
        this.selected = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('valid', [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
        ]);
        this.selectedBook = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('valid', [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
        ]);
        this.productNameError = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
        ]);
        this.productPriceError = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
        ]);
        this.productContactError = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
        ]);
        this.options = ['Book', 'House', 'Others', 'Demand'];
        this.matcher = new MyErrorStateMatcher();
    }
    SellComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.userProfile && this.authService.isAuthenticated()) {
            this.profile = this.authService.userProfile;
            this.ownerID = this.profile.name;
            // console.log(this.profile);
        }
        else if (this.authService.isAuthenticated()) {
            this.authService.getProfile(function (err, profile) {
                _this.profile = profile;
                _this.ownerID = _this.profile.name;
            });
        }
        // console.log(this.ownerID + 'zheshi owner ID');
    };
    SellComponent.prototype.upload = function () {
        var _this = this;
        this.houseAvailable = JSON.stringify(this.date.value);
        this.houseAvailable = this.houseAvailable.slice(1, 11);
        // console.log(this.houseAvailable + '"???"');
        //  console.log(this.selectedFile[0] + 'shang chuan wenjian');
        for (var _i = 0, _a = this.selectedFile; _i < _a.length; _i++) {
            var file = _a[_i];
            if (file !== null) {
                this.fd.append('logo', file[0], file.name);
            }
        }
        this.httpClient.post('api/v1/image', this.fd, {
            headers: new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["d" /* HttpHeaders */]().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')),
            observe: 'events', reportProgress: true
        })
            .subscribe(function (res) {
            if (res.type === __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                _this.uploadProcess = true;
                //   console.log('uploading');
                //   console.log(res);
            }
            else if (res instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["e" /* HttpResponse */]) {
                //   console.log('upload successful');
                //   console.log(res);
                for (var i = 0; i < res.body.length; i++) {
                    _this.imgUrl[i] = window.location.origin + "/api/v1/images/" + res.body[i];
                    //     console.log(this.imgUrl[i]);
                }
                _this.addProduct(_this.type);
            }
        }, function (error) {
            _this.router.navigate(['/error']);
        });
    };
    SellComponent.prototype.addProduct = function (type) {
        var _this = this;
        if (type === 'Others') {
            if (this.imgUrl[0] === undefined) {
                this.productService.setProduct(this.name, this.price, this.ownerID, this.desc, this.contactInfo, ['http://18.221.7.15/api/v1/images/c3925836f35ecbe9881dba8d0d445627.png'], true, this.houseAvailable)
                    .catch(function (e) {
                    _this.router.navigate(['/error']);
                });
            }
            else {
                this.productService.setProduct(this.name, this.price, this.ownerID, this.desc, this.contactInfo, this.imgUrl, true, this.houseAvailable)
                    .catch(function (e) {
                    _this.router.navigate(['/error']);
                });
            }
        }
        if (type === 'House') {
            this.houseEnd = JSON.stringify(this.dateTo.value);
            this.houseEnd = this.houseEnd.slice(1, 11);
            //  console.log(this.houseEnd);
            //   console.log(this.houseEnd);
            if (this.imgUrl[0] === undefined) {
                this.houseService.setNewllHouse(this.address, this.price, this.ownerID, this.desc, this.contactInfo, ['http://18.221.7.15/api/v1/images/c3925836f35ecbe9881dba8d0d445627.png'], this.houseAvailable, this.houseEnd)
                    .catch(function (e) {
                    _this.router.navigate(['/error']);
                });
            }
            else {
                this.houseService.setNewllHouse(this.address, this.price, this.ownerID, this.desc, this.contactInfo, this.imgUrl, this.houseAvailable, this.houseEnd)
                    .catch(function (e) {
                    _this.router.navigate(['/error']);
                });
            }
        }
        if (type === 'Book') {
            if (this.imgUrl[0] === undefined) {
                this.bookService.setBook(this.name, this.price, this.ownerID, this.desc, this.contactInfo, ['http://18.221.7.15/api/v1/images/c3925836f35ecbe9881dba8d0d445627.png'], this.department, this.houseAvailable)
                    .catch(function (e) {
                    _this.router.navigate(['/error']);
                });
            }
            else {
                this.bookService.setBook(this.name, this.price, this.ownerID, this.desc, this.contactInfo, this.imgUrl, this.department, this.houseAvailable)
                    .catch(function (e) {
                    _this.router.navigate(['/error']);
                });
            }
        }
        if (type === 'Demand') {
            this.houseAvailable = JSON.stringify(this.date.value);
            this.houseAvailable = this.houseAvailable.slice(1, 11);
            this.demandService.setDemandList(this.name, this.contactInfo, this.desc, this.ownerID, this.houseAvailable)
                .catch(function (e) {
                _this.router.navigate(['/error']);
            });
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
    SellComponent.prototype.isDemand = function (option) {
        if (option === 'Demand') {
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
    SellComponent.prototype.isDemandDisable = function () {
        if (this.productNameError.hasError('required') || this.productContactError.hasError('required') ||
            this.selected.hasError('require')) {
            return true;
        }
        else {
            return false;
        }
    };
    SellComponent.prototype.onSecondSelect = function (k) {
        this.i = this.i + 1;
        if (this.i <= 4) {
            this.names.push(this.i);
            this.selectedFile[this.i] = null;
            //   console.log(this.names);
        }
        else {
            this.plusSignal = false;
        }
    };
    SellComponent.prototype.onFileSelect = function (event) {
        //   console.log(event);
        // this.size = event.target.files[0].size / 1024;
        this.userImagesNames = event.target.name;
        // console.log(this.size);
        if (event.target.files.length === 0) {
            this.selectedFile[this.userImagesNames] = null;
            console.log('wen jian qu xiao');
            return 0;
        }
        else if (event.target.files.length !== 0 && (event.target.files[0].size / 1024) < 1024) {
            this.fileTypeError[this.userImagesNames] = this.checkTypeError(event.target.files[0].name);
            this.fileSizeError[event.target.name] = false;
            // this.userImagesNames = event.target.name;
            if (!this.fileTypeError[this.userImagesNames]) {
                this.selectedFile[this.userImagesNames] = event.target.files;
                //    console.log(this.selectedFile[this.userImagesNames][0]);
                //    console.log(this.selectedFile);
            }
            //  console.log(this.selectedFile);
        }
        else if ((event.target.files[0].size / 1024) > 1024) {
            this.fileSizeError[this.userImagesNames] = true;
            //    console.log(+this.userImagesNames);
            //    console.log('image are to large !');
            return 0;
        }
    };
    SellComponent.prototype.checkFileError = function (i) {
        return this.fileSizeError[i];
    };
    SellComponent.prototype.checkTypeError = function (filename) {
        var fileType = filename.toLocaleLowerCase().split('.');
        if (fileType[1].includes('jpg') || fileType[1].includes('png') || fileType[1].includes('bmp') || fileType[1].includes('jpeg')) {
            // console.log(fileType[1]);
            return false;
        }
        else {
            return true;
        }
    };
    SellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sell',
            template: __webpack_require__("../../../../../src/app/component/sell/sell.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__Service_house_service__["a" /* HouseService */], __WEBPACK_IMPORTED_MODULE_4__Service_demand_service__["a" /* DemandService */],
            __WEBPACK_IMPORTED_MODULE_3__Service_book_service__["a" /* BookService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__Service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__angular_router__["f" /* Router */]])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/success/success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</nav>\n\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>Success!</h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t<span>Cool Stuff</span>\n\t\t\t\t\t\t<h2>Success!.</h2>\n\t\t\t\t\t\t<p>If you find some bug or have some suggestions, please contack us at: hbchenjh@gmail.com. We are hearing all the time.\n\t\t\t\t\t\t\tyour feedback makes our website better!\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<h1>\n\t\t\t\t\tYour product has been uploaded successfully!\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-footer></app-footer>\n\t</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(router) {
        this.router = router;
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-success',
            template: __webpack_require__("../../../../../src/app/component/success/success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n\t<div id=\"page\">\r\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\r\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</nav>\r\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\r\n\t\t\t<div class=\"overlay\"></div>\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\r\n\t\t\t\t\t\t<div class=\"display-t\">\r\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\r\n\t\t\t\t\t\t\t\t<h1>WPILIFE 升级公告 </h1>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</header>\r\n\t\t<div id=\"fh5co-product\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row animate-box\">\r\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h1 align=\"center\">WPILIFE 2018升级公告</h1>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li>Hi, welcome to our website: we are a group of geeks who believe we can use our technology to make our life\r\n\t\t\t\t\t\teasier at WPI。\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\tBefore you post your goods to this website, you need to sign up an account.\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\tWPILIFE website just provides a platform for students and people who live around WPI. Please double check the quality of used\r\n\t\t\t\t\t\tgoods before you buy it.\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\tNew students section has not been finish due to the final week, we promise to finish it as soon as possible。\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\tThe website is still in beta. If you have any suggestion or advice please contact us at: hbchenjh@gmail.com。\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\tIf you want to join our team: please send your resume to: hbchenjh@gmail.com. You are welcome to join our team!.\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<p align=\"right\">\r\n\t\t\t\t\tWPILIFE TEAM 4/20/2018\r\n\t\t\t\t</p>\r\n\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li>因原WPILIFE网站用户注册登陆系统失效并且开发时间已久，难以维护，所以WPI CSSA LIFETEAM 在2018 年2月决定开发新的网站，为大家带来更好的服务。\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t因采用了不同的登陆注册系统，故\r\n\t\t\t\t\t\t<span>原有账户密码全部失效</span>\r\n\t\t\t\t\t\t<strong>需要重新注册</strong>，为您带来的不便请谅解。\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t原网站所列的商品，新网站会在近期全部更新到网页上，如您的商品已出售，并且不希望继续在网页上展示，请发送邮件至：hbchenjh@gmail.com, 并注明商品内容（最好有截图）。谢谢！\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\tnew-students 板块因为要更新大量生活指南，目前还没有完工，我们会尽快完成剩余工作，请谅解。\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t网站尚处测试阶段，希望得到大家的支持，如有什么改进意见请发送至：hbchenjh@gmail.com，我们欢迎每一条意见与建议，您的建议使我们的网站更好。\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t如果您希望加入我们的开发队伍，服务同学，请发送您的简历至：hbchenjh@gmail.com.我们欢迎每个人的加入！\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<p align=\"right\">\r\n\t\t\t\t\tWPILIFE TEAM 4/20/2018\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<app-footer></app-footer>\r\n\t</div>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/** Error when invalid control is dirty, touched, or submitted. */
var TestComponent = /** @class */ (function () {
    function TestComponent() {
        //  auth.handleAuthentication();
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/component/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map