import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }
  getweather(City, Pays) {
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + City + ',' + Pays + '&appid=17b1c8913b68544be214a35bf9a3b227');
  }
}
