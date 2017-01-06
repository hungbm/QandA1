System.register(['angular2/http', '../services/users.service', 'angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var http_1, users_service_1, core_1, router_1;
    var LogoHeaderComponent;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LogoHeaderComponent = (function () {
                function LogoHeaderComponent(_userpageService, http) {
                    this._userpageService = _userpageService;
                    this.http = http;
                    this.isLoged = false;
                }
                LogoHeaderComponent.prototype.ngOnInit = function () {
                    this.token = localStorage.getItem('token');
                    if (typeof this.token !== 'undefined' && this.token !== null) {
                        this.isLoged = true;
                        this.name = localStorage.getItem('name');
                    }
                };
                LogoHeaderComponent.prototype.onLogout = function () {
                    this.isLoged = false;
                    this._userpageService.logout();
                    var link = location.href.replace(/.*\/\/[^\/]*/, '');
                    document.location.href = "/#/signpage";
                    if (new String(link).valueOf() == new String("/#/myprofile/").valueOf()) {
                        alert('here');
                    }
                };
                LogoHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'logoheader',
                        templateUrl: 'app/homepage/logoheader.component.html',
                        directives: [router_1.RouterLink],
                        providers: [users_service_1.UsersService],
                        styleUrls: ['assets/stylesheets/metro-bootstrap.css']
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService, http_1.Http])
                ], LogoHeaderComponent);
                return LogoHeaderComponent;
            }());
            exports_1("LogoHeaderComponent", LogoHeaderComponent);
        }
    }
});
//# sourceMappingURL=logoheader.component.js.map