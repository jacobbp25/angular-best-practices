import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'loading-spinner',
  template: '<img *ngIf="loading" src="../../assets/images/loading.gif" />',
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['loading']
})
export class LoadingComponent {
  loading: boolean;
}