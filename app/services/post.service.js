System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map', 'rxjs/operator/delay', 'rxjs/operator/mergeMap', 'rxjs/operator/switchMap', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var http_1, core_1, Rx_1;
    var PostService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            PostService = (function () {
                function PostService(http) {
                    this.http = http;
                    this.answer = [];
                    console.log('Post service Initialized...');
                }
                PostService.prototype.getPost = function (id) {
                    return this.http.get('/post/api/' + id)
                        .map(function (response) {
                        //const questions = response.json().obj;
                        //get answers
                        //const answers = response.json().answers;
                        var responseData = response.json();
                        return responseData;
                    })
                        .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
                };
                PostService.prototype.submitAnswer = function (answer, questionID) {
                    this.answer.push(answer);
                    var body = JSON.stringify(answer);
                    console.log(body);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post('/post/api/' + questionID, body, { headers: headers }) //set up Observable and return this when function called
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Rx_1.Observable.throw(error); });
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=post.service.js.map