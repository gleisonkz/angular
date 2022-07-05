// #docregion
import {Component, OnInit} from '@angular/core';

import {Hero, HeroArena, HeroService} from './heroes';

@Component({
  selector: 'toh-app',
  template: '<pre>{{heroes | json}}</pre>',
  providers: [HeroArena, HeroService]
})
export class AppComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroArena: HeroArena) {}

  ngOnInit() {
    this.heroArena.getParticipants().subscribe(heroes => this.heroes = heroes);
  }
}
