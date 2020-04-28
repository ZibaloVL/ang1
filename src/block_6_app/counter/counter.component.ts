import { Component, OnInit } from '@angular/core';
import { AppCounterService } from '../servises/app-counter.service';
import { LocalCounterService } from '../servises/local-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [ LocalCounterService ]
})
export class CounterComponent implements OnInit {

  constructor( 
    public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService
    ) { }

  ngOnInit(): void {
  }

}
