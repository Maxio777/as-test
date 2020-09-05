import {City} from '../interfaces/city';

export const CITIES: City[] = [
  {
    id: 1,
    name: 'Санкт-Петербург',
    time: Date.now(),
    temp: '+25',
    description: 'Солнечно',
    img: 'wi-day-sunny.svg'
  },
  {
    id: 2,
    name: 'Москва',
    time: Date.now(),
    temp: '+15',
    description: 'Дождь',
    img: 'wi-hail.svg'
  },
  {
    id: 3,
    name: 'Краснодар',
    time: Date.now(),
    temp: '-15',
    description: 'Снег',
    img: 'wi-night-snow-wind.svg'
  },
  {
    id: 4,
    name: 'Псков',
    time: Date.now(),
    temp: '+5',
    description: 'Пасмурно',
    img: 'wi-cloudy.svg'
  },
  {
    id: 5,
    name: 'Владивосток',
    time: Date.now(),
    temp: '+15',
    description: 'Ветер',
    img: 'wi-strong-wind.svg'
  }
];


