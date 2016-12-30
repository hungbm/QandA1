System.register(['angular2/http', 'angular2/core', './homepage/logoheader.component', './homepage/footer.component', './homepage/body.component', 'angular2/router', './forms/signpage/signpage.component', './posts/postcontent.component', './forms/askquestion/askpage.component', './users/myprofile.component', './users/listuser.component', './services/homepage.service'], function(exports_1, context_1) {
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
    var http_1, core_1, logoheader_component_1, footer_component_1, body_component_1, router_1, signpage_component_1, postcontent_component_1, askpage_component_1, myprofile_component_1, listuser_component_1, router_2, router_3, router_4, core_2, homepage_service_1;
    var AppComponent;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (logoheader_component_1_1) {
                logoheader_component_1 = logoheader_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (body_component_1_1) {
                body_component_1 = body_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
                router_3 = router_1_1;
                router_4 = router_1_1;
            },
            function (signpage_component_1_1) {
                signpage_component_1 = signpage_component_1_1;
            },
            function (postcontent_component_1_1) {
                postcontent_component_1 = postcontent_component_1_1;
            },
            function (askpage_component_1_1) {
                askpage_component_1 = askpage_component_1_1;
            },
            function (myprofile_component_1_1) {
                myprofile_component_1 = myprofile_component_1_1;
            },
            function (listuser_component_1_1) {
                listuser_component_1 = listuser_component_1_1;
            },
            function (homepage_service_1_1) {
                homepage_service_1 = homepage_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                // topics: topic[];
                // constructor(private _homeService: HomeService){
                //         // this._homeService.getTopic()
                //         //     .subscribe(topics => {
                //         //         console.log(topics);
                //         //     });
                // }  
                AppComponent.prototype.ngOnInit = function () {
                    //  this._homeService.getTopic()
                    //         .subscribe(topics => {
                    //             console.log(topics);
                    //             this.topics = topics;
                    //         });
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: body_component_1.MainBodyComponent, useAsDefault: true },
                        { path: '/signpage', name: 'SignPage', component: signpage_component_1.SignPageComponent },
                        { path: '/post/:id', name: 'PostPage', component: postcontent_component_1.PostContentComponent },
                        { path: '/askpage', name: 'AskPage', component: askpage_component_1.AskPageComponent },
                        { path: '/myprofile', name: 'MyProfile', component: myprofile_component_1.MyProfileComponent },
                        { path: '/listuser', name: 'ListUser', component: listuser_component_1.ListUserComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <logoheader></logoheader>\n    <div class=\"jumbotron\" style=\"width:60%; margin:0 auto;     position: relative;\">\n    <router-outlet></router-outlet>\n    </div>\n    <footer></footer>\n    \n    ",
                        providers: [homepage_service_1.HomeService, http_1.HTTP_PROVIDERS, router_4.ROUTER_PROVIDERS, core_2.provide(router_3.LocationStrategy, { useClass: router_2.HashLocationStrategy })],
                        directives: [logoheader_component_1.LogoHeaderComponent,
                            footer_component_1.FooterComponent,
                            router_1.RouterOutlet, router_4.ROUTER_DIRECTIVES,
                            postcontent_component_1.PostContentComponent,
                            askpage_component_1.AskPageComponent,
                            myprofile_component_1.MyProfileComponent, listuser_component_1.ListUserComponent],
                        styleUrls: ['assets/stylesheets/metro-bootstrap.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map