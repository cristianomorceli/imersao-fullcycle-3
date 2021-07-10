import { Injectable } from '@nestjs/common';
import { Routes } from './routes';

@Injectable()
export class AppService {
  private readonly routes: Routes = [
    {
      title: 'Regente Feijó -> São Paulo',
      startPosition: {latitude: '-22.2147503', longitude: '-51.2990424'},
      endPosition: {latitude: '-23.5506507', longitude: '-46.6333824'},
    },
    {
      title: 'São Paulo -> Peru',
      startPosition: {latitude: '-23.5506507', longitude: '-46.6333824'},
      endPosition: {latitude: '-6.8699697', longitude: '-75.0458515'},
    },
    {
      title: 'Peru -> Machu Picchu',
      startPosition: {latitude: '-6.8699697', longitude: '-75.0458515'},
      endPosition: {latitude: '-13.16441865', longitude: '-72.54476397431836'},
    },
    {
      title: 'Machu Picchu -> Torres del Paine',
      startPosition: {latitude: '-13.16441865', longitude: '-72.54476397431836'},
      endPosition: {latitude: '-51.0405776', longitude: '-72.98465008755775'},
    },
    {
      title: 'Oiapoque -> Chuí',
      startPosition: {latitude: '-33.6866074', longitude: '-53.4723288'},
      endPosition: {latitude: '-33.6895237', longitude: '-53.454704'},
    }
  ];

  getRoutes() {
    return this.routes;
  }
}