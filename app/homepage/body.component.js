System.register(['angular2/core', './bodycontent/post.component', './bodycontent/blog.component', '../services/homepage.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, post_component_1, blog_component_1, homepage_service_1, http_1;
    var MainBodyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            },
            function (blog_component_1_1) {
                blog_component_1 = blog_component_1_1;
            },
            function (homepage_service_1_1) {
                homepage_service_1 = homepage_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MainBodyComponent = (function () {
                function MainBodyComponent(_homeService) {
                    this._homeService = _homeService;
                }
                MainBodyComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._homeService.getTopic()
                        .subscribe(function (topics) {
                        console.log(topics);
                        _this.topics = topics;
                    });
                };
                MainBodyComponent = __decorate([
                    core_1.Component({
                        selector: 'main-body',
                        template: "\n        <table   width=\"60%\">\n            <div *ngFor=\"#topic of topics\" >\n                 <post [topic] = \"topic\">1</post> \n            </div>\n            \n            \n        </table>\n         <!--<blog></blog>-->\n    ", providers: [homepage_service_1.HomeService, http_1.HTTP_PROVIDERS],
                        directives: [blog_component_1.BlogComponent, post_component_1.PostComponent]
                    }), 
                    __metadata('design:paramtypes', [homepage_service_1.HomeService])
                ], MainBodyComponent);
                return MainBodyComponent;
            }());
            exports_1("MainBodyComponent", MainBodyComponent);
        }
    }
});
//# sourceMappingURL=body.component.js.map