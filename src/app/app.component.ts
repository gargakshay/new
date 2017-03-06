import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>hi my name is akshay`
})
export class AppComponent { name = 'Angular'; }
