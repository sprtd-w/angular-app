import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  protected apiUrl = 'http://localhost:9001/api/';

  constructor(protected http: HttpClient) {}
}
