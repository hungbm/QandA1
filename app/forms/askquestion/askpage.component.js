System.register(['angular2/core', '../../services/askpage.service', '../../static_type/question', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, askpage_service_1, question_1, http_1;
    var AskPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (askpage_service_1_1) {
                askpage_service_1 = askpage_service_1_1;
            },
            function (question_1_1) {
                question_1 = question_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AskPageComponent = (function () {
                function AskPageComponent(_askpageService, http) {
                    this._askpageService = _askpageService;
                    this.http = http;
                    //questions: topic[];
                    this.questions = [];
                }
                AskPageComponent.prototype.onSubmit = function (form) {
                    var question = new question_1.Question(0, 0, '24/12/2016', false, false, 'HungBM', { title: form.value.title, content: form.value.content }, ['test']);
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
                AskPageComponent = __decorate([
                    core_1.Component({
                        selector: 'askpage',
                        templateUrl: 'app/forms/askquestion/askpage.component.html',
                        styleUrls: ['assets/stylesheets/styles.css', 'assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css'],
                        providers: [askpage_service_1.AskPageService]
                    }), 
                    __metadata('design:paramtypes', [askpage_service_1.AskPageService, http_1.Http])
                ], AskPageComponent);
                return AskPageComponent;
            }());
            exports_1("AskPageComponent", AskPageComponent);
        }
    }
});
//# sourceMappingURL=askpage.component.js.map