import { Component, OnInit } from '@angular/core';

import * as L from "leaflet";
//imports for showing leaflet marker
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-icon-2x.png";

import { SearchModalComponent } from '../search-modal/search-modal.component';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  map: L.Map;

  constructor(
    private modalCtrl: ModalController,
    private route: Router
    ){}

  ngOnInit(){
    this.loadMap();
  }

  //function for load map
  loadMap() {
    this.map = L.map('map', {
      center: [3.1209, 101.6538],
      zoom: 20,
      renderer: L.canvas
    })

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('click', this.onMapClick, this);
    setTimeout(() => {
      this.map.invalidateSize();
    },0);
  }

  //function for modal page
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SearchModalComponent
    });

    await modal.present();
  }

  nextpage() {
    this.route.navigate(['/select-campus']);
  }

  //function marker on POI
  onMapClick(e) {
    let POIMarker = L.marker(e.latlng);
    POIMarker.addTo(this.map);

    //Call function to see lat and longitude
    POIlatlng();

    //function when the marker is placed down
    function POIlatlng(){
      let lat = e.latlng.lat;
      let lon = e.latlng.lng;

      console.log('lat: ', lat);
      console.log('lon: ', lon);
    }
  }
}
