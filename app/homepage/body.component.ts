import {topic} from '../static_type/topic';
import { Component } from 'angular2/core';
import {PostComponent} from './bodycontent/post.component';
import {BlogComponent} from './bodycontent/blog.component';
import {OnInit} from 'angular2/core';
import {HomeService} from '../services/homepage.service';
import {HTTP_PROVIDERS} from 'angular2/http';
@Component({
    selector: 'main-body',
    template: `
        <table   width="60%">
            <div *ngFor="#topic of topics" >
                 <post [topic] = "topic">1</post> 
            </div>
            
            
        </table>
         <!--<blog></blog>-->
    `, providers:[HomeService,HTTP_PROVIDERS]
    ,
    directives: [BlogComponent,PostComponent]
})
export class MainBodyComponent  {
    topics: topic[];
    constructor(private _homeService: HomeService){
    }  
    ngOnInit(){
         this._homeService.getTopic()
                .subscribe(topics => {
                    console.log(topics);
                    this.topics = topics;
                });
    }
}