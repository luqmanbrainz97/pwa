import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import * as L from "leaflet";
import { SearchModalComponent } from '../search-modal/search-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map: L.Map;

  constructor(private modalCtrl: ModalController) {}

  //for load map
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

  //for modal page
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SearchModalComponent
    });

    await modal.present();
  }

}
