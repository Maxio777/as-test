import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appWeatherDetail]'
})
export class WeatherDetailDirective {
  @Output() showCurrentCity = new EventEmitter<void>();


  @HostListener("mouseenter") onMouseEnter() {
    this.showCurrentCity.emit();
  }

}
