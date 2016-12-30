System.register(['angular2/core', 'angular2/http', '../services/users.service'], function(exports_1, context_1) {
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
    var core_1, http_1, users_service_1;
    var ListUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            }],
        execute: function() {
            ListUserComponent = (function () {
                function ListUserComponent(_usersService) {
                    var _this = this;
                    this._usersService = _usersService;
                    this.listuser = [];
                    this.pageSize = 10;
                    this.pagedPosts = [];
                    this._usersService.getUsers()
                        .subscribe(function (users) {
                        _this.listuser = users;
                        _this.pages = _.take(_this.listuser, _this.pageSize);
                        // if (this.leng<=10)  {
                        //     this.pages = 1;    
                        // }
                        // console.log(this.listuser);
                    });
                }
                ListUserComponent.prototype.onPageChange = function (page) {
                };
                ListUserComponent = __decorate([
                    core_1.Component({
                        selector: 'list-user',
                        template: "\n        <table>          \n            <tr>\n            <td >\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"active\"><a data-toggle=\"tab\" href=\"#participation\" class=\"btn\">T\u00EDch c\u1EF1c</a></li>\n                    <li ><a data-toggle=\"tab\" href=\"#newmembers\" class=\"btn \">M\u1EDBi tham gia</a></li>\n                </ul>\n\n                <div align=\"justify\" class=\"tab-content\" style=\"background-color:#ffffff;border: 1px solid #dddddd; border-top:0; \">\n                    <div  id=\"participation\" class=\"tab-pane fade in active\" >\n                    <table >\n                        <tr *ngFor=\"#user of listuser; #i = index\" *ngIf=\"i<=10\" >                \n                            <td   style= \"  padding: 2%;\">\n                                <div class=\"media\">\n                                    <div class=\"media-left\">\n                                        <a href=\"#\">\n                                            <img style= \"width:64px; heigh:64px;\" class=\"media-object\" src={{user.avatarUrl}} >\n                                        </a>\n                                    </div>\n                                    <div class=\"media-body\">\n                                        <h4 class=\"media-heading\">{{user.name}}</h4>\n                                       {{user.summary}}\n                                    </div>\n                                </div>\n                            </td>\n\n                       \n                        </tr>\n\n               \n                    </table>\n                    <ul class=\"pagination pull-right\">\n                        <li><a href=\"#\">\u00AB</a></li>\n                        <li><a href=\"#\">1</a></li>\n                        <li *ngIf=\"leng\" ><a href=\"#\">{{leng}}</a></li>                 \n                        <li><a href=\"#\">\u00BB</a></li>\n                    </ul>\n                    </div>\n                    <div id=\"newmembers\" class=\"tab-pane fade\">\n                    <table>\n                    \n                        <tr>\n                            <td style= \"width:30%; padding: 2%;\">\n                                <div class=\"media\">\n                                    <div class=\"media-left\">\n                                        <a href=\"#\">\n                                            <img style= \"width:64px; heigh:64px;\" class=\"media-object\" src=\"http://i1.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg\" >\n                                        </a>\n                                    </div>\n                                    <div class=\"media-body\">\n                                        <h4 class=\"media-heading\">Pepe the Frog</h4>\n                                        Pepe the Frog is an anthropomorphic frog character from the comic series Boy\u2019s Club by Matt Furie.\n                  \n                                    </div>\n                                </div>\n                            </td>\n\n                            <td style= \"width:30%; padding: 2%;\">\n                                <div class=\"media\">\n                                    <div class=\"media-left\">\n                                        <a href=\"#\">\n                                            <img style= \"width:64px; heigh:64px;\" class=\"media-object\" src=\"http://i1.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg\" >\n                                        </a>\n                                    </div>\n                                    <div class=\"media-body\">\n                                        <h4 class=\"media-heading\">Pepe the Frog</h4>\n                                        Pepe the Frog is an anthropomorphic frog character from the comic series Boy\u2019s Club by Matt Furie.\n                                    </div>\n                                </div>\n                            </td>\n\n                            <td style= \"width:30%; padding: 2%;\">\n                                <div class=\"media\">\n                                    <div class=\"media-left\">\n                                        <a href=\"#\">\n                                            <img style= \"width:64px; heigh:64px;\" class=\"media-object\" src=\"http://i1.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg\" >\n                                        </a>\n                                    </div>\n                                    <div class=\"media-body\">\n                                        <h4 class=\"media-heading\">Pepe the Frog</h4>\n                                        Pepe the Frog is an anthropomorphic frog character from the comic series Boy\u2019s Club by Matt Furie.\n                                    </div>\n                                </div>\n                            </td>\n                       \n                        </tr>\n\n                \n                    </table>\n                   \n                    <ul class=\"pagination pull-right\">\n                        <li><a href=\"#\">\u00AB</a></li>\n                        <li><a href=\"#\">1</a></li>\n                        <li><a href=\"#\">2</a></li>\n                        <li><a href=\"#\">3</a></li>\n                        <li><a href=\"#\">4</a></li>\n                        <li><a href=\"#\">5</a></li>\n                        <li><a href=\"#\">\u00BB</a></li>\n                    </ul>\n                    </div>\n                </div>\n                </td>\n              </tr>\n\n    </table>\n    ", providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                        styleUrls: ['assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css']
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService])
                ], ListUserComponent);
                return ListUserComponent;
            }());
            exports_1("ListUserComponent", ListUserComponent);
        }
    }
});
//# sourceMappingURL=listuser.component.js.map