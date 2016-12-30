System.register(['angular2/core', '../../services/users.service', '../../static_type/user.model', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, users_service_1, user_model_1, http_1;
    var SignPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            'angular2/common';
            SignPageComponent = (function () {
                function SignPageComponent(_userpageService, http) {
                    this._userpageService = _userpageService;
                    this.http = http;
                    this.isSignUp = false;
                    this.checkingUser = false;
                    this.today = new Date().toString();
                    this.defaultAvatarUrl = 'http://i0.kym-cdn.com/photos/images/facebook/000/588/854/646.gif'; //doge
                }
                SignPageComponent.prototype.ngOnInit = function () {
                };
                SignPageComponent.prototype.showSnackbar = function (status) {
                    if (status) {
                        var x = document.getElementById('snackbarSuccess');
                    }
                    else
                        var x = document.getElementById('snackbarFailure');
                    x.className = "show";
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                };
                //SignIn
                SignPageComponent.prototype.signIn = function (form) {
                    console.log(form);
                };
                //SignUp
                SignPageComponent.prototype.signUp = function (form) {
                    var _this = this;
                    this.isSignUp = true;
                    var user = new user_model_1.User(form.value.usernameUp, //username
                    form.value.passwordUp, //password
                    form.value.email, //email
                    this.defaultAvatarUrl, //link to avatar
                    '', //Summary => now empty
                    form.value.usernameUp, //name of user (will edit later)
                    this.today, //Day sign up
                    0 //point
                    );
                    this._userpageService.signup(user)
                        .subscribe(function (data) {
                        console.log(data);
                        _this.showSnackbar(true);
                        _this.isSignUp = false;
                        //window.location.href = "/#/post/" + data.obj._id;
                    }, //Success
                    function (//Success
                        error) {
                        _this.isSignUp = false;
                        _this.showSnackbar(false);
                    } //Failure
                     //Failure
                    );
                };
                SignPageComponent.prototype.checkUsername = function (usernameUp) {
                    this.checkingUser = true;
                };
                SignPageComponent = __decorate([
                    core_1.Component({
                        selector: 'signpage',
                        templateUrl: 'app/forms/signpage/signpage.component.html',
                        providers: [users_service_1.UsersService],
                        styleUrls: ['assets/stylesheets/styles.css', 'assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css']
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService, http_1.Http])
                ], SignPageComponent);
                return SignPageComponent;
            }());
            exports_1("SignPageComponent", SignPageComponent);
        }
    }
});
//# sourceMappingURL=signpage.component.js.map