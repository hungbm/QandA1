//import {style} from 'e:/Project Do An/QandA/node_modules/@angular/core/src/animation/metadata';
//import {hasConstructor} from 'e:/Project Do An/QandA/node_modules/angular2/src/facade/lang';
import { Component } from 'angular2/core';

@Component({
    selector: 'myprofile',
    template:
    `
    <table>
        <tr>
            <td width=80%>
            <div class="media" >
                <div class="media-left">
                    <a href="#">
                    <img class="media-object" style=" border: 5px solid white ;width: 200px; height: 200px;" src="http://i1.kym-cdn.com/photos/images/facebook/000/862/065/0e9.jpg" >
                    </a>
                </div>
                <div class="media-body">
                <h2 class="media-heading">Smug Frog</h2>
                    <p style="width:100%; padding:10px; padding-top: 10px;">Pepe the Frog is an anthropomorphic frog character from the comic series Boy’s Club by Matt Furie. On 4chan, various illustrations of the frog creature have been used as reaction faces, including Feels Good Man, Sad Frog, Angry Pepe, Smug Frog and Well Meme’d.</p>
                </div>
            </div>
            </td>
            <td>
                <ul class="list-group">
                    <li class="list-group-item">Tham gia từ <span class="badge pull-right">12/2015</span></li>
                    <li class="list-group-item">Số Lượng câu hỏi <span class="badge pull-right">42</span></li>
                    <li class="list-group-item">Số câu trả lời <span class="badge pull-right">162</span></li>
                    <li class="list-group-item">Thành viên cấp <span class="badge pull-right">1</span></li>
                </ul>
            </td>
        </tr>
        <tr><td colspan=2>
            <ul class="nav nav-tabs nav-justified">
                <li role="presentation" class="active"><a data-toggle="tab" href="#profile" class="btn">Hồ sơ</a></li>
                <li role="presentation"><a data-toggle="tab" href="#activities" class="btn ">Hoạt động</a></li>
            </ul>

            <div align="justify" class="tab-content" style="background-color:#ffffff;border: 1px solid #dddddd; border-top:0; ">
                <div id="profile" class="tab-pane fade in active">
                    <p  style="width:95%; padding:20px; padding-top: 30px;">
                    Throughout 2008, Pepe was mostly associated with the “Feels Good Man” reaction image. In 2009, an edited version featuring a distraught-looking Pepe with the caption “Feels bad man” began circulating as a reaction image on 4chan and the Body Building Forums. On January 25th, 2011, an interview with Furie was published on Know Your Meme, in which he discussed the origins of Pepe the Frog. On June 13th, 2014, the PepeTheFrogBlog Tumblr[11] blog was launched. On July 23rd, the Pepe the Frog Instagram[14] feed was created. On October 25th, the /r/pepethefrog[13] subreddit was launched for content featuring the frog character. On December 7th, a Facebook[10] page for “Pepe the Frog” was created. On December 18th, the PepeTheFrogNet Tumblr[12] blog was launched.</div>
                <div id="activities" class="tab-pane fade">
                    

                    <ul class="nav nav-tabs nav-justified">
                        <li role="presentation" class="active"><a data-toggle="tab" href="#summary" class="btn">Tổng hợp</a></li>
                        <li role="presentation"><a data-toggle="tab" href="#answers" class="btn ">Câu trả lời</a></li>
                        <li role="presentation"><a data-toggle="tab" href="#questions" class="btn ">Câu hỏi</a></li>
                    </ul>

                    <div align="justify" class="tab-content" style="background-color:#ffffff;border: 1px solid #dddddd; border-top:0; ">
                        <div id="summary" class="tab-pane fade in active">
                            <ul class="list-group">
                                <li class="list-group-item"><span class="label label-success">201</span><a class="btn">Example heading </a></li>
                                <li class="list-group-item"><span style="min-width: 45px;" class="label label-success">12</span><a class="btn">Example heading </a></li>
                                <li class="list-group-item"><span style="min-width: 45px;" class="label label-success">5</span><a class="btn">Example heading </a></li>
                                <li class="list-group-item"><span style="min-width: 45px;" class="label label-default">46</span><a class="btn">Example heading </a></li>
                            </ul>
                           
                        </div>
                        <div id="answers" class="tab-pane fade">
                            <ul class="list-group">
                                <li class="list-group-item"><span class="label label-success">201</span><a class="btn">Example heading </a></li>
                                <li class="list-group-item"><span style="min-width: 45px;" class="label label-success">12</span><a class="btn">Example heading </a></li>
                                <li class="list-group-item"><span style="min-width: 45px;" class="label label-success">5</span><a class="btn">Example heading </a></li>
                                <li class="list-group-item"><span style="min-width: 45px;" class="label label-default">46</span><a class="btn">Example heading </a></li>
                            </ul>
                        </div>
                        <div id="questions" class="tab-pane fade">
                            <ul class="list-group">
                                <li class="list-group-item"><span class="label label-success">201</span><a class="btn">Example heading </a></li>
                                <li class="list-group-item"><span style="min-width: 45px;" class="label label-success">12</span><a class="btn">Example heading </a></li>
                                <li class="list-group-item"><span style="min-width: 45px;" class="label label-success">5</span><a class="btn">Example heading </a></li>
                                <li class="list-group-item"><span style="min-width: 45px;" class="label label-default">46</span><a class="btn">Example heading </a></li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
            </td>
            </tr>
  </table>
    `,
    styleUrls: ['assets/stylesheets/metro-bootstrap.css', 'assets/stylesheets/font-awesome.css']

})
export class MyProfileComponent {

}