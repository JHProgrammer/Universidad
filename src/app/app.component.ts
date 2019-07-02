import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Intranet',
      url: '/intranet',
      icon: 'list'
    },
    {
      title: 'Cafetería',
      url: '/cafeteria',
      icon: '../assets/cafeteria/cafeteriaIcon.svg'
    },
    {
      title: 'Eventos',
      url: '/eventos',
      icon: 'assets/cafeteria/cafeteriaIcon'
    },
    {
      title: 'Noticias',
      url: '/noticias',
      icon: 'noticias'
    },
    {
      title: 'Mapa',
      url: '/mapa',
      icon: 'mapa'
    },
    {
      title: 'Redes Sociales',
      url: '/redessociales',
      icon: 'redessociales'
    },
    {
      title: 'Emergencia',
      url: '/emergencia',
      icon: 'emergencia'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
