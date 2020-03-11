import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-selectbeverage',
  templateUrl: './selectbeverage.component.html',
  styleUrls: ['./selectbeverage.component.css']
})
export class SelectbeverageComponent implements OnInit {

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit(): void {
  }

orderBeer(beer:string){
console.log(beer)

}

}
