System.register(['angular2/core', '../../services/users.service', 'angular2/http', './myprofile.pipe', '../../static_type/user.model', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, users_service_1, http_1, myprofile_pipe_1, user_model_1, router_1;
    var MyProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (myprofile_pipe_1_1) {
                myprofile_pipe_1 = myprofile_pipe_1_1;
            },
            function (user_model_1_1) {
                user_model_1 = user_model_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MyProfileComponent = (function () {
                function MyProfileComponent(_userpageService, http) {
                    this._userpageService = _userpageService;
                    this.http = http;
                    this.email = new String();
                    this.isEdit = false;
                }
                MyProfileComponent.prototype.onEdit = function () {
                    this.isEdit = !this.isEdit;
                };
                MyProfileComponent.prototype.formatDate = function (date) {
                    var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
                    if (month.length < 2)
                        month = '0' + month;
                    if (day.length < 2)
                        day = '0' + day;
                    return [month, year].join('/');
                };
                MyProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userpageService.myprofile()
                        .subscribe(function (data) {
                        console.log(data);
                        _this.avatarUrl = data.obj.avatarUrl;
                        _this.dateJoin = _this.formatDate(data.obj.dateJoin);
                        _this.email = data.obj.email;
                        _this.name = data.obj.name;
                        _this.point = data.obj.point;
                        _this.summary1 = data.obj.summary;
                        _this.listQuestion = data.listQuestion;
                        _this.listAnswers = data.listAnswers;
                        _this.listPost = _this.listQuestion.concat(_this.listAnswers);
                        _this.totalPost = data.listQuestion.length + data.listAnswers.length;
                        _this.totalCorrectAns = data.totalCorrectAns;
                        console.log(_this.listPost);
                    }, //Success
                    function (//Success
                        error) {
                        console.log(error);
                        document.location.href = '/';
                    } //Failure
                     //Failure
                    );
                };
                MyProfileComponent.prototype.showSnackbar = function (status) {
                    if (status === 'NewPassNotMatch') {
                        document.getElementById("snackbar").innerHTML = "Password mới không khớp nhau!";
                    }
                    else if (status === 'ChangeFailure') {
                        document.getElementById("snackbar").innerHTML = "Cập nhật thông tin thất bại!";
                    }
                    else if (status === 'ChangeSuccess') {
                        document.getElementById("snackbar").innerHTML = "Cập nhật thông tin thành công!";
                    }
                    var x = document.getElementById("snackbar");
                    x.className = "show";
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                };
                MyProfileComponent.prototype.updateInfo = function (form) {
                    var _this = this;
                    var name = "";
                    var avatar = "";
                    var summary = "";
                    var passwordUp = "";
                    if (form.value.passwordUp !== form.value.passwordRe) {
                        this.showSnackbar('NewPassNotMatch');
                        return;
                    }
                    form.value.usernameUp !== "" ? name = form.value.usernameUp : name = "";
                    form.value.avatar !== "" ? avatar = form.value.avatar : avatar = "";
                    form.value.summary !== "" ? summary = form.value.summary : summary = "";
                    form.value.passwordUp !== "" ? passwordUp = form.value.passwordUp : passwordUp = "";
                    var user = new user_model_1.User(localStorage.getItem('userId'), passwordUp, '', avatar, summary, name);
                    this._userpageService.updateInfo(user)
                        .subscribe(function (data) {
                        //console.log(data)
                        _this.showSnackbar('ChangeSuccess');
                        _this.avatarUrl = data.obj.avatarUrl;
                        _this.name = data.obj.name;
                        var temp = data.obj.summary;
                        _this.summary = temp.valueOf();
                    }, //Success
                    function (//Success
                        error) {
                        console.error(error);
                        _this.showSnackbar('ChangeFailure');
                    } //Failure
                     //Failure
                    );
                };
                MyProfileComponent.prototype.loadmore = function (tab) {
                    var _this = this;
                    if (tab === "all") {
                        this._userpageService.loadmore(tab, this.listPost.length)
                            .subscribe(function (data) {
                            _this.listPost = _this.listPost.concat(data.obj);
                            console.log(data);
                        }, //Success
                        function (//Success
                            error) {
                            console.error(error);
                        } //Failure
                         //Failure
                        );
                    }
                    else if (tab === "ans") {
                        this._userpageService.loadmore(tab, this.listAnswers.length)
                            .subscribe(function (data) {
                            console.log(data);
                            _this.listAnswers = _this.listAnswers.concat(data.obj);
                        }, //Success
                        function (//Success
                            error) {
                            console.error(error);
                        } //Failure
                         //Failure
                        );
                    }
                    else if (tab === "qus") {
                        this._userpageService.loadmore(tab, this.listQuestion.length)
                            .subscribe(function (data) {
                            console.log(data);
                            _this.listQuestion = _this.listQuestion.concat(data.obj);
                        }, //Success
                        function (//Success
                            error) {
                            console.error(error);
                        } //Failure
                         //Failure
                        );
                    }
                };
                MyProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'myprofile',
                        templateUrl: 'app/users/myprofile/myprofile.component.html',
                        providers: [users_service_1.UsersService],
                        directives: [router_1.RouterLink],
                        styleUrls: ['assets/stylesheets/styles.css', 'assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css'],
                        pipes: [myprofile_pipe_1.PostTitlePipe]
                    }), 
                    __metadata('design:paramtypes', [users_service_1.UsersService, http_1.Http])
                ], MyProfileComponent);
                return MyProfileComponent;
            }());
            exports_1("MyProfileComponent", MyProfileComponent);
        }
    }
});
//# sourceMappingURL=myprofile.component.js.map