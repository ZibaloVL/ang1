import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anBlok4';
  isVisible = true;
  isVisibleTagle() {
    this.isVisible = !this.isVisible;
  }
}
