import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() childMessage:string ="child content";
  @Output() contentEvent = new EventEmitter<string>();
  @Output() clickedtEvent = new EventEmitter<string>();

  buttonClicked(){
    let a:HTMLInputElement = document.getElementById('childInput') as HTMLInputElement;
    this.contentEvent.emit(a.value)
  }

  buttoClickedMessage(){
    
    this.clickedtEvent.emit("Child button was clicked")

  }

}
