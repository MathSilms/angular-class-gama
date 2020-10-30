import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<eve-header><router-outlet></router-outlet></eve-header>',
})
export class AppComponent {
  vari = '';

  click2(value ) {
    this.vari = value
  }

}


