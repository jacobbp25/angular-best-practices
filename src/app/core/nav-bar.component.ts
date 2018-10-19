import { Component } from '@angular/core';

import { UserRepositoryService } from './user-repository.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wb-nav-bar',
  styleUrls: [`./nav-bar.component.css`],
  template: `
    <div class="nav-bar">
      <img class="logo" src="/assets/images/whitebeard-logo.png" alt="Whitebeard Logo" />
      <div class="nav-item"><a [routerLink]="['/catalog']">Catalog</a></div>
      <account-menu [user]="currentUser" (signedOut)="handleSignOut()"></account-menu>
    </div>
`
})
export class NavBarComponent {
  constructor(private userRepo: UserRepositoryService) {}

  get currentUser() {
    return this.userRepo.currentUser;
  }

  handleSignOut() {
    this.userRepo.currentUser = null;
  }
}
