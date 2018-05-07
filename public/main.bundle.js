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
var HouseSearchPipe = /** @class */ (function () {
    function HouseSearchPipe() {
    }
    HouseSearchPipe.prototype.transform = function (houses, term) {
        return houses.filter(function (house) { return house.Address.trim().toLocaleLowerCase().includes(term.toLocaleLowerCase()); });
    };
    HouseSearchPipe = __decorate([
        core_1.Pipe({
            name: 'houseSearch'
        })
    ], HouseSearchPipe);
    return HouseSearchPipe;
}());
exports.HouseSearchPipe = HouseSearchPipe;


/***/ }),

/***/ "../../../../../src/app/Pipe/product-search.pipe.ts":
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
var ProductSearchPipe = /** @class */ (function () {
    function ProductSearchPipe() {
    }
    ProductSearchPipe.prototype.transform = function (products, term) {
        return products.filter(function (product) { return product.name.trim().toLocaleLowerCase().includes(term.toLocaleLowerCase()); });
    };
    ProductSearchPipe = __decorate([
        core_1.Pipe({
            name: 'productSearch'
        })
    ], ProductSearchPipe);
    return ProductSearchPipe;
}());
exports.ProductSearchPipe = ProductSearchPipe;


/***/ }),

/***/ "../../../../../src/app/Pipe/search.pipe.ts":
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
        core_1.Pipe({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;


/***/ }),

/***/ "../../../../../src/app/Service/auth.guard.service.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;


/***/ }),

/***/ "../../../../../src/app/Service/auth.service.ts":
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
var auth0_variables_1 = __webpack_require__("../../../../../src/app/Service/auth0-variables.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth0 = __webpack_require__("../../../../auth0-js/src/index.js");
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new auth0.WebAuth({
            clientID: auth0_variables_1.AUTH_CONFIG.clientID,
            domain: auth0_variables_1.AUTH_CONFIG.domain,
            responseType: 'token id_token',
            audience: "https://" + auth0_variables_1.AUTH_CONFIG.domain + "/api/v2/",
            redirectUri: auth0_variables_1.AUTH_CONFIG.callbackURL,
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/Service/auth0-variables.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH_CONFIG = {
    clientID: 'uzLB9DST8Ug7tZUOgZwVPHXliqxwKh1S',
    domain: 'wpilife.auth0.com',
    callbackURL: 'http://wpilife.org/callback'
};


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
var book_model_1 = __webpack_require__("../../../../../src/app/component/book/book-model.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var BookService = /** @class */ (function () {
    function BookService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
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
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
                .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        };
        this.newBook = new book_model_1.BookModel(name, price, ownerID, desc, contactInfo, img, department, true, today);
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;


/***/ }),

/***/ "../../../../../src/app/Service/collaboration.service.ts":
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
var coding_model_1 = __webpack_require__("../../../../../src/app/component/coding/coding-model.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
// declare const ace: any; TODO: cursor movement
var CollaborationService = /** @class */ (function () {
    function CollaborationService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.clientsInfo = {};
        this.clientNum = 0;
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
        // this.collaborationSocket.on('cursorMove', (cursor: string) => {  TODO: cursor movement
        //  console.log('cursor move' + cursor);
        //  const session = editor.getSession();
        //  cursor = JSON.parse(cursor);
        //  const x = cursor['row'];
        // const y = cursor['column'];
        // const changeClientId = cursor['socketId'];
        // console.log(x + ' ' + y + changeClientId);
        //
        // if (changeClientId in this.clientsInfo) {
        //   session.removeMarker(this.clientsInfo[changeClientId]['marker']);
        // } else {
        //   this.clientsInfo[changeClientId] = {};
        //  const css = document.createElement('style');
        //   css.type = 'text/css';
        //   css.innerHTML = `.editor_cursor_${changeClientId}
        ///                   { 
        ////                     position:absolute;
        //          background:${COLORS[this.clientNum]};
        //                      z-index:100;
        //                    width:3px !important;
        //                  }`;
        //   document.body.appendChild(css);
        //    this.clientNum++;
        //  }
        //  const Range = ace.require('ace/range').Range;
        //   const newMarker = session.addMarker(new Range(x, y, x, y + 1), `editor_cursor_${changeClientId}`, true);
        //   this.clientsInfo[changeClientId]['marker'] = newMarker;
        // });
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit('change', delta);
    };
    //  cursorMove(cursor: string) {
    // this.collaborationSocket.emit('cursorMove', cursor);
    // }
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit('restoreBuffer');
    };
    CollaborationService.prototype.setNewRoom = function (roomNumber) {
        var _this = this;
        var options = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.codeRoom = new coding_model_1.CodingModel(roomNumber, true);
        this.httpClient.post('api/v1/coding', this.codeRoom, options)
            .subscribe(function (res) {
            // console.log('123321');
            _this.router.navigate(['/coding', res.roomNumber]);
        });
    };
    CollaborationService.prototype.getRoomNumber = function (id) {
        var _this = this;
        return this.httpClient.get("api/v1/coding/" + id)
            .toPromise()
            .then(function (res) { return res; })
            .catch(function (e) {
            alert("This room doesn't exist");
            _this.router.navigate['/coding'];
            return Promise.reject(e.body || e);
        });
    };
    CollaborationService.prototype.buildAndRun = function (data) {
        var options = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.httpClient.post('api/v1/result', data, options)
            .toPromise()
            .then((function (res) {
            console.log(res);
            return res;
        })).catch(function (e) {
            console.log(e);
        });
    };
    CollaborationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], CollaborationService);
    return CollaborationService;
}());
exports.CollaborationService = CollaborationService;


/***/ }),

/***/ "../../../../../src/app/Service/demand.service.ts":
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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var demand_model_1 = __webpack_require__("../../../../../src/app/component/demand/demand-model.ts");
var DemandService = /** @class */ (function () {
    function DemandService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.demandLists = new BehaviorSubject_1.BehaviorSubject([]);
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
        var demandItem = new demand_model_1.DemandModel(name, contactInfo, desc, ownerID, true, today);
        var options = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], DemandService);
    return DemandService;
}());
exports.DemandService = DemandService;


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
var house_model_1 = __webpack_require__("../../../../../src/app/component/house/house.model.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var HouseService = /** @class */ (function () {
    function HouseService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
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
    HouseService.prototype.getUserhouse = function (id) {
        return this.httpClient.get("api/v1/userHouses/" + id)
            .toPromise()
            .then(function (res) { return res; });
    };
    HouseService.prototype.setNewllHouse = function (address, price, ownerinfo, desc, contactInfo, img, fromDate, toDate) {
        var _this = this;
        console.log(toDate);
        var options = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
                .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        };
        this.newHouse = new house_model_1.HouseModel(address, price, ownerinfo, desc, contactInfo, img, true, fromDate, toDate);
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
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
var product_model_1 = __webpack_require__("../../../../../src/app/component/product/product-model.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ProductService = /** @class */ (function () {
    function ProductService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this._productSource = new BehaviorSubject_1.BehaviorSubject([]);
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
        })
            .catch(function (e) {
            return Promise.reject(e.body || e);
        });
        return this._productSource.asObservable();
    };
    ProductService.prototype.setProduct = function (name, price, ownerID, desc, contactInfo, img, type, today) {
        var _this = this;
        var options = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
                .set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
        };
        type = true;
        this.newProduct = new product_model_1.ProductModel(name, price, ownerID, desc, contactInfo, img, type, today);
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
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
var home_component_component_1 = __webpack_require__("../../../../../src/app/component/home-page/home-component.component.ts");
var house_component_component_1 = __webpack_require__("../../../../../src/app/component/house/house-component.component.ts");
var product_component_1 = __webpack_require__("../../../../../src/app/component/product/product.component.ts");
var product_detail_component_1 = __webpack_require__("../../../../../src/app/component/product/product-detail/product-detail.component.ts");
var test_component_1 = __webpack_require__("../../../../../src/app/component/test/test.component.ts");
var house_detail_component_1 = __webpack_require__("../../../../../src/app/component/house/house-detail/house-detail.component.ts");
var book_component_1 = __webpack_require__("../../../../../src/app/component/book/book.component.ts");
var book_detail_component_1 = __webpack_require__("../../../../../src/app/component/book/book-detail/book-detail.component.ts");
var new_students_component_1 = __webpack_require__("../../../../../src/app/component/new-students/new-students.component.ts");
var sell_component_1 = __webpack_require__("../../../../../src/app/component/sell/sell.component.ts");
var coding_component_1 = __webpack_require__("../../../../../src/app/component/coding/coding.component.ts");
var callback_component_1 = __webpack_require__("../../../../../src/app/component/callback/callback.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/component/profile/profile.component.ts");
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/Service/auth.guard.service.ts");
var success_component_1 = __webpack_require__("../../../../../src/app/component/success/success.component.ts");
var not_found_component_1 = __webpack_require__("../../../../../src/app/component/not-found/not-found.component.ts");
var error_component_1 = __webpack_require__("../../../../../src/app/component/error/error.component.ts");
var demand_component_1 = __webpack_require__("../../../../../src/app/component/demand/demand.component.ts");
var pick_up_component_1 = __webpack_require__("../../../../../src/app/component/pick-up/pick-up.component.ts");
var coding_start_component_1 = __webpack_require__("../../../../../src/app/component/coding/coding-start/coding-start.component.ts");
var appRouter = [
    { path: '', component: home_component_component_1.HomeComponentComponent },
    { path: 'sell', component: sell_component_1.SellComponent },
    { path: 'editor', component: coding_component_1.CodingComponent },
    { path: 'book-list', component: book_component_1.BookComponent },
    { path: 'coding', component: coding_start_component_1.CodingStartComponent },
    {
        path: 'coding/:id', component: coding_component_1.CodingComponent,
    },
    { path: 'book-list/:id', component: book_detail_component_1.BookDetailComponent },
    { path: 'house-list', component: house_component_component_1.HouseComponentComponent },
    {
        path: 'house-list/:id', component: house_detail_component_1.HouseDetailComponent
    },
    { path: 'product-list', component: product_component_1.ProductComponent },
    {
        path: 'product-list/:id', component: product_detail_component_1.ProductDetailComponent
    },
    { path: 'test', component: test_component_1.TestComponent },
    { path: 'survival-guide', component: new_students_component_1.NewStudentsComponent },
    { path: 'pickup', component: pick_up_component_1.PickUpComponent },
    { path: 'demand-list', component: demand_component_1.DemandComponent },
    { path: 'callback', component: callback_component_1.CallbackComponent },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
    { path: 'success', component: success_component_1.SuccessComponent },
    { path: 'Not-found', component: not_found_component_1.NotFoundComponent },
    { path: 'error', component: error_component_1.ErrorComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
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

module.exports = "<router-outlet></router-outlet>"

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
var auth_service_1 = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
        ng2_page_scroll_1.PageScrollConfig.defaultDuration = 500;
        auth.handleAuthentication();
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
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
var house_component_component_1 = __webpack_require__("../../../../../src/app/component/house/house-component.component.ts");
var home_component_component_1 = __webpack_require__("../../../../../src/app/component/home-page/home-component.component.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var product_component_1 = __webpack_require__("../../../../../src/app/component/product/product.component.ts");
var product_detail_component_1 = __webpack_require__("../../../../../src/app/component/product/product-detail/product-detail.component.ts");
var header_component_1 = __webpack_require__("../../../../../src/app/component/header/header.component.ts");
var nav_component_1 = __webpack_require__("../../../../../src/app/component/nav/nav.component.ts");
var ng_bootstrap_1 = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var ngx_carousel_1 = __webpack_require__("../../../../ngx-carousel/index.js");
var ngx_pagination_1 = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
__webpack_require__("../../../../hammerjs/hammer.js");
var test_component_1 = __webpack_require__("../../../../../src/app/component/test/test.component.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/Service/product-service.ts");
var collaboration_service_1 = __webpack_require__("../../../../../src/app/Service/collaboration.service.ts");
var house_service_1 = __webpack_require__("../../../../../src/app/Service/house-service.ts");
var house_detail_component_1 = __webpack_require__("../../../../../src/app/component/house/house-detail/house-detail.component.ts");
var book_component_1 = __webpack_require__("../../../../../src/app/component/book/book.component.ts");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var list_1 = __webpack_require__("../../../material/esm5/list.es5.js");
var book_service_1 = __webpack_require__("../../../../../src/app/Service/book-service.ts");
var book_detail_component_1 = __webpack_require__("../../../../../src/app/component/book/book-detail/book-detail.component.ts");
var tabs_1 = __webpack_require__("../../../material/esm5/tabs.es5.js");
var new_students_component_1 = __webpack_require__("../../../../../src/app/component/new-students/new-students.component.ts");
var radio_1 = __webpack_require__("../../../material/esm5/radio.es5.js");
var select_1 = __webpack_require__("../../../material/esm5/select.es5.js");
var sell_component_1 = __webpack_require__("../../../../../src/app/component/sell/sell.component.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var footer_component_1 = __webpack_require__("../../../../../src/app/component/footer/footer.component.ts");
var coding_component_1 = __webpack_require__("../../../../../src/app/component/coding/coding.component.ts");
var profile_component_1 = __webpack_require__("../../../../../src/app/component/profile/profile.component.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
var callback_component_1 = __webpack_require__("../../../../../src/app/component/callback/callback.component.ts");
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/Service/auth.guard.service.ts");
var error_component_1 = __webpack_require__("../../../../../src/app/component/error/error.component.ts");
var success_component_1 = __webpack_require__("../../../../../src/app/component/success/success.component.ts");
var not_found_component_1 = __webpack_require__("../../../../../src/app/component/not-found/not-found.component.ts");
var search_pipe_1 = __webpack_require__("../../../../../src/app/Pipe/search.pipe.ts");
var house_search_pipe_1 = __webpack_require__("../../../../../src/app/Pipe/house-search.pipe.ts");
var product_search_pipe_1 = __webpack_require__("../../../../../src/app/Pipe/product-search.pipe.ts");
var progress_spinner_1 = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
var divider_1 = __webpack_require__("../../../material/esm5/divider.es5.js");
var demand_component_1 = __webpack_require__("../../../../../src/app/component/demand/demand.component.ts");
var demand_service_1 = __webpack_require__("../../../../../src/app/Service/demand.service.ts");
var pick_up_component_1 = __webpack_require__("../../../../../src/app/component/pick-up/pick-up.component.ts");
var datepicker_1 = __webpack_require__("../../../material/esm5/datepicker.es5.js");
var material_2 = __webpack_require__("../../../material/esm5/material.es5.js");
var coding_start_component_1 = __webpack_require__("../../../../../src/app/component/coding/coding-start/coding-start.component.ts");
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
                house_detail_component_1.HouseDetailComponent,
                book_component_1.BookComponent,
                book_detail_component_1.BookDetailComponent,
                new_students_component_1.NewStudentsComponent,
                sell_component_1.SellComponent,
                footer_component_1.FooterComponent,
                coding_component_1.CodingComponent,
                profile_component_1.ProfileComponent,
                callback_component_1.CallbackComponent,
                error_component_1.ErrorComponent,
                success_component_1.SuccessComponent,
                not_found_component_1.NotFoundComponent,
                search_pipe_1.SearchPipe,
                house_search_pipe_1.HouseSearchPipe,
                product_search_pipe_1.ProductSearchPipe,
                demand_component_1.DemandComponent,
                pick_up_component_1.PickUpComponent,
                coding_start_component_1.CodingStartComponent
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
                http_1.HttpClientModule,
                progress_spinner_1.MatProgressSpinnerModule,
                divider_1.MatDividerModule,
                datepicker_1.MatDatepickerModule,
                material_2.MatNativeDateModule
            ],
            providers: [
                product_service_1.ProductService,
                house_service_1.HouseService,
                book_service_1.BookService,
                collaboration_service_1.CollaborationService,
                auth_service_1.AuthService,
                auth_guard_service_1.AuthGuardService,
                demand_service_1.DemandService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/component/book/book-detail/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"fh5co-loader\"></div>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a routerLink=\"\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/test'\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>Book Details</h1>\n                <h2>Our Goal is makeing your life much earier in WPI</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n\n            <div>\n              <ngx-carousel [inputs]=\"Config\">\n                <ngx-item *ngFor=\"let bookImg of imgurl\" class=\"bannerStyle \" NgxCarouselItem>\n                  <img [src]=\"bookImg\" alt=\"house\" width=\"100%\" #test2 id=\"img1\">\n                </ngx-item>\n                <i NgxCarouselPrev class=\"leftRs fa fa-arrow-left fa-3x\" aria-hidden=\"true\"></i>\n                <i NgxCarouselNext class=\"rightRs fa fa-arrow-right fa-3x\" aria-hidden=\"true\"></i>\n              </ngx-carousel>\n            </div>\n            <div class=\"row animate-box\">\n              <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n                <h2>{{department}}</h2>\n                <p>\n                  <a [routerLink]=\"'/sell'\" class=\"btn btn-primary btn-outline btn-lg\">Post your Product to Sell</a>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n            <ul class=\"nav nav-tabs\">\n              <mat-tab-group>\n                <mat-tab label=\"Book detail\">\n                  <div class=\"col-md-12 \">\n                    <mat-list>\n                      <mat-list-item>Book Name: {{name}}</mat-list-item>\n                      <mat-divider></mat-divider>\n                      <mat-list-item>Book Price: {{price}}$</mat-list-item>\n                      <mat-divider></mat-divider>\n                      <mat-list-item>Book department: {{department}}</mat-list-item>\n                    </mat-list>\n                  </div>\n                </mat-tab>\n                <mat-tab label=\"Contact Info\">\n                  <div class=\"col-md-12\">\n                    <mat-list>\n                      <mat-list-item>Contact information: {{contactInfo}}</mat-list-item>\n                      <mat-divider></mat-divider>\n                      <mat-list-item>Post date: {{date}}</mat-list-item>\n                      <mat-divider></mat-divider>\n                      <mat-list-item>Book Description: {{desc}}</mat-list-item>\n                      <mat-divider></mat-divider>\n                    </mat-list>\n                  </div>\n                </mat-tab>\n              </mat-tab-group>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/book/book-detail/book-detail.component.ts":
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
        core_1.Component({
            selector: 'app-book-detail',
            template: __webpack_require__("../../../../../src/app/component/book/book-detail/book-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/product/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [book_service_1.BookService, router_1.ActivatedRoute, router_1.Router])
    ], BookDetailComponent);
    return BookDetailComponent;
}());
exports.BookDetailComponent = BookDetailComponent;


/***/ }),

/***/ "../../../../../src/app/component/book/book-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.BookModel = BookModel;


/***/ }),

