

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
    private user: User[] = [];
    constructor(private http:Http){
        console.log('Users service Initialized...');
    }   
    getUsers(){
        return this.http.get('/listuser/api')
            .map(res => res.json());
    }

    signup(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/signpage',body,{headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
    
    signin(user: User){
        
       
        
        const body = JSON.stringify(user);
        
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/signpage',body,{headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
    
    logout(){
        localStorage.clear();
    }
    
    myprofile(){
        const token = localStorage.getItem('token') 
            ? '?token='+localStorage.getItem('token')
            : '';
        return this.http.get('/myprofile/api/'+ localStorage.getItem('userId')+token)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
    
    isLoggedIn(){
        return localStorage.getItem('token') !==null;
    }
    
    updateInfo(user: User){
        const token = localStorage.getItem('token') 
            ? '?token='+localStorage.getItem('token')
            : '';
         const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/myprofile'+token,body,{headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
    
    loadmore(tab: String,quantity: Number){
        const token = localStorage.getItem('token') 
            ? '?token='+localStorage.getItem('token')
            : '';
            
        const SoBanGhiDaCo = quantity 
            ? quantity
            : 0;
            
        return this.http.get('/myprofile/activities'+token+'&type='+tab+'&quantity='+quantity)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}