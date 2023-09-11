import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../../../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private apiUrl = 'http://localhost:9001/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.apiUrl);
  }

  getPost(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createPost(post: Partial<PostModel>): Observable<PostModel> {
    return this.http.post<PostModel>(this.apiUrl, post);
  }

  updatePost(post: Partial<PostModel>): Observable<Partial<PostModel>> {
    return this.http.put<Partial<PostModel>>(`${this.apiUrl}/${post.id}`, post);
  }

  deletePost(id: number): Observable<PostModel> {
    return this.http.delete<PostModel>(`${this.apiUrl}/${id}`);
  }
}