/***/ "../../../../../src/app/component/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"search\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search...\" [formControl]=\"searchBox\">\n\t\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-search\"></i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</nav>\n\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>Book store</h1>\n\t\t\t\t\t\t\t\t<h2>Find your most helpful text book with the best price!</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t<span>Cool Stuff</span>\n\t\t\t\t\t\t<h2>Book-list.</h2>\n\t\t\t\t\t\t<p>If you find some bugs or have some suggestions, please contack us at: hbchenjh@gmail.com. We are hearing all the time.\n\t\t\t\t\t\t\tyour feedback makes our website better!\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 choice\">\n\t\t\t\t\t\t<div class=\"product\">\n\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t<i>Please select department:</i>\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\tselected:{{selectedDept}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<mat-selection-list #Dept [(ngModel)]=\"selectedDept\" (selectionChange)=\"onChange()\">\n\t\t\t\t\t\t\t<mat-list-option *ngFor=\"let Department of Departments\" [value]=\"Department\">\n\t\t\t\t\t\t\t\t{{Department}}\n\t\t\t\t\t\t\t</mat-list-option>\n\t\t\t\t\t\t</mat-selection-list>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-3 text-center\" *ngFor=\"let Book of AllBooks| search: searchValue | paginate: {id:'Book',\n\t\t\t\t\t\t                                                                        itemsPerPage: 6, \n\t\t\t                                                                                    currentPage: bp }\">\n\t\t\t\t\t\t<div class=\"product\" (click)=\"ToBookDetail(Book.id)\">\n\n\t\t\t\t\t\t\t<div class=\"product-grid\" [style.background-image]=\"'url('+Book.imgUrl[0]+')'\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t<i>{{Book.name}}</i>\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t<span class=\"price\">{{Book.department}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<pagination-controls class=\"pageButton\" id=\"Book\" (pageChange)=\"getPageNumber($event)\" maxSize=\"9\" directionLinks=\"true\"\n\t\t\t\t autoHide=\"true\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n\t\t\t\t</pagination-controls>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-footer></app-footer>\n\t</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/book/book.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var book_service_1 = __webpack_require__("../../../../../src/app/Service/book-service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
// import { SearchBoxService } from '../Service/search-box.service';
var BookComponent = /** @class */ (function () {
    function BookComponent(bookService, router, activateRouter) {
        this.bookService = bookService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.searchBox = new forms_1.FormControl();
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
    BookComponent.prototype.onChange = function () {
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
        core_1.Component({
            selector: 'app-book',
            template: __webpack_require__("../../../../../src/app/component/book/book.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [book_service_1.BookService, router_1.Router,
            router_1.ActivatedRoute])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;


/***/ }),

/***/ "../../../../../src/app/component/callback/callback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 100vh;\n    width: 100vw;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: #fff;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/callback/callback.component.ts":
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
var CallbackComponent = /** @class */ (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = __decorate([
        core_1.Component({
            selector: 'app-callback',
            template: __webpack_require__("../../../../../src/app/component/callback/callback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());
exports.CallbackComponent = CallbackComponent;


/***/ }),

/***/ "../../../../../src/app/component/coding/coding-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CodingModel = /** @class */ (function () {
    function CodingModel(roomNumber, validState) {
        this.roomNumber = roomNumber;
        this.validState = validState;
    }
    return CodingModel;
}());
exports.CodingModel = CodingModel;


/***/ }),

/***/ "../../../../../src/app/component/coding/coding-start/coding-start.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create {\n    margin: 20px 50px; \n}\n#NotexistError{\n    color: red;\n    text-align: center;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/coding/coding-start/coding-start.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a [routerLink]=\"['']\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/test'\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>Online Coding Judge System</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <span>Enjoy Coding</span>\n            <h2>Coding Section.</h2>\n            <p>This Section is under testing now, if you find some bugs or have any suggestions, please let us know. We are\n              very appriciated it.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-md-8 col-md-offset-2 input-group\">\n          <input type=\"text\" class=\"form-control input-lg \" placeholder=\"Please input room number\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"roomInput\">\n        </div>\n        <div class=\"col-md-8 col-md-offset-2 input-group\">\n          <button type=\"button\" class=\"btn btn-primary create\" (click)=\"createRoom()\">Create</button>\n          <button type=\"button\" class=\"btn btn-success create\" (click)=\"joinRoom()\">Join</button>\n        </div>\n        <p *ngIf=\"!validRoomNumber\" id=\"NotexistError\">\n          Room doesn't exist, please double check room number or create a new one\n        </p>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/coding/coding-start/coding-start.component.ts":
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
var collaboration_service_1 = __webpack_require__("../../../../../src/app/Service/collaboration.service.ts");
var CodingStartComponent = /** @class */ (function () {
    function CodingStartComponent(router, collaborationService) {
        this.router = router;
        this.collaborationService = collaborationService;
        this.validRoomNumber = true;
    }
    CodingStartComponent.prototype.ngOnInit = function () {
    };
    CodingStartComponent.prototype.createRoom = function () {
        this.roomNumber = Math.floor(Math.random() * 10000);
        this.collaborationService.setNewRoom(this.roomNumber.toString());
    };
    CodingStartComponent.prototype.joinRoom = function () {
        var _this = this;
        this.collaborationService.getRoomNumber(this.roomInput)
            .then(function (res) {
            if (res !== null) {
                var room = res.roomNumber;
                _this.router.navigate(['/coding', room]);
            }
            else {
                _this.validRoomNumber = false;
            }
        });
    };
    CodingStartComponent = __decorate([
        core_1.Component({
            selector: 'app-coding-start',
            template: __webpack_require__("../../../../../src/app/component/coding/coding-start/coding-start.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/coding/coding-start/coding-start.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, collaboration_service_1.CollaborationService])
    ], CodingStartComponent);
    return CodingStartComponent;
}());
exports.CodingStartComponent = CodingStartComponent;


/***/ }),

/***/ "../../../../../src/app/component/coding/coding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen {\n    #editor {\n        height:600px;\n    }\n    .lang-select {\n        width: 100px;\n        margin-right: 10px;\n        float: left;\n      }\n      header .btn {\n        margin: 0 5px;\n        float: left;\n      }\n      footer .btn {\n        margin: 0 5px;\n      }\n      .editor-footer, .editor-header {\n        margin: 10px 0;\n      }\n      .cursor {\n        /*position:absolute;*/\n        background: rgba(0, 250, 0, 0.5);\n        z-index: 40;\n        width: 2px !important;\n      }\n      .select {\n          overflow: hidden;\n      }\n}\n#NotexistError{\n  color: red;\n  text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/coding/coding.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"fh5co-loader\"></div>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a routerLink=\"\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/test'\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>Online Coding Judge System</h1>\n                <h1>Online chating system</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <span>Enjoy Coding</span>\n            <h2>Coding Section.</h2>\n            <p>This Section is under testing now, if you find some bugs or have any suggestions, please let us know. We are\n              very appriciated it.\n            </p>\n            <p *ngIf=\"!roomValid\" id=\"NotexistError\">\n             This room is not exist and data would not be saved, please return and create a coding room thanks.\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-10 col-md-offset-1\">\n            <section>\n              <header class=\"editor-header\">\n                <div class=\"select\">\n                  <select class=\"form-control lang-select\" name=\"language\" [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n                    <option *ngFor=\"let language of languages\" [value]=\"language\">\n                      {{language}}\n                    </option>\n                  </select>\n                  <!--reset button -->\n                  <!-- Button trigger modal -->\n                  <button type=\"button\" id=\"reset\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n                    Reset\n                  </button>\n                </div>\n\n\n                <!-- Modal -->\n                <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                  <div class=\"modal-dialog\" role=\"document\">\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Are you sure</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                          <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                      </div>\n                      <div class=\"modal-body\">\n                        You will lose current code in the editor, are you sure?\n                      </div>\n                      <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"resetEditor()\">Reset</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </header>\n              <div class=\"row\">\n                <div id=\"editor\">\n                </div>\n              </div>\n              <div>\n                {{output}}\n              </div>\n              <!-- This is the body -->\n              <footer class=\"editor-footer\">\n                <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"submit()\">Submit Solution</button>\n              </footer>\n            </section>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/coding/coding.component.ts":
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
var collaboration_service_1 = __webpack_require__("../../../../../src/app/Service/collaboration.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var CodingComponent = /** @class */ (function () {
    function CodingComponent(collaborationService, router, route) {
        this.collaborationService = collaborationService;
        this.router = router;
        this.route = route;
        this.roomValid = true;
        this.languages = ['Java', 'Python'];
        this.language = 'Java';
        this.defaultContent = {
            Java: "public class Example {\n      public static void main(String[] args) {\n          // Type your Java code here\n      }\n    }",
            Python: "class Solution:\n    def example():\n         #Write your Python code here"
        };
        this.output = '';
    }
    CodingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params
            .subscribe(function (params) {
            _this.sessionId = params['id'];
        });
        this.collaborationService.getRoomNumber(this.sessionId)
            .then(function (res) {
            if (res === null) {
                alert("This coding room doesn't exsit and data would not be save, pleaes return and create a room thx");
                _this.roomValid = false;
            }
        });
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/eclipse');
        this.resetEditor();
        this.editor.$blockScrolling = Infinity;
        this.collaborationService.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        this.editor.on('change', function (e) {
            // console.log('editor change' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange !== e) {
                _this.collaborationService.change(JSON.stringify(e));
            }
        });
        //  this.editor.getSession().getSelection().on('changeCursor', ()=> {
        //  const cursor = this.editor.getSession().getSelection().getCursor();
        //   console.log('curser move log from client ' + JSON.stringify(cursor));
        //   this.collaborationService.cursorMove(JSON.stringify(cursor));
        // });
        this.collaborationService.restoreBuffer(); // load previous data 
    };
    CodingComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    CodingComponent.prototype.submit = function () {
        var _this = this;
        var userCode = this.editor.getValue();
        var data = {
            userCodes: userCode,
            lang: this.language.toLocaleLowerCase()
        };
        this.collaborationService.buildAndRun(data)
            .then(function (res) { return _this.output = res.text; });
    };
    CodingComponent.prototype.resetEditor = function () {
        this.editor.setValue(this.defaultContent.Java);
        this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
    };
    CodingComponent = __decorate([
        core_1.Component({
            selector: 'app-coding',
            template: __webpack_require__("../../../../../src/app/component/coding/coding.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/coding/coding.component.css"), __webpack_require__("../../../../../src/app/component/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [collaboration_service_1.CollaborationService, router_1.ActivatedRoute, router_1.Router])
    ], CodingComponent);
    return CodingComponent;
}());
exports.CodingComponent = CodingComponent;


/***/ }),

/***/ "../../../../../src/app/component/demand/demand-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.DemandModel = DemandModel;


/***/ }),

/***/ "../../../../../src/app/component/demand/demand.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#demandbox{\n    border: 1px solid peru;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/demand/demand.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a [routerLink]=\"['']\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/test'\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>Demand List</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <h2>Items in Demand.</h2>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center\" id=\"demandbox\" *ngFor=\"let demand of demandList | paginate: { id:'demands',\n\t\t\t\t\t\t                                                                             itemsPerPage: 4, \n                                                                                         currentPage: dp }\">\n            <mat-list>\n              <mat-list-item>demand name: {{demand.name}}</mat-list-item>\n              <mat-divider></mat-divider>\n              <mat-list-item>demand Description:: {{demand.description}}</mat-list-item>\n              <mat-divider></mat-divider>\n              <mat-list-item>Contact Information: {{demand.contactInfo}}</mat-list-item>\n              <mat-divider></mat-divider>\n              <mat-list-item>Post date: {{demand.today}}</mat-list-item>\n              <mat-divider></mat-divider>\n            </mat-list>\n          </div>\n        </div>\n        <pagination-controls class=\"pageButton\" id=\"demands\" (pageChange)=\"dp = $event\" maxSize=\"20\" directionLinks=\"true\" autoHide=\"true\"\n          screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/demand/demand.component.ts":
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
var demand_service_1 = __webpack_require__("../../../../../src/app/Service/demand.service.ts");
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
        core_1.Component({
            selector: 'app-demand',
            template: __webpack_require__("../../../../../src/app/component/demand/demand.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/demand/demand.component.css")]
        }),
        __metadata("design:paramtypes", [demand_service_1.DemandService])
    ], DemandComponent);
    return DemandComponent;
}());
exports.DemandComponent = DemandComponent;


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
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        core_1.Component({
            selector: 'app-error',
            template: __webpack_require__("../../../../../src/app/component/error/error.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());
exports.ErrorComponent = ErrorComponent;


/***/ }),

/***/ "../../../../../src/app/component/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  a {\n    color: #d1c286;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n  }\n  a:hover, a:active, a:focus {\n    color: #d1c286;\n    outline: none;\n    text-decoration: none;\n  }\n  p {\n    margin-bottom: 20px;\n  }\n  .copyrights{\n      text-indent:-9999px;\n      height:0;\n      line-height:0;\n      font-size:0;\n      overflow:hidden;\n  }\n  h3 {\n    color: #000;\n    font-family: \"Montserrat\", Arial, sans-serif;\n    font-weight: 400;\n    margin: 0 0 20px 0;\n  }\n  .fh5co-social-icons li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: -moz-inline-stack;\n    display: inline-block;\n    zoom: 1;\n    *display: inline;\n  }\n  .fh5co-social-icons li a {\n    display: -moz-inline-stack;\n    display: inline-block;\n    zoom: 1;\n    *display: inline;\n    color: #d1c286;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n  .fh5co-social-icons li a i {\n    font-size: 20px;\n  }\n  .fh5co-contact-info ul {\n    padding: 0;\n    margin: 0;\n  }\n  .fh5co-contact-info ul li {\n    padding: 0 0 0 40px;\n    margin: 0 0 30px 0;\n    list-style: none;\n    position: relative;\n  }\n  .fh5co-contact-info ul li:before {\n    color: #d1c286;\n    position: absolute;\n    left: 0;\n    top: .05em;\n    font-family: 'icomoon';\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .fh5co-contact-info ul li.address:before {\n    font-size: 30px;\n    content: \"\\E9D1\";\n  }\n  .fh5co-contact-info ul li.phone:before {\n    font-size: 23px;\n    content: \"\\E9F4\";\n  }\n  .fh5co-contact-info ul li.email:before {\n    font-size: 23px;\n    content: \"\\E9DA\";\n  }\n  .fh5co-contact-info ul li.url:before {\n    font-size: 23px;\n    content: \"\\E9AF\";\n  }\n  #fh5co-contact,\n  #fh5co-footer {\n    padding: 7em 0;\n    clear: both;\n  }\n  @media screen and (max-width: 768px) {\n    #fh5co-contact,\n    #fh5co-footer {\n      padding: 3em 0;\n    }\n  }\n  #fh5co-footer {\n    background: #efefef;\n  }\n  #fh5co-footer .fh5co-footer-links {\n    padding: 0;\n    margin: 0;\n  }\n  #fh5co-footer .fh5co-footer-links li {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n  #fh5co-footer .fh5co-footer-links li a {\n    color: #000;\n    text-decoration: none;\n  }\n  #fh5co-footer .fh5co-footer-links li a:hover {\n    text-decoration: underline;\n  }\n  #fh5co-footer .fh5co-widget {\n    margin-bottom: 30px;\n  }\n  @media screen and (max-width: 768px) {\n    #fh5co-footer .fh5co-widget {\n      text-align: left;\n    }\n  }\n  #fh5co-footer .fh5co-widget h3 {\n    margin-bottom: 15px;\n    font-weight: bold;\n    font-size: 15px;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n  }\n  #fh5co-footer .copyright .block {\n    display: block;\n  }\n  .row-pb-md {\n    padding-bottom: 4em !important;\n  }\n  .row-pb-sm {\n    padding-bottom: 2em !important;\n  }\n \n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"fh5co-footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"row row-pb-md\">\n      <div class=\"col-md-8 col-md-offset-1 fh5co-widget\">\n        <h3>Attention:</h3>\n        <p> WPILIFE(WPICSSA) website just provide a platform. Everyone in WPI can register with his/her WPI email, and can submit what he/she want to sell. We try to make things as easy as possible.\n            If this item interests you, you can contact the owner directly! [You can find the contact info of Owner below]\n            Thanks for your support!\n        </p>\n      </div>\n    </div>\n    <div class=\"row copyright\">\n      <div class=\"col-md-12 text-center\">\n        <p>\n          <small class=\"block\">Copyright WPILIEF Team@2018 All rights reserved.   \n          </small>\n        </p>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/component/footer/footer.component.ts":
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
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "../../../../../src/app/component/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\n\tfont-family: 'Lato', sans-serif;\n\ttext-rendering: optimizeLegibility !important;\n\t-webkit-font-smoothing: antialiased !important;\n\tcolor: #5a5a5a;\n}\nh1 {\n}\nh1 strong {\n\tfont-weight: 900;\n}\nh2 {\n\ttext-transform: uppercase;\n\tline-height: 20px;\n\tmargin: 0;\n}\nh3 {\n\tfont-size: 16px;\n\tfont-weight: 700;\n}\nh4 {\n\ttext-transform: capitalize;\n}\nh5 {\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tline-height: 20px;\n}\np {\n\tfont-family: 'Open Sans', sans-serif;\n}\np.intro {\n\tfont-size: 16px;\n\tmargin: 12px 0 0;\n\tline-height: 24px;\n\tfont-family: 'Open Sans', sans-serif;\n}\np.newwebsite{\n\tcolor: orange !important;\n\tfont-size: 16px;\n\tmargin: 12px 0 0;\n\tline-height: 24px;\n\tfont-family: 'Open Sans', sans-serif;\n\tcursor: pointer;\n}\na {\n\tcolor: #D2527F\n}\na:hover, a:focus {\n\ttext-decoration: none;\n\tcolor: #9D3D5F;\n}\n.clearfix:after {\n\tvisibility: hidden;\n\tdisplay: block;\n\tfont-size: 0;\n\tcontent: \" \";\n\tclear: both;\n\theight: 0;\n}\n.clearfix {\n\tdisplay: inline-block;\n}\n* html .clearfix {\n\theight: 1%;\n}\n.clearfix {\n\tdisplay: block;\n}\nul, ol {\n\tpadding: 0;\n\twebkit-padding: 0;\n\tmoz-padding: 0;\n}\n/* Navigation */\n/* Home Style */\nheader {\n\tbackground: url(" + escape(__webpack_require__("../../../../../src/assets/wpi-main.jpg")) + ") no-repeat bottom center fixed;\n\tbackground-size: cover;\n\tcolor: #cfcfcf;\n\tposition: relative;\n\theight: 100%;\n}\nheader p {\n\tcolor: #ffffff;\n\tfont-size: 22px;\n}\n.intro-text {\n\tposition: relative;\n\tpadding-top: 250px;\n\tpadding-right: 0;\n\tpadding-left: 0;\n\tpadding-bottom: 200px;\n}\n.intro-text H1 {\n\tfont-size: 40px;\n\ttext-transform: uppercase;\n\tcolor: #fff;\n}\n.color {\n\tcolor: #D2527F;\n}\na.fa.fa-angle-down {\n\tpadding: 10px 15px;\n\tcolor: #fff;\n\tfont-size: 24px;\n\tmargin-top: 100px;\n\tborder: 0px solid #E74C3C;\n\t-webkit-transition: all 0.5s;\n\ttransition: all 0.5s;\n\tborder-radius: 50%;\n\tbackground-color: #D2527F;\n}\na.fa.fa-angle-down:hover {\n\tbackground: #9D3D5F;\n}\n@media (max-width: 768px) {\n\t.content {\n\t\tpadding: 40% 0 0;\n\t}\n\t}\n@media (max-width: 603px) {\n\t#menu.navbar-default {\n\t\tbackground-color: rgba(0, 0, 0, 0.7);\n\t}\n\tlabel {\n\t\tfloat: none !important\n\t}\n\t.pull-left.fnav, .pull-right.fnav {\n\t\tfloat: none !important;\n\t\ttext-align: center;\n\t}\n\t.hover-bg .hover-text {\n\t\tpadding: 12% 10%;\n\t}\n\t}\n@media (max-width: 360px) {\n\t.hover-bg .hover-text {\n\t\tpadding: 22% 10%;\n\t}\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"text-center\" name=\"home\">\n  <div class=\"intro-text\">\n    <h1>Welcome to\n      <strong>\n        <span class=\"color\">WPICSSA</span>\n      </strong></h1>\n    <p>We are dedicated to\n      <strong>make our</strong> &\n      <strong>life</strong> in WPI much easier.</p>\n    <p class=\"newwebsite\" [routerLink]=\"'/test'\">Important: About our new WPILIFE !</p>\n  </div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/component/header/header.component.ts":
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
            template: __webpack_require__("../../../../../src/app/component/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../../../../src/app/component/home-page/home-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\n\tfont-family: 'Lato', sans-serif;\n\ttext-rendering: optimizeLegibility !important;\n\t-webkit-font-smoothing: antialiased !important;\n\tcolor: #5a5a5a;\n}\nh1 strong {\n\tfont-weight: 900;\n}\nh2 {\n\ttext-transform: uppercase;\n\tline-height: 20px;\n\tmargin: 0;\n}\nh3 {\n\tfont-size: 16px;\n\tfont-weight: 700;\n}\nh4 {\n\ttext-transform: capitalize;\n}\nh5 {\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tline-height: 20px;\n}\n#services-section p,#works-section p,#about-section p,#team-section p,#testimonials-section p #contact-section p {\n\tfont-family: 'Open Sans', sans-serif;\n}\np.intro {\n\tfont-size: 16px;\n\tmargin: 12px 0 0;\n\tline-height: 24px;\n\tfont-family: 'Open Sans', sans-serif;\n}\na {\n\tcolor: #D2527F\n}\na:hover, a:focus {\n\ttext-decoration: none;\n\tcolor: #9D3D5F;\n}\n.clearfix:after {\n\tvisibility: hidden;\n\tdisplay: block;\n\tfont-size: 0;\n\tcontent: \" \";\n\tclear: both;\n\theight: 0;\n}\n.clearfix {\n\tdisplay: inline-block;\n}\n* html .clearfix {\n\theight: 1%;\n}\n.clearfix {\n\tdisplay: block;\n}\nul, ol {\n\tpadding: 0;\n\twebkit-padding: 0;\n\tmoz-padding: 0;\n}\n/* Navigation */\n/* Home Style */\n/* About Section */\n#about-section {\n\tpadding: 80px 0;\n\tbackground-color: #eee;\n}\n#about-section i {\n\tfloat: left;\n\tdisplay: block;\n\tmargin-right: 15px;\n\tcolor: #D2527F;\n\tfont-size: 24px;\n}\n#about-section p {\n\tmargin-top: 20px;\n\tmargin-bottom: 30px;\n}\n/* Team Section */\n#team-section {\n\tpadding: 80px 0;\n}\n.section-title.center {\n\tpadding: 30px 0;\n}\n.section-title h2, .section-title.center h2 {\n\tfont-weight: 400;\n\tmargin-bottom: 30px;\n}\n.section-title.center hr {\n\theight: 1px;\n\twidth: 60px;\n\ttext-align: center;\n\tposition: relative;\n\tbackground: #D2527F;\n\tborder: 0;\n}\n#team-section .item {\n\tpadding: 0;\n\tmargin: 15px;\n\ttext-align: center;\n}\nimg.img-circle.team-img {\n\twidth: 120px;\n\theight: 120px;\n\tborder: 4px solid transparent;\n\t-webkit-transition: all 0.5s;\n\ttransition: all 0.5s;\n}\n#team-section .team .thumbnail:hover>img.img-circle.team-img {\n\tborder: 4px solid #D2527F;\n\tfont-size: medium;\n}\n#team-section .thumbnail {\n\tbackground: transparent;\n\tborder: 0;\n}\n#team-section .thumbnail .caption {\n\tpadding: 9px;\n\tcolor: #5a5a5a;\n}\n.owl-theme .owl-controls .owl-page span {\n\tdisplay: block;\n\twidth: 10px;\n\theight: 10px;\n\tmargin: 5px 7px;\n\tfilter: Alpha(Opacity=1);\n\topacity: 1;\n\tborder-radius: 0;\n\tbackground: #FFFFFF;\n\t-webkit-transition: all 0.5s;\n\ttransition: all 0.5s;\n}\n.owl-theme .owl-controls .owl-page.active span, .owl-theme .owl-controls.clickable .owl-page:hover span {\n\tfilter: Alpha(Opacity=100);\n\topacity: 1;\n\tbackground: #D2527F;\n}\n.owl-theme .owl-controls .owl-page.active span {\n\tbackground: #D2527F;\n}\n.copyrights{text-indent:-9999px;height:0;line-height:0;font-size:0;overflow:hidden;}\n/* Services Section */\n#services-section {\n\tpadding: 80px 0;\n\tbackground-color: #eee;\n}\n.space {\n\tmargin-top: 40px;\n}\n#services-section i.fa {\n\tfont-size: 40px;\n\tborder: 2px solid #fff;\n\twidth: 100px;\n\theight: 100px;\n\tpadding: 27px 25px;\n\tmargin-bottom: 10px;\n\tborder-radius: 50%;\n\t-webkit-transition: all 0.5s;\n\ttransition: all 0.5s;\n\tcolor: #D2527F;\n}\n#services-section i.fa.fa-mobile {\n\tfont-size: 50px;\n\tpadding: 20px 25px;\n}\n#services-section .service:hover>i.fa {\n\tborder: 2px solid #D2527F;\n\tbackground: #D2527F;\n\tcolor: #ffffff;\n}\n/* Gallery Section \n==============================*/\n#works-section {\n\tpadding: 80px 0;\n}\n.categories {\n\tpadding-bottom: 30px;\n\ttext-align: center;\n}\nul.cat li {\n\tdisplay: inline-block;\n}\n#works-section li.pull-right {\n\tmargin-top: 10px;\n}\nol.type li {\n\tdisplay: inline-block;\n\tmargin-left: 20px;\n}\nol.type li:after {\n\tcontent: ' | ';\n\tmargin-left: 20px;\n}\nol.type li:last-child:after {\n\tcontent: '';\n}\nol.type li a {\n\tcolor: #222222\n}\nol.type li a.active {\n\tcolor: #D2527F;\n\tfont-weight: bold;\n}\nol.type li a:hover {\n\tcolor: #D2527F;\n}\n.isotope-item {\n\tz-index: 2\n}\n.isotope-hidden.isotope-item {\n\tz-index: 1\n}\n.isotope, .isotope .isotope-item {\n\t/* change duration value to whatever you like */\n\t-webkit-transition-duration: 0.8s;\n\ttransition-duration: 0.8s;\n}\n.isotope-item {\n\tmargin-right: -1px;\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden;\n}\n.isotope {\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden;\n\t-webkit-transition-property: height, width;\n\ttransition-property: height, width;\n}\n.isotope .isotope-item {\n\t-webkit-backface-visibility: hidden;\n\tbackface-visibility: hidden;\n\t-webkit-transition-property: -webkit-transform, opacity;\n\t-webkit-transition-property: opacity, -webkit-transform;\n\ttransition-property: opacity, -webkit-transform;\n\ttransition-property: transform, opacity;\n\ttransition-property: transform, opacity, -webkit-transform;\n}\n.portfolio-item {\n\tmargin-bottom: 30px;\n}\n.portfolio-item .hover-bg {\n\theight: 260px;\n\toverflow: hidden;\n\tposition: relative;\n}\n.hover-bg .hover-text {\n\tposition: absolute;\n\ttext-align: center;\n\tmargin: 0 auto;\n\tcolor: #ffffff;\n\tbackground: rgba(0, 0, 0, 0.66);\n\tpadding: 25% 0;\n\theight: 100%;\n\twidth: 100%;\n\topacity: 0;\n\t-webkit-transition: all 0.5s;\n\ttransition: all 0.5s;\n}\n.hover-bg .hover-text>h4 {\n\topacity: 0;\n\t-webkit-transform: translateY(100%);\n\ttransform: translateY(100%);\n\t-webkit-transition: all 0.3s;\n\ttransition: all 0.3s;\n}\n.hover-bg:hover .hover-text>h4 {\n\topacity: 1;\n\t-webkit-backface-visibility: hidden;\n\t-webkit-transform: translateY(0);\n\ttransform: translateY(0);\n}\n.hover-bg .hover-text>i {\n\topacity: 0;\n\t-webkit-transform: translateY(0);\n\ttransform: translateY(0);\n\t-webkit-transition: all 0.3s;\n\ttransition: all 0.3s;\n}\n.hover-bg:hover .hover-text>i {\n\topacity: 1;\n\t-webkit-backface-visibility: hidden;\n\t-webkit-transform: translateY(100%);\n\ttransform: translateY(100%);\n}\n.hover-bg:hover .hover-text {\n\topacity: 1;\n}\n#works-section i.fa {\n\theight: 30px;\n\twidth: 30px;\n\tborder: 1px solid #D2527F;\n\tfont-size: 20px;\n\tpadding: 5px;\n\tborder-radius: 50%;\n\tcolor: #D2527F;\n}\n/* Testimonials Section */\n#testimonials-section {\n\tbackground: url(" + escape(__webpack_require__("../../../../../src/assets/testimonial-bg.jpg")) + ");\n\tbackground-size: cover;\n\tbackground-position: top;\n\tbackground-attachment: fixed;\n\tbackground-repeat: no-repeat;\n\tcolor: #ffffff;\n\tpadding: 80px 0;\n}\n#testimonial {\n\tpadding: 30px 0;\n}\n#testimonial .item {\n\tdisplay: block;\n\twidth: 100%;\n\theight: auto;\n}\n#testimonial .item p {\n\tfont-weight: 400;\n\tmargin: 30px 0;\n\tcolor: #eee;\n}\n/* Contact Section */\n#contact-section {\n\tpadding: 80px 0;\n}\n#contact-section h3 {\n\tfont-size: 20px;\n\tfont-weight: 400;\n\ttext-transform: uppercase;\n}\n#contact-section form {\n\tpadding: 30px 0;\n}\n#contact-section .fa {\n\tcolor: #D2527F;\n\tmargin-bottom: 10px;\n}\n#contact-section label {\n\tfont-size: 12px;\n\tfont-weight: 400;\n\tfont-family: 'Open Sans', sans-serif;\n\tfloat: left;\n}\n#contact-section .form-control {\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 6px 12px;\n\tfont-size: 14px;\n\tline-height: 1.42857143;\n\tcolor: #555;\n\tbackground-color: #fff;\n\tbackground-image: none;\n\tborder: 1px solid #ccc;\n\tborder-radius: 2px;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n\t-webkit-transition: none;\n\ttransition: none;\n}\n#contact-section .form-control:focus {\n\tborder-color: inherit;\n\toutline: 0;\n\t-webkit-box-shadow: transparent;\n\tbox-shadow: transparent;\n}\n#contact-section .btn {\n\tbackground: #D2527F;\n\tborder: 0;\n\tborder-radius: 4px;\n\tpadding: 10px 20px;\n\tcolor: #ffffff;\n\ttext-transform: uppercase;\n}\n#contact-section .btn:hover, #contact-section .btn:focus {\n\tbackground: #9D3D5F;\n}\n.btn:active, .btn.active {\n\tbackground-image: none;\n\toutline: 0;\n\t-webkit-box-shadow: none;\n\tbox-shadow: none;\n}\na:focus, .btn:focus, .btn:active:focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn.active.focus {\n\toutline: none;\n\toutline-offset: none;\n}\n/* Footer */\nnav#footer {\n\tbackground: #222222;\n\tcolor: #ddd;\n\tpadding: 30px 0 25px 0;\n}\nnav#footer .fnav {\n\tvertical-align: middle;\n}\nul.footer-social li {\n\tdisplay: inline-block;\n\tmargin-right: 10px;\n}\nnav#footer p {\n\tfont-size: 12px;\n\tmargin-top: 10px;\n}\n#footer i.fa {\n\theight: 30px;\n\twidth: 30px;\n\tfont-size: 20px;\n\tpadding: 4px 5px;\n\tcolor: #ddd;\n\t-webkit-transition: all 0.5s;\n\ttransition: all 0.5s;\n}\n#footer i.fa:hover {\n\tcolor: #D2527F;\n}\n.mat-tab-labels{\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center; /* align items in Main Axis */\n\twidth: 100%;\n}\n.cat .mat-tab-body-content{\n\theight: 100%;\n\twidth: 100%;\n    overflow: hidden;\n}\n@media (max-width: 768px) {\n\t.content {\n\t\tpadding: 40% 0 0;\n\t}\n\t}\n@media (max-width: 603px) {\n\t#menu.navbar-default {\n\t\tbackground-color: rgba(0, 0, 0, 0.7);\n\t}\n\tlabel {\n\t\tfloat: none !important\n\t}\n\t.pull-left.fnav, .pull-right.fnav {\n\t\tfloat: none !important;\n\t\ttext-align: center;\n\t}\n\t.hover-bg .hover-text {\n\t\tpadding: 12% 10%;\n\t}\n\t}\n@media (max-width: 360px) {\n\t.hover-bg .hover-text {\n\t\tpadding: 22% 10%;\n\t}\n\t}\n#survival-guide{\n\t\tcursor: pointer;\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/home-page/home-component.component.html":
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\">\n  <body> \n  <!-- Navigation\n    ==========================================-->\n  <app-nav></app-nav>\n  <!-- Header -->\n  <app-header></app-header>\n  <!-- Services Section -->\n  <div id=\"services-section\" class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"section-title center\">\n        <h2>Shopping\n          <strong>Section</strong>\n        </h2>\n        <hr>\n        <div class=\"clearfix\"></div>\n        <p>There you can find almost everything you want.</p>\n      </div>\n      <div class=\"space\"></div>\n      <div class=\"row\">\n        <div class=\"col-md-2 col-md-offset-1 col-sm-6 service\">\n          <i [routerLink]=\"['house-list']\" class=\"fa fa-home\"></i>\n          <h4>\n            <strong>House/Apartment Rent</strong>\n          </h4>\n          <p>Please make sure house condition when sign a lease </p>\n        </div>\n        <div class=\"col-md-2 col-sm-6 service\">\n          <i [routerLink]=\"'book-list'\" class=\"fa fa-book\"></i>\n          <h4>\n            <strong>Book</strong>\n          </h4>\n          <p>ECE, CS, MSIT, Marketing....All here.</p>\n        </div>\n        <div class=\"col-md-2 col-sm-6 service\">\n          <i [routerLink]=\"'product-list'\" class=\"fa fa-bed\"></i>\n          <h4>\n            <strong>Others</strong>\n          </h4>\n          <p>Cars, Bed.....</p>\n        </div>\n        <div class=\"col-md-2 col-sm-6 service\">\n          <i [routerLink]=\"'demand-list'\" class=\"fa fa-tag\"></i>\n          <h4>\n            <strong>Demand list</strong>\n          </h4>\n          <p>Someone needs those things.</p>\n        </div>\n        <div class=\"col-md-2 col-sm-6 service\">\n          <i [routerLink]=\"'sell'\" class=\"fa fa-money\"></i>\n          <h4>\n            <strong>Sell your Product</strong>\n          </h4>\n          <p>We are glad to help you save money.</p>\n        </div>  \n      </div>\n    </div>\n  </div>\n  <!-- Portfolio Section -->\n  <div id=\"works-section\">\n    <div class=\"container\">\n      <!-- Container -->\n      <div class=\"section-title text-center center\">\n        <h2>Recent\n          <strong>Product</strong>\n        </h2>\n        <hr>\n        <div class=\"clearfix\"></div>\n      </div>\n      <div class=\"categories\">   \n          <mat-tab-group>   \n              <mat-tab label=\"House\">\n                  <div class=\"col-sm-6 col-md-3 col-lg-3 web\" *ngFor=\"let house of showHouses;let i of index\">\n                      <div class=\"portfolio-item\" >\n                        <div class=\"hover-bg\">\n                          <a [routerLink]=\"['house-list', house.id]\" >\n                            <div class=\"hover-text\">\n                              <h4>{{house.Address}}</h4>\n                              <small>{{house.price}}</small>\n                              <div class=\"clearfix\"></div>\n                              <i class=\"fa fa-plus\"></i>\n                            </div>\n                            <img [src]=\"house.imgUrl[0]\" class=\"img-responsive\" alt=\"Project Title\"> </a>\n                        </div>\n                      </div>\n                    </div>\n              </mat-tab>\n            <mat-tab label=\"Book\">\n                <div class=\"col-sm-6 col-md-3 col-lg-3 web\" *ngFor=\"let book of showBooks;let i of index\">\n                    <div class=\"portfolio-item\" >\n                      <div class=\"hover-bg\">\n                        <a [routerLink]=\"['book-list', book.id]\" >\n                          <div class=\"hover-text\">\n                            <h4>{{book.name}}</h4>\n                            <small>{{book.department}}</small>\n                            <div class=\"clearfix\"></div>\n                            <i class=\"fa fa-plus\"></i>\n                          </div>\n                          <img [src]=\"book.imgUrl[0]\" class=\"img-responsive\" alt=\"Project Title\"> </a>\n                      </div>\n                    </div>\n                  </div>\n            </mat-tab>\n            <mat-tab label=\"Others\">\n                <div class=\"col-sm-6 col-md-3 col-lg-3 web\" *ngFor=\"let product of showProducts;let i of index\">\n                    <div class=\"portfolio-item\" >\n                      <div class=\"hover-bg\">\n                        <a [routerLink]=\"['product-list', product.id]\">\n                          <div class=\"hover-text\">\n                            <h4>{{product.name}}</h4>\n                            <small>{{product.price}}</small>\n                            <div class=\"clearfix\"></div>\n                            <i class=\"fa fa-plus\"></i>\n                          </div>\n                          <img [src]=\"product.imgUrl[0]\" class=\"img-responsive\" alt=\"Project Title\">  </a>\n                      </div>\n                    </div>\n                  </div>  \n            </mat-tab>\n          </mat-tab-group>\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n  </div>\n  <!-- About Section -->\n  <div id=\"about-section\">\n    <div class=\"container\">\n      <div class=\"section-title text-center center\">\n        <h2>\n          <strong>New</strong> Students</h2>\n        <hr>\n        <div class=\"clearfix\"></div>\n        <p>Welcome to WPI, we are waiting for you!</p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <img src=\"../../assets/11.jpg\" class=\"img-responsive\"> </div>\n        <div class=\"col-md-6\">\n          <div class=\"about-text\" >\n            <i class=\"fa fa-users\"></i>\n            <h4 [routerLink]= \"['survival-guide']\"><a id=\"survival-guide\">Survival Guide</a></h4>\n            <p>New Students? Look Here, we have prepare everything for you.</p>\n            <i class=\"fa fa-puzzle-piece\"></i>\n            <h4 [routerLink]= \"['pickup']\"><a id=\"survival-guide\">Airport pickup</a></h4>\n            <p>For more information, please click it.</p>\n            <i class=\"fa fa-check-square-o\"></i>\n            <h4>Temporary Residence<a id=\"survival-guide\"></a></h4>\n            <p>This section is still under construciton.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Team Section -->\n  <!-- Testimonials Section -->\n  <div id=\"testimonials-section\" class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"section-title center\">\n        <h2>Up \n          <strong>Coming</strong> Events</h2>\n        <hr>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8 col-md-offset-2\">\n          <div id=\"testimonial\">\n            <div class=\"item\">\n              <p>Congrulations! WPI CSSA New website just finished at 4/15/2018.Now version 1.1 let's play with it!.</p>\n              <p>\n             <!--<strong>John DOE</strong>, CEO, Company.</p> -->   \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"team-section\" class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"section-title center\">\n        <h2>Meet the\n          <strong>team</strong>\n        </h2>\n        <hr>\n        <p>Our team is a multicultural team. We are here to make our life eaiser in WPI</p>\n      </div>\n      <div id=\"row\">\n        <div class=\"col-md-3 col-sm-6 team\">\n          <div class=\"thumbnail\">\n            <img src=\"../../assets/Jiahui1.jpg\" alt=\"...\" class=\"img-circle team-img\">\n            <div class=\"caption\">\n              <h3>Jiahui Chen</h3>\n              <p>Main developer of WPICSSA</p>\n              <p>Front and Back End design. Proficiency in Angular 2+ CSS3 HTML5 JAVA Node.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 team\">\n          <div class=\"thumbnail\">\n            <img src=\"../../assets/muzammil pic2.jpg\" alt=\"...\" class=\"img-circle team-img\">\n            <div class=\"caption\">\n              <h3>Muzammil</h3>\n              <p>Database Designer/marketing manager</p>\n              <p>Good at Mysql, Python, Java.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 team\">\n          <div class=\"thumbnail\">\n            <img src=\"../../assets/bao.jpg\" alt=\"...\" class=\"img-circle team-img\">\n            <div class=\"caption\">\n              <h3>YuXiang Bao</h3>\n              <p>Web Designer/CSSA Contacts</p>\n              <p>Good at HTML5 CSS3 Jquery. NLP</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3 col-sm-6 team\">\n          <div class=\"thumbnail\">\n            <img src=\"../../assets/t04.jpg\" alt=\"...\" class=\"img-circle team-img\">\n            <div class=\"caption\">\n              <h3>Mo Cheng</h3>\n              <p>Data Analyst/marketing</p>\n              <p>Android and Hadoop.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Contact Section -->\n  <div id=\"contact-section\" class=\"text-center\">\n    <div class=\"container\">\n      <div class=\"section-title center\">\n        <h2>\n          <strong>Contact</strong> us</h2>\n        <hr>\n        <p>If you have any suggestion or want to join our R & D team team, please contact us:</p>\n      </div>\n      <div class=\"col-md-8 col-md-offset-2\">\n        <div class=\"col-md-6\">\n          <i class=\"fa fa-map-marker fa-2x\"></i>\n          <p>100 Insitute Road\n            <br> Worcester, MA 01609</p>\n        </div>\n        <div class=\"col-md-6\">\n          <i class=\"fa fa-envelope-o fa-2x\"></i>\n          <p>hbchenjh@gmail.com</p>\n        </div>\n        <hr>\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n  </div>\n  <nav id=\"footer\">\n    <div class=\"container\">\n      <div class=\"pull-left fnav\">\n        <p>Copyright &copy; 2018 \n          <a href=\"http://wpilife.org/\" target=\"_blank\" title=\"模板在线\">WPILife Team </a>\n        </p>\n      </div>\n      <div class=\"pull-right fnav\">\n        <ul class=\"footer-social\">\n          <li>\n            <a href=\"https://www.facebook.com/WPI-CSSA-506053402753513/\">\n              <i class=\"fa fa-facebook\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://twitter.com/wpicssa?lang=en\" target=\"_blank\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n          </li>\n          <li>\n            <a href=\"https://weibo.com/u/2693929980\" target=\"_blank\">\n              <i class=\"fa fa-dribbble\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</body>\n</html>"

/***/ }),

