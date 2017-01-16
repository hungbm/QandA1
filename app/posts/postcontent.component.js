System.register(['angular2/core', '../services/homepage.service', '../services/post.service', '../services/users.service', 'angular2/router', 'angular2/http', '../static_type/answer', './postcontent.pipe'], function(exports_1, context_1) {
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
    var core_1, homepage_service_1, post_service_1, users_service_1, router_1, http_1, answer_1, postcontent_pipe_1, router_2;
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
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (answer_1_1) {
                answer_1 = answer_1_1;
            },
            function (postcontent_pipe_1_1) {
                postcontent_pipe_1 = postcontent_pipe_1_1;
            }],
        execute: function() {
            PostContentComponent = (function () {
                function PostContentComponent(_postService, _userService, _routePrams) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this._routePrams = _routePrams;
                    this.test = 1;
                    this.answers = [];
                    this.isLoading = false;
                    this.isClosed = false;
                    this.isAnswered = false;
                    this.today = new Date().toString();
                    this.answerOwner = [];
                    this.isOwner = false;
                    this.ownerID = localStorage.getItem('userId');
                }
                PostContentComponent.prototype.isLoggedIn = function () {
                    return this._userService.isLoggedIn();
                };
                PostContentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // get content of topic
                    this._postService.getPost(this._routePrams.get("id"))
                        .subscribe(//(question: Question) =>{}
                    function (//(question: Question) =>{}
                        responseData) {
                        console.log(responseData);
                        _this.question = responseData.obj;
                        _this.topic = responseData.obj;
                        _this.answers = responseData.answers;
                        _this.isClosed = responseData.obj.isClosed;
                        _this.isAnswered = responseData.obj.isAnswered;
                        _this.owner = responseData.questionOwner;
                        _this.answerOwner = responseData.answerOwner;
                        var ObjState1 = responseData.postState.voted.filter(function (el) {
                            return el.postId === responseData.obj._id;
                        });
                        //this.answers[i].state = ObjState.state;
                        console.log(ObjState1["0"]);
                        if (typeof (ObjState1["0"]) !== 'undefined') {
                            if (ObjState1["0"].state == 1) {
                                _this.topic.state = true;
                            }
                            else if (ObjState1["0"].state == -1) {
                                _this.topic.state = false;
                            }
                            ;
                        }
                        var _loop_1 = function() {
                            _this.answers[i].avatarUrl = _this.answerOwner[i].avatarUrl;
                            _this.answers[i].name = _this.answerOwner[i].name;
                            var answerID = _this.answers[i]._id;
                            if (responseData.postState != null && typeof (responseData.postState) !== 'undefined') {
                                ObjState = responseData.postState.voted.filter(function (el) {
                                    return el.postId === answerID;
                                });
                                //this.answers[i].state = ObjState.state;
                                console.log(ObjState["0"]);
                                if (typeof (ObjState["0"]) !== 'undefined') {
                                    if (ObjState["0"].state == 1) {
                                        _this.answers[i].state = true;
                                    }
                                    else if (ObjState["0"].state == -1) {
                                        _this.answers[i].state = false;
                                    }
                                    ;
                                }
                            }
                        };
                        var ObjState;
                        for (var i = 0; i < _this.answers.length; i++) {
                            _loop_1();
                        }
                        if (responseData.questionOwner._id === localStorage.getItem('userId')) {
                            _this.isOwner = true;
                        }
                    }, function (error) { return console.error(error); } //Failure
                     //Failure
                    );
                };
                PostContentComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.isLoading = true;
                    var answer = new answer_1.Answer(localStorage.getItem('userId'), 0, false, this.today, 'store_ID', form.value.comment);
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
                PostContentComponent.prototype.ownerButton = function (type, answerID) {
                    var _this = this;
                    if (answerID === void 0) { answerID = null; }
                    // if (answerID!= null){
                    //     alert(answerID);
                    // }
                    this._postService.submitOwnerModify(type, this._routePrams.get("id"), answerID)
                        .subscribe(function (data) {
                        console.log(data);
                        if (type === 'close') {
                            _this.isClosed = true;
                        }
                        if (type === 'answered') {
                            _this.isAnswered = true;
                        }
                        if (type === 'isBest') {
                            //find object in array using value of key
                            var objectNeeded = _this.answers.filter(function (objectNeeded) {
                                return objectNeeded._id === answerID;
                            })[0];
                            _this.answers[_this.answers.indexOf(objectNeeded)].isBest = true;
                        }
                    }, //Success
                    function (//Success
                        error) {
                        console.log(error);
                    } //Failure
                     //Failure
                    );
                };
                PostContentComponent.prototype.vote = function (value, postID) {
                    var _this = this;
                    //alert(value+10 +"   "+postID);
                    this._postService.vote(value, postID, this._routePrams.get("id"))
                        .subscribe(function (data) {
                        if (postID === _this._routePrams.get("id")) {
                            _this.topic.upvote = _this.topic.upvote + value;
                            _this.topic.state = !_this.topic.state;
                        }
                        else {
                            var objectNeeded = _this.answers.filter(function (objectNeeded) {
                                return objectNeeded._id === postID;
                            })[0];
                            _this.answers[_this.answers.indexOf(objectNeeded)].upvote = _this.answers[_this.answers.indexOf(objectNeeded)].upvote + value;
                            _this.answers[_this.answers.indexOf(objectNeeded)].state = !_this.answers[_this.answers.indexOf(objectNeeded)].state;
                        }
                    }, //Success
                    function (//Success
                        error) {
                        console.error(error);
                    } //Failure
                     //Failure
                    );
                };
                PostContentComponent = __decorate([
                    core_1.Component({
                        selector: 'postcontent',
                        templateUrl: 'app/posts/postcontent.component.html',
                        providers: [post_service_1.PostService, users_service_1.UsersService, homepage_service_1.HomeService, http_1.HTTP_PROVIDERS],
                        directives: [router_2.RouterLink],
                        styleUrls: ['assets/stylesheets/styles.css', 'assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css'],
                        pipes: [postcontent_pipe_1.UserNamePipe]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, users_service_1.UsersService, router_1.RouteParams])
                ], PostContentComponent);
                return PostContentComponent;
            }());
            exports_1("PostContentComponent", PostContentComponent);
        }
    }
});
//# sourceMappingURL=postcontent.component.js.map