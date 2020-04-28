import { Injectable } from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)
export class LocalCounterService {
  count = 0;

  increase() {
    this.count++;
  }
  decriase() {
    this.count--;
  }

  constructor() { }
}
