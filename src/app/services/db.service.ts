import { Injectable } from '@angular/core';
import { Facture } from '../models/facture.model';

@Injectable({ providedIn: 'root' })
export class DbService {
  private factures: Facture[] = [
    { id: 1, name: 'stylo', quantity: 5, price: 2 },
    { id: 2, name: 'ordinateur', quantity: 2, price: 100 },
    { id: 3, name: 'câble', quantity: 3, price: 10 },
  ];
}
