import { Routes } from '@angular/router';
import { FactureListeComponent } from './facture-liste/facture-liste.component';
import { FactureDetailComponent } from './facture-detail/facture-detail.component';

export const routes: Routes = [
  {
    path: 'facture-liste',
    component: FactureListeComponent,
  },
  {
    path: 'facture-detail/:i',
    title: 'Détails',
    component: FactureDetailComponent,
  },
];
