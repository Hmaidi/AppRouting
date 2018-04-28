import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { WeatherService } from '../servive/weather.service';

import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // myPhone = 'note8';
  PrixProduit: number ;
  NomdeProduit: string ;
  PhoneRepeater;
  Pays: string;
  City: string;
  weatherData;
  constructor(private apiService: ServiceService, private weatherService: WeatherService) {

  }

  ngOnInit() {
    this.PhoneRepeater = this.apiService.getData();
    this.weatherService.getweather(this.City, this.Pays).subscribe(res => {
      console.log(res.json().weather[0].description);
      this.weatherData = res.json().weather[0].description;
    });
  }
addBtn() {
  // this.phones = this.phones;
 }

 onSave() {
 // this.NomdeProduit = this.NomdeProduit;
 // this.PrixProduit = this.PrixProduit;
  // this.PhoneRepeater.push({ NomdeProduit: this.NomdeProduit , PrixProduit: this.PrixProduit  });
 // console.log(this.NomdeProduit);
  // console.log(this.PrixProduit);
  }
}
