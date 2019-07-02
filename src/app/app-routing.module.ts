import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intranet',
    pathMatch: 'full'
  },
  {
    path: 'intranet',
    loadChildren: './intranet/intranet.module#IntranetPageModule'
  },
  {
    path: 'cafeteria',
    loadChildren: './cafeteria/cafeteria.module#CafeteriaPageModule'
  },
  //GNM----
  {
    path: 'eventos',
    loadChildren: './eventos/eventos.module#EventosPageModule'
  },
  {
    path: 'noticias',
    loadChildren: './noticias/noticias.module#NoticiasPageModule'
  },
  {
    path: 'mapa',
    loadChildren: './mapa/mapa.module#MapaPageModule'
  },
  {
    path: 'redessociales',
    loadChildren: './redessociales/redessociales.module#RedesSocialesPageModule'
  },
  {
    path: 'emergencia',
    loadChildren: './emergencia/emergencia.module#EmergenciaPageModule'
  }



  //GNM----
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
