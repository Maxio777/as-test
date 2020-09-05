import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {City} from "./interfaces/city";
import {CITIES} from "./mock/mock";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'AS';
  cities: City[] = [];
  currentCity: City | null = null;

  ngOnInit(): void {
    this.cities = CITIES;
  }

  isShow(city: City) {
    return this.currentCity && this.currentCity.id === city.id;
  }

  setCurrentCity(city: City | null) {
    this.currentCity = city;
  }
}
