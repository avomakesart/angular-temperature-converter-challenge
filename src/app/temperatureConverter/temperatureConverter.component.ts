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

  onChange(value: number | null, type: "c" | "f") {
    let result: number = null;
    if (value !== null) {
      result = type === "c" ? (value * 9 / 5) + 32 : (value - 32) *  5 / 9
      if (Math.floor(result) !== result) {
        result = Number(result.toFixed(1));
      }
    }
    if (type === "c") {
      this.fahrenheit = result;
    } else {
      this.celsius = result;
    }
  }
}