/***/ "../../../../../src/app/component/home-page/home-component.component.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var house_service_1 = __webpack_require__("../../../../../src/app/Service/house-service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/Service/product-service.ts");
var book_service_1 = __webpack_require__("../../../../../src/app/Service/book-service.ts");
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
            if (ev instanceof router_1.NavigationStart) {
                if (ev.url !== _this.lastPoppedUrl) {
                    //    console.log('show ye bao cun' + this.lastPoppedUrl);
                    //    console.log('show ye bao cun 2' + ev.url);
                    _this.yScrollStack.push(window.scrollY);
                }
            }
            else if (ev instanceof router_1.NavigationEnd) {
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
        core_1.Component({
            selector: 'app-home-component',
            template: __webpack_require__("../../../../../src/app/component/home-page/home-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/home-page/home-component.component.css")],
            encapsulation: core_2.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [house_service_1.HouseService, book_service_1.BookService,
            product_service_1.ProductService, common_1.Location, router_1.Router])
    ], HomeComponentComponent);
    return HomeComponentComponent;
}());
exports.HomeComponentComponent = HomeComponentComponent;


/***/ }),

/***/ "../../../../../src/app/component/house/house-component.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"search\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search..\" [formControl]=\"searchBox\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>House Section</h1>\n\t\t\t\t\t\t\t\t<h2>Find your new life in America</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t<span>Cool Stuff</span>\n\t\t\t\t\t\t<h2>House.</h2>\n\t\t\t\t\t\t<p>If you find some bugs or have some suggestions, please contack us at: hbchenjh@gmail.com. We are hearing all the time.\n\t\t\t\t\t\t\tyour feedback makes our website better!\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4 text-center\" *ngFor=\"let house of houses | houseSearch: searchValue | paginate: { id:'house',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t     itemsPerPage: 6, \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t     currentPage: hp };let i = index\">\n\t\t\t\t\t\t<div class=\"product\" (click)=\"toHouseDetail(house.id,i)\">\n\t\t\t\t\t\t\t<div class=\"product-grid\" [style.background-image]=\"'url('+house.imgUrl[0]+')'\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t<i>{{house.Address}}</i>\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t<span class=\"price\">{{house.price}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<pagination-controls class=\"pageButton\" id=\"house\" (pageChange)=\"getPageNumber($event)\" maxSize=\"9\" directionLinks=\"true\"\n\t\t\t\t autoHide=\"true\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n\t\t\t\t</pagination-controls>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-footer></app-footer>\n\t</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/house/house-component.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var house_service_1 = __webpack_require__("../../../../../src/app/Service/house-service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
var HouseComponentComponent = /** @class */ (function () {
    function HouseComponentComponent(houseService, router, activateRouter) {
        this.houseService = houseService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.houses = [];
        this.searchBox = new forms_1.FormControl();
        this.searchValue = '';
        this.hp = houseService.getCurrentPage();
    }
    HouseComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        core_1.Component({
            selector: 'app-house-component',
            template: __webpack_require__("../../../../../src/app/component/house/house-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [house_service_1.HouseService, router_1.Router, router_1.ActivatedRoute])
    ], HouseComponentComponent);
    return HouseComponentComponent;
}());
exports.HouseComponentComponent = HouseComponentComponent;


/***/ }),

/***/ "../../../../../src/app/component/house/house-detail/house-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div class=\"fh5co-loader\"></div>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a routerLink=\"\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>House Details</h1>\n\t\t\t\t\t\t\t\t<h2>Our Goal is makeing your life much earier in WPI</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\n\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ngx-carousel [inputs]=\"Config\">\n\t\t\t\t\t\t\t\t<ngx-item *ngFor=\"let houseImg of imgUrl\" class=\"bannerStyle \" NgxCarouselItem>\n\t\t\t\t\t\t\t\t\t<img [src]=\"houseImg\" alt=\"house\" width=\"100%\" #test2 id=\"img1\">\n\t\t\t\t\t\t\t\t</ngx-item>\n\t\t\t\t\t\t\t\t<i NgxCarouselPrev class=\"leftRs fa fa-arrow-left fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i NgxCarouselNext class=\"rightRs fa fa-arrow-right fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</ngx-carousel>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t\t\t<h2>{{address}}</h2>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\" class=\"btn btn-primary btn-outline btn-lg\">Post your Product to Sell</a>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\n\t\t\t\t\t\t<mat-tab-group>\n\t\t\t\t\t\t\t<mat-tab label=\"House detail\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t\t\t\t<p>House Address: {{address}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\n\t\t\t\t\t\t\t\t\t\t\t<p>Rent fee(per month) : {{price}}$</p>\n\t\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\n\t\t\t\t\t\t\t\t\t\t\t<p>House available date: {{availableDate}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\n\t\t\t\t\t\t\t\t\t\t\t<p>House contract end date: {{endDay}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t<mat-tab label=\"Contact Info\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t\t\t<p>Contact information: {{contact}}</p>\n\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\n\t\t\t\t\t\t\t\t\t\t<p>House Description: {{desc}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t</mat-tab-group>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<app-footer></app-footer>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/house/house-detail/house-detail.component.ts":
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
        core_1.Component({
            selector: 'app-house-detail',
            template: __webpack_require__("../../../../../src/app/component/house/house-detail/house-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/product/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [house_service_1.HouseService, router_1.Router, router_1.ActivatedRoute])
    ], HouseDetailComponent);
    return HouseDetailComponent;
}());
exports.HouseDetailComponent = HouseDetailComponent;


/***/ }),

/***/ "../../../../../src/app/component/house/house.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.HouseModel = HouseModel;


/***/ }),

/***/ "../../../../../src/app/component/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\n\tfont-family: 'Lato', sans-serif;\n\ttext-rendering: optimizeLegibility !important;\n\t-webkit-font-smoothing: antialiased !important;\n\tcolor: #5a5a5a;\n}\nh1 {\n}\nh1 strong {\n\tfont-weight: 900;\n}\nh2 {\n\ttext-transform: uppercase;\n\tline-height: 20px;\n\tmargin: 0;\n}\nh3 {\n\tfont-size: 16px;\n\tfont-weight: 700;\n}\nh4 {\n\ttext-transform: capitalize;\n}\nh5 {\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tline-height: 20px;\n}\np {\n\tfont-family: 'Open Sans', sans-serif;\n}\np.intro {\n\tfont-size: 16px;\n\tmargin: 12px 0 0;\n\tline-height: 24px;\n\tfont-family: 'Open Sans', sans-serif;\n}\na {\n\tcolor: #D2527F\n}\na:hover, a:focus {\n\ttext-decoration: none;\n\tcolor: #9D3D5F;\n}\n.clearfix:after {\n\tvisibility: hidden;\n\tdisplay: block;\n\tfont-size: 0;\n\tcontent: \" \";\n\tclear: both;\n\theight: 0;\n}\n.clearfix {\n\tdisplay: inline-block;\n}\n* html .clearfix {\n\theight: 1%;\n}\n.clearfix {\n\tdisplay: block;\n}\nul, ol {\n\tpadding: 0;\n\twebkit-padding: 0;\n\tmoz-padding: 0;\n}\n#menu {\n\tpadding: 20px;\n\t-webkit-transition: all 0.8s;\n\ttransition: all 0.8s;\n}\n#menu.navbar-default {\n\tbackground-color: rgba(248, 248, 248, 0);\n\tborder-color: rgba(231, 231, 231, 0);\n}\n#menu a.navbar-brand {\n\ttext-transform: uppercase;\n\tfont-size: 22px;\n\tcolor: #fff;\n\tfont-weight: 900;\n}\n#menu.navbar-default .navbar-nav > li > a {\n\ttext-transform: uppercase;\n\tcolor: #FFF;\n\tfont-size: 12px;\n\tletter-spacing: 1px;\n}\n#menu.navbar-default .navbar-nav > li > a:hover {\n\tcolor: #D2527F;\n}\n.on {\n\tbackground-color: #222222 !important;\n\tpadding: 0 !important;\n}\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n\tcolor: #D2527F !important;\n\tbackground-color: transparent;\n\tfont-weight: 700;\n}\n.navbar-toggle {\n\tborder-radius: 0;\n}\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n\tbackground-color: #D2527F;\n\tborder-color: #D2527F;\n}\n.navbar-default .navbar-toggle:hover>.icon-bar {\n\tbackground-color: #FFF;\n}\n#login {\n\tcursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"menu\" class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\"> \n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n      <a class=\"navbar-brand\" href=\"index.html\">WPI<strong><span class=\"color\">.</span></strong></a> \n      <p class = \"navbar-text\">Make your life easier in WPI</p>\n     </div>\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a pageScroll href=\"#home\">Home</a></li>\n        <li><a pageScroll href=\"#services-section\" >Shop</a></li>\n        <li><a pageScroll href=\"#works-section\" >Recent Product</a></li>\n        <li><a pageScroll href=\"#about-section\" >New Students</a></li>\n        <li><a pageScroll href=\"#testimonials-section\" >Event</a></li>\n        <li><a pageScroll href=\"#team-section\" >About us</a></li>\n        <li  *ngIf=\"auth.isAuthenticated()\"><a id=\"login\" [routerLink]=\"['profile']\" >Profile</a></li>\n        <li  *ngIf=\"!auth.isAuthenticated()\"><a id=\"login\" (click)=\"auth.login()\" >Login/SignUp</a></li>\n        <li  *ngIf=\"auth.isAuthenticated()\"><a id=\"login\" (click)=\"auth.logout()\" >Log Out</a></li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse --> \n  </div>\n  <!-- /.container-fluid --> \n</nav>"

