import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']  
  // uppar waali line ek array hai so that one can link more 
  // than one css file .

  styles:[`
  h3{
    color:red;
  }`]
})
export class AppComponent {
  // name = 'ritik kamboj ';
}
