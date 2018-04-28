import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../servive/weather.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  Pays: string;
  City: string;
  weatherData;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getweather(this.City, this.Pays).subscribe(res => {
      console.log(res.json().weather[0].description);
      this.weatherData = res.json().weather[0].description;
    });
  }
  Chercher() {
    this.weatherService.getweather(this.City, this.Pays).subscribe(res => {
      this.weatherData = res.json().weather[0].description;
    });
    }
}
