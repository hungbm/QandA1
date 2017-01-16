import { Headers, Http, Response } from 'angular2/http';
import { Answer } from '../static_type/answer';
import { Injectable } from 'angular2/core';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class PostService {
    constructor(private http: Http) {
        console.log('Post service Initialized...');
    }
    getPost(id) {
        const userId = localStorage.getItem('userId') 
            ? '?userId='+localStorage.getItem('userId')
            : '';
            
        return this.http.get('/post/api/' + id+userId)
            .map((response: Response) => {
                const responseData = response.json();
                return responseData;
            })
            .catch((error: Response) => Observable.throw(error.json()))
            ;
    }

    private answer: Answer[] = [];
    submitAnswer(answer: Answer, questionID: String) {
        this.answer.push(answer);
        const body = JSON.stringify(answer);
        console.log(body);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('/post/api/' + questionID, body, { headers: headers }) //set up Observable and return this when function called
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error));
    }
    
    submitOwnerModify(type, questionID, answerID = null){

            const token = localStorage.getItem('token') 
            ? '?token='+localStorage.getItem('token')
            : '';
            if (answerID!= null){
                token = token+'&answerID='+answerID;
            }
            const body = JSON.stringify({
                type: type
            });
            const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.post('/post/api/'+questionID+token,body,{headers: headers})
                .map((response: Response) => response.json())
                .catch((error: Response) => Observable.throw(error.json()));
       
    }
    
    vote(value,postID,questionID){
        const isQuestion = false;
        if(postID === questionID){
            isQuestion= true;
        }
        const token = localStorage.getItem('token') 
            ? '?token='+localStorage.getItem('token')
            : '';
            const body = JSON.stringify({
                value: value,
                postID: postID,
                isQuestion
            });
            const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.post('/post/api/'+questionID+'/vote'+token,body,{headers: headers})
                .map((response: Response) => response.json())
                .catch((error: Response) => Observable.throw(error.json()));
    }
}