/***/ }),

/***/ "../../../../../src/app/component/nav/nav.component.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
var NavComponent = /** @class */ (function () {
    function NavComponent(auth) {
        this.auth = auth;
        auth.handleAuthentication();
        // console.log('1');
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/component/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "../../../../../src/app/component/new-students/new-students.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.example-radio-group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  #example-radio-button {\n    margin: 5px;\n    font-weight: bold;\n  }\n  .example-selected-value {\n    margin: 15px 0;  \n  }\n  article p {\ntext-indent:25px;\nmargin-bottom: 20px;\ntext-align: left;\n}\n  article h2 {\n    color: brown;\n}\n  article li{\n  list-style:none;\n  margin:0;\n  text-align: left;\n}\n\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/new-students/new-students.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a [routerLink]=\"['']\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/test'\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>New Students Survival Guide</h1>\n                <h2>Prepare your life in WPI</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <span>Made by WPI CSSA</span>\n            <h2>WPI CSSA OFFICAL GUIDE(content is not finish)</h2>\n            <h3>If there are something unclear to you, please let us know.\n            </h3>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-3 choice\">\n            <div class=\"product\">\n              <h3>\n                <i>Catalog:</i>\n              </h3>\n            </div>\n            <mat-radio-group class=\"example-radio-group\" id=\"example-radio-group\" [(ngModel)]=\"selected\">\n              <mat-radio-button class=\"example-radio-button\" *ngFor=\"let index of Indexs\" [value]=\"index\">\n                {{index}}\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n\n          <div class=\"col-md-9 text-center newstudent\">\n            <article [ngSwitch]=\"selected\">\n              <div *ngSwitchCase=\"'Prelude'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <p align=\"left\">亲爱的同学:</p>\n                <p align=\"left\">你好!</p>\n                <p align=\"justify\">\n                  首先我们代表WPI中国学生学者联谊会Chinese Students & Scholars Association(CSSA)欢迎您来WPI学习深造! WPI地处美国历史最悠久的马萨诸塞州,不仅人文气息浓厚,而且高科技产业由于众多大学的支撑而非常发达。对于WPI的同学来说,无论理工文商,这里都是学习和工作的理想地点。\n                </p>\n                <p align=\"justify\">\n                  WPI CSSA主要是由来自中国的学生和学者组成的志愿性组织。目前我们已有超过300名成员,其中包括学生、教授、访问学者及家属等。CSSA的主要任务是为中国学生学者提供一些生活和学习上的帮助,包括接新生、帮助新生安顿和适应这里的生活、举办中秋晚会、春节晚会等具有中国特色的活动等等。\n                  这本新生手册主要是为了帮助刚来到美国,来到Worcester的新同学、朋友们尽快地适应这里的生活、学习和工作。本手册经过WPI中国学生学者联谊会成员们的共同努力制作而成。这里, 我们向所有参与编写和校正的同学们表示深深的感谢!\n                  本手册中不足之处恳请大家及时指正,我们会不断地更新和完善。本手册中出现的一些网上购物地点或者订机票代理等的电话,完全是同学们平时积累的经验所得,不存在任何商业广告行为。 我们也真诚地希望能有更多热心的同学、朋友们加入WPI中国学生学者联谊会,互相帮助,共同努力,\n                  更好地为这里的中国学生学者们服务! 最后, 祝大家在WPI过得愉快、充实!\n                </p>\n                <p align=\"right\">\n                  CSSA 敬上 2017年夏\n                </p>\n              </div>\n              <div *ngSwitchCase=\"'Introduction'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <p>\n                  (1) CSSA 2018 FALL WeChat Group: 请加微信：chenjiahui11993, 备注专业姓名，之后会拉你入群，进群请备注姓名。\n                  <b>定时清理人员,请及时更改</b>。\n                </p>\n                <p>\n                  (2) WPILIFE网站</p>\n                <p align=\"left\"> WPILIF是一个CSSA官方的信息分享网站，网址是http://wpilife.org需要注册。 WPILIFE上会经常有学校活动信息发布，同时也有很多同学在该网站上出售物品， 新生也可以在这个网站以较低的价格买到学长学姐们的二手商品，给大家都提供了便利。\n                  发布商品教程请看http://wpilife.org/manual/6，非常简单明了！ 同时也请大家提高警惕，防范骗子，及时举报。</p>\n                <h2 align=\"left\">CSSA 简介</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <p>\n                  对WPI CSSA工作的意见与建议:\n                </p>\n                <p>\n                  请发邮件到: 151yuhongyi@gmail.com; yxq722@gmail.com\n                </p>\n                <p>\n                  对WPIFLIE 网站的意见与建议:\n                </p>\n                <p>\n                  请发邮件到: hbchenjh@gmail.com\n                </p>\n                <p>\n                  Chinese Students & Scholars Association (CSSA), 即中国学者联谊会:\n                </p>\n                <p>\n                  Email: cssa@wpi.edu\n                </p>\n                <p>\n                  Chinese Student Association (CSA), 即中国学生会:\n                </p>\n                <p>\n                  Email: csa@wpi.edu\n                </p>\n                <p>\n                  International House (IH), 即 WPI 的国际学生管理部门:\n                </p>\n                <p>\n                  Phone: +1-508-831-6030\n                </p>\n                <p>\n                  Email: ih@wpi.edu and website Webpage: http://www.wpi.edu/offices/ih/\n                </p>\n              </div>\n              <div *ngSwitchCase=\"'Before come to America'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <mat-tab-group>\n                  <mat-tab label=\"签证\">\n                    <p>网上的签经有很多,这里就不多说了。附上几个国内比较有名的留学论坛的签证版网址。</p>\n                    <ul>\n                      <li>太傻\n                        <a href=\"http://bbs.taisha.org/forum-73-1.html\">http://bbs.taisha.org/forum-73-1.html</a>\n                      </li>\n                      <li>一亩三分地\n                        <a href=\"http://www.1point3acres.com/bbs/\">http://www.1point3acres.com/bbs/</a>\n                      </li>\n                    </ul>\n                    <p>\n                      关于签证,这里要解释一下。你在美国能够呆多久不是签证官决定的, 而是你刚进入美国的机场的入境官决定的。他会根据你的签证和 I-20 来判断你在美国能呆多久。一般都是D/S（Duration of status）。 这意味着只要你不出美国,你可以一直待到结束学业。现在从大陆来的同学签证一般都是5年期的,意思是你可以在5年内无限次进出美国，但是也存在被check后只有一年的情况。如果你在签证过期后出了美国国境,再次回到美国就需要重新签证（一般即将过期的话最好也重新签,以免出问题，比如签证\n                      6.18到期,你打算6月1号的飞机回美国,就最好去重新签一个）。 International House的回复是一般WPI的学生签证过期又不想回家的,可以去墨西哥或者加拿大去重新签证。为什么不能在美国本土重新签证呢？因为管签证的是美国大使馆。在美国本土怎么可能有美国大使馆呢？\n                      （我觉得挺扯淡的。其他国家都行。如果签证过期之后,只要不出美国是没有问题的。因为签证代表的是你合法进入美国的期限，跟出去没有关系。）\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"订机票\">\n                    <p>\n                      可以找当地的机票代理，但因为是单程会比较贵。买的早可能更便宜，买的迟就贵。当然也看地区，一般从北京、上海、香港可能相对便宜，经停点越多越便宜。定机票后请将航程信息填入CSSA接机表，等统计完成后会放出统计结果，具体链接请见群分享或询问CSSA。\n                    </p>\n\n                    <p>\n                      <span>订机票时如果需要到第三个国家转机，请提前查好是否需要该国家的签证。</span>\n                    </p>\n\n                    <p>\n                      <span>建议订美国东部时间7pm之前到达的飞机，以防突发情况发生无人接机.</span>\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"找飞友&订limo\">\n                    <p>\n                      首先，limo不是加长凯迪拉克，它就是叫limo而已......一般也就是轿车或者van。 当大家签证办好之后请到新生群里询问一下在同一地区的同学，大家尽量约好一起飞。一是一路上互相有个照应，一起聊个天吃个饭什么的，等待时间长的话还可以轮流睡觉；二来是到伍斯特之后可以大家一起订limo去学校。学长姐们毕竟有限，他们也都有自己的事情要忙。\n                    </p>\n                    <p>\n                      <span>订 limo 的网站:</span>\n                    </p>\n                    <ul>\n                      <li>Knight Limo:\n                        <a href=\"www.knightlimo.com\">www.knightlimo.com</a>\n                      </li>\n                      <li>Worcester Limo:\n                        <a href=\"www.wlimo.com\">www.wlimo.com</a>\n                      </li>\n                    </ul>\n                    <p>\n                      注意，一辆车好像只能指定送到一个地点，这是规定，你可以试着跟司机说好话让他多送几个地点。成功率好像不高，成功的话记得多给小费，不然可能没有下次了。 订limo流程:订车的时候选择付现金，这样如果司机服务态度不好，比如不帮你提箱子之类的就少给点小费。\n\n                      <span>小费一般10%。</span>\n                    </p>\n                    <p>\n                      每年CSSA会组织学长学姐的老司机群提供有偿接机服务，详细信息请关注WPICSSA微信平台，请在官方新生群里发信息，会有CSSA的学长学姐联系老司机群的。\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"体检和疫苗\">\n                    <p>\n                      大家拿到offer的时候应该也同时看到学校要求要寄体检单子和疫苗注射的单子，如果没有请到此处下载\n                      <a href=\"http://www.wpi.edu/Admin/Health/forms.html\" target=\"_blank\">http://www.wpi.edu/Admin/Health/forms.html</a>。在国内一般都是去各地的国际旅行卫生保健中心去体检（还有些同学去大医院也行，主要就是让他们填单子盖章）。带着身份证、体检表、2张二寸证件照、小时候的疫苗记录本、1000元人民币（其实用不了这么多）去就好了。\n                    </p>\n                    <p>\n                      因为可能要做一个TB皮试，有些地方不是每天可以做，所以去之前大家可以打个电话去问一下一周哪几天可以做TB皮试，不然可能就要多跑一趟。然后，如果疫苗本找不到了也没关系，大不了多扎几针\n                    </p>\n                    <p>\n                      体检和疫苗两个部分哪个先做都可以，完了会给一本黄色的体检证和一本深红疫苗证。这两个如果你去其他国家也会认，因为上面盖着中国国家检疫检验局的大章。虽然学校让把体检表寄回来，其实也可以来了以后再交。期间你的账号会被hold而已，大概就是不能自己在网上注课。学校网站上的四份表都要下载填写。体检要尽早，很多疫苗要打多次，然后其间要隔三四个星期，所以体检越早越好。\n                    </p>\n                    <p>\n                      体检表格指南请见附录。 另外请参考CD(有分地区介绍):\n                    </p>\n                    <ul>\n                      <li>\n                        <a href=\"http://www.chasedream.com/list.aspx?cid=36\" target=\"_blank\">http://www.chasedream.com/list.aspx?cid=36</a>\n                      </li>\n                      <li>武汉\n                        <a href=\"http://parents.tiandaoedu.com/ready/17271.html\" target=\"_blank\">http://parents.tiandaoedu.com/ready/17271.html</a>\n                      </li>\n                    </ul>\n                  </mat-tab>\n                  <mat-tab label=\"住房\">\n                    <p>\n                      1)临时住房\n                    </p>\n                    <p>\n                      a. 想要来之后再看房子的同学可以暂时住在International House三天，需要提前申请，租金是20美元/天/人。房子很紧，越早申请越好。\n                    </p>\n                    <p>\n                      b. 租不到International House住房的同学，可以找老生帮忙，借住几晚，按天付房租。建议价格20-25美元/天/人。这个钱是帮老生付你居住期间的水费电费网费等等。\n                    </p>\n                    <p>\n                      <span>强烈建议不要相信各种中介！！！！！如果非要租中介的房子请一定联系学长学姐实地考察，再三斟酌！尤其是中国房东的房子！这里重点强调！老中坑老中就是这么开始的。</span>\n                    </p>\n                    <p>\n                      2）关于房子\n                    </p>\n                    <p>\n                      首先，美国的房子分House和Apartment。House就比较有乡村风情，一幢一幢的房子。整幢租给你的话，可能就是大家公用一楼的厨房客厅，二楼各睡各屋；另一种就是House里两层或三层，每层住3个人，然后厨房客厅卧室都在一层。Apartment\n                      就是公寓了，公寓一般比较现代化，房子也会新一点。 新生可以在来之前就找好房子，如果你想亲自看看这边住房的条件再决定，也可以来了以后再找。按照所有权，房子大概分为以下两类：\n                    </p>\n                    <b>a. On-Campus</b>\n                    <p>\n                      On-campus的房子是学校的，分布在学校周围比较近的区域。月租500-600美元，包热水包电（美国这边未加热的水是免费的）；有家具（furnished）（一般有Twin size的床，桌子，椅子等）。500美元的是三个人share一层，3个Bedroom，一个卫生间，一个厨房，1-2个living\n                      room；600美元的是三个人share整个两层的House，一楼是厨房客厅，二楼是Bedrooms。\n                    </p>\n                    <p>\n                      学校的房子有一些有洗衣机和烘干机，免费无限量使用，另一些只有laundry room/center，收费。除了设备齐全、空间大之外，学校的房子不需要deposit，lease也比较灵活（每个月一签）。如果想搬走，大概提前一个半月通知管理员就可以。另外，学校还有专门的服务人员负责维修，如果是下水道堵了之类的小事情，一般都是免费的。\n                    </p>\n                    <p>\n                      申请学校的房子，请联系 Residential Services: Amy Beth Polonsky Phone: +1 508-831-5130; Email: apolonsky@wpi.edu 遇到高峰期，可能要排上比较久时间(运气好的话一般可以排到)。\n                      注意: 申请学校的房子不需要提前找好roommate,都是学校安排。\n                    </p>\n                    <b>b. Off-Campus</b>\n                    <p>\n                      Off-campus的房子一般是Owner的，也有个别是中介公司旗下的，有的距离学校很近，像West Street，隔条Institute Road就是学校；有的则比较远，像William Street,etc,走路大概需要10几分钟。 房子一层3-4个Bedroom是最普遍的房型，有的房子两层4-5个Bedroom，很多把Living\n                      room改造成Bedroom。很多时候是整体出租，需要大家租房之前自己找好室友。月租350-600美元不等。房租低的一般不包括任何Utilities，像电和气都得自己付。暖气分三种，烧油的，烧气的和电暖。\n                      烧油的，油大概570美元150 gallon，可以用一个多月；电暖大约 30 美元/月/人；气暖暂时不了解。一般烧油和气的不给力还贵。然后，如果是包水电暖的房子，注意问一下房东是不是有限制，比如暖气是不是随便开之类的。\n                    </p>\n                    <p>\n                      还有一点就是有的房子是带家具的，价格会高点，便宜的很多基本是没有家具的。对新生来说，住Furnished apartment会方便一点，毕竟第一年来什么都没有，要一样一样家具买起来还是挺累人的。如果找的是Unfurnished apartment，那么来了以后可以买点家具，例如Wal-Mart,\n                      Target, IKEA, Home Depot等。如果想找价廉物美的家具，可以去Yard sale看看，会比店里便宜不少，或者去上面的那个Craigslist上去淘，经常能遇见比较便宜的。旧家具还可以去Park\n                      Ave的Good Will，和Chandler Street上面的旧家具店买（如果早点儿来，还可以捡到路边的椅子，桌子之类的家具。床垫沙发之类的不要轻易往家里搬，容易藏匿bad bug)。 校外的房子，一般都要签一年或者至少9个月的lease，还要交safety\n                      deposit，第一个月和最后一个月的房租。在这里必须要提醒大家的是，一定要考虑清楚以后，才能慎重地签下你的lease。一不经意就可能碰到恶房东，可别小看这房东的作用，一个可怕的房东，会给你带来一年阴沉的心情，最后还可能拿不回押金。Nice的房东会很体贴，例如帮你修东西，整理草坪，放置家具等等。找房子最好自己看个仔细清楚明白。想买车的同学还要看租住的房子有没有停车位置，或者周围是否适合街边停车。冬天的时候路边有雪，街边停车位比较难找，有个固定车位还是挺方便的。\n                      房子的位置也要考虑，尽量离学校近一点。第一年没有车，住的远会比较麻烦。买车了以后可以考虑离学校远一点得房子（学校规定距离学校超过1 mile的可以办停车证）。下图是我们总结的所谓安全区，供参考。\n                    </p>\n                    <img src=\"http://wpilife.org/kindeditor/attached/image/20130821/20130821124622_59100.png\">\n                    <p>\n                      一般在学校附近区域内的房子综合条件比较理想，无论远近、安全、安静程度都比较好。总体来说，住房的综合条件由西向东，由北向南逐渐递减。Park Ave以西是一个山坡，也是可以考虑的。Highland以南的地区，在Dix street和Bowdoin\n                      street上现在也有很多中国学生租住。\n                    </p>\n                    <p>\n                      网上在线找房子有两个地方:\n                    </p>\n                    <ul>\n                      <li>\n                        WPI Apartment Finder System:\n                        <a href=\"http://www.wpi.edu/offices/rso/aptfinder.html\" target=\"_blank\">http://www.wpi.edu/offices/rso/aptfinder.html</a>\n                      </li>\n                      <li>Craigslist网站Worcester地区WPI附近:\n                        <a href=\"http://worcester.craigslist.org/search/apa?query=WPI\" target=\"_blank\">http://worcester.craigslist.org/search/apa?query=WPI</a>\n                      </li>\n                    </ul>\n                    <p>\n                      前者信息更新较慢，但是集中，都是针对WPI的。后者更新极其迅速，但是未必有很近的房子，而且很多重复的。在使用后面这个叫做craigslist的网站的时候，注意在搜索里打WPI，这样你不至于找到走一天也到不了WPI的房子了。 总而言之，不能简单比较房租，要比较加上各种因素以后的价钱和综合性能。\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"行李\">\n                    <b>a.限重及规定</b>\n                    <p>\n                      每个航空公司的限重是不同的，所以不在这里一一列出。所有情况可以在航空公司的官方网站找到。之前很多航空公司可以免费托运2个23KG的箱子，好像现在有规定只能带一个箱子了；托运箱子一般是30寸的。由于大家定的航空公司都不一样，而且是新规定，所以具体要求请同学们自行与航空公司确认。\n                      绝对不要超重。一般超过1-2KG不算超重。超重的话国内会罚500RMB。不要带任何肉类食品、土壤、植物、种子。真空包装的肉类（如烤鸭，临武鸭，绝味......怎么全都是鸭......）之类通常也会被没收。带太多的话，可能罚款；听说过罚款300美元的，但不确定罚款会不会视情况而定。进入美国的托运行李是不能上锁的，除非是TSA（transit\n                      security authority, 美国国土安全部下面的一个部门）同意的锁子。这些锁淘宝上有卖, 不过建议一点都不锁。由于有开箱检查的可能性,因此这种情况下上了锁可能会被直接撬开。可以用打包带捆好箱子,上面贴上个人信息。贵重物品请务必随身携带,谨防丢失。\n                    </p>\n                    <b>b.书本</b>\n                    <p>教材可以通过以下链接找到，因为每门课每一届用的书可能不一样，请务必先查证后再买：</p>\n                    <ul>\n                      <li>\n                        <a href=\"http://wpi.bncollege.com/webapp/wcs/stores/servlet/TBWizardView?\" target=\"_blank\">http://wpi.bncollege.com/webapp/wcs/stores/servlet/TBWizardView?</a>\n                      </li>\n                      <li>\n                        <a href=\"catalogId=10001&storeId=32554&langId=-1\" target=\"_blank\">catalogId=10001&storeId=32554&langId=-1</a>\n                      </li>\n                    </ul>\n                    <p>\n                      来之前问问这边的师兄师姐需要什么教科书,看看国内是否有影印版。否则这边教材很贵，国内人民币76元的书，这里可以卖122美元。不过如果你的行李超重就算了，还有其他办法省教材费。非要带的话，可以通过海运提前一两个月把一些你觉得很有用的但是又不能托运的书寄过来，让这边的师兄姐们代为接收。也可以在国内的当当网订购直接海运过来，每本书的运费是书价的一半。\n                    </p>\n                    <b>c.衣物服饰</b>\n                    <p>如果是夏天过来，T恤要多带一些，因为会换的比较勤快。但是T恤这边卖的很便宜，所以也要酌量携带。这里的夏天相对来说凉快一点，不过也有三十几度高温的日子。另外，需要带一些常用的大衣和外套；这里冬天经常下雪，室内外温差又大，可以买比较长，可以把膝盖都包住的羽绒服，这样在外面走的时候就不会太冷。\n                      不过羽绒服也可以在这儿买，价格可以接受,到了第二年打折也非常多,买了屯着很划算。 只是可能款式没有很好看。太长的羽绒服男生穿有点奇怪,不太建议。女生或者买比较好的长大衣；这边也比较普遍，国内的样式就是稍微好看一些。总之，原则就是外面要够厚，里面可以少穿一些，到了屋里把外套脱了也不会太热。另外对于女生来说，可以考虑在国内买一些小饰品，比较便宜好看，比如围巾，手套，毛袜什么的。然后就是这边都是人字拖比较多，喜欢传统拖鞋滴同学们可以从国内带过来。最后，衣服鞋子等在过节的时候打折很厉害，可以很便宜的价格买到不错的。例如感恩节，圣诞节和独立日等。总之，不建议带太多的衣物过来。不过这边穿衣服的风格跟国内不一样，喜欢日韩系的同学就多带几件喜欢的吧；喜欢T-shirt,牛仔，欧美风的就随意啦。\n                    </p>\n                    <p>\n                      正装:对于男生，带几件好点的衬衫加一套完整的西服西裤领带就好了。 女生除了上述西装（西裤可由西装裙代替），还要1-2件中/西式晚礼服。西装人手一套一定要的，参加各种面试没有正装是不会有开始的。有时会有什么晚宴之类的，或者有比较正式的场合，这种时候男生很简单，继续西装就可以了，女生就要穿礼服了。嫌麻烦的也可以来这边再买，美国正装礼服很多的，知名品牌也不会太贵。\n                    </p>\n                    <p>\n                      Business casual: 指的是衬衫或者polo式样的有领tshirt+高尔夫球裤。\n                    </p>\n                    <p>\n                      Business attire: 指的是一整套西装, 但是有时候也可以衬衫+西裤。\n                    </p>\n                    <p>\n                      泳装: 喜欢游泳的人可以买了带过来,国内式样花纹都漂亮很多,我指的是女式。男式的要买肥大,裤腿长一点的,紧身的那种老美会觉得你怪怪的。游泳眼镜最好也从国内带,特别是需要近视的那种的。\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"家居用品\">\n                    <p>对于某些对被子要求比较高的，可以带上一条国内高档被子，比如蚕丝被，鸭绒被，确实不用太厚，室内都挺暖和的。倒是这边的被子又贵又很普通。还有这边的被单也是非常丑，质量平平，价格昂贵，喜欢漂亮的同学建议自己从国内带过来。另外可以带一些对你个人意义比较大的东西，比如男女朋友照片，各类定情信物，父母照片等等。</p>\n                    <p>Worcester有半年是冬天，所以保暖很重要。不过北方的同学应该知道，北方的冬天虽然冷，但是暖气一开，屋子里还是很暖和的。同样，Worcester的冬天虽然有时会达到零下二十度的低温，但在房间里还是够暖和的。除非你不幸地碰到了一个吝啬的房东，而你们家暖气的控制开关又掌握在房东手里。非常怕冷的同学可以带一个电热毯过来（电热毯美国也有卖,不知道好不好用,叫heated\n                      pad）。打算住在学校公寓的就不用担心了，暖气都很足的\n                    </p>\n                    <p>\n                      衣架、洗发水、各种护肤品，在美国都是很便宜的；但这边配眼镜很贵，所以最好在国内配个两副带过来。 最好再带些常用感冒药，止痛药（牙疼，智齿），退烧药，消炎药，抗生素，胃药等，自己吃习惯了的药。女生的卫生用品这边都有卖，只是样式不多；月经止疼药也可以带一点，红糖和红枣这边买得到。中成药可能含有违禁成分，如果带的量大，请一定确定它是否能通过海关。\n                    </p>\n                    <b>电子产品</b>\n                    <p>1)笔记本电脑：</p>\n                    <p>个人建议是，如果还没买的话就来美国买。 这种电子产品美国的价格一般会比国内便宜很多，而且还会有学生折扣。如果自己已经有了笔记本，配置又还可以的话可以带过来，毕竟刚来的时候家里没有电脑可以上网，还是会有不少不方便的地方。\n                    </p>\n                    <p>\n                      2)手机:\n                    </p>\n                    <p>\n                      国内的手机也可以带过来，来之前确认一下你的那款手机可不可以在美国用。来这边新版一个手机也不贵，美国电话公司一般可以签两年合同免费拿手机。相对于这边的消费水平，这里手机话费是比较便宜的。很多人用包月服务随便打电话；短信偏贵，包月也不如国内划算。办了手机以后可以买国际电话卡，从美国达到中国一两美分一分钟；比如一种叫\n                      ecallchina的卡(www.ecallchina.com)，20刀能打1200分钟。手机/电话卡：国内手机卡有两种选择，一是停机，二是开国际漫游。建议至少开一个月的国际漫游，这样到了美国之后方便与接机的人联络，也便于给家人报平安。彻底停掉手机的同学可以先买Prepaid\n                      电话卡（淘宝上有卖），过来之后可以用别人的手机或者公用电话联络。\n                    </p>\n                    <p>\n                      3)相机，优盘和移动硬盘\n                    </p>\n                    <p>\n                      一般都是来了这边再买。网上有便宜的Deal,例如www.dealsea.com。国内有了就自己带过来吧。(小提示，买了Macbook系列的同学们，苹果的移动硬盘和Windows不兼容，需要装一个APP，不需要重新买一个Apple的移动硬盘。)\n                    </p>\n                    <p>\n                      家用电器\n                    </p>\n                    <p>\n                      只要是电器，大部分都不用带，包括插座，一是电压和频率不一样，上面提到的电热毯，因为是电阻丝发热。倒是影响不太大，功率低点而已。二是只要你想得到的，在国内看到过的，这边基本都有，而且都很便宜！例如男生的刮胡刀，甚至包括女生用的卷头发器和直发器......满店都是。特别的，就是有人带国内的豆浆机过来，这个记得要和厂家说好换成美式的电插头。不过现在豆浆机这边也有卖。变压器记得带一个，如果是带自己在中国买的电脑来，一般需要变压器。\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"厨房用品/其他\">\n                    <b>1)锅:</b>\n                    <p>\n                      基本有都有,就是换成RMB贵点。高压锅是个累赘不用带,这边在Wal-Mart和亚马逊可以买得到,比较便宜。 还要根据住处的炉子情况来决定用什么锅,比如电炉子,用平底锅比较好。美国的火都不是很旺。这边煮牛肉要去血水,肉很难煮软。有了高压锅就 方便很多了,红烧肉20分钟柔软无比。还可以压土豆泥~凹形铁锅这边的没有国内的好,不怕麻烦的可以带一只不粘锅过来。但其实这边也有卖。电饭锅,千万不用带,这边又便宜又好用,网购店购皆可。\n                    </p>\n                    <p>\n                      2)菜刀/餐具:\n                    </p>\n                    <p>\n                      好的大菜刀和砍 骨头的刀可以带。这边很少卖宽刀的,有也不好用。买把好的过来。案板不用带。带个两三块钱的小磨刀石,可能有用。如果对碗有偏好,可以带一两只自己很喜欢的碗过来。还有筷子,可以带几根。没有要求的话,中国/亚洲超市一般也都买得到。\n                    </p>\n                    <p>\n                      压蒜器,刨皮刀这种小东西可以考虑带一个好用的。这边有卖就是不太好用。\n                    </p>\n                    <p>\n                      这边中国店调料还是很全的,基本应有尽有不用自带调料。\n                    </p>\n                    <p>2)护肤用品</p>\n                    <p>\n                      关于平时的生活用品卫生用品,比如,洗发水、沐浴露之类的就别带了,这里超市里 卖得很便宜。喜欢护肤品的,那你来到美国就来对地方了,就算没有sale的时候,价格也 比国内便宜很多,所以你的瓶瓶罐罐甚至都不用带了。这边只是亚洲牌子的比较少,不过 也可以网购。而如果你喜欢的是欧洲的牌子,比如Clarins啊Nuxe之类的,美国价格和国\n                      内差不多,但是如果你喜欢Clinique, EsteeLauder或者Lancome等的话,那你完全可以把 现在用的东西送人了,一身轻松地来到美国开始新的shopping历程吧,这边真是既便宜小 样又多。\n                    </p>\n                    <p>\n                      文具\n                    </p>\n                    <p>\n                      美国人用黑色圆珠笔和铅笔的比较多,习惯用水性笔的同学可以自己带几只;带自动铅笔的记得多带几盒笔芯。美国人习惯用大本子,A4纸那么大的,喜欢小本子的同学也请自备。然后,剪刀,美工刀,尺子等等都是有的,只是不漂亮,价格比起国内稍微贵一点点。文具这些其实用的不多,现在基本都电子化了,所以按自己喜欢带吧\n                    </p>\n                    <p>\n                      小礼品\n                    </p>\n                    <p>\n                      可以带一点中国结之类由中国特色的小礼物,可以送给喜欢的朋友和老师。7.手机/电话卡国内手机卡有两种选择,一是停机,二是开国际漫游。建议至少开一个月的国际漫游,这样到了美国之后方便与接机的人联络,也便于给家人报平安。彻底停掉手机的同学可以先买Prepaid电话卡(淘宝上有卖),过来之后可以用别人的手机或者公用电话联络.\n                    </p>\n                  </mat-tab>\n                </mat-tab-group>\n              </div>\n              <div *ngSwitchCase=\"'Flight'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <h3 align=\"left\">\n                  登机前准备\n                </h3>\n                <p>\n                  确保护照,i-20,钱,手机(联络工具)务必带好,其他关系不大。\n                </p>\n                <p>\n                  飞行及过境\n                </p>\n                <p>\n                  从起飞机场开始,流程是这样的:\n                </p>\n                <ul>\n                  <li>\n                    1. 国内机场换票托运登机\n                  </li>\n                  <li>\n                    2. 在飞行途中填i-94\n                  </li>\n                  <li>\n                    3. 到美国后第一个降落点下飞机,过海关交i-94;取行李,行李抽查,交行李\n                  </li>\n                  <li>\n                    4. 到达或继续飞往目的地\n                  </li>\n                </ul>\n                <p>\n                  在飞机上面空姐会分发进入美国移民局的I-94表格(十分重要)和美国海关的申报表如果大家有什么不会填,也可以找空姐MM们帮忙。对于美国公民、持美国绿卡的居民和美国护照的居民,可以不用填写I-94表格。按照美国规定,任何人通过飞机进入美国境内,其第一个降落点就是入境处。比如,从北京飞西雅图再转机到波士顿,西雅图就是入境口岸。下了飞机便是美国移民局(好像还有国土安全局)的检查点,就是边防。在这里他们会对你的I-94、护照、签证、I-20(对学生)进行检查。在排队的时候,会有一个人来检查你的文件,看东西填好没,还要填什\n                  么。这个地方的人很多,如果你搭乘下一班航班的时间很紧,你可以跟前面的人说,然后 先走。过边检的时候,移民局的人会问你一些问题,比如说你叫什么?来美国干什么?去哪个学校?专业是什么?为什么学这个专业?之类的问题。有点类似于签证的时候签证官的\n                  问题。因为这个不是签证,基本不会影响你入境。所以不需要回答的特别详细,大概一两 句就好了。只要你不是在移民局的黑名单或者不受欢迎的人名单里面的人,大概10-15分 钟就可以过去。然后是照相,按手印。在护照、签证、I-20、I-94上面盖章。然后会把I-94用订书机订在护照上面。I-94很重要,因为你出境要上缴I-94。而且上面也明确写着,如果\n                  你丢失了I-94,会对你下次进入美国造成一定的麻烦。还有,要注意在你的护照还有I20上写的留美时间是不是D/S\n                </p>\n                <p>\n                  下面就是提行李了。无论你是否转机,都要自己带着行李过海关。在海关的时候,和 国内一样,有两条通道。绿色的无申报通道和红色的申报通道。只要你说没有食物(主要是不要有肉)、土壤、植物,就有40%的几率不被打开行李。但是如果你说你没有以上东西在行李里面,却碰到了那60%的几率被要求打开行李,被发现了是要罚款的。\n                  出来海关,就有专门的工 作人员负责转运行李。交了行李就轻松了。然后进入转机大厅,要安检这里。脱鞋、脱皮带、从电脑包/书包拿出电脑(电脑要单独放一个小篮)。如果时间很急,可以跟保安说,然后走优 先通道。 如果你带的现金或者汇票(银行卡不算)价值超过1W美金,需要在海关填个表,然后就能过。希望大家在填写报关单的时候尽量实事求是,不懂可以问。美国的法制比国内健全,如果发现瞒报或者漏报,查出来会很麻烦的。\n                  TIPs: 随身带1-2支笔一路填表会方便很多。护照和I-20一定要放在容易拿出来的地方以便于入关检查。推荐立式的行李箱,这样可以一手拉两个另一手拉随身行李。到达波士顿以后手推车是收费的(小的5 USD,大的10\n                  USD,最好身上备有零钱),只有在入境过海关的时候手推车免费。 出来海关,就有专门的工作人员负责转运行李。交了行李就轻松了。然后进入转机大厅,要安检这里。脱鞋、脱皮 带、打开电脑(只是打开翻开,不用开电源)。如果时间很急,可以跟保安说,然后走优\n                  先通道。 然后就是转航班了。如果在加拿大转机,不在机场过夜不需要办理过境签证,不需要自己拿行李转机。建议大家都带上航程票,以免出现意外。如果你误机了,航空公司会为你免费安排一架新航班。(这个貌似是在买机票的时候要买误机保险的)不要着急。如果出现紧急情况当场无法处理,请与中国学生会联系。\n                  祝大家飞行顺利!\n                </p>\n                <h3 align=\"left\">\n                  到达\n                </h3>\n                <p>\n                  订了limo的联系limo,或到指定地方等待;订了学长姐接送的联系学长姐,或到指定地方等待。突发情况请联系CSSA。 如果是到波士顿Logan机场的同学可以打开无线,上网联系家人朋友。Logan机场的无线是免费的;一般美国机场没有免费无线。\n                </p>\n              </div>\n              <div *ngSwitchCase=\"'Before Term Begins'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <mat-tab-group>\n                  <mat-tab label=\"注册&选课\">\n                    <p>\n                      新生的I-20或者DS2019表格上会有明确的开学日期。 到WPI后请务必尽快到International House的Janice处报道,见Tom。\n                    </p>\n                    <p>\n                      去Health Center交体检表,工作人员会检查一下你填的表,她说ok你就可以走了;或者她会告诉你等邮件通知,也许需要补充资料。\n                    </p>\n                    <p>\n                      去East Hall一楼ID Office办ID。去之前可以洗漱打扮一下,美国都是当场拍照制卡的。所以想要ID照片美丽帅气,请打扮一下\n                    </p>\n                    <p>\n                      连接wpi-setup，打开网页按照流程下载安装程序后连接wpi-wireless就能上网了\n                    </p>\n                    <p>\n                      开通WPI邮箱:\n                      <a href=\"http://www.wpi.edu/Academics/CCC/Help/Audiences/incomingstudents.html\n                        \" target=\"_blank\">http://www.wpi.edu/Academics/CCC/Help/Audiences/incomingstudents.html\n                      </a>\n                    </p>\n                    <p>\n                      去自己系里报道,跟项目主管报个到,拿一张Degree/Study Plan,上面有学校官方推荐的选课目录。你可以根据自己的想法选课,但正式注课之前记得和项目主管或者到时讨论一下,咨询一下意见。\n                    </p>\n                    <p>\n                      注课有两种方式,去Registrar填表;网上注册。有些课程还必须亲自到学校的Registry (在Denials Hall)手动选,例如PhD的research学分。其他研究生课程网上注册就好,注册Banner地址:\n                      <a href=\"https://banner-as4.admin.wpi.edu/pls/prod/twbkwbis.P_WWWLogin\n                        \" target=\"_blank\">https://banner-as4.admin.wpi.edu/pls/prod/twbkwbis.P_WWWLogin\n                      </a>\n                    </p>\n                    <p>\n                      另外,如果有些课程已经选满,需要直接联系教授,请他亲自把你加到他的课程里。如果教授同意把你加进去，就拿着打印出来的课程单去找教授签字然后把单子送到registrar。 这个每个系的热门课不一样,可以先咨询一下到时或者老生们。\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"ESL (English as Second Language)\">\n                    <p>\n                      ESL好像不是每个院系都要上的,大家可以咨询一下老生。一般考试应该会在录取通知书上写。 需要参加语言测试,特别是有GA,TA工作的同学。去International House报道的时候,Janice会让你登记什么时候考试;记得准时去考试。\n                    </p>\n                    <p>\n                      尽早去登记考试，越早越容易过。考试不难，放平心态就好。\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"保险&SSN\">\n                    <b>保险</b>\n                    <p>\n                      保险有两种:(1)学校统一办的保险;(2)纽约大使馆旗下的保险。\n                    </p>\n                    <p>\n                      学校的保险好处在于出问题之后兑付有保障,速度比较快;不过比较贵。2011年秋季大约是1,100美元一年。大使馆的保险就比较便宜一点;不过可能因为中间隔着一个大使馆,程序上多一步对付速度就慢一点。大使馆的保险因为是近两年才出现的,所以暂时不确定到底他与学校保险的区别。我们在此也只是提供两种选择,请同学们自己斟酌购买。\n                    </p>\n                    <b>\n                      SSN\n                    </b>\n                    <p>\n                      凡是有GA,TA的同学都需要办SSN。刚开学的时候International House开一个SSN介绍会,教你怎么填申请表。之后需要你自己去SSA楼(Main Street附近)办理。\n                    </p>\n                  </mat-tab>\n                  <mat-label label=\"银行开户\">\n                    <p>\n                      Worcester这边主要的储蓄银行有Bank of America, Citi Bank, TD bank north, Sovereign Bank,Chase Bank等。储蓄利息稍有差别,不过由于金融危机,存款利率现在几乎为零。美国的银行一般分为全国性银行(如Bank\n                      of America,Citi Bank和chase bank)和地方性银行(TD bank north,Sovereign Bank等)。TD bank north,Sovereign Bank主要服务于美国东北部,办理他们的帐户和debit\n                      card一般只能在东北部使用。\n                    </p>\n                    <p>\n                      新生一般都去Park Ave上那家Bank of America开户(255 Park Ave, Worcester, MA),办借记卡(Debit Card,暂时也只能办借记卡);带着I-20,护照,学生ID就可以了。进去找客户经理办理,一人在一个小单间里的;Assistant\n                      manager相当热情,会给你把业务介绍个遍。然后BOA的卡你可以选择要不要把自己的照片放在借记卡上。填写收卡地址的时候如果还没有找到房子的同学,可以填学长学姐的地址,留好联系方式。\n                    </p>\n                    <p>\n                      BOA不收服务费有两种选择,一是永远保证savings account里面有300刀;第二种就是每个月在你指定的那一天从Checking Account转25美元刀Savings Account(你可以选择自动转,比较省心)。没满足这两点之一的话,服务费好像是6美元一个月;你下个月又满足条件了,服务费也不会收了。然后就是借记卡不要透支,透支一次扣至少35美元服务费。\n                    </p>\n                    <p>\n                      办卡整个过程非常轻松愉悦,就是时间有点长;过程中你只要输入密码和签名就可以了,申请材料什么的你就让他们填写。当没收到卡之前她会提供一个Temporary card,记住这个卡一样要个带VISA功能的,这样就不用每次都输入密码而是签名了(可以用中文签名,一样没问题)。\n                      收到卡后要按照安装流程去网站激活， 祝大家办卡办得顺利。\n                    </p>\n                    <p>\n                      刚刚办好的借记卡一般由eBanking Checking Account和Regular Saving Account组成,这是两种最初级的BOA账户.存款超过2000刀的还可以要求升级为Enhanced Checking Account,可以向银行免费要支票,方便付房租和学费.超过2500刀可以升级为Money\n                      Market Saving Account,每个月可以免费转账提款6次.\n                    </p>\n                  </mat-label>\n                  <mat-tab label=\"汇款&工资\">\n                    <b>汇款</b>\n                    <p>\n                      开好银行账户之后就可以汇款交学费了。首先,你需要提供给家人的信息有(以上面说的 BOA, Park Ave为例):\n                    </p>\n                    <ul>\n                      <li>\n                        银行名:Park View, Bank of America\n                      </li>\n                      <li>\n                        开户地:255 Park Avenue, Worcester, MA, 01609\n                      </li>\n                      <li>\n                        户主:San Zhang (张三)\n                      </li>\n                      <li>\n                        账号:1234 5678 9012(你的Checking或Savings的16位账号)\n                      </li>\n                      <li>\n                        户主地址:900 West St, Worcester, MA 01609(你开户时的地址)\n                      </li>\n                      <li>\n                        Routing number: 123 456 789(这个问银行要)\n                      </li>\n                      <li>\n                        Swift Code:xxxxxxxx (问银行要)\n                      </li>\n                    </ul>\n                    <p>\n                      交学费的时候这样交就可以了。今年学校信息有所更新,请提交表单的时候拿着学校网站上的汇款帮助信息向银行确认。(注意,表单上的学校地址也不正确,要以学校网站上的信息为准)学校网站可以提供电子支票的支付方式,当你来到美国,办理了借记卡后,可以通过美国银行的电子支票进行支付,也可以买银行的纸质支票进行支付。钱可以自己带一部分,然后从国内汇款到你在美国的银行账户里,也可以在国内银行开好汇票,带过来给银行,一般当天会到账一小部分,剩下的部分5个工作日左右到账,好处就是万一汇票丢失的话可以挂失。\n                    </p>\n                    <p>\n                      据我们所知,可以办建设银行的龙卡,好像是无年费的。中国建设银行是和美国银行(Bank ofAmerica)有友好关系的,于是建行用户如果向BOA电汇(wireless transfer)是免手续费的。这种方法需要你先有美国BOA的账户,因此此法可能不适用于第一次交学费。请不要小看手续费。两头都扣个百分之几是会造成很大的损失的。这种汇款之迅速,\n                      1天之内就可以收到。缺点就是每天汇不能大于2000美元,所以可以分几天汇,然后写一张支票交到Accounting Office,或者网上填写电子支票就可以教学费了。除此之外,建行龙卡在BOA的提款机提款500美金一下是无手续费的,必要时可以应急。据说成都建行没有汇款服务,但是有龙卡提款政策。所以各地同学请务必咨询当地建行政策。如果没有免收手续费政策,请不要在建设银行汇款而在中国\n                      银行。因为中国银行的汇率通常比建行低$0.005-0.006。 各大城市建行都有这个服务,问一下建行网点就行了,也不必要非得龙卡,具体是每个月每个BOA账号可汇4,000美元,每笔上限2,000美元,如果用钱多的可以让家长一人开一个建行再拿自己身份证开个一共三个账号,12,000美元怎么都够用了。为了保险,各位同学请亲自打电话或者去建行分行核实以上信息!!!\n                    </p>\n                    <b>\n                      工资\n                    </b>\n                    <p>\n                      有Graduate Assistant, Teaching Assistant的同学,带上I-20,学生ID,SSN,和银行账号去 Human Resource(Boynton Hall二楼)填表,建立工资账户。记得添一张Direct Deposit的单子,这样以后学校发的工资就可以之家打到你的银行账户里了。\n                    </p>\n                    <p>\n                      税表\n                    </p>\n                    <p>\n                      所有国际学生，如果在当年没有任何应申报收入，则只需要在6月15日(the due date (including extensions) for filing Form 1040NR or Form 1040NR-EZ)之前邮寄填写Form\n                      8843到以下地址。\n                    </p>\n                    <ul>\n                      <li>Department of the Treasury,</li>\n                      <li>\n                        Internal Revenue Service Center,\n                      </li>\n                      <li>\n                        Austin, TX 73301-0215\n                      </li>\n                    </ul>\n                    <p>\n                      如果当年有收入，根据不同的情况需要填写不同的表格，Form 1040NR or Form 1040NR-EZ，需在每年4月15日前填好相应税表寄出。有收入情况的税表比较复杂，每年Tax season，International House都会有关于税表的workshop，请留意IH网站。但这个workshop不教怎么填税表，只普及税表相关知识。具体税表怎么填可以到IH凭学生证号购买6刀的税表填写软件。这个软件会问你一些问题，然后你根据你的回答自动生成填好的表格，接下来只要签名就好啦。\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"手机入网及电话\">\n                    <p>\n                      千里传佳音,打电话是必不可少的。美国有AT&T, Verizon, T-Mobile, Sprint等几家大的 电信运营商。具体资费少有不同。对于酷爱旅游的同学们来说,外出游玩时一个可以上网的手机是十分必要的,以上几大运营商都提供可以上网的手机和plan,可以自行选择。\n                    </p>\n                    <p>\n                      选好了公司下一步是选择plan。新来的同学通常没有SSN和信用记录,如果新开一个 帐户的话,要交比较高的deposit,大概每个人500美元。不过开手机帐户可以增加信用记录,这是一个好处。如果为了省钱,那么最好的办法就是加入老生的Family\n                      Plan。Family Plan的意思是,老生作为户主拥有账户,然后多申请一个号码给新生。Family Plan的费用大概是20-30美元/人(用智能手机的话大概40-50美元/人);新开账户的话要40-50美元/人。不过具体也要看你办的Family\n                      Plan里面人越多约便宜。\n                    </p>\n                    <p>\n                      办好了手机就可以享受美国无比自由的通信了。美国没有漫游,所以在全国各地打电 话是一样的。 另外,大部分手机的plan,在晚上9点以后到第二天早上6点之前是免费的,周 六周日也是免费。所以用手机,可以在晚间和周末跟美国其他地方的朋友煲电话粥,联络感\n                      情。\n                    </p>\n                  </mat-tab>\n                  <mat-tab label=\"信用卡\">\n                    <p>\n                      美国的消费基本是用信用卡结算的,先刷卡,再还款。这样做的好处有几点:\n                    </p>\n                    <ul>\n                      <li>\n                        安全。因为你并没有把钱存在信用卡里,所以一旦有人盗用,你可以通知银行,waive掉 不属于你的花费。如果借记卡被盗用,就会损失很大了。\n                      </li>\n                      <li>\n                        信用卡通常有很多种优惠措施,有的会有折扣,比如有些学生信用卡开始六个月有5%的折扣,cash back,还有的可以积分换东西等等。\n                      </li>\n                      <li>\n                        积攒信用值,方便自己以后在美国贷款买东西(笔记本电脑,车,房子等)。当然信用卡也有问题,就是不容易控制自己的购买欲望。因为刷卡和支付现金的感觉 很不一样, 通常有了高额度的信用卡之后,花钱的速度会变快很多。\n                      </li>\n                    </ul>\n                    <p>\n                      言归正传,美国的信用卡种类实在太多,很难总结出最适合的一种,通常每个人有两 三张卡,一张有购物优惠,一张有加油或者吃饭优惠(一般会有1%-5%的cash back)等 等。大多数好的信用卡要等到有SSN之后,甚至要积累一定信用记录之后才可以申请的到。\n                    </p>\n                    <p>\n                      刚拿到SSN的同学可以去申请Bank of America的学生信用卡,在Park Ave上的那家支行就可以办理,这张信用卡申请的门槛比较低,限额不高。 当自己的信用值逐渐积累起来后,可以申请一些比较好的信用卡,比如American Express的Bluecash,Discover的More\n                      card等,这些信用卡除了cash back外,一般还有 一些其他服务,比如说垫付航空保险,部分租车保险或者积分赠送机票等\n                    </p>\n                    <p>\n                      但是要注意的是American Express和Discover的卡好多地方不收,所以申请一张master或者visa卡是很有必要的。 美国的金融体系十分发达,有很多理财的技巧,比如申请不同的信用卡组合使用。我 推荐MITBBS的Money板,里面有不少有用的信息,\n                      <a href=\"http://www.mitbbs.com/bbsdoc/Money.html\n                      \" target=\"_blank\">http://www.mitbbs.com/bbsdoc/Money.html</a>\n                    </p>\n                  </mat-tab>\n                </mat-tab-group>\n              </div>\n              <div *ngSwitchCase=\"'Life in WPI'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n                <mat-tab-group>\n                  <mat-tab label=\"学校设施\">\n                    <b>SNAP</b>\n                    <p>\n                      SNAP全称Security Night Assistance Patrol,是由学生驾驶学校汽车,在晚间提供住处 和学校之间通行的免费服务。简单的说,就是免费出租车。这项服务可以提供学校范围内1英里内任意住宅区和学校的接送服务。通常不提供包含商业地点(比如餐厅超市商场)的接送,但是好像是可以送最近的price\n                      chopper。除了1英里内的住宅区和学校内,还可以从Union Station接你回来,也可以送你 去那里。他们的工作时间是,冬季16点到凌晨4点,夏季18点到凌晨6点,具体时间会 可能有所变化,学校放假期间基本不工作。具体安排注意查收邮件,WPI邮箱。\n                      在校园内的紧急电话终端、校内分机上拨打6111或者用手机拨打508-831-6111,可以联通他们的“总台”。通常你会听到:”SNAP, your call has been recorded.”这时候你可以\n                      说”Hi, I need a ride from Union Station to Founder’s Hall”\n                    </p>\n                    <b>\n                      餐厅\n                    </b>\n                    <p>\n                      学校餐厅在Morgan Hall,也是吃自助大约11刀一个人。还有不推荐去的campus center，难吃且贵。最后Founder’s Hall有一个学校的Pub,提供美式dishes.\n                    </p>\n                    <b>\n                      体育健身\n                    </b>\n                    <p>\n                      学校体育设施开放时间:\n                      <a href=\"http://wpi.prestosports.com/navbar_white/facilities/11_12_Facility_Hours_C_and_D_Terms.pdf\n                      \" target=\"_blank\">http://wpi.prestosports.com/navbar_white/facilities/11_12_Facility_Hours_C_and_D_Terms.pdf\n                      </a>\n                    </p>\n                    <p>\n                      学校体育设施预约查询:\n                      <a href=\"http://wpi.prestosports.com/navbar_white/facilities/index\n\n                        \" target=\"_blank\">http://wpi.prestosports.com/navbar_white/facilities/index\n\n                      </a>\n                      To view the scheduled events底下的四个选项就是各个场馆的具体预约信息\n                    </p>\n                    <p>\n                      进GYM记得带ID！！！！\n                    </p>\n                    <ul>\n                      <li>\n                        健身房从一楼进去左边就是，二楼也有一些器械。\n                      </li>\n                      <li>\n                        乒乓球台四个(篮球场的一侧,移动看台后面)\n                      </li>\n                      <li>\n                        羽毛球场四个(在篮球场两侧,羽毛球网在移动看台后面,得自己搬运和架设)○壁球馆一个(从篮球馆侧面可以下去).\n                      </li>\n                      <li>\n                        游泳池在楼下。游泳池只有四道,长度60英尺 。游泳池旁边的有用板,脚蹼等都可以随便用。 ○网球场 。Salisbury St北面有一块,三片场子,地裂网塌。Park Ave西面,就是学校体育场的对面再往右一点有一块,六片场,地平网挺,而且这块场子是属于WPI,门口写着WPI学生教师优先\n                        。网球场有小半年都不开,因为下雪 。A/D term下午会有WPI网球课占用场地\n                      </li>\n                      <li>\n                        保龄球馆Gompei's Gutters。在体育馆背面,朝着Campus Center,一个小门。好像可以要免费券更衣室和浴室 。更衣室的衣橱(locker)可以申请,要一个密码锁(Combination Lock)。申请的地方就在更衣室的Harrington\n                        Auditorium那面的出口附近,不太好找。研究生申请得等一阵子才有消息。 浴室有冷热水,有浴液。(最好自己带浴液,这里的浴液不太好用)\n                      </li>\n                      <li>\n                        喜欢跑步的可以考虑一楼跑步机，楼上室内跑道，或者体育馆后面的室外跑道。\n                      </li>\n                    </ul>\n                    <b>学生社团</b>\n                    <p>\n                      <a href=\"http://www.wpi.edu/campuslife/clubs.html\n                      \" target=\"_blank\">http://www.wpi.edu/campuslife/clubs.html\n                      </a>\n                      <b>学生活动</b>\n                      <p>\n                        Student Government Association (SGA)活动表:\n                        <a href=\"https://scheduling.wpi.edu/wv3/wv3_servlet/urd/run/wv_event.DayList?evdt=20130509,evfilter=\n                        737296,ebdviewmode=list\n                        \n                        \" target=\"_blank\">https://scheduling.wpi.edu/wv3/wv3_servlet/urd/run/wv_event.DayList?evdt=20130509,evfilter= 737296,ebdviewmode=list\n                        </a>\n                      </p>\n                      <p>Graduate Student Government (GSG)活动表:\n                        <a href=\"https://orgsync.com/43823/events\" target=\"_blank\">https://orgsync.com/43823/events</a>\n                      </p>\n                      <b>关于WPI邮箱</b>\n                      <p>\n                        美国的习惯是用电子邮件联络,所以大家要养成查看自己邮箱的习惯。老师的通知,学校的活动,小组项目的进程可能都在你邮箱里;不要错过了!!!另外,收到重要邮件尽量回复一下,以表示你收到了。\n                      </p>\n                  </mat-tab>\n                </mat-tab-group>\n              </div>\n              <div *ngSwitchCase=\"'Come back to China'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Postscript'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Appendix'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n              <div *ngSwitchCase=\"'Acknowledgments'\">\n                <h2 align=\"right\">{{selected}}</h2>\n                <hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n              </div>\n            </article>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/new-students/new-students.component.ts":
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
var NewStudentsComponent = /** @class */ (function () {
    function NewStudentsComponent() {
        this.Indexs = [
            'Prelude',
            'Introduction',
            'Before come to America',
            'Flight',
            'Before Term Begins',
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
            template: __webpack_require__("../../../../../src/app/component/new-students/new-students.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/new-students/new-students.component.css"), __webpack_require__("../../../../../src/app/component/product/product.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], NewStudentsComponent);
    return NewStudentsComponent;
}());
exports.NewStudentsComponent = NewStudentsComponent;


/***/ }),

/***/ "../../../../../src/app/component/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</nav>\n\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>Sorry Page Not Found</h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t<h2>Not Found.</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<h1>\n\t\t\t\t\tPage not found!\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-footer></app-footer>\n\t</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/not-found/not-found.component.ts":
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
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/component/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;


/***/ }),

/***/ "../../../../../src/app/component/pick-up/pick-up.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a [routerLink]=\"['']\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/test'\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n      </div>\n    </nav>\n\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>AirPort Pick up!</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <h2>AirPort Pick up!</h2>\n            <p>If you find some bugs or have some suggestions, please contack us at: hbchenjh@gmail.com. We are hearing all the\n              time. your feedback makes our website better!\n            </p>\n          </div>\n        </div>\n        <div *ngIf=\"authService.isAuthenticated() else login\">\n          <h1>\n            For your safety, please add our CSSA member at:szx19951014 or L-T-H-123456. He will try his best to help you! Thanks!\n          </h1>\n        </div>\n        <ng-template #login>\n          <h4>\n            Please\n            <a id=\"login\" (click)=\"authService.login()\">Login</a> First to watch this section\n          </h4>\n        </ng-template>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/pick-up/pick-up.component.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
var PickUpComponent = /** @class */ (function () {
    function PickUpComponent(authService) {
        this.authService = authService;
    }
    PickUpComponent.prototype.ngOnInit = function () {
    };
    PickUpComponent = __decorate([
        core_1.Component({
            selector: 'app-pick-up',
            template: __webpack_require__("../../../../../src/app/component/pick-up/pick-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], PickUpComponent);
    return PickUpComponent;
}());
exports.PickUpComponent = PickUpComponent;


/***/ }),

/***/ "../../../../../src/app/component/product/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clx {\n    clear: both;\n}\n    .leftRs {\n        position: absolute;\n        margin: auto;\n        top: 0;\n        bottom: 0;\n        width: 50px;\n        height: 50px;\n        left: 0px;\n        z-index: 1;\n        display: none;\n    }\n    .rightRs {\n        position: absolute;\n        margin: auto;\n        top: 0;\n        bottom: 0;\n        width: 50px;\n        height: 50px;\n        right: 0;\n        z-index: 1;\n        display: none;\n    }\n    .mat-tab-label{\n        margin: 0 30px;\n    }\n    mat-list-item{\n        display: block;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/product/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div class=\"fh5co-loader\"></div>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a routerLink=\"\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</nav>\n\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>Product Details</h1>\n\t\t\t\t\t\t\t\t<h2>Our Goal is makeing your life much earier in WPI</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-10 col-md-offset-1\">\n\n\t\t\t\t\t\t<div class=\"carouselBox\">\n\t\t\t\t\t\t\t<div id=\"img1\">\n\t\t\t\t\t\t\t\t<ngx-carousel [inputs]=\"Config\">\n\t\t\t\t\t\t\t\t\t<ngx-item *ngFor=\"let img of imgUrl\" class=\"bannerStyle \" NgxCarouselItem>\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"img\" class=\"product\" alt=\"user\" width=\"100%\">\n\t\t\t\t\t\t\t\t\t</ngx-item>\n\t\t\t\t\t\t\t\t\t<i NgxCarouselPrev class=\"leftRs fa fa-arrow-left fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t<i NgxCarouselNext class=\"rightRs fa fa-arrow-right fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t</ngx-carousel>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clx\"></div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t\t\t<h2>{{name}}</h2>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\" class=\"btn btn-primary btn-outline btn-lg\">Post your Product to Sell</a>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t\t\t<mat-tab-group>\n\t\t\t\t\t\t\t\t<mat-tab label=\"Product detail\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t\t\t<p>Product Name: {{name}}</p>\n\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\n\t\t\t\t\t\t\t\t\t\t<p>Product Price : {{price}}$</p>\n\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\n\t\t\t\t\t\t\t\t\t\t<p>Product description: {{desc}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t\t<mat-tab label=\"Contact Info\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t\t\t\t\t\t\t<p>Contact information: {{contactInfo}}</p>\n\t\t\t\t\t\t\t\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\">\n\t\t\t\t\t\t\t\t\t\t\t<p>Post date: {{date}}</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</mat-tab>\n\t\t\t\t\t\t\t</mat-tab-group>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<app-footer></app-footer>\n\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/product/product-detail/product-detail.component.ts":
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
        core_1.Component({
            selector: 'app-product-detail',
            template: __webpack_require__("../../../../../src/app/component/product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/product/product-detail/product-detail.component.css")],
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, router_1.ActivatedRoute, router_1.Router])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;


/***/ }),

/***/ "../../../../../src/app/component/product/product-model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.ProductModel = ProductModel;


/***/ }),

