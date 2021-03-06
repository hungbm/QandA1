System.register(['angular2/core', '../../services/askpage.service', '../../services/users.service', '../../static_type/question', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, askpage_service_1, users_service_1, question_1, http_1;
    var AskPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (askpage_service_1_1) {
                askpage_service_1 = askpage_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (question_1_1) {
                question_1 = question_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AskPageComponent = (function () {
                function AskPageComponent(_askpageService, _userService, http) {
                    this._askpageService = _askpageService;
                    this._userService = _userService;
                    this.http = http;
                    this.choosenTag = [];
                    this.today = new Date().toString();
                    //questions: topic[];
                    this.questions = [];
                }
                AskPageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (localStorage.getItem("token") === null) {
                        window.location.href = "/#/signpage/";
                    }
                    else {
                        this._askpageService.getTags()
                            .subscribe(function (data) {
                            _this.tags = data.obj;
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    $(function () {
                        $('[data-toggle="tooltip"]').tooltip();
                    });
                };
                AskPageComponent.prototype.onSubmit = function (form) {
                    //Check logged in or not
                    if (!this._userService.isLoggedIn()) {
                        window.location.href = "/#/signpage/";
                    }
                    var question = new question_1.Question(0, 0, this.today, false, false, localStorage.getItem('userId'), { title: form.value.title, content: form.value.content }, this.choosenTag);
                    //console.log(question);
                    this._askpageService.submitQuestion(question)
                        .subscribe(function (data) {
                        console.log(data);
                        window.location.href = "/#/post/" + data.obj._id;
                    }, //Success
                    function (//Success
                        error) { return console.error(error); } //Failure
                     //Failure
                    );
                };
                AskPageComponent.prototype.onlyUnique = function (value, index, self) {
                    return self.indexOf(value) === index;
                };
                AskPageComponent.prototype.addTag = function () {
                    var pickedTag = document.getElementById("pickTags").value;
                    this.choosenTag.push(pickedTag);
                    this.choosenTag = this.choosenTag.filter(this.onlyUnique);
                };
                AskPageComponent.prototype.deleteThis = function (a) {
                    this.choosenTag = this.choosenTag.filter(function (i) {
                        return i != a;
                    });
                };
                AskPageComponent = __decorate([
                    core_1.Component({
                        selector: 'askpage',
                        templateUrl: 'app/forms/askquestion/askpage.component.html',
                        styleUrls: ['assets/stylesheets/styles.css', 'assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css'],
                        providers: [askpage_service_1.AskPageService, users_service_1.UsersService]
                    }), 
                    __metadata('design:paramtypes', [askpage_service_1.AskPageService, users_service_1.UsersService, http_1.Http])
                ], AskPageComponent);
                return AskPageComponent;
            }());
            exports_1("AskPageComponent", AskPageComponent);
        }
    }
});
//# sourceMappingURL=askpage.component.js.map