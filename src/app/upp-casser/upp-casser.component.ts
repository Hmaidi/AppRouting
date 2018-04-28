import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upp-casser',
  templateUrl: './upp-casser.component.html',
  styleUrls: ['./upp-casser.component.css']
})
export class UppCasserComponent implements OnInit {
  TextUppercase: string;
  constructor() { }

  ngOnInit() {
  }
  Upppercase() {
     this.TextUppercase = this.TextUppercase.toUpperCase();
     console.log(this.TextUppercase);
  }
}
