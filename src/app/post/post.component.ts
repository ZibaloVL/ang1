import { Component, OnInit, Input, ContentChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @ContentChild( 'info', { static: true}) infoRef: ElementRef;
  @Output() del: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log( 'this.infoRef', this.infoRef )
  }

  delPost() {
    this.del.emit (this.post.id);
  }

}
