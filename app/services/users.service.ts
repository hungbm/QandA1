

import {Injectable} from 'angular2/core';
import {Http, Headers,Response} from 'angular2/http';
import {User} from '../static_type/user.model';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/operator/delay';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/switchMap';

@Injectable()
export class UsersService{
    constructor(private http:Http){
        console.log('Users service Initialized...');
    }   
    getUsers(){
        return this.http.get('/listuser/api')
            .map(res => res.json());
    }

    signup(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content_type': 'application/json'});
        return this.http.post('/signpage',body,{headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }


}