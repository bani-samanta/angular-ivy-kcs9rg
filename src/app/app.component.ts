import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  openingPrice = 323.5;
  balance = 10000;
  unit = 0;
  currentPrice = null;
  trns = [];

  generatePrice(max, min) {
   return Math.random() * (max - min) + min;
  }

  performTransaction() {
   this.currentPrice =  (this.generatePrice(this.openingPrice + 50, 200)).toFixed(2);

    let trn = {
      tranactionId: new Date().getTime(),
      type: "buy",
      unit: 1,
      closingBalance: 10,
      price: this.currentPrice
    };
    this.trns.push(trn);
  }
}
