import { Component, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  title = '';
  text = '';
  constructor() { }

  addPost() {
    if ( this.title.trim() && this.text.trim() ) {
      const post: Post = {
        title: this.title,
        text: this.text
      };
      console.log ('post', post);
      this.title = '';
      this.text = '';
    }
  }

  ngOnInit(): void {
  }

}
