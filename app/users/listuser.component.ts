import { Component } from 'angular2/core';
import {HomeService} from '../services/homepage.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {UsersService} from '../services/users.service';
@Component({
    selector: 'list-user',
    template: 
    `
        <table>          
            <tr>
            <td >
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#participation" class="btn">Tích cực</a></li>
                    <li ><a data-toggle="tab" href="#newmembers" class="btn ">Mới tham gia</a></li>
                </ul>

                <div align="justify" class="tab-content" style="background-color:#ffffff;border: 1px solid #dddddd; border-top:0; ">
                    <div  id="participation" class="tab-pane fade in active" >
                    <table >
                        <tr *ngFor="#user of listuser; #i = index" *ngIf="i<=10" >                
                            <td   style= "  padding: 2%;">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img style= "width:64px; heigh:64px;" class="media-object" src={{user.avatarUrl}} >
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">{{user.name}}</h4>
                                       {{user.summary}}
                                    </div>
                                </div>
                            </td>

                       
                        </tr>

               
                    </table>
                    <ul class="pagination pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li *ngIf="leng" ><a href="#">{{leng}}</a></li>                 
                        <li><a href="#">»</a></li>
                    </ul>
                    </div>
                    <div id="newmembers" class="tab-pane fade">
                    <table>
                    
                        <tr>
                            <td style= "width:30%; padding: 2%;">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img style= "width:64px; heigh:64px;" class="media-object" src="http://i1.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg" >
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Pepe the Frog</h4>
                                        Pepe the Frog is an anthropomorphic frog character from the comic series Boy’s Club by Matt Furie.
                  
                                    </div>
                                </div>
                            </td>

                            <td style= "width:30%; padding: 2%;">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img style= "width:64px; heigh:64px;" class="media-object" src="http://i1.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg" >
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Pepe the Frog</h4>
                                        Pepe the Frog is an anthropomorphic frog character from the comic series Boy’s Club by Matt Furie.
                                    </div>
                                </div>
                            </td>

                            <td style= "width:30%; padding: 2%;">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                            <img style= "width:64px; heigh:64px;" class="media-object" src="http://i1.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg" >
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="media-heading">Pepe the Frog</h4>
                                        Pepe the Frog is an anthropomorphic frog character from the comic series Boy’s Club by Matt Furie.
                                    </div>
                                </div>
                            </td>
                       
                        </tr>

                
                    </table>
                   
                    <ul class="pagination pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">»</a></li>
                    </ul>
                    </div>
                </div>
                </td>
              </tr>

    </table>
    `,providers:[UsersService,HTTP_PROVIDERS]
    ,
    styleUrls: ['assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css']

})
export class ListUserComponent  {
    listuser=[];
    leng;
    pageSize : 10;
    pages;
    pagedPosts=[];
    constructor(private _usersService: UsersService){
            this._usersService.getUsers()
                .subscribe(users =>{
                     this.listuser  = users;
                    this.pages = _.take(this.listuser,this.pageSize);
                    // if (this.leng<=10)  {
                    //     this.pages = 1;    
                    // }
                    // console.log(this.listuser);
                    
                });
        } 
        onPageChange(page){
         
        }
    

}
