import { Component } from '@angular/core';

export interface Post {
  title: String,
  text: String,
  id?: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 posts: Post[] = [
   {title: "Lord", text: "Stars", id: 1 },
   {title: "Lord2", text: "Stars2", id: 2 }
 ]
}
