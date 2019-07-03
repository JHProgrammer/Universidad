import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-list',
  templateUrl: 'mapa.page.html',
  styleUrls: ['mapa.page.scss']
})

export class MapaPage implements OnInit{
  
  map: GoogleMap;
  loading: any;
  public locations;
  public locationsMap;
  
  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform
  ) {
   
  }

  ngOnInit(){

    this.platform.ready();
    this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: -12.0615148,
          lng: -77.1176127
        },
        zoom: 18,
        tilt: 30
      },
    });

  }

  async onButtonClick() {
    this.map.clear();
    this.locations = [{
      "FIIS": {
          "latLng":  { 
              "lat": -12.0615148,
              "lng": -77.1176127   
          }
      },
      "FCA": {
        "latLng":  { 
            "lat": -12.0609119,
            "lng": -77.116725
        }
    },
    "FCM": {
      "latLng":  { 
          "lat": -12.0620411,
          "lng": -77.1175513
      }
  }
  }];
  this.locationsMap = [];
  for (let index = 0; index < this.locations.length; index++) {
    this.locationsMap.push(this.locations[index].latLng);
    
  }

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      alert(JSON.stringify(location, null ,2));
      
      alert(JSON.stringify(this.locations, null ,2));
      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: this.locationsMap.latLng,
        // target: {
        //   lat: -12.0618127,
        //   lng: -77.1195191,
        // },
        zoom: 17,
        tilt: 30
      });

      // add a marker
      let marker: Marker = this.map.addMarkerSync({
        title: 'Facultad Ingenieria de Sistemas',
        snippet: 'FIIS',
        position: this.locations.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      marker.showInfoWindow();

      // If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });
    })
    .catch(err => {
      this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }
}