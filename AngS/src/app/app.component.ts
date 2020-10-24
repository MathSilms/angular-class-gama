import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngS';
  variavel = 35+4;
  classe = true
  private _customClass = false


  get customClass(){
    return this._customClass
  }
  clickButton(){
    this._customClass = !this._customClass
  }

}


