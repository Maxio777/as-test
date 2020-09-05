import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {City} from "../interfaces/city";

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherInfoComponent {
  @Input() currentCity: City = null;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

}
