import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
  currentCity: City = null;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.cities = CITIES;
  }

  isShow(city: City) {
    return this.currentCity && this.currentCity.id === city.id;
  }

  closeModal() {
    console.log('close');
    this.setCurrentCity(null);
    this.cd.detectChanges();
  }

  setCurrentCity(city: City | null) {
    this.currentCity = city;
    this.cd.detectChanges();
  }
}
