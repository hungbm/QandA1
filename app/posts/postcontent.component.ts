import { NgForm } from '@angular/forms';
import { Component, OnInit, Input } from 'angular2/core';
import { HomeService } from '../services/homepage.service';
import { PostService } from '../services/post.service';
import { UsersService } from '../services/users.service';
import { RouteParams } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { topic } from '../static_type/topic';
import { Question } from '../static_type/question';
import { Answer } from '../static_type/answer';
import { UserNamePipe } from './postcontent.pipe';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'postcontent',
    templateUrl: 'app/posts/postcontent.component.html',
    providers: [PostService,UsersService, HomeService, HTTP_PROVIDERS],
    directives: [RouterLink],
    styleUrls: ['assets/stylesheets/styles.css', 'assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css'],
    pipes: [UserNamePipe]
})
export class PostContentComponent implements OnInit {
    test = 1;
    question: Question;
    topic;
    answers = [];
    isLoading = false;
    isClosed=false;
    isAnswered=false;
    today = new Date().toString();
    answerOwner = [];
    owner;
    isOwner = false;
    ownerID = localStorage.getItem('userId');
    
    constructor(private _postService: PostService, private _userService: UsersService, 
        private _routePrams: RouteParams) {
        
    }
    
    isLoggedIn(){
        return this._userService.isLoggedIn();
    }
    
  
    
    ngOnInit() {
        // get content of topic
        this._postService.getPost(this._routePrams.get("id"))
            .subscribe(//(question: Question) =>{}
            responseData => {
            console.log(responseData);
                this.question = responseData.obj;
                this.topic = responseData.obj;
                this.answers = responseData.answers;
                this.isClosed = responseData.obj.isClosed;
                this.isAnswered = responseData.obj.isAnswered;
                this.owner = responseData.questionOwner;
                this.answerOwner = responseData.answerOwner;
                
                console.log(responseData.postState.voted); 
                
                var ObjState1 = responseData.postState.voted.filter(function(el){
                            return el.postId === responseData.obj._id;
                        });
                        //this.answers[i].state = ObjState.state;
                        console.log(ObjState1["0"]);
                        if(typeof(ObjState1["0"])!=='undefined'){
                            
                            if (ObjState1["0"].state == 1){
                                this.topic.state = true;
            
                            }else if(ObjState1["0"].state == -1) {this.topic.state = false};
                            
                        }
                
                
                
                for (var i=0; i< this.answers.length; i++){
                    this.answers[i].avatarUrl = this.answerOwner[i].avatarUrl;
                    this.answers[i].name = this.answerOwner[i].name;
                    const answerID = this.answers[i]._id;
                    
                    if(responseData.postState!= null && typeof(responseData.postState)!=='undefined'){
                        var ObjState = responseData.postState.voted.filter(function(el){
                            return el.postId === answerID;
                        });
                        //this.answers[i].state = ObjState.state;
                        console.log(ObjState["0"]);
                        if(typeof(ObjState["0"])!=='undefined'){
                            
                            if (ObjState["0"].state == 1){
                                this.answers[i].state = true;
            
                            }else if(ObjState["0"].state == -1) {this.answers[i].state = false};
                            
                        }
                    }
                }
                
                 if(responseData.questionOwner._id ===localStorage.getItem('userId')){
                        this.isOwner =true;
                    }
                    
                
            }, error => console.error(error) //Failure
            );
        
       

    }
    onSubmit(form: NgForm) {
        this.isLoading = true;
        const answer = new Answer(localStorage.getItem('userId'), 0, false, this.today, 'store_ID', form.value.comment);
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
    
    ownerButton(type,answerID = null){
            // if (answerID!= null){
            //     alert(answerID);
            // }
            this._postService.submitOwnerModify(type,this._routePrams.get("id"),answerID)
            .subscribe(
            data => {
                console.log(data);
                if (type === 'close'){
                    this.isClosed = true;
                }
                if (type === 'answered'){
                    this.isAnswered = true;
                }
                if (type === 'isBest'){
                    
                    
                    //find object in array using value of key
                    var objectNeeded = this.answers.filter(function(objectNeeded){
                        return objectNeeded._id === answerID;
                    })[0];
                    
                    this.answers[this.answers.indexOf(objectNeeded)].isBest = true;
                }
            }, //Success
            error => {
               console.log(error);
            } //Failure
            );
    }
    
    vote(value, postID){
        //alert(value+10 +"   "+postID);
        this._postService.vote(value,postID,this._routePrams.get("id"))
            .subscribe(
            data => {
                if(postID === this._routePrams.get("id")){
                    this.topic.upvote = this.topic.upvote + value;
                    this.topic.state = !this.topic.state;
                }else{
                    var objectNeeded = this.answers.filter(function(objectNeeded){
                        return objectNeeded._id === postID;
                    })[0];
                    
                    this.answers[this.answers.indexOf(objectNeeded)].upvote = this.answers[this.answers.indexOf(objectNeeded)].upvote + value ;
                     this.answers[this.answers.indexOf(objectNeeded)].state = !this.answers[this.answers.indexOf(objectNeeded)].state;
                }
                
                
                
            }, //Success
            error => {
                console.error(error);
            } //Failure
            );
    }
    
}