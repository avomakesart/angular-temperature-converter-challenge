import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
})
export class TemperatureConverter implements OnInit {

  far: String = '';

  cel: String = '';

  constructor() {}

  ngOnInit() {}

  calculateFarenheit(celsius) {
    if(celsius !== null) {
      let calc = celsius * 9 / 5 + 32;
      this.far = calc.toFixed(1);
    } else {
      this.far = '';
    }
  }

  calculateCelcius(farenheit) {
    if(farenheit !== null) {
      let calc = (farenheit - 32) * 5 / 9;
      this.cel = calc.toFixed(1);
    } else {
      this.cel = '';
    }
  }
}
