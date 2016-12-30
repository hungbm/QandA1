//import {topic} from '../../topic';

import {Component,Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';
@Component({   
    selector: 'post',
    template: 
    `
    <tr>
                <td   colspan="9">
                                <div class="btn-group">
                <button *ngFor="#tag of topic.tags" type="button" class="btn btn-default">{{tag}}</button>           
                </div>
                </td>
                </tr>
                <tr >
                    <td  rowspan="3">
                     <a [routerLink]="['PostPage',{id:topic._id}]">
                        <div class="thumbnail tile tile-medium tile-teal" >  
                                         <img *ngIf="!topic.isAnswered" src="http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Folders-OS-Help-Metro-icon.png"> 
                                         <img *ngIf="topic.isAnswered" src="http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Other-Tasks-Metro-icon.png">     
                        </div>
                        </a>
                    </td>
                    <td>
                    <div class="thumbnail tilebt tile-tiny tile-teal">
                    Answ: {{topic.answers.length}}
                    </div>
                    </td>                   
                    <td colspan="6" rowspan="3" >
                        <div>
                            <a [routerLink]="['PostPage',{id:topic._id}]">
                                <div class=" thumbnail tile tile-wide tile-green">
                                {{topic.question.title}}
                                </div >
                            </a>
                        </div>
                     </td>
                     
                </tr>
                <tr>
                <td>
                    <div class="thumbnail tilebt tile-tiny tile-teal">
                   View: {{topic.view}}
                    </div>
                </tr>
                <tr >               
                <td>
                    <div class="thumbnail tilebt tile-tiny tile-teal">
                    Like: {{topic.upvote}}
                    </div>
                    </td>
                </tr>
                

    
    `,
    directives: [RouterLink],
    styleUrls :['assets/stylesheets/metro-bootstrap.css']
})
export class PostComponent{
    @Input() topic;
    image_question: "http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Folders-OS-Help-Metro-icon.png";
    image_answered: "http://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Other-Tasks-Metro-icon.png";
}