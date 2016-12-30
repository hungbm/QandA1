System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var FooterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FooterComponent = (function () {
                function FooterComponent() {
                }
                FooterComponent = __decorate([
                    core_1.Component({
                        selector: 'footer',
                        template: "\n    <nav id=\"footer\" class=\"navbarFooter navbar-default\" role=\"navigation\">\n        <div>\n                <div  style=\"width:60%;  margin:0 auto;\">\n        <ul class=\"nav navbar-nav\">\n      <li><a href=\"#\">About Me</a></li>\n      <li><a href=\"#\">Contact Me</a></li>\n      <li><a href=\"#\">Help</a></li>\n      <li><a href=\"#\">Advertising Info</a></li>\n      \n    </ul>\n<!--<form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"T\u00ECm ki\u1EBFm\">\n                </div>\n                <button type=\"submit\" class=\"btn btn-default\">T\u00ECm ki\u1EBFm</button>\n                </form> -->\n    </div>\n        </div>\n    </nav>\n    \n    ",
                        styleUrls: ['assets/stylesheets/metro-bootstrap.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooterComponent);
                return FooterComponent;
            }());
            exports_1("FooterComponent", FooterComponent);
        }
    }
});
//# sourceMappingURL=footer.component.js.map