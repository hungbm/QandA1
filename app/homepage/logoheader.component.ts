import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { UsersService } from '../services/users.service';
import {Component,OnInit,Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';
@Component({
    selector: 'logoheader',
    templateUrl:'app/homepage/logoheader.component.html', 
    directives: [RouterLink],
    providers: [UsersService],
    styleUrls :['assets/stylesheets/metro-bootstrap.css']
})

export class LogoHeaderComponent implements OnInit {
    token;
    isLoged= false;
    //@Input name;
    name;
    constructor(private _userpageService: UsersService, public http: Http) {
        
    }
    
    ngOnInit(){
        this.token = localStorage.getItem('token');
        if (typeof this.token !== 'undefined' && this.token !== null){
            this.isLoged = true;
            this.name = localStorage.getItem('name');
        }
    }
    
    onLogout(){
        this.isLoged= false;
        this._userpageService.logout();
        var link = location.href.replace(/.*\/\/[^\/]*/, '');
        document.location.href = "/#/signpage";
        if (new String(link).valueOf() == new String("/#/myprofile/").valueOf()){
            alert('here');
        }
    }
}