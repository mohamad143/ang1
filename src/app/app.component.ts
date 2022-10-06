import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  childContent:String = "child content";
  childClicked:string ="";
 
  

  
   

  parentInput:string = "parent content";
  sentContent(){
    let parentContentToSend:HTMLInputElement = document.getElementById('parentInput') as HTMLInputElement;
    this.parentInput = parentContentToSend.value;

  }

  changeContent(value:string){

    this.childContent = value;
  }

  clickedContent(value:string){
    this.childClicked = value;
  }

 

}
