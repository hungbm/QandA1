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
    var BlogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BlogComponent = (function () {
                function BlogComponent() {
                }
                BlogComponent = __decorate([
                    core_1.Component({
                        selector: 'blog',
                        template: "\n    \n    <div style=\"    width: 40%;\n                        position: absolute;\n                        top: 48;\n                        right: 5%;\" class=\"panel panel-primary\">\n                <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Blog</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <h3><span class=\"label label-info\">31/12/2016</span></h3>\n                    <ul class=\"list-group\">\n                        <li class=\"list-group-item\">\n                            <span class=\"badge\">Java</span><a href=\"#\" >Some shit new about Java</a>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <span class=\"badge\">HTML5</span><a href=\"#\" >Some shit new about HTML5</a>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <span class=\"badge\">iOS</span><a href=\"#\" >Some shit new about Java</a>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <span class=\"badge\">iOS</span><a href=\"#\" >Some shit new about Java</a>\n                        </li>\n                        <li class=\"list-group-item\">\n                            <span class=\"badge\">iOS</span><a href=\"#\" >Some shit new about Java</a>\n                        </li>\n                        </ul>                    \n                </div>\n            </div>\n    \n    ",
                        styleUrls: ['assets/stylesheets/metro-bootstrap.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BlogComponent);
                return BlogComponent;
            }());
            exports_1("BlogComponent", BlogComponent);
        }
    }
});
//# sourceMappingURL=blog.component.js.map