import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AppCounterService {
  
  count = 0;

  constructor( public logService: LogService ) {}

  increase() {
    this.logService.log('increase counter');
    this.count++;
  }
  decriase() {
    this.count--;
  }

}
