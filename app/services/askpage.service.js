System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/operator/delay', 'rxjs/operator/mergeMap', 'rxjs/operator/switchMap', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var AskPageService;
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
            function (_4) {},
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            AskPageService = (function () {
                function AskPageService(http) {
                    this.http = http;
                    this.question = [];
                    console.log('AskPage service Initialized...');
                }
                AskPageService.prototype.submitQuestion = function (question) {
                    this.question.push(question);
                    var body = JSON.stringify(question);
                    //console.log(body);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http.post('/askpage', body, { headers: headers }) //set up Observable and return this when function called
                        .map(function (response) { return response.json(); })
                        .catch(function (error) { return Rx_1.Observable.throw(error.json()); });
                    // var headers = new Headers();
                    // headers.append('Content-Type','application/json');
                    // return this.http.post('/askpage',JSON.stringify(topic),{headers: headers})
                    //     .map(res => res.json());
                };
                AskPageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AskPageService);
                return AskPageService;
            }());
            exports_1("AskPageService", AskPageService);
        }
    }
});
//# sourceMappingURL=askpage.service.js.map