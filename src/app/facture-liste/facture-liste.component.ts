import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { Facture } from '../models/facture.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterOutlet } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facture-liste',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
  ],
  templateUrl: './facture-liste.component.html',
  styleUrl: './facture-liste.component.css',
})
export class FactureListeComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'quantity',
    'price',
    'total',
    'actions',
  ];

  table: Facture[] = [
    { id: 1, name: 'stylo', price: 2, quantity: 5 },

    { id: 2, name: 'ordinateur', price: 100, quantity: 2 },

    { id: 3, name: 'câble', price: 10, quantity: 3 },
  ];

  total_sum: number = 0;
  total_qtity: number = 0;
  total_table: number[] = [];

  formGroup!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      designation: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
    });

    this.total();
  }

  add() {
    console.log(this.formGroup.value.designation);
    console.log(this.formGroup.value.quantity);
    console.log(this.formGroup.value.price);
    let newItem = {
      id: this.formGroup.value.id,
      name: this.formGroup.value.designation,
      price: this.formGroup.value.price,
      quantity: this.formGroup.value.quantity,
    };
    /*this.table.push({
      name: this.formGroup.value.designation,
      price: this.formGroup.value.price,
      quantity: this.formGroup.value.quantity,
    });*/

    this.table = [...this.table, newItem];
    this.total();
  }

  total() {
    this.total_sum = 0;
    this.total_table = [];
    for (let i = 0; i < this.table.length; i++) {
      this.total_qtity = this.table[i].price * this.table[i].quantity;
      this.total_table.push(this.total_qtity);
      this.total_sum = this.total_sum + this.total_table[i];
    }
  }

  edit(i: number) {}
  delete(i: number) {
    this.table.splice(i, 1);
    this.table = [...this.table];
    this.total();
  }
}
