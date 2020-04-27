import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field: string = 'title' ): Post [] {
    if (!search.trim()) {
      console.log('2');
      return posts;
    } else {
      return  posts.filter(p => p[ field ].toLowerCase().includes(search.toLocaleLowerCase()));
    }
  }

}
