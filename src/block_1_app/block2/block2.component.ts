import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block2',
  templateUrl: './block2.component.html',
  styleUrls: ['./block2.component.scss']
})
export class Block2Component implements OnInit {
  postTitle: String = 'default post';
  backgroundTogle = false;
  classTogle = true;
  togle = true;
  togleSwitch: any = true;
  arr = [1,1,3,5,8,13];
  constructor() { }

  ngOnInit(): void {
  }

}

