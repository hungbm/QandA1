import { Component, OnInit } from 'angular2/core';

@Component({
  
    selector: 'blog',
    template: `
    
    <div style="    width: 40%;
                        position: absolute;
                        top: 48;
                        right: 5%;" class="panel panel-primary">
                <div class="panel-heading">
                <h3 class="panel-title">Blog</h3>
                </div>
                <div class="panel-body">
                    <h3><span class="label label-info">31/12/2016</span></h3>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="badge">Java</span><a href="#" >Some shit new about Java</a>
                        </li>
                        <li class="list-group-item">
                            <span class="badge">HTML5</span><a href="#" >Some shit new about HTML5</a>
                        </li>
                        <li class="list-group-item">
                            <span class="badge">iOS</span><a href="#" >Some shit new about Java</a>
                        </li>
                        <li class="list-group-item">
                            <span class="badge">iOS</span><a href="#" >Some shit new about Java</a>
                        </li>
                        <li class="list-group-item">
                            <span class="badge">iOS</span><a href="#" >Some shit new about Java</a>
                        </li>
                        </ul>                    
                </div>
            </div>
    
    `,
    styleUrls :['assets/stylesheets/metro-bootstrap.css']
})
export class BlogComponent {

}