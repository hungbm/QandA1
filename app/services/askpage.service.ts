import {Injectable} from 'angular2/core';
import {Headers,Http,Response} from 'angular2/http';
import {topic} from '../static_type/topic';
import {Question} from '../static_type/question';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class AskPageService{
   private question: Question[] = [];
    constructor(private http:Http){
        console.log('AskPage service Initialized...');
    }   
    submitQuestion(question: Question){
        
        const token = localStorage.getItem('token') 
            ? '?token='+localStorage.getItem('token')
            : '';
        
        this.question.push(question);
        const body = JSON.stringify(question);
        //console.log(body);
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post('/askpage'+token,body, {headers: headers}) //set up Observable and return this when function called
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
        ; 

    }
    getTags(){
         return this.http.get('/askpage')
             .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }
}