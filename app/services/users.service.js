System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'rxjs/add/operator/map', 'rxjs/operator/delay', 'rxjs/operator/mergeMap', 'rxjs/operator/switchMap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1;
    var UsersService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            UsersService = (function () {
                function UsersService(http) {
                    this.http = http;
                    this.user = [];
                    console.log('Users service Initialized...');
                }
                UsersService.prototype.getUsers = function () {
                    return this.http.get('/listuser/api')
                        .map(function (res) { return res.json(); });
                };
                UsersService.prototype.signup = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post('/signpage', body, { headers: headers })
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
                };
                UsersService.prototype.signin = function (user) {
                    var body = JSON.stringify(user);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post('/signpage', body, { headers: headers })
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
                };
                UsersService.prototype.logout = function () {
                    localStorage.clear();
                };
                UsersService.prototype.myprofile = function () {
                    var token = localStorage.getItem('token')
                        ? '?token=' + localStorage.getItem('token')
                        : '';
                    return this.http.get('/myprofile/api/' + localStorage.getItem('userId') + token)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
                };
                UsersService.prototype.isLoggedIn = function () {
                    return localStorage.getItem('token') !== null;
                };
                UsersService.prototype.updateInfo = function (user) {
                    var token = localStorage.getItem('token')
                        ? '?token=' + localStorage.getItem('token')
                        : '';
                    var body = JSON.stringify(user);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post('/myprofile' + token, body, { headers: headers })
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
                };
                UsersService.prototype.loadmore = function (tab, quantity) {
                    var token = localStorage.getItem('token')
                        ? '?token=' + localStorage.getItem('token')
                        : '';
                    var SoBanGhiDaCo = quantity
                        ? quantity
                        : 0;
                    return this.http.get('/myprofile/activities' + token + '&type=' + tab + '&quantity=' + quantity)
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
                };
                UsersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UsersService);
                return UsersService;
            }());
            exports_1("UsersService", UsersService);
        }
    }
});
//# sourceMappingURL=users.service.js.map