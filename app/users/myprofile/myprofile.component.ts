
import { Component,OnInit } from 'angular2/core';
import { UsersService } from '../../services/users.service';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
//import { NgForm } from '@angular/forms';
import { User } from '../../static_type/user.model';
@Component({
    selector: 'myprofile',
    templateUrl:'app/users/myprofile/myprofile.component.html',
    providers: [UsersService],
    styleUrls: ['assets/stylesheets/styles.css','assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css']

})
export class MyProfileComponent implements OnInit {
    constructor(private _userpageService: UsersService, public http: Http) {
    }
    avatarUrl;
    dateJoin;
    email = new String();
    name;
    point;
    summary;
    totalPost;
    totalCorrectAns;
    
    isEdit=false;
    
    onEdit(){
        this.isEdit=!this.isEdit;
    }
    
    formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();
        
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
        
            return [month,year].join('/');
        }
    
    
    ngOnInit(){
        this._userpageService.myprofile()
            .subscribe(
            data => {
                console.log(data);
                this.avatarUrl = data.obj.avatarUrl;
                this.dateJoin = this.formatDate(data.obj.dateJoin);
                this.email = data.obj.email;
                this.name = data.obj.name;
                this.point = data.obj.point;
                this.summary = data.obj.summary;
                this.totalPost = data.totalPost;
                this.totalCorrectAns = data.totalCorrectAns;
                //console.log('totalPost:'+data.totalPost);
                //this.summary  = data.obj.summary.valueOf();
                //console.log(data.obj.summary.valueOf());
            }, //Success
            error => {
                console.log(error);
                document.location.href = '/'
            } //Failure
            );
    }
    
    showSnackbar(status) {
        if (status === 'NewPassNotMatch'){
            document.getElementById("snackbar").innerHTML = "Password mới không khớp nhau!";
        }
        else if(status === 'ChangeFailure'){
            document.getElementById("snackbar").innerHTML = "Cập nhật thông tin thất bại!";
        }else if (status === 'ChangeSuccess'){
            document.getElementById("snackbar").innerHTML = "Cập nhật thông tin thành công!";
        }
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
    
    updateInfo(form){
        const name="";
        const avatar="";
        const summary="";
        
        const passwordUp="";
        
        if (form.value.passwordUp !== form.value.passwordRe){
            this.showSnackbar('NewPassNotMatch');
            return;
        }
        
        form.value.usernameUp !== ""  ?  name =form.value.usernameUp : name="";
        form.value.avatar !== ""  ?  avatar =form.value.avatar  : avatar="";
        form.value.summary !== ""  ?  summary =form.value.summary  : summary="";
        form.value.passwordUp !== ""  ?  passwordUp =form.value.passwordUp  : passwordUp="";
        const user = new User(
            localStorage.getItem('userId'),
            passwordUp,
            '',
            avatar,
            summary,
            name
            );
        this._userpageService.updateInfo(user)
            .subscribe(
            data => {
                //console.log(data)
                this.showSnackbar('ChangeSuccess');
                this.avatarUrl = data.obj.avatarUrl;
                this.name = data.obj.name;
                var temp = data.obj.summary;
                this.summary = temp.valueOf();
                
            }, //Success
            error =>  {
              console.error(error)
             this.showSnackbar('ChangeFailure');
            }//Failure
            );
    }
}