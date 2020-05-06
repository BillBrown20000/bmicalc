import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmi calculator';

  kilogram: number;
  centimeters: number;
  result: number;

click(){ 
  this.result = this.kilogram / Math.pow (this.centimeters/100,2)

  }
}
