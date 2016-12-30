import {OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Component} from 'angular2/core';
import {LogoHeaderComponent} from './homepage/logoheader.component';
import {FooterComponent} from './homepage/footer.component';
import {MainBodyComponent} from './homepage/body.component';
import {RouteConfig,RouterOutlet} from 'angular2/router';
import {SignPageComponent} from './forms/signpage/signpage.component';
import {PostContentComponent} from './posts/postcontent.component';
import {AskPageComponent} from './forms/askquestion/askpage.component';
import {MyProfileComponent} from './users/myprofile.component';
import {ListUserComponent} from './users/listuser.component';

import {bootstrap} from 'angular2/platform/browser';
import {HashLocationStrategy} from "angular2/router";
import {LocationStrategy} from "angular2/router";
import {ROUTER_PROVIDERS,ROUTER_DIRECTIVES} from "angular2/router";
import {provide} from "angular2/core";


import {HomeService} from './services/homepage.service';
import {topic} from './static_type/topic';

 @RouteConfig([
     {path: '/', name :'Home', component: MainBodyComponent, useAsDefault:true },
     {path: '/signpage', name :'SignPage', component: SignPageComponent },
     {path: '/post/:id', name :'PostPage', component: PostContentComponent },
     {path: '/askpage', name :'AskPage', component: AskPageComponent },
     {path: '/myprofile', name :'MyProfile', component: MyProfileComponent },
     {path: '/listuser', name :'ListUser', component: ListUserComponent },
     {path: '/*other', name :'Other', redirectTo: ['Home'] }
])
@Component({
    selector:'my-app',
    template: `
    <logoheader></logoheader>
    <div class="jumbotron" style="width:60%; margin:0 auto;     position: relative;">
    <router-outlet></router-outlet>
    </div>
    <footer></footer>
    
    `,
    providers:[HomeService,HTTP_PROVIDERS,ROUTER_PROVIDERS,provide(LocationStrategy, {useClass: HashLocationStrategy})]
    ,

    directives: [LogoHeaderComponent,
                FooterComponent,
                RouterOutlet,ROUTER_DIRECTIVES,
                PostContentComponent,
                AskPageComponent,
                MyProfileComponent,ListUserComponent],
    styleUrls :['assets/stylesheets/metro-bootstrap.css']
})

export class AppComponent implements OnInit { 
    // topics: topic[];
    // constructor(private _homeService: HomeService){
    //         // this._homeService.getTopic()
    //         //     .subscribe(topics => {
    //         //         console.log(topics);
    //         //     });
    // }  
    ngOnInit(){
        //  this._homeService.getTopic()
        //         .subscribe(topics => {
        //             console.log(topics);
        //             this.topics = topics;
        //         });
    }
  
}