System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/operator/delay', 'rxjs/operator/mergeMap', 'rxjs/operator/switchMap'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var HomeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {}],
        execute: function() {
            HomeService = (function () {
                function HomeService(http) {
                    this.http = http;
                    console.log('Home service Initialized...');
                }
                HomeService.prototype.getTopic = function () {
                    return this.http.get('/home')
                        .map(function (res) { return res.json(); });
                };
                HomeService.prototype.getUsers = function () {
                    return this.http.get('/listuser')
                        .map(function (res) { return res.json(); });
                };
                HomeService.prototype.getPost = function (id) {
                    return this.http.get('/post/' + id)
                        .map(function (res) { return res.json(); });
                };
                HomeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HomeService);
                return HomeService;
            }());
            exports_1("HomeService", HomeService);
        }
    }
});
//# sourceMappingURL=homepage.service.js.map