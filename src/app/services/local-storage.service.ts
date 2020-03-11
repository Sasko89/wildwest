import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  storageName:string;
  storageBeer:string;



  setLocalStorage(name:string){
    this.storageName = name;
    localStorage.setItem ('name',this.storageName);

  }

  checkStorage(name:string){

    this.storageName = name;
    localStorage.getItem (this.storageName);
  }
}
