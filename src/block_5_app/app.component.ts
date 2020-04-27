import { Component } from '@angular/core';


export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anBlok5';
  search = '';
  searchTagle = 'title';
  posts: Post[] = [
    {title: 'beer1', text: 'best beer1'},
    {title: 'beer2', text: 'best beer2'},
    {title: 'beer3', text: 'best beer3'}
  ];
  p: Promise<string> = new Promise<string>(
    resolve => { setTimeout ( () => { resolve ( 'hahaha' ) }, 4000); }
  );

  addPost() {
    this.posts.unshift ( {
      title: 'Olga',
      text: 'Best on thi Best'
    } );
  }
}
