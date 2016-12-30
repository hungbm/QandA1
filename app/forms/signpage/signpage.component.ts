import { Component, OnInit } from 'angular2/core';
import {UsersService} from '../../services/users.service';
import { NgForm } from '@angular/forms';
import { User } from '../../static_type/user.model';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { FormsModule } from '@angular/forms';
@Component({

    selector: 'signpage',
    templateUrl: 'app/forms/signpage/signpage.component.html',
    styleUrls :['assets/stylesheets/metro-bootstrap.css','assets/stylesheets/font-awesome.css']

})

export class SignPageComponent  {
   
}