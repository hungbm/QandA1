import { Component, OnInit } from 'angular2/core';
import { UsersService } from '../../services/users.service';
// import { NgForm,FormGroup,Validators,FormsModule,FormControl,REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { User } from '../../static_type/user.model';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import {Control,ControlGroup} form 'angular2/common';
@Component({

    selector: 'signpage',
    templateUrl: 'app/forms/signpage/signpage.component.html',
    providers: [UsersService],
    styleUrls :['assets/stylesheets/styles.css','assets/stylesheets/metro-bootstrap.css','assets/stylesheets/font-awesome.css']

})

export class SignPageComponent implements OnInit {
    defaultAvatarUrl: string; 
    isSignUp = false;
    checkingUser= false;
    usernameUnique;
    emailUnique;
    
    today = new Date().toString();
    constructor(private _userpageService: UsersService, public http: Http) {
        this.defaultAvatarUrl =  'http://i0.kym-cdn.com/photos/images/facebook/000/588/854/646.gif';//doge
    }
    
    ngOnInit(){
    }
    
    showSnackbar(status) {
        if (status){
            var x = document.getElementById('snackbarSuccess');
        }else var x = document.getElementById('snackbarFailure');
        
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
    
    //SignIn
    signIn(form){
        console.log(form);
    }
    
   //SignUp
   signUp(form){
       this.isSignUp = true;
        const user = new User(
            form.value.usernameUp, //username
            form.value.passwordUp, //password
            form.value.email, //email
            this.defaultAvatarUrl, //link to avatar
            '', //Summary => now empty
            form.value.usernameUp, //name of user (will edit later)
            this.today, //Day sign up
            0 //point
            );
        this._userpageService.signup(user)
            .subscribe(
            data => {
                console.log(data);
                this.showSnackbar(true);
                this.isSignUp = false;
                //window.location.href = "/#/post/" + data.obj._id;
            }, //Success
            error =>  {
                this.isSignUp = false; 
                this.showSnackbar(false);
            }//Failure
            );
    }
    
    
    checkUsername(usernameUp){
        this.checkingUser = true;
    }
    
}