import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';
@Injectable()
export class HomeService{
    constructor(private http:Http){
        console.log('Home service Initialized...');
    }   
    getTopic(){
        return this.http.get('/home')
            .map(res => res.json());           
    }
    getUsers(){
        return this.http.get('/listuser')
            .map(res => res.json());
    }
    getPost(id){
        return this.http.get('/post/'+id)
            .map(res => res.json());           
    }
}