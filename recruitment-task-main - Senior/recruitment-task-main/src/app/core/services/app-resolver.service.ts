import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PostsStateService } from '../../pages/home/services/posts-state.service';
import { Observable } from 'rxjs';
import { PostModel } from '../../model/post.model';

@Injectable({ providedIn: 'root' })
export class AppResolverService implements Resolve<PostModel[]> {
  constructor(private service: PostsStateService) {}

  resolve(): Observable<PostModel[]> {
    return this.service.getPosts();
  }
}
