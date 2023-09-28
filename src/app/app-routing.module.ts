import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

// ce tableau lie les routes de l'application aux composants correspondants
const routes: Routes = [
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: '', component: LandingPageComponent },
];

// décorateur qui reçoit un objet de configuration pour enregistrer les routes
@NgModule({
  // les routes de ce fichier sont les routes à la racine de l'application
  imports: [RouterModule.forRoot(routes)],
  // on exporte de routeur configuré
  exports: [RouterModule],
})
export class AppRoutingModule {}
