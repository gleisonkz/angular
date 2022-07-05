import {Injectable} from '@angular/core';

import {Logger} from '../logger.service';

import {HEROES} from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private logger: Logger) {}

  getHeroes() {
    this.logger.log('Getting heroes ...');
    return HEROES;
  }
}
