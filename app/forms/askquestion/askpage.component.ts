import { Component, OnInit } from 'angular2/core';
import { AskPageService } from '../../services/askpage.service';
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
    providers: [AskPageService]
})

export class AskPageComponent {
    constructor(private _askpageService: AskPageService, public http: Http) {

    }
    //questions: topic[];
    questions = [];
    question;
    onSubmit(form: NgForm) {

        const question = new Question(0, 0, '24/12/2016', false, false, 'HungBM',
            { title: form.value.title, content: form.value.content }, ['test']);
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
}