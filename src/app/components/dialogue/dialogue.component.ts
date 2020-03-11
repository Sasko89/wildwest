import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

@ViewChild('userName', {static:false}) nameInputRef: ElementRef
inputValue: string= "";

  constructor(public localStorage:LocalStorageService) { }

  ngOnInit(): void {

    this.localStorage.checkStorage();

  }

  onSubmit(name:string){
    this.inputValue = this.nameInputRef.nativeElement.value;
    this.localStorage.setLocalStorage(this.inputValue);
    console.log (this.localStorage);
    
  }


}
