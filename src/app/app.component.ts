import { Component } from '@angular/core';
import { AppCounterService } from './servises/app-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anBlok6';
  constructor( public appCounterService: AppCounterService ) {

  }
}
