// #docplaster
// #docregion
// TODO: Feature Componetized like CrisisCenter
// #docregion rxjs-imports
// #enddocregion rxjs-imports
import {Component, OnInit} from '@angular/core';
// #docregion import-router
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Hero} from '../hero';
// #enddocregion import-router

import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
// #docregion ctor
export class HeroListComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  selectedId = 0;

  constructor(private service: HeroService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(switchMap(params => {
      this.selectedId = parseInt(params.get('id')!, 10);
      return this.service.getHeroes();
    }));
  }
  // #enddocregion ctor
  // #docregion ctor
}
// #enddocregion
