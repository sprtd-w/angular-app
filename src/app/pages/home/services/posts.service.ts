import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../../../model/post.model';
import { HttpService } from "../../../core/services/http.service";

@Injectable({
  providedIn: 'root'
})
export class PostsService extends HttpService {
  apiUrlPosts = this.apiUrl + 'posts';

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.apiUrlPosts);
  }

  getPost(id: number): Observable<any> {
    return this.http.get(`${this.apiUrlPosts}/${id}`);
  }

  createPost(post: Partial<PostModel>): Observable<PostModel> {
    return this.http.post<PostModel>(this.apiUrlPosts, post);
  }

  updatePost(post: Partial<PostModel>): Observable<Partial<PostModel>> {
    return this.http.put<Partial<PostModel>>(`${this.apiUrlPosts}/${post.id}`, post);
  }

  deletePost(id: number): Observable<PostModel> {
    return this.http.delete<PostModel>(`${this.apiUrlPosts}/${id}`);
  }
}
