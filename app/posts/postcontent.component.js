System.register(['angular2/core', '../services/homepage.service', '../services/post.service', 'angular2/router', 'angular2/http', '../static_type/answer'], function(exports_1, context_1) {
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
    var core_1, homepage_service_1, post_service_1, router_1, http_1, answer_1;
    var PostContentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (homepage_service_1_1) {
                homepage_service_1 = homepage_service_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (answer_1_1) {
                answer_1 = answer_1_1;
            }],
        execute: function() {
            PostContentComponent = (function () {
                function PostContentComponent(_postService, _routePrams) {
                    this._postService = _postService;
                    this._routePrams = _routePrams;
                    this.test = 1;
                    this.answers = [];
                    this.isLoading = false;
                    this.today = new Date().toString();
                }
                PostContentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // get content of topic
                    this._postService.getPost(this._routePrams.get("id"))
                        .subscribe(//(question: Question) =>{}
                    function (//(question: Question) =>{}
                        responseData) {
                        //console.log(question);
                        _this.question = responseData.obj;
                        _this.topic = responseData.obj;
                        _this.answers = responseData.answers;
                        console.log(_this.answers);
                    }, function (error) { return console.error(error); } //Failure
                     //Failure
                    );
                    // get content of Answer
                };
                PostContentComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.isLoading = true;
                    var answer = new answer_1.Answer('HungBM', 0, false, this.today, 'store_ID', form.value.comment);
                    this._postService.submitAnswer(answer, this._routePrams.get("id"))
                        .subscribe(function (data) {
                        console.log(data.obj._id);
                        _this.isLoading = false;
                        _this.showSnackbar();
                        _this.answers.push(answer);
                    }, //Success
                    function (//Success
                        error) {
                        console.error(error);
                        _this.isLoading = false;
                    } //Failure
                     //Failure
                    );
                    document.getElementById("commentForm").reset();
                };
                PostContentComponent.prototype.clearForm = function (form) {
                    document.getElementById("commentForm").reset();
                };
                PostContentComponent.prototype.showSnackbar = function () {
                    var x = document.getElementById("snackbar");
                    x.className = "show";
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                };
                PostContentComponent = __decorate([
                    core_1.Component({
                        selector: 'postcontent',
                        templateUrl: 'app/posts/postcontent.component.html',
                        providers: [post_service_1.PostService, homepage_service_1.HomeService, http_1.HTTP_PROVIDERS],
                        styleUrls: ['assets/stylesheets/styles.css', 'assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css']
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, router_1.RouteParams])
                ], PostContentComponent);
                return PostContentComponent;
            }());
            exports_1("PostContentComponent", PostContentComponent);
        }
    }
});
//# sourceMappingURL=postcontent.component.js.map