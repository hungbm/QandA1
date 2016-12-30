import { NgForm } from '@angular/forms';
import { Component, OnInit, Input } from 'angular2/core';
import { HomeService } from '../services/homepage.service';
import { PostService } from '../services/post.service';
import { RouteParams } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { topic } from '../static_type/topic';
import { Question } from '../static_type/question';
import { Answer } from '../static_type/answer';
@Component({
    selector: 'postcontent',
    templateUrl: 'app/posts/postcontent.component.html',
    providers: [PostService, HomeService, HTTP_PROVIDERS]
    ,
    styleUrls: ['assets/stylesheets/styles.css', 'assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css']
})
export class PostContentComponent implements OnInit {
    test = 1;
    question: Question;
    topic;
    answers = [];
    isLoading = false;
    today = new Date().toString();
    constructor(private _postService: PostService,
        private _routePrams: RouteParams) {

    }
    ngOnInit() {
        // get content of topic
        this._postService.getPost(this._routePrams.get("id"))
            .subscribe(//(question: Question) =>{}
            responseData => {
                //console.log(question);
                this.question = responseData.obj;
                this.topic = responseData.obj;
                this.answers = responseData.answers;
                console.log(this.answers)
            }, error => console.error(error) //Failure
            );
        // get content of Answer

    }
    onSubmit(form: NgForm) {
        this.isLoading = true;
        const answer = new Answer('HungBM', 0, false, this.today, 'store_ID', form.value.comment);
        this._postService.submitAnswer(answer, this._routePrams.get("id"))
            .subscribe(
            data => {
                console.log(data.obj._id);
                this.isLoading = false;
                this.showSnackbar();
                this.answers.push(answer);
            }, //Success
            error => {
                console.error(error);
                this.isLoading = false;
            } //Failure
            );
        document.getElementById("commentForm").reset();
        
    }
    clearForm(form: NgForm) {
        document.getElementById("commentForm").reset();
    }

    showSnackbar() {
        var x = document.getElementById("snackbar")
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
}