// #docregion
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Hero} from './hero.model';

@Injectable()
// #docregion example
export class HeroService {
  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Hero[]>('api/heroes');
  }
}
// #enddocregion example
