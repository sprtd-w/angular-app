import { Injectable } from '@angular/core';
import { PostsService } from './posts.service';
import { AppStateService } from '../../../core/services/app-state.service';
import { StateKeysEnum } from '../../../model';
import { Observable, tap } from 'rxjs';
import { PostModel } from '../../../model/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostsStateService extends AppStateService {
  propName = StateKeysEnum.posts;

  constructor(private postsService: PostsService) {
    super();
  }

  private get currentPostsState():PostModel[] {
    return this.getData[this.propName];
  }

  private setStatePosts(posts: PostModel[]|Partial<PostModel>[]): void {
    this.setData(this.propName, posts);
  }

  getPosts(): Observable<PostModel[]> {
    return this.postsService.getPosts()
      .pipe(
        tap((posts: PostModel[]) => {
          this.setStatePosts(posts);
        }));
  }

  getPost(id: number): any {
    return this.postsService.getPost(id)
      .pipe(tap((post) => this.setStatePosts([ ...this.currentPostsState, post ])));
  }

  addPost(post: Partial<PostModel>): Observable<PostModel> {
    return this.postsService.createPost(post)
      .pipe(tap(() => this.setStatePosts([ ...this.currentPostsState, post ])));
  }

  updatePost(post: Partial<PostModel>): Observable<Partial<PostModel>> {
    return this.postsService.updatePost(post)
      .pipe(tap(() => this.setStatePosts([ ...this.currentPostsState, post ])));
  }

  deletePost(postId: number): Observable<Partial<PostModel>> {
    return this.postsService.deletePost(postId);
  }
}
