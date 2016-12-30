System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, MyProfileComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            MyProfileComponent = (function () {
                function MyProfileComponent() {
                }
                return MyProfileComponent;
            }());
            MyProfileComponent = __decorate([
                core_1.Component({
                    selector: 'myprofile',
                    template: "\n    <table>\n        <tr>\n            <td width=80%>\n            <div class=\"media\" >\n                <div class=\"media-left\">\n                    <a href=\"#\">\n                    <img class=\"media-object\" style=\" border: 5px solid white ;width: 200px; height: 200px;\" src=\"http://i1.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg\" >\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                <h2 class=\"media-heading\">Smug Frog</h2>\n                    <p style=\"width:100%; padding:10px; padding-top: 10px;\">Pepe the Frog is an anthropomorphic frog character from the comic series Boy\u2019s Club by Matt Furie. On 4chan, various illustrations of the frog creature have been used as reaction faces, including Feels Good Man, Sad Frog, Angry Pepe, Smug Frog and Well Meme\u2019d.</p>\n                </div>\n            </div>\n            </td>\n            <td>\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\">Tham gia t\u1EEB <span class=\"badge pull-right\">12/2015</span></li>\n                    <li class=\"list-group-item\">S\u1ED1 L\u01B0\u1EE3ng c\u00E2u h\u1ECFi <span class=\"badge pull-right\">42</span></li>\n                    <li class=\"list-group-item\">S\u1ED1 c\u00E2u tr\u1EA3 l\u1EDDi <span class=\"badge pull-right\">162</span></li>\n                    <li class=\"list-group-item\">Th\u00E0nh vi\u00EAn c\u1EA5p <span class=\"badge pull-right\">1</span></li>\n                </ul>\n            </td>\n        </tr>\n        <tr><td colspan=2>\n            <ul class=\"nav nav-tabs nav-justified\">\n                <li role=\"presentation\" class=\"active\"><a data-toggle=\"tab\" href=\"#profile\" class=\"btn\">H\u1ED3 s\u01A1</a></li>\n                <li role=\"presentation\"><a data-toggle=\"tab\" href=\"#activities\" class=\"btn \">Ho\u1EA1t \u0111\u1ED9ng</a></li>\n            </ul>\n\n            <div align=\"justify\" class=\"tab-content\" style=\"background-color:#ffffff;border: 1px solid #dddddd; border-top:0; \">\n                <div id=\"profile\" class=\"tab-pane fade in active\">\n                    <p  style=\"width:95%; padding:20px; padding-top: 30px;\">\n                    Throughout 2008, Pepe was mostly associated with the \u201CFeels Good Man\u201D reaction image. In 2009, an edited version featuring a distraught-looking Pepe with the caption \u201CFeels bad man\u201D began circulating as a reaction image on 4chan and the Body Building Forums. On January 25th, 2011, an interview with Furie was published on Know Your Meme, in which he discussed the origins of Pepe the Frog. On June 13th, 2014, the PepeTheFrogBlog Tumblr[11] blog was launched. On July 23rd, the Pepe the Frog Instagram[14] feed was created. On October 25th, the /r/pepethefrog[13] subreddit was launched for content featuring the frog character. On December 7th, a Facebook[10] page for \u201CPepe the Frog\u201D was created. On December 18th, the PepeTheFrogNet Tumblr[12] blog was launched.</div>\n                <div id=\"activities\" class=\"tab-pane fade\">\n                    \n\n                    <ul class=\"nav nav-tabs nav-justified\">\n                        <li role=\"presentation\" class=\"active\"><a data-toggle=\"tab\" href=\"#summary\" class=\"btn\">T\u1ED5ng h\u1EE3p</a></li>\n                        <li role=\"presentation\"><a data-toggle=\"tab\" href=\"#answers\" class=\"btn \">C\u00E2u tr\u1EA3 l\u1EDDi</a></li>\n                        <li role=\"presentation\"><a data-toggle=\"tab\" href=\"#questions\" class=\"btn \">C\u00E2u h\u1ECFi</a></li>\n                    </ul>\n\n                    <div align=\"justify\" class=\"tab-content\" style=\"background-color:#ffffff;border: 1px solid #dddddd; border-top:0; \">\n                        <div id=\"summary\" class=\"tab-pane fade in active\">\n                            <ul class=\"list-group\">\n                                <li class=\"list-group-item\"><span class=\"label label-success\">201</span><a class=\"btn\">Example heading </a></li>\n                                <li class=\"list-group-item\"><span style=\"min-width: 45px;\" class=\"label label-success\">12</span><a class=\"btn\">Example heading </a></li>\n                                <li class=\"list-group-item\"><span style=\"min-width: 45px;\" class=\"label label-success\">5</span><a class=\"btn\">Example heading </a></li>\n                                <li class=\"list-group-item\"><span style=\"min-width: 45px;\" class=\"label label-default\">46</span><a class=\"btn\">Example heading </a></li>\n                            </ul>\n                           \n                        </div>\n                        <div id=\"answers\" class=\"tab-pane fade\">\n                            <ul class=\"list-group\">\n                                <li class=\"list-group-item\"><span class=\"label label-success\">201</span><a class=\"btn\">Example heading </a></li>\n                                <li class=\"list-group-item\"><span style=\"min-width: 45px;\" class=\"label label-success\">12</span><a class=\"btn\">Example heading </a></li>\n                                <li class=\"list-group-item\"><span style=\"min-width: 45px;\" class=\"label label-success\">5</span><a class=\"btn\">Example heading </a></li>\n                                <li class=\"list-group-item\"><span style=\"min-width: 45px;\" class=\"label label-default\">46</span><a class=\"btn\">Example heading </a></li>\n                            </ul>\n                        </div>\n                        <div id=\"questions\" class=\"tab-pane fade\">\n                            <ul class=\"list-group\">\n                                <li class=\"list-group-item\"><span class=\"label label-success\">201</span><a class=\"btn\">Example heading </a></li>\n                                <li class=\"list-group-item\"><span style=\"min-width: 45px;\" class=\"label label-success\">12</span><a class=\"btn\">Example heading </a></li>\n                                <li class=\"list-group-item\"><span style=\"min-width: 45px;\" class=\"label label-success\">5</span><a class=\"btn\">Example heading </a></li>\n                                <li class=\"list-group-item\"><span style=\"min-width: 45px;\" class=\"label label-default\">46</span><a class=\"btn\">Example heading </a></li>\n                            </ul>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n            </td>\n            </tr>\n  </table>\n    ",
                    styleUrls: ['assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css']
                }),
                __metadata("design:paramtypes", [])
            ], MyProfileComponent);
            exports_1("MyProfileComponent", MyProfileComponent);
        }
    };
});
//# sourceMappingURL=myprofile.component.js.map