import {Component} from 'angular2/core'

@Component({
    
    selector: 'footer',
    template: `
    <nav id="footer" class="navbarFooter navbar-default" role="navigation">
        <div>
                <div  style="width:60%;  margin:0 auto;">
        <ul class="nav navbar-nav">
      <li><a href="#">About Me</a></li>
      <li><a href="#">Contact Me</a></li>
      <li><a href="#">Help</a></li>
      <li><a href="#">Advertising Info</a></li>
      
    </ul>
<!--<form class="navbar-form navbar-right" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Tìm kiếm">
                </div>
                <button type="submit" class="btn btn-default">Tìm kiếm</button>
                </form> -->
    </div>
        </div>
    </nav>
    
    `,
    styleUrls :['assets/stylesheets/metro-bootstrap.css']
})
export class FooterComponent {


}