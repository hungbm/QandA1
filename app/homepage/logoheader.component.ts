//import {OnInit} from 'e:/Project Do An/QandA/node_modules/angular2/src/core/linker/interfaces';
import {Component,OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';
@Component({
    selector: 'logoheader',
    templateUrl:'app/homepage/logoheader.component.html', 
    directives: [RouterLink],
    styleUrls :['assets/stylesheets/metro-bootstrap.css']
})

export class LogoHeaderComponent {

}