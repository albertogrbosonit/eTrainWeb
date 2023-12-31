import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { AsesoriaEvaluacionPageComponent } from './shared/pages/asesoria-evaluacion-page/asesoria-evaluacion-page.component';
import { ComienzaPageComponent } from './shared/pages/comienza-page/comienza-page.component';
import { EntrenamientoPersonalPageComponent } from './shared/pages/entrenamiento-personal-page/entrenamiento-personal-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { PlanesPageComponent } from './shared/pages/planes-page/planes-page.component';
import { ServicesPageComponent } from './shared/pages/services-page/services-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'servicios',
    component: ServicesPageComponent,
    children: [
      { path: 'asesoria-online', component: AsesoriaEvaluacionPageComponent },
      {
        path: 'entrenamientos-personales',
        component: EntrenamientoPersonalPageComponent,
      },
    ],
  },
  {
    path: 'planes',
    component: PlanesPageComponent,
  },

  {
    path: 'comienza-hoy',
    component: ComienzaPageComponent,
  },

  {
    path: '**',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
