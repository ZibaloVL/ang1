import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../app.component';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>(); //для создания события
  @ViewChild ('titleInput', { static: false })  inputRef: ElementRef; // видеть елемент внутри 
  title = '';
  text = '';
  constructor() { }

  addPost() {
    if ( this.title.trim() && this.text.trim() ) {
      const post: Post = {
        title: this.title,
        text: this.text
      };
      this.onAdd.emit( post );
//      console.log ( 'post', post );
      this.title = '';
      this.text = '';
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }

  ngOnInit(): void {
  }

}
