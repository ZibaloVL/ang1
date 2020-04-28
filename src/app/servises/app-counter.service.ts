import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {

  count = 0;

  increase() {
    this.count++;
  }
  decriase() {
    this.count--;
  }

}
