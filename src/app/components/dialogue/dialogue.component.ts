import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
@ViewChild('userName', {static:false}) nameInputRef: ElementRef
inputValue: string= "";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.inputValue = this.nameInputRef.nativeElement.value;
    
  }
}
