//import {topic} from '../../topic';
System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var PostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PostComponent = (function () {
                function PostComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PostComponent.prototype, "topic", void 0);
                PostComponent = __decorate([
                    core_1.Component({
                        selector: 'post',
                        template: "\n    <tr>\n                <td   colspan=\"9\">\n                                <div class=\"btn-group\">\n                <button *ngFor=\"#tag of topic.tags\" type=\"button\" class=\"btn btn-default\">{{tag}}</button>           \n                </div>\n                </td>\n                </tr>\n                <tr >\n                    <td  rowspan=\"3\">\n                     <a [routerLink]=\"['PostPage',{id:topic._id}]\">\n                        <div class=\"thumbnail tile tile-medium tile-teal\" >  \n                                         <img *ngIf=\"!topic.isAnswered\" src=\"http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Folders-OS-Help-Metro-icon.png\"> \n                                         <img *ngIf=\"topic.isAnswered\" src=\"http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Other-Tasks-Metro-icon.png\">     \n                        </div>\n                        </a>\n                    </td>\n                    <td>\n                    <div class=\"thumbnail tilebt tile-tiny tile-teal\">\n                    Answ: {{topic.answers.length}}\n                    </div>\n                    </td>                   \n                    <td colspan=\"6\" rowspan=\"3\" >\n                        <div>\n                            <a [routerLink]=\"['PostPage',{id:topic._id}]\">\n                                <div class=\" thumbnail tile tile-wide tile-green\">\n                                {{topic.question.title}}\n                                </div >\n                            </a>\n                        </div>\n                     </td>\n                     \n                </tr>\n                <tr>\n                <td>\n                    <div class=\"thumbnail tilebt tile-tiny tile-teal\">\n                   View: {{topic.view}}\n                    </div>\n                </tr>\n                <tr >               \n                <td>\n                    <div class=\"thumbnail tilebt tile-tiny tile-teal\">\n                    Like: {{topic.upvote}}\n                    </div>\n                    </td>\n                </tr>\n                \n\n    \n    ",
                        directives: [router_1.RouterLink],
                        styleUrls: ['assets/stylesheets/metro-bootstrap.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PostComponent);
                return PostComponent;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});
//# sourceMappingURL=post.component.js.map