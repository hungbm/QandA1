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
        return this.http.get('/post/api/' + id)
            .map((response: Response) => {
                //const questions = response.json().obj;
                //get answers
                //const answers = response.json().answers;
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

}