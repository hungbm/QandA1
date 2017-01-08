import { Component, OnInit } from 'angular2/core';
import { AskPageService } from '../../services/askpage.service';
import { UsersService } from '../../services/users.service';
import { ControlGroup } from 'angular2/common';
import { NgForm } from '@angular/forms';
import { Question } from '../../static_type/question';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { FormsModule } from '@angular/forms';
@Component({

    selector: 'askpage',
    templateUrl: 'app/forms/askquestion/askpage.component.html',
    styleUrls: ['assets/stylesheets/styles.css', 'assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css']
    ,
    providers: [AskPageService,UsersService]
})

export class AskPageComponent implements OnInit {
    constructor(private _askpageService: AskPageService, private _userService: UsersService, public http: Http) {
        
    }
    
    tags;
    choosenTag = [];
    ngOnInit(){
        if (localStorage.getItem("token") === null) {
             window.location.href = "/#/signpage/";
        }else {
            this._askpageService.getTags()
                .subscribe(data =>{

                    this.tags = data.obj;
                },
                error =>{
                    console.log(error)
                });
        }
    }
    today = new Date().toString();
    //questions: topic[];
    questions = [];
    question;
    onSubmit(form: NgForm) {
        
        //Check logged in or not
        if(!this._userService.isLoggedIn()){
             window.location.href = "/#/signpage/";
        }
        const question = new Question(0, 0, this.today, false, false, localStorage.getItem('userId'),
            { title: form.value.title, content: form.value.content }, []);
        //console.log(question);
        this._askpageService.submitQuestion(question)
            .subscribe(
            data => {
                console.log(data);
                window.location.href = "/#/post/" + data.obj._id;
            }, //Success
            error => console.error(error) //Failure
            );

    }
    
    onlyUnique(value, index, self) { 
        return self.indexOf(value) === index;
    }
    
    addTag(){
        const pickedTag = document.getElementById("pickTags").value;
        this.choosenTag.push(pickedTag);
        
        this.choosenTag = this.choosenTag.filter(this.onlyUnique);
    }
}