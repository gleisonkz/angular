import {Observable} from 'rxjs';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

class DummyHeroesComponent {
  heroes: Observable<Hero[]>;
  // #docregion ctor
  constructor(private heroService: HeroService) {}
  // #enddocregion ctor
  // #docregion getHeroes
  getHeroes(): void {
    // #docregion get-heroes
    this.heroes = this.heroService.getHeroes();
    // #enddocregion get-heroes
  }
  // #enddocregion getHeroes
}
