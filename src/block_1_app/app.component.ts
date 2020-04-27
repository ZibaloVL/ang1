import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';

export interface Post {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 posts: Post[] = [
   {title: 'Lord', text: 'Stars', id: 1 },
   {title: 'Lord2', text: 'Stars2', id: 2 }
 ];
 updatePosts( post: Post ) {
   this.posts.unshift( post );
 }
 delPostbyId( id: number ) {
  this.posts = this.posts.filter( p => p.id !== id )
 }
}
