import {Component} from '@angular/core';

import {UserService} from '../greeting/user.service';

import {CustomersService} from './customers.service';

@Component({
  template: `
    <h2>Customers of {{userName}}</h2>
    <router-outlet></router-outlet>
  `,
  providers: [UserService]
})
export class CustomersComponent {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}
