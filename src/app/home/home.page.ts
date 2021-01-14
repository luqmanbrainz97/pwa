import { Component } from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map: L.Map;

  constructor() {}

  ngOnInit() {
    this.map = L.map('map', {
      center: [3.1209, 101.6538],
      zoom: 20,
      renderer: L.canvas
    })

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map)

    setTimeout(() => {
      this.map.invalidateSize();
    },0);
  }

}
