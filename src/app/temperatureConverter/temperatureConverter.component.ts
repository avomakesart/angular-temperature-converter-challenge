import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {


  constructor() {}

  celsius: number = null;
  fahrenheit: number = null;

  ngOnInit() {}

  conversion(from: string) {
    if (from === 'c') {
      if (this.celsius === null) {
        this.fahrenheit = null;
        return;
      }
      this.fahrenheit = (this.celsius * 9 / 5) + 32;
      if (Math.floor(this.fahrenheit) === this.fahrenheit) {
        this.fahrenheit = Number(this.fahrenheit.toFixed(1));
      }
      
    } else {
      if (this.fahrenheit === null) {
        this.celsius = null;  
        return;
      }
      this.celsius = (this.fahrenheit - 32) *  5 / 9;
      if (Math.floor(this.celsius) !== this.celsius) {
        this.celsius = Number(this.celsius.toFixed(1));
      }      
    }
  }

}
