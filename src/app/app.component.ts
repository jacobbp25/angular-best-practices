import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-app',
  styles: [
    `
      .app {
        width: 1000px;
        margin: auto;
      }
      .main {
        background-color: white;
      }
    `
  ],
  template: `
      <div class="app">
        <wb-nav-bar></wb-nav-bar>
        <div class="main">
          <router-outlet></router-outlet>
        </div>
      </div>
    `
})
export class AppComponent {}