/***/ "../../../../../src/app/component/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: \"Playfair Display\", serif;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.7;\n  color: #828282;\n  background: #fff;\n}\n#page {\n  position: relative;\n  overflow-x: hidden;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.offcanvas #page {\n  overflow: hidden;\n  position: absolute;\n}\n.offcanvas #page:after {\n  -webkit-transition: 2s;\n  transition: 2s;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 101;\n  background: rgba(0, 0, 0, 0.7);\n  content: \"\";\n}\na {\n  color: #d1c286;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\na:hover, a:active, a:focus {\n  color: #d1c286;\n  outline: none;\n  text-decoration: none;\n}\np {\n  margin-bottom: 20px;\n}\n.copyrights{\n    text-indent:-9999px;\n    height:0;\n    line-height:0;\n    font-size:0;\n    overflow:hidden;\n}\nh1, h2, h3, h4, h5, h6, figure {\n  color: #000;\n  font-family: \"Montserrat\", Arial, sans-serif;\n  font-weight: 400;\n  margin: 0 0 20px 0;\n}\n::-webkit-selection {\n  color: #fff;\n  background: #d1c286;\n}\n::-moz-selection {\n  color: #fff;\n  background: #d1c286;\n}\n::selection {\n  color: #fff;\n  background: #d1c286;\n}\n.fh5co-nav {\n  padding: 18px 0;\n  background: #fff;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-nav {\n    padding: 20px 0;\n  }\n}\n.fh5co-nav #fh5co-logo {\n  font-size: 20px;\n  margin: 0;\n  padding: 0;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-family: \"Montserrat\", Arial, sans-serif;\n}\n.fh5co-nav a {\n  padding: 5px 10px;\n  color: #000;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-nav .menu-1, .fh5co-nav .menu-2 {\n    display: none;\n  }\n}\n.fh5co-nav .menu-2 li.search {\n  float: left;\n  width: 83%;\n  font-family: \"Playfair Display\", serif;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  padding: 0;\n  margin: -5px 0 0 0;\n}\n.fh5co-nav .menu-2 li input[type=text] {\n  padding: 6px 10px;\n  width: 40%;\n  border: none;\n  float: right;\n  font-size: 13px;\n  margin-top: 4px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.fh5co-nav .menu-2 li input[type=text]:focus {\n  width: 100%;\n  outline: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.fh5co-nav .menu-2 li button {\n  margin-top: 4px;\n  padding: 5px;\n  background: transparent;\n  border: none;\n}\n.fh5co-nav .menu-2 li button i {\n  color: rgba(0, 0, 0, 0.5);\n}\n.fh5co-nav .menu-2 li button:hover, .fh5co-nav .menu-2 li button:focus {\n  background: transparent !important;\n}\n.fh5co-nav .menu-2 li button:hover i, .fh5co-nav .menu-2 li button:focus i {\n  color: black;\n}\n.fh5co-nav .menu-2 li.shopping-cart {\n  float: right;\n}\n.fh5co-nav .menu-2 li a.cart {\n  color: black;\n}\n.fh5co-nav .menu-2 li a.cart span {\n  position: relative;\n}\n.fh5co-nav .menu-2 li a.cart span small {\n  position: absolute;\n  top: -20px;\n  right: -15px;\n  padding: 10px 6px;\n  line-height: 0;\n  font-size: 11px;\n  background: #d1c286;\n  color: white;\n  border-radius: 50%;\n}\n.fh5co-nav ul {\n  padding: 0;\n  margin: 0;\n}\n.fh5co-nav ul li {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: inline-block;\n  font-family: \"Montserrat\", Arial, sans-serif;\n}\n.fh5co-nav ul li a {\n  font-size: 13px;\n  padding: 30px 10px;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.5);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.fh5co-nav ul li a:hover, .fh5co-nav ul li a:focus, .fh5co-nav ul li a:active {\n  color: black;\n}\n.fh5co-nav ul li a.cart {\n  color: black;\n}\n.fh5co-nav ul li a.cart span {\n  position: relative;\n}\n.fh5co-nav ul li a.cart span small {\n  position: absolute;\n  top: -20px;\n  right: -15px;\n  padding: 10px 6px;\n  line-height: 0;\n  font-size: 11px;\n  background: #d1c286;\n  color: white;\n  border-radius: 50%;\n}\n.fh5co-nav ul li.has-dropdown {\n  position: relative;\n}\n.fh5co-nav ul li.has-dropdown .dropdown {\n  width: 150px;\n  -webkit-box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);\n  box-shadow: 0px 14px 33px -9px rgba(0, 0, 0, 0.75);\n  z-index: 1002;\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  top: 40px;\n  left: 0;\n  text-align: left;\n  background: #000;\n  padding: 20px;\n  border-radius: 4px;\n  -webkit-transition: 0s;\n  transition: 0s;\n}\n.fh5co-nav ul li.has-dropdown .dropdown:before {\n  bottom: 100%;\n  left: 40px;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-bottom-color: #000;\n  border-width: 8px;\n  margin-left: -8px;\n}\n.fh5co-nav ul li.has-dropdown .dropdown li {\n  display: block;\n  margin-bottom: 7px;\n}\n.fh5co-nav ul li.has-dropdown .dropdown li:last-child {\n  margin-bottom: 0;\n}\n.fh5co-nav ul li.has-dropdown .dropdown li a {\n  padding: 2px 0;\n  display: block;\n  color: #999999;\n  line-height: 1.2;\n  text-transform: none;\n  font-size: 15px;\n}\n.fh5co-nav ul li.has-dropdown .dropdown li a:hover {\n  color: #fff;\n}\n.fh5co-nav ul li.has-dropdown:hover a, .fh5co-nav ul li.has-dropdown:focus a {\n  color: #000;\n}\n.fh5co-nav ul li.active > a {\n  color: #000 !important;\n}\n.fh5co-nav ul li .form-group {\n  border: 1px solid red;\n  width: 100%;\n}\n#fh5co-hero .btn {\n  font-size: 24px;\n}\n#fh5co-hero .btn.btn-primary {\n  padding: 14px 30px !important;\n}\n#fh5co-hero .flexslider {\n  border: none;\n  z-index: 1;\n  margin-bottom: 0;\n}\n#fh5co-hero .flexslider .slides {\n  position: relative;\n  overflow: hidden;\n}\n#fh5co-hero .flexslider .slides li {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  min-height: 700px;\n}\n#fh5co-hero .flexslider .flex-control-nav {\n  bottom: 40px;\n  z-index: 1000;\n}\n#fh5co-hero .flexslider .flex-control-nav li a {\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  width: 12px;\n  height: 12px;\n  cursor: pointer;\n}\n#fh5co-hero .flexslider .flex-control-nav li a.flex-active {\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.7);\n}\n#fh5co-hero .flexslider .flex-direction-nav {\n  display: none;\n}\n#fh5co-hero .flexslider .slider-text {\n  display: table;\n  opacity: 0;\n  min-height: 700px;\n}\n#fh5co-hero .flexslider .slider-text > .slider-text-inner {\n  display: table-cell;\n  vertical-align: middle;\n  min-height: 700px;\n}\n#fh5co-hero .flexslider .slider-text > .slider-text-inner h2 {\n  font-size: 24px;\n  font-weight: 400;\n  color: #000;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n@media screen and (max-width: 768px) {\n  #fh5co-hero .flexslider .slider-text > .slider-text-inner h2 {\n    font-size: 40px;\n  }\n}\n#fh5co-hero .flexslider .slider-text > .slider-text-inner .desc {\n  background: rgba(255, 255, 255, 0.9);\n  padding: 40px;\n}\n#fh5co-hero .flexslider .slider-text > .slider-text-inner .desc .price {\n  font-size: 14px;\n  letter-spacing: 3px;\n  display: block;\n  margin-bottom: 20px;\n}\n#fh5co-hero .flexslider .slider-text > .slider-text-inner .btn {\n  font-size: 18px;\n}\n#fh5co-hero .flexslider .slider-text > .slider-text-inner .fh5co-lead {\n  font-size: 20px;\n  color: #fff;\n}\n#fh5co-hero .flexslider .slider-text > .slider-text-inner .fh5co-lead .icon-heart {\n  color: #d9534f;\n}\n#fh5co-header,\n#fh5co-counter,\n.fh5co-bg {\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.fh5co-bg {\n  background-size: cover;\n  background-position: center center;\n  position: relative;\n  width: 100%;\n  float: left;\n  position: relative;\n}\n#fh5co-counter {\n  height: 500px;\n}\n#fh5co-counter .display-t,\n#fh5co-counter .display-tc {\n  height: 500px;\n  display: table;\n  width: 100%;\n}\n@media screen and (max-width: 992px) {\n  #fh5co-counter {\n    height: inherit;\n    padding: 7em 0;\n  }\n  #fh5co-counter .display-t,\n  #fh5co-counter .display-tc {\n    height: inherit;\n  }\n}\n@media screen and (max-width: 768px) {\n  #fh5co-counter {\n    height: inherit;\n    padding: 7em 0;\n  }\n  #fh5co-counter .display-t,\n  #fh5co-counter .display-tc {\n    height: inherit;\n  }\n}\n.fh5co-cover {\n  height: 800px;\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  position: relative;\n  float: left;\n  width: 100%;\n}\n.fh5co-cover .overlay {\n  z-index: 0;\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.2);\n}\n.fh5co-cover > .fh5co-container {\n  position: relative;\n  z-index: 10;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-cover {\n    height: 600px;\n  }\n}\n.fh5co-cover .display-t,\n.fh5co-cover .display-tc {\n  z-index: 9;\n  height: 900px;\n  display: table;\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-cover .display-t,\n  .fh5co-cover .display-tc {\n    height: 600px;\n  }\n}\n.fh5co-cover.fh5co-cover-sm {\n  height: 600px;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-cover.fh5co-cover-sm {\n    height: 400px;\n  }\n}\n.fh5co-cover.fh5co-cover-sm .display-t,\n.fh5co-cover.fh5co-cover-sm .display-tc {\n  height: 600px;\n  display: table;\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-cover.fh5co-cover-sm .display-t,\n  .fh5co-cover.fh5co-cover-sm .display-tc {\n    height: 400px;\n  }\n}\n.about-content {\n  margin-bottom: 7em;\n}\n.about-content img {\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  padding: 10px;\n}\n.about-content .desc {\n  margin-bottom: 3em;\n}\n.fh5co-staff {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.fh5co-staff img {\n  width: 170px;\n  margin-bottom: 20px;\n  border-radius: 50%;\n}\n.fh5co-staff h3 {\n  font-size: 24px;\n  margin-bottom: 5px;\n}\n.fh5co-staff p {\n  margin-bottom: 30px;\n}\n.fh5co-staff .role {\n  color: #bfbfbf;\n  margin-bottom: 30px;\n  font-weight: normal;\n  display: block;\n}\n.fh5co-social-icons {\n  margin: 0;\n  padding: 0;\n}\n.fh5co-social-icons li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: -moz-inline-stack;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n}\n.fh5co-social-icons li a {\n  display: -moz-inline-stack;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n  color: #d1c286;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.fh5co-social-icons li a i {\n  font-size: 20px;\n}\n.fh5co-contact-info ul {\n  padding: 0;\n  margin: 0;\n}\n.fh5co-contact-info ul li {\n  padding: 0 0 0 40px;\n  margin: 0 0 30px 0;\n  list-style: none;\n  position: relative;\n}\n.fh5co-contact-info ul li:before {\n  color: #d1c286;\n  position: absolute;\n  left: 0;\n  top: .05em;\n  font-family: 'icomoon';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.fh5co-contact-info ul li.address:before {\n  font-size: 30px;\n  content: \"\\E9D1\";\n}\n.fh5co-contact-info ul li.phone:before {\n  font-size: 23px;\n  content: \"\\E9F4\";\n}\n.fh5co-contact-info ul li.email:before {\n  font-size: 23px;\n  content: \"\\E9DA\";\n}\n.fh5co-contact-info ul li.url:before {\n  font-size: 23px;\n  content: \"\\E9AF\";\n}\n#fh5co-header .display-tc,\n#fh5co-counter .display-tc,\n.fh5co-cover .display-tc {\n  display: table-cell !important;\n  vertical-align: middle;\n}\n#fh5co-header .display-tc h1, #fh5co-header .display-tc h2,\n#fh5co-counter .display-tc h1,\n#fh5co-counter .display-tc h2,\n.fh5co-cover .display-tc h1,\n.fh5co-cover .display-tc h2 {\n  margin: 0;\n  padding: 0;\n  color: white;\n}\n#fh5co-header .display-tc h1,\n#fh5co-counter .display-tc h1,\n.fh5co-cover .display-tc h1 {\n  margin-bottom: 0px;\n  font-size: 60px;\n  line-height: 1.5;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n@media screen and (max-width: 768px) {\n  #fh5co-header .display-tc h1,\n  #fh5co-counter .display-tc h1,\n  .fh5co-cover .display-tc h1 {\n    font-size: 40px;\n  }\n}\n#fh5co-header .display-tc h2,\n#fh5co-counter .display-tc h2,\n.fh5co-cover .display-tc h2 {\n  font-size: 20px;\n  line-height: 1.5;\n  margin-bottom: 30px;\n  font-family: \"Playfair Display\", serif;\n}\n#fh5co-header .display-tc h2 a,\n#fh5co-counter .display-tc h2 a,\n.fh5co-cover .display-tc h2 a {\n  color: rgba(255, 255, 255, 0.7);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.6);\n}\n#fh5co-header .display-tc .btn,\n#fh5co-counter .display-tc .btn,\n.fh5co-cover .display-tc .btn {\n  padding: 15px 30px;\n  background: #d1c286 !important;\n  color: #fff;\n  border: none !important;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n#fh5co-header .display-tc .btn:hover,\n#fh5co-counter .display-tc .btn:hover,\n.fh5co-cover .display-tc .btn:hover {\n  background: #d1c286 !important;\n  -webkit-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75) !important;\n  box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75) !important;\n}\n#fh5co-header .display-tc .form-inline .form-group,\n#fh5co-counter .display-tc .form-inline .form-group,\n.fh5co-cover .display-tc .form-inline .form-group {\n  width: 100% !important;\n  margin-bottom: 10px;\n}\n#fh5co-header .display-tc .form-inline .form-group .form-control,\n#fh5co-counter .display-tc .form-inline .form-group .form-control,\n.fh5co-cover .display-tc .form-inline .form-group .form-control {\n  width: 100%;\n  background: #fff;\n  border: none;\n}\n#fh5co-counter {\n  text-align: center;\n}\n#fh5co-counter .counter {\n  font-size: 50px;\n  margin-bottom: 10px;\n  color: #000;\n  font-weight: 100;\n  display: block;\n}\n#fh5co-counter .counter-label {\n  margin-bottom: 0;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.5);\n  letter-spacing: 1px;\n  font-family: \"Montserrat\", Arial, sans-serif;\n}\n#fh5co-counter .feature-center {\n  padding: 40px 20px;\n  background: rgba(255, 255, 255, 0.8);\n}\n@media screen and (max-width: 768px) {\n  #fh5co-counter .feature-center {\n    margin-bottom: 50px;\n  }\n}\n#fh5co-counter .icon {\n  width: 70px;\n  height: 70px;\n  text-align: center;\n  background: #d1c286;\n  -webkit-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);\n  box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);\n  margin-bottom: 20px;\n}\n#fh5co-counter .icon i {\n  height: 70px;\n  color: #fff;\n}\n#fh5co-counter .icon i:before {\n  display: block;\n  text-align: center;\n  margin-left: 3px;\n}\n.fh5co-bg-section {\n  background: rgba(0, 0, 0, 0.05);\n}\n#fh5co-services,\n#fh5co-started,\n#fh5co-testimonial,\n#fh5co-started,\n#fh5co-product,\n#fh5co-about,\n#fh5co-contact,\n#fh5co-footer {\n  padding: 7em 0;\n  clear: both;\n}\n@media screen and (max-width: 768px) {\n  #fh5co-services,\n  #fh5co-started,\n  #fh5co-testimonial,\n  #fh5co-started,\n  #fh5co-product,\n  #fh5co-about,\n  #fh5co-contact,\n  #fh5co-footer {\n    padding: 3em 0;\n  }\n}\n.feature-center {\n  padding-left: 20px;\n  padding-right: 20px;\n  float: left;\n  width: 100%;\n  margin-bottom: 40px;\n}\n@media screen and (max-width: 768px) {\n  .feature-center {\n    margin-bottom: 50px;\n  }\n}\n.feature-center .desc {\n  padding-left: 180px;\n}\n.feature-center .icon {\n  width: 90px;\n  height: 90px;\n  background: #d1c286;\n  display: table;\n  text-align: center;\n  margin: 0 auto 30px auto;\n  border-radius: 50%;\n}\n.feature-center .icon i {\n  display: table-cell;\n  vertical-align: middle;\n  height: 90px;\n  font-size: 40px;\n  line-height: 40px;\n  color: #fff;\n}\n.feature-center p, .feature-center h3 {\n  margin-bottom: 30px;\n}\n.feature-center h3 {\n  text-transform: uppercase;\n  font-size: 15px;\n  letter-spacing: 1px;\n  font-weight: 600;\n}\n.product {\n  margin-bottom: 40px;\n}\n.product .product-grid {\n  background-size: cover;\n  background-position: top center;\n  background-repeat: no-repeat;\n  position: relative;\n  height: 350px;\n  margin-bottom: 20px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.product .product-grid .sale {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 10px;\n  z-index: 100;\n  background: #d1c286;\n  color: #fff;\n  border-radius: 50%;\n}\n.product .product-grid .inner {\n  display: table;\n  height: 350px;\n  width: 100%;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.3);\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n@media screen and (max-width: 768px) {\n  .product .product-grid .inner {\n    opacity: 1;\n    background: transparent;\n  }\n}\n.product .product-grid .inner p {\n  display: table-cell;\n  vertical-align: middle;\n}\n.product .product-grid .inner p .icon {\n  padding: 7px 10px;\n  color: #fff;\n  background: #d1c286;\n}\n.product .product-grid .inner p .icon:hover, .product .product-grid .inner p .icon:focus {\n  color: #d1c286;\n  background: #fff;\n}\n.product .desc h3 {\n  font-size: 14px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n  font-weight: bold;\n  line-height: 20px;\n}\n.product .desc h3 a {\n  color: #000;\n}\n.product .desc .price {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n.product:hover .product-grid, .product:focus .product-grid {\n  -webkit-box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\n  -ms-box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\n  -o-box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\n  box-shadow: 0px 10px 24px -7px rgba(0, 0, 0, 0.35);\n}\n.product:hover .inner, .product:focus .inner {\n  opacity: 1;\n}\n.product:hover .desc h3 a, .product:focus .desc h3 a {\n  color: #d1c286;\n}\n.product-carousel {\n  margin-bottom: 7em;\n}\n.fh5co-tabs .fh5co-tab-nav {\n  clear: both;\n  margin: 0 0 3em 0;\n  padding: 3px;\n  float: left;\n  width: 100%;\n  background: #f2f2f2;\n  border-radius: 4px;\n}\n.fh5co-tabs .fh5co-tab-nav li {\n  float: left;\n  margin: 0;\n  padding: 0;\n  width: 33.33%;\n  text-align: center;\n  list-style: none;\n  display: -moz-inline-stack;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n}\n.fh5co-tabs .fh5co-tab-nav li .icon {\n  font-size: 30px;\n}\n.fh5co-tabs .fh5co-tab-nav li a {\n  padding: 20px;\n  width: 100%;\n  float: left;\n  border-radius: 4px;\n  color: #b3b3b3;\n}\n.fh5co-tabs .fh5co-tab-nav li a:hover {\n  color: #4d4d4d;\n}\n.fh5co-tabs .fh5co-tab-nav li.active a {\n  background: #fff;\n  color: #d1c286;\n}\n.fh5co-tabs .fh5co-tab-content-wrap {\n  clear: both;\n  position: relative;\n  top: 70px;\n}\n.fh5co-tabs .fh5co-tab-content-wrap .tab-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  opacity: 0;\n  visibility: hidden;\n}\n.fh5co-tabs .fh5co-tab-content-wrap .tab-content.active {\n  opacity: 1;\n  visibility: visible;\n}\n.fh5co-tabs .fh5co-tab-content-wrap .tab-content .price {\n  letter-spacing: 2px;\n  border: 2px solid #d1c286;\n  display: inline-block;\n  margin-bottom: 20px;\n  padding: 7px 20px 10px 20px;\n}\n.fh5co-tabs .fh5co-tab-content-wrap ul {\n  padding: 0;\n  margin: 0;\n  margin-bottom: 3em;\n}\n.fh5co-tabs .fh5co-tab-content-wrap ul li {\n  list-style: none;\n  margin-bottom: 20px;\n  position: relative;\n  padding-left: 30px;\n}\n.fh5co-tabs .fh5co-tab-content-wrap ul li:before {\n  font-family: 'icomoon';\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: '\\E116';\n}\n.fh5co-tabs .fh5co-tab-content-wrap .feed {\n  width: 100%;\n  float: left;\n  margin-bottom: 7em;\n}\n.fh5co-tabs .fh5co-tab-content-wrap .feed > div {\n  width: 100%;\n  float: left;\n  margin-bottom: 1em;\n}\n.fh5co-tabs .fh5co-tab-content-wrap .feed > div blockquote {\n  border-left: 0;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.04);\n}\n.fh5co-tabs .fh5co-tab-content-wrap .feed > div h3 {\n  font-family: \"Playfair Display\", serif;\n  font-size: 18px;\n  display: inline-block;\n  padding-right: 20px;\n}\n.fh5co-tabs .fh5co-tab-content-wrap .feed > div .rate {\n  color: #ffba00;\n}\n.fh5co-tabs .icon-xlg {\n  font-size: 400px;\n  margin-bottom: 30px;\n  text-align: center;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-tabs .icon-xlg {\n    font-size: 300px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .fh5co-tabs .icon-xlg {\n    font-size: 200px;\n  }\n}\n.fh5co-tabs .icon-xlg i {\n  color: #d1c286;\n}\n.fh5co-heading {\n  margin-bottom: 5em;\n}\n.fh5co-heading.fh5co-heading-sm {\n  margin-bottom: 2em;\n}\n.fh5co-heading h2 {\n  font-size: 24px;\n  margin-bottom: 20px;\n  line-height: 1.5;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #000;\n}\n.fh5co-heading p {\n  font-size: 18px;\n  line-height: 1.5;\n  color: #828282;\n}\n.fh5co-heading span {\n  display: block;\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 2px;\n  font-family: \"Montserrat\", Arial, sans-serif;\n}\n#fh5co-testimonial {\n  background: #efefef;\n}\n#fh5co-testimonial .testimony-slide {\n  text-align: center;\n}\n#fh5co-testimonial .testimony-slide span {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-weight: 700;\n  display: block;\n}\n#fh5co-testimonial .testimony-slide figure {\n  margin-bottom: 10px;\n  display: -moz-inline-stack;\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n}\n#fh5co-testimonial .testimony-slide figure img {\n  width: 100px;\n  border-radius: 50%;\n}\n#fh5co-testimonial .testimony-slide blockquote {\n  border: none;\n  margin: 30px auto;\n  width: 50%;\n  position: relative;\n  padding: 0;\n}\n@media screen and (max-width: 992px) {\n  #fh5co-testimonial .testimony-slide blockquote {\n    width: 100%;\n  }\n}\n#fh5co-testimonial .arrow-thumb {\n  position: absolute;\n  top: 40%;\n  display: block;\n  width: 100%;\n}\n#fh5co-testimonial .arrow-thumb a {\n  font-size: 32px;\n  color: #dadada;\n}\n#fh5co-testimonial .arrow-thumb a:hover, #fh5co-testimonial .arrow-thumb a:focus, #fh5co-testimonial .arrow-thumb a:active {\n  text-decoration: none;\n}\n#fh5co-started {\n  background: #d1c286;\n}\n#fh5co-started .fh5co-heading h2 {\n  color: #fff;\n  margin-bottom: 20px !important;\n}\n#fh5co-started .fh5co-heading p {\n  color: rgba(255, 255, 255, 0.6);\n}\n#fh5co-started .form-control {\n  background: rgba(255, 255, 255, 0.2);\n  border: none !important;\n  color: #fff;\n  font-size: 16px !important;\n  width: 100%;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n#fh5co-started .form-control::-webkit-input-placeholder {\n  color: #fff;\n}\n#fh5co-started .form-control:-moz-placeholder {\n  /* Firefox 18- */\n  color: #fff;\n}\n#fh5co-started .form-control::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #fff;\n}\n#fh5co-started .form-control:-ms-input-placeholder {\n  color: #fff;\n}\n#fh5co-started .form-control:focus {\n  background: rgba(255, 255, 255, 0.3);\n}\n#fh5co-started .btn {\n  height: 54px;\n  border: none !important;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 400;\n  padding-left: 50px;\n  padding-right: 50px;\n}\n#fh5co-started .form-inline .form-group {\n  width: 100% !important;\n  margin-bottom: 10px;\n}\n#fh5co-started .form-inline .form-group .form-control {\n  width: 100%;\n}\n#fh5co-footer {\n  background: #efefef;\n}\n#fh5co-footer .fh5co-footer-links {\n  padding: 0;\n  margin: 0;\n}\n#fh5co-footer .fh5co-footer-links li {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n#fh5co-footer .fh5co-footer-links li a {\n  color: #000;\n  text-decoration: none;\n}\n#fh5co-footer .fh5co-footer-links li a:hover {\n  text-decoration: underline;\n}\n#fh5co-footer .fh5co-widget {\n  margin-bottom: 30px;\n}\n@media screen and (max-width: 768px) {\n  #fh5co-footer .fh5co-widget {\n    text-align: left;\n  }\n}\n#fh5co-footer .fh5co-widget h3 {\n  margin-bottom: 15px;\n  font-weight: bold;\n  font-size: 15px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n#fh5co-footer .copyright .block {\n  display: block;\n}\n#map {\n  height: 500px;\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n  #map {\n    height: 400px;\n  }\n}\n@media screen and (max-width: 480px) {\n  #map {\n    height: 200px;\n  }\n}\n#fh5co-offcanvas {\n  position: absolute;\n  z-index: 1901;\n  width: 270px;\n  background: black;\n  top: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding: 45px 40px 40px 40px;\n  overflow-y: auto;\n  display: none;\n  -webkit-transform: translateX(270px);\n  transform: translateX(270px);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n@media screen and (max-width: 768px) {\n  #fh5co-offcanvas {\n    display: block;\n  }\n}\n.offcanvas #fh5co-offcanvas {\n  -webkit-transform: translateX(0px);\n  transform: translateX(0px);\n}\n#fh5co-offcanvas a {\n  color: rgba(255, 255, 255, 0.5);\n}\n#fh5co-offcanvas a:hover {\n  color: rgba(255, 255, 255, 0.8);\n}\n#fh5co-offcanvas ul {\n  padding: 0;\n  margin: 0;\n}\n#fh5co-offcanvas ul li {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n#fh5co-offcanvas ul li.search {\n  float: left;\n  width: 100%;\n  font-family: \"Playfair Display\", serif;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  padding: 0;\n  margin: 5px 0 0 0;\n}\n#fh5co-offcanvas ul li input[type=text] {\n  padding: 6px 10px;\n  width: 100%;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  float: right;\n  font-size: 13px;\n  margin-top: 4px;\n  background: transparent;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n#fh5co-offcanvas ul li input[type=text]:focus {\n  width: 100%;\n  outline: none;\n}\n#fh5co-offcanvas ul li button {\n  margin-top: 4px;\n  padding: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  margin-left: 1px;\n}\n#fh5co-offcanvas ul li button i {\n  color: rgba(255, 255, 255, 0.5);\n}\n#fh5co-offcanvas ul li button:hover, #fh5co-offcanvas ul li button:focus {\n  background: transparent !important;\n}\n#fh5co-offcanvas ul li button:hover i, #fh5co-offcanvas ul li button:focus i {\n  color: white;\n}\n#fh5co-offcanvas ul li.shopping-cart {\n  float: left;\n}\n#fh5co-offcanvas ul li a.cart {\n  display: block;\n  margin-top: 30px;\n  color: rgba(255, 255, 255, 0.5);\n}\n#fh5co-offcanvas ul li a.cart span {\n  position: relative;\n}\n#fh5co-offcanvas ul li a.cart span small {\n  position: absolute;\n  top: -20px;\n  right: -15px;\n  padding: 10px 6px;\n  line-height: 0;\n  font-size: 11px;\n  background: #d1c286;\n  color: white;\n  border-radius: 50%;\n}\n#fh5co-offcanvas ul li > ul {\n  padding-left: 20px;\n  display: none;\n}\n#fh5co-offcanvas ul li.offcanvas-has-dropdown > a:after {\n  position: absolute;\n  right: 0px;\n  font-family: 'icomoon';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\E921\";\n  font-size: 20px;\n  color: rgba(255, 255, 255, 0.2);\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n#fh5co-offcanvas ul li.offcanvas-has-dropdown.active a:after {\n  -webkit-transform: rotate(-180deg);\n  transform: rotate(-180deg);\n}\n.uppercase {\n  font-size: 14px;\n  color: #000;\n  margin-bottom: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n@media screen and (max-width: 768px) {\n  .fh5co-nav-toggle {\n    display: block;\n  }\n}\n.btn {\n  margin-right: 4px;\n  margin-bottom: 4px;\n  font-family: \"Montserrat\", Arial, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  border-radius: 2px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  padding: 8px 20px;\n}\n.btn.btn-md {\n  padding: 8px 20px !important;\n}\n.btn.btn-lg {\n  padding: 18px 36px !important;\n}\n.btn:hover, .btn:active, .btn:focus {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  outline: none !important;\n}\n.btn-primary {\n  background: #d1c286;\n  color: #fff;\n  border: 2px solid #d1c286;\n}\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  background: #d8cb98 !important;\n  border-color: #d8cb98 !important;\n}\n.btn-primary.btn-outline {\n  background: transparent;\n  color: #d1c286;\n  border: 2px solid #d1c286;\n}\n.btn-primary.btn-outline:hover, .btn-primary.btn-outline:focus, .btn-primary.btn-outline:active {\n  background: #d1c286;\n  color: #fff;\n}\n.btn-success {\n  background: #5cb85c;\n  color: #fff;\n  border: 2px solid #5cb85c;\n}\n.btn-success:hover, .btn-success:focus, .btn-success:active {\n  background: #4cae4c !important;\n  border-color: #4cae4c !important;\n}\n.btn-success.btn-outline {\n  background: transparent;\n  color: #5cb85c;\n  border: 2px solid #5cb85c;\n}\n.btn-success.btn-outline:hover, .btn-success.btn-outline:focus, .btn-success.btn-outline:active {\n  background: #5cb85c;\n  color: #fff;\n}\n.btn-info {\n  background: #5bc0de;\n  color: #fff;\n  border: 2px solid #5bc0de;\n}\n.btn-info:hover, .btn-info:focus, .btn-info:active {\n  background: #46b8da !important;\n  border-color: #46b8da !important;\n}\n.btn-info.btn-outline {\n  background: transparent;\n  color: #5bc0de;\n  border: 2px solid #5bc0de;\n}\n.btn-info.btn-outline:hover, .btn-info.btn-outline:focus, .btn-info.btn-outline:active {\n  background: #5bc0de;\n  color: #fff;\n}\n.btn-danger {\n  background: #d9534f;\n  color: #fff;\n  border: 2px solid #d9534f;\n}\n.btn-danger:hover, .btn-danger:focus, .btn-danger:active {\n  background: #d43f3a !important;\n  border-color: #d43f3a !important;\n}\n.btn-danger.btn-outline {\n  background: transparent;\n  color: #d9534f;\n  border: 2px solid #d9534f;\n}\n.btn-danger.btn-outline:hover, .btn-danger.btn-outline:focus, .btn-danger.btn-outline:active {\n  background: #d9534f;\n  color: #fff;\n}\n.btn-outline {\n  background: none;\n  border: 2px solid gray;\n  font-size: 16px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.btn-outline:hover, .btn-outline:focus, .btn-outline:active {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn.with-arrow:hover {\n  padding-right: 50px;\n}\n.btn.with-arrow:hover i {\n  color: #fff;\n  right: 18px;\n  visibility: visible;\n  opacity: 1;\n}\n.row-pb-md {\n  padding-bottom: 4em !important;\n}\n.row-pb-sm {\n  padding-bottom: 2em !important;\n}\n.pageButton {\n  margin: 0 auto;\n}\n.choice {\n  height: 600px;\n}\n.desc h3{\n  white-space: nowrap;\n  text-overflow:ellipsis;\n  overflow:hidden;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-3 col-xs-4 text-right hidden-xs menu-2\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"search\">\n\t\t\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search..\" [formControl]=\"searchBox\">\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>Others</h1>\n\t\t\t\t\t\t\t\t<h2>You can find Cars, bookshelf and almost everything here</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t<span>Cool Stuff</span>\n\t\t\t\t\t\t<h2>Others.</h2>\n\t\t\t\t\t\t<p>If you find some bugs or have some suggestions, please contack us at: hbchenjh@gmail.com. We are hearing all the time.\n\t\t\t\t\t\t\tyour feedback makes our website better!\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-4 text-center\" *ngFor=\"let product of allProducts | productSearch: searchValue | paginate: { id:'product', itemsPerPage: 6, currentPage: p }\">\n\t\t\t\t\t\t<div class=\"product\" (click)=\"ToProductDetail(product.id)\">\n\t\t\t\t\t\t\t<div class=\"product-grid\" [style.background-image]=\"'url('+product.imgUrl[0]+')'\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t\t\t{{product.name}}\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class=\"price\">{{product.price}}$</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<pagination-controls class=\"pageButton\" id=\"product\" (pageChange)=\"getPageNumber($event)\" maxSize=\"9\" directionLinks=\"true\"\n\t\t\t\t autoHide=\"true\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" screenReaderCurrentLabel=\"You're on page\">\n\t\t\t\t</pagination-controls>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-footer></app-footer>\n\t</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/product/product.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, router, activatedRouter) {
        this.productService = productService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.searchValue = '';
        this.allProducts = [];
        this.searchBox = new forms_1.FormControl();
        this.p = this.productService.getCurrentPage();
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
        this.subscriptionInput.unsubscribe();
    };
    ProductComponent.prototype.ToProductDetail = function (id) {
        this.productService.setCurrentPage(this.p);
        this.router.navigate(['/product-list', id]);
        this.productService.setCurrentPage(this.p);
    };
    ProductComponent.prototype.getPageNumber = function (event) {
        this.p = event;
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/component/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css")],
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, router_1.Router,
            router_1.ActivatedRoute])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-tab {\n    padding: 0px;\n    margin: 0px;\n    overflow: hidden;\n}\na {\n    cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    <div id=\"page\">\n        <nav class=\"fh5co-nav\" role=\"navigation\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-3 col-xs-2\">\n                        <div id=\"fh5co-logo\">\n                            <a [routerLink]=\"['']\">WPI.</a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n                        <ul>\n                            <li>\n                                <a [routerLink]=\"''\">Home</a>\n                            </li>\n                            <li>\n                                <a [routerLink]=\"'/house-list'\">House</a>\n                            </li>\n                            <li>\n                                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n                            </li>\n                            <li>\n                                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n                            </li>\n                            <li>\n                                <a [routerLink]=\"'/test'\">Contact</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n\n            </div>\n        </nav>\n\n        <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n            <div class=\"overlay\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 col-md-offset-2 text-center\">\n                        <div class=\"display-t\">\n                            <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                                <h1>Personnal Page</h1>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </header>\n\n        <div id=\"fh5co-product\">\n            <div class=\"container\">\n                <div class=\"row animate-box\">\n                    <div class=\"col-md-10 col-md-offset-2 text-center fh5co-heading\">\n                        <h2>Your sell list.</h2>\n                        <p>This section is still under construction, more function will come soon...\n                        </p>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-4 text-center\" *ngFor=\"let product of productModel\">\n                        <div class=\"product\">\n                            <div class=\"product-grid\" [style.background-image]=\"'url('+product.imgUrl[0]+')'\">\n                            </div>\n                            <div class=\"desc\">\n                                <h3>\n                                    <i>{{product.name}}</i>\n                                </h3>\n                                <span class=\"price\">{{product.price}}</span>\n                                <br>\n                                <i>\n                                    <a (click)=\"onDeleteProduct(product)\">Delete this ITEM</a>\n                                </i>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 text-center\" *ngFor=\"let book of bookModel\">\n                        <div class=\"product\">\n                            <div class=\"product-grid\" [style.background-image]=\"'url('+book.imgUrl[0]+')'\">\n                            </div>\n                            <div class=\"desc\">\n                                <h3>\n                                    <i>{{book.name}}</i>\n                                </h3>\n                                <span class=\"price\">{{book.price}}</span>\n                                <br>\n                                <i>\n                                    <a (click)=\"onDeleteBook(book)\">Delete this ITEM</a>\n                                </i>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 text-center\" *ngFor=\"let house of houseModel\">\n                        <div class=\"product\">\n                            <div class=\"product-grid\" [style.background-image]=\"'url('+house.imgUrl[0]+')'\">\n                            </div>\n                            <div class=\"desc\">\n                                <h3>\n                                    <i>{{house.Address}}</i>\n                                </h3>\n                                <span class=\"price\">{{house.price}}</span>\n                                <br>\n                                <i>\n                                    <a (click)=\"onDeleteHouse(house)\">Delete this ITEM</a>\n                                </i>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.ts":
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
var auth_service_1 = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
var book_service_1 = __webpack_require__("../../../../../src/app/Service/book-service.ts");
var product_service_1 = __webpack_require__("../../../../../src/app/Service/product-service.ts");
var house_service_1 = __webpack_require__("../../../../../src/app/Service/house-service.ts");
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
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/component/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, book_service_1.BookService, product_service_1.ProductService,
            house_service_1.HouseService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "../../../../../src/app/component/sell/sell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group{\n    width: 100%;\n  }\n  .plus {\n    height: 25px;\n    width: 40px;\n  }\n  h4 a {\n    cursor: pointer;\n  }\n  h4{\n    text-align: center;\n  }\n  ng-template{\n    margin: 0 auto;\n  }\n  #fileError{\n   color: red;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/sell/sell.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <div id=\"page\">\n    <nav class=\"fh5co-nav\" role=\"navigation\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3 col-xs-2\">\n            <div id=\"fh5co-logo\">\n              <a [routerLink]=\"['']\">WPI.</a>\n            </div>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-center menu-1\">\n            <ul>\n              <li>\n                <a [routerLink]=\"''\">Home</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/house-list'\">House</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/survival-guide'\">New Students</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/sell'\">Sell Your Product</a>\n              </li>\n              <li>\n                <a [routerLink]=\"'/test'\">Contact</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n    <header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2 text-center\">\n            <div class=\"display-t\">\n              <div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n                <h1>Sell Section</h1>\n                <h2>Your can Post your Product to Sell at Here</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </header>\n    <div id=\"fh5co-product\">\n      <div class=\"container\">\n        <div class=\"row animate-box\">\n          <div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n            <span>Cool Stuff</span>\n            <h2>Sell.</h2>\n            <p>If you find some bug or have some suggestions, please contack us at: hbchenjh@gmail.com. We are hearing all the\n              time. your feedback makes our website better!\n            </p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\" *ngIf=\"authService.isAuthenticated() else login\">\n                <mat-form-field class=\"form-group\">\n                  <mat-select placeholder=\"Product Type\" [formControl]=\"selected\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"type\" [(value)]=\"type\"\n                    required>\n                    <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n                      {{option}}\n                    </mat-option>\n                  </mat-select>\n                  <mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error>\n                  <mat-hint *ngIf=\"!selected.touched\">Please select your product type</mat-hint>\n                </mat-form-field>\n                <div *ngIf=\"isOthers(type)\">\n                  <form action=\"submit\">\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Product Name</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"name\" [formControl]=\"productNameError\" [errorStateMatcher]=\"matcher\" name=\"productName\" required>\n                      <mat-error *ngIf=\"productNameError.hasError('required')\">Product Name are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Product Price</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"price\" [formControl]=\"productPriceError\" [errorStateMatcher]=\"matcher\" name=\"productPrice\" required>\n                      <mat-error *ngIf=\"productPriceError.hasError('required')\">Product Price are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Contact Information</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"contactInfo\" [formControl]=\"productContactError\" [errorStateMatcher]=\"matcher\" name=\"productContact\"\n                        required>\n                      <mat-error *ngIf=\"productContactError.hasError('required')\">Contact Information are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input the date of today</i>\n                      </mat-placeholder>\n                      <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker3></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>create</mat-icon>\n                        <i> A Good Description make your product easy to sell</i>\n                      </mat-placeholder>\n                      <textarea [(ngModel)]=\"desc\" matInput matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" name=\"productDescp\">\n                      </textarea>\n                    </mat-form-field>\n                    <input type=\"file\" name=\"0\" (change)=\"onFileSelect($event)\">\n                    <p *ngIf=\"fileSizeError[0]\" id=\"fileError\">File error, file size must smaller than 1 MB, this file would not be uploaded, please select your file\n                      again, thanks</p>\n                    <p *ngIf=\"fileTypeError[0]\" id=\"fileError\">File error, file type must be jpg, png, bpm, this file would not be uploaded, jpeg, please select your\n                      file again, thanks</p>\n                    <div *ngFor=\"let time of names\">\n                      <input type=\"file\" [name]=\"time\" (change)=\"onFileSelect($event)\">\n                      <p *ngIf=\"checkFileError(time)\" id=\"fileError\">File error, file size must smaller than 1 MB, this file would not be uploaded, please select your file\n                        again, thanks</p>\n                      <p *ngIf=\"fileTypeError[time]\" id=\"fileError\">File error, file type must be jpg, png, bpm, this file would not be uploaded, jpeg, please select your\n                        file again, thanks</p>\n                    </div>\n                    <div *ngIf=\"plusSignal\" class=\"plus\">\n                      <i class=\"fa fa-plus\" aria-hidden=\"true\" (click)=\"onSecondSelect()\"></i>\n                    </div>\n                    <button *ngIf=\"!uploadProcess\" class=\"btn btn-primary\" (click)=\"upload()\" [disabled]=\"isBookDisable()\">Submit</button>\n                    <h3>\n                      {{ownerID}}\n                    </h3>\n                  </form>\n                </div>\n                <div *ngIf=\"isHouse(type)\">\n                  <form action=\"submit\">\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your House Address</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"address\" [formControl]=\"productNameError\" [errorStateMatcher]=\"matcher\" name=\"productName\" required>\n                      <mat-error *ngIf=\"productNameError.hasError('required')\">Product Name are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Rent fee (per Month)</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"price\" [formControl]=\"productPriceError\" [errorStateMatcher]=\"matcher\" name=\"productPrice\" required>\n                      <mat-error *ngIf=\"productPriceError.hasError('required')\">Product Price are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Contact Information</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"contactInfo\" [formControl]=\"productContactError\" [errorStateMatcher]=\"matcher\" name=\"productContact\"\n                        required>\n                      <mat-error *ngIf=\"productContactError.hasError('required')\">Contact Information are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input the house available date</i>\n                      </mat-placeholder>\n                      <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker3></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input the house contract end date</i>\n                      </mat-placeholder>\n                      <input matInput [matDatepicker]=\"picker4\" [value]=\"dateTo.value\" (dateChange) =\"getDate($event)\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker4></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>create</mat-icon>\n                        <i> You can provide other information which you think is necessary at here</i>\n                      </mat-placeholder>\n                      <textarea [(ngModel)]=\"desc\" matInput matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" name=\"productDescp\">\n                             </textarea>\n                    </mat-form-field>\n                    <input type=\"file\" name=\"0\" (change)=\"onFileSelect($event)\">\n                    <p *ngIf=\"fileSizeError[0]\" id=\"fileError\">File error, file size must smaller than 1 MB, this file would not be uploaded,please select your file\n                      again, thanks</p>\n                    <p *ngIf=\"fileTypeError[0]\" id=\"fileError\">File error, file type must be jpg, png, this file would not be uploaded, bpm, jpeg, please select your\n                      file again, thanks</p>\n                    <div *ngFor=\"let time of names\">\n                      <input type=\"file\" [name]=\"time\" (change)=\"onFileSelect($event)\">\n                      <p *ngIf=\"checkFileError(time)\" id=\"fileError\">File error, file size must smaller than 1 MB, please select your file again, thanks</p>\n                      <p *ngIf=\"fileTypeError[time]\" id=\"fileError\">File error, file type must be jpg, png, bpm, jpeg, please select your file again, thanks</p>\n                    </div>\n                    <div *ngIf=\"plusSignal\" class=\"plus\">\n                      <i class=\"fa fa-plus\" aria-hidden=\"true\" (click)=\"onSecondSelect()\"></i>\n                    </div>\n                    <button *ngIf=\"!uploadProcess\" class=\"btn btn-primary\" (click)=\"upload()\" [disabled]=\"isBookDisable()\">Submit</button>\n                    <h3>\n                      {{ownerID}}\n                    </h3>\n                  </form>\n                </div>\n                <!--demand list-->\n                <div *ngIf=\"isDemand(type)\">\n                  <form action=\"submit\">\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please tell us what you want</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"name\" [formControl]=\"productNameError\" [errorStateMatcher]=\"matcher\" name=\"productName\" required>\n                      <mat-error *ngIf=\"productNameError.hasError('required')\">Product Name are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Contact Information</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"contactInfo\" [formControl]=\"productContactError\" [errorStateMatcher]=\"matcher\" name=\"productContact\"\n                        required>\n                      <mat-error *ngIf=\"productContactError.hasError('required')\">Contact Information are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>create</mat-icon>\n                        <i> You can provide other information which you think is necessary at here</i>\n                      </mat-placeholder>\n                      <textarea [(ngModel)]=\"desc\" matInput matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" name=\"productDescp\">\n                             </textarea>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input the date of today</i>\n                      </mat-placeholder>\n                      <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker3></mat-datepicker>\n                    </mat-form-field>\n                    <button *ngIf=\"!uploadProcess\" class=\"btn btn-primary\" (click)=\"addProduct(type)\" [disabled]=\"isDemandDisable()\">Submit</button>\n                    <h3>\n                      {{ownerID}}\n                    </h3>\n                  </form>\n                </div>\n                <!--book section-->\n                <div *ngIf=\"isBook(type)\">\n                  <form action=\"submit\">\n                    <mat-form-field class=\"form-group\">\n                      <mat-select placeholder=\"Book Major\" [formControl]=\"selectedBook\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"department\"\n                        [(value)]=\"department\" required>\n                        <mat-option *ngFor=\"let department of Departments\" [value]=\"department\">\n                          {{department}}\n                        </mat-option>\n                      </mat-select>\n                      <mat-error *ngIf=\"selectedBook.hasError('required')\">You must make a selection</mat-error>\n                      <mat-hint *ngIf=\"!selectedBook.touched\">Please select your product type</mat-hint>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Book Name</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"name\" [formControl]=\"productNameError\" [errorStateMatcher]=\"matcher\" name=\"productName\" required>\n                      <mat-error *ngIf=\"productNameError.hasError('required')\">Product Name are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Book Price</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"price\" [formControl]=\"productPriceError\" [errorStateMatcher]=\"matcher\" name=\"productPrice\" required>\n                      <mat-error *ngIf=\"productPriceError.hasError('required')\">Product Price are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input your Contact Information</i>\n                      </mat-placeholder>\n                      <input matInput [(ngModel)]=\"contactInfo\" [formControl]=\"productContactError\" [errorStateMatcher]=\"matcher\" name=\"productContact\"\n                        required>\n                      <mat-error *ngIf=\"productContactError.hasError('required')\">Contact Information are Required</mat-error>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>\n                          create\n                        </mat-icon>\n                        <i>Please Input the date of today</i>\n                      </mat-placeholder>\n                      <input matInput [matDatepicker]=\"picker3\" [value]=\"date.value\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker3></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"form-group\" [floatLabel]=\"'always'\">\n                      <mat-placeholder>\n                        <mat-icon>create</mat-icon>\n                        <i> You can provide other information which you think is necessary at here</i>\n                      </mat-placeholder>\n                      <textarea [(ngModel)]=\"desc\" matInput matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" name=\"productDescp\">\n                             </textarea>\n                    </mat-form-field>\n                    <input type=\"file\" name=\"0\" (change)=\"onFileSelect($event)\">\n                    <p *ngIf=\"fileSizeError[0]\" id=\"fileError\">File error, file size must smaller than 1 MB, this file would not be uploaded, please select your file\n                      again, thanks</p>\n                    <p *ngIf=\"fileTypeError[0]\" id=\"fileError\">File error, file type must be jpg, png, bpm, this file would not be uploaded, jpeg, please select your\n                      file again, thanks</p>\n                    <div *ngFor=\"let time of names\">\n                      <input type=\"file\" [name]=\"time\" (change)=\"onFileSelect($event)\">\n                      <p *ngIf=\"checkFileError(time)\" id=\"fileError\">File error, file size must smaller than 1 MB, please select your file again, thanks</p>\n                      <p *ngIf=\"fileTypeError[time]\" id=\"fileError\">File error, file type must be jpg, png, bpm, jpeg, please select your file again, thanks</p>\n                    </div>\n                    <div *ngIf=\"plusSignal\" class=\"plus\" (click)=\"onSecondSelect(i)\">\n                      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                    </div>\n                    <button *ngIf=\"!uploadProcess\" class=\"btn btn-primary\" (click)=\"upload()\" [disabled]=\"isBookDisable()\">Submit</button>\n                    <h3>\n                      {{ownerID}}\n                    </h3>\n                  </form>\n                </div>\n                <mat-progress-spinner *ngIf=\"uploadProcess\" class=\"example-margin\" color=\"primary\" mode=\"indeterminate\" value=\"50\">\n                </mat-progress-spinner>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template #login>\n          <h4>\n            Please\n            <a id=\"login\" (click)=\"authService.login()\">Login</a> First to post your stuff to sell\n          </h4>\n        </ng-template>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/sell/sell.component.ts":
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
var demand_service_1 = __webpack_require__("../../../../../src/app/Service/demand.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/Service/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
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
        this.date = new forms_1.FormControl(new Date());
        this.dateTo = new forms_1.FormControl(new Date());
        this.fileSizeError = [];
        this.fileTypeError = [];
        this.uploadProcess = false;
        this.plusSignal = true;
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
            this.selectedFile[0] = null; // 5/4 update
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
            headers: new http_1.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token')),
            observe: 'events', reportProgress: true
        })
            .subscribe(function (res) {
            if (res.type === http_1.HttpEventType.UploadProgress) {
                _this.uploadProcess = true;
                //   console.log('uploading');
                //   console.log(res);
            }
            else if (res instanceof http_1.HttpResponse) {
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
            //    console.log(this.houseEnd);
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
            // console.log('wen jian qu xiao');
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
    SellComponent.prototype.getDate = function (event) {
        this.houseEnd = JSON.stringify(event.value);
        this.houseEnd = this.houseEnd.slice(1, 11);
        // console.log(this.houseEnd);
        // console.log(this.dateTo.value);
    };
    SellComponent = __decorate([
        core_1.Component({
            selector: 'app-sell',
            template: __webpack_require__("../../../../../src/app/component/sell/sell.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, house_service_1.HouseService, demand_service_1.DemandService,
            book_service_1.BookService, http_1.HttpClient, auth_service_1.AuthService, router_1.Router])
    ], SellComponent);
    return SellComponent;
}());
exports.SellComponent = SellComponent;


/***/ }),

