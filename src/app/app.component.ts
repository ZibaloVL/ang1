import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apppppppppppp';
  titleNg = 'ngngngngn';
  inputValue = '';

  onInput(event?) {

    this.inputValue = event.target.value;
  }

  onInput2(event: any) {

    this.title = event.target.value;
  }
}
