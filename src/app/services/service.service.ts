import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(`${this.url}/posts`);
  }

  getPostById(id) {
    return this.httpClient.get(`${this.url}/posts/${id}`);
  }

  getPhoto(id){
    return this.httpClient.get(`${this.url}/photos/${id}`);
  }

  deletePost(id){
    return this.httpClient.delete(`${this.url}/posts/${id}`);
  }
  updatePost(id, body){
    return this.httpClient.patch(`${this.url}/posts/${id}`, body);
  }
}