/***/ "../../../../../src/app/component/success/success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</nav>\n\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>Success!</h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t\t<span>Cool Stuff</span>\n\t\t\t\t\t\t<h2>Success!.</h2>\n\t\t\t\t\t\t<p>If you find some bug or have some suggestions, please contack us at: hbchenjh@gmail.com. We are hearing all the time.\n\t\t\t\t\t\t\tyour feedback makes our website better!\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<h1>\n\t\t\t\t\tYour product has been uploaded successfully!\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-footer></app-footer>\n\t</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/success/success.component.ts":
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
var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(router) {
        this.router = router;
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        core_1.Component({
            selector: 'app-success',
            template: __webpack_require__("../../../../../src/app/component/success/success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css"), __webpack_require__("../../../../../src/app/component/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], SuccessComponent);
    return SuccessComponent;
}());
exports.SuccessComponent = SuccessComponent;


/***/ }),

/***/ "../../../../../src/app/component/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<div id=\"page\">\n\t\t<nav class=\"fh5co-nav\" role=\"navigation\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-3 col-xs-2\">\n\t\t\t\t\t\t<div id=\"fh5co-logo\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['']\">WPI.</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6 col-xs-6 text-center menu-1\">\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"''\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/house-list'\">House</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/survival-guide'\">New Students</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/sell'\">Sell Your Product</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/test'\">Contact</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t\t<header id=\"fh5co-header\" class=\"fh5co-cover fh5co-cover-sm\" role=\"banner\" style=\"background-image:url(../../assets/img_bg_2.jpg);\">\n\t\t\t<div class=\"overlay\"></div>\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center\">\n\t\t\t\t\t\t<div class=\"display-t\">\n\t\t\t\t\t\t\t<div class=\"display-tc animate-box\" data-animate-effect=\"fadeIn\">\n\t\t\t\t\t\t\t\t<h1>WPILIFE 升级公告 </h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</header>\n\t\t<div id=\"fh5co-product\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row animate-box\">\n\t\t\t\t\t<div class=\"col-md-8 col-md-offset-2 text-center fh5co-heading\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<h1 align=\"center\">WPILIFE 2018升级公告</h1>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Hi, welcome to our website: we are a group of geeks who believe we can use our technology to make our life\n\t\t\t\t\t\teasier at WPI。\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\tBefore you post your goods to this website, you need to sign up an account.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\tWPILIFE website just provides a platform for students and people who live around WPI. Please double check the quality of used\n\t\t\t\t\t\tgoods before you buy it.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\tNew students section has not been finish due to the final week, we promise to finish it as soon as possible。\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\tThe website is still in beta. If you have any suggestion or advice please contact us at: hbchenjh@gmail.com。\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\tIf you want to join our team: please send your resume to: hbchenjh@gmail.com. You are welcome to join our team!.\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<p align=\"right\">\n\t\t\t\t\tWPILIFE TEAM 4/20/2018\n\t\t\t\t</p>\n\t\t\t\t<hr style=\"height:1px;border:none;border-top:1px solid #555555;\" />\n\t\t\t\t<ul>\n\t\t\t\t\t<li>因原WPILIFE网站用户注册登陆系统失效并且开发时间已久，难以维护，所以WPI CSSA LIFETEAM 在2018 年2月决定开发新的网站，为大家带来更好的服务。\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t因采用了不同的登陆注册系统，故\n\t\t\t\t\t\t<span>原有账户密码全部失效</span>\n\t\t\t\t\t\t<strong>需要重新注册</strong>，为您带来的不便请谅解。\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t原网站所列的商品，新网站会在近期全部更新到网页上，如您的商品已出售，并且不希望继续在网页上展示，请发送邮件至：hbchenjh@gmail.com, 并注明商品内容（最好有截图）。谢谢！\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\tnew-students 板块因为要更新大量生活指南，目前还没有完工，我们会尽快完成剩余工作，请谅解。\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t网站尚处测试阶段，希望得到大家的支持，如有什么改进意见请发送至：hbchenjh@gmail.com，我们欢迎每一条意见与建议，您的建议使我们的网站更好。\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t如果您希望加入我们的开发队伍，服务同学，请发送您的简历至：hbchenjh@gmail.com.我们欢迎每个人的加入！\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<p align=\"right\">\n\t\t\t\t\tWPILIFE TEAM 4/20/2018\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<app-footer></app-footer>\n\t</div>\n</body>"

/***/ }),

/***/ "../../../../../src/app/component/test/test.component.ts":
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
/** Error when invalid control is dirty, touched, or submitted. */
var TestComponent = /** @class */ (function () {
    function TestComponent() {
        //  auth.handleAuthentication();
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        core_1.Component({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/component/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
    production: true
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