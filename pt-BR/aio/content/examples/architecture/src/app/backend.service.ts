import {Injectable, Type} from '@angular/core';

import {Hero} from './hero';
import {Logger} from './logger.service';

const HEROES = [
  new Hero('Windstorm', 'Weather mastery'), new Hero('Dr Nice', 'Killing them with kindness'),
  new Hero('Magneta', 'Manipulates metallic objects')
];

@Injectable()
export class BackendService {
  constructor(private logger: Logger) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Hero) {
      // TODO: get from the database
      return Promise.resolve<Hero[]>(HEROES);
    }
    const err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
