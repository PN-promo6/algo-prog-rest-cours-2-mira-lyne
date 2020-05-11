import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../../models/user/user';
import { Post } from 'src/app/models/post/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers(): Observable<User[]> {
    let usersObservable: Observable<User[]> = this.httpClient.get<User[]>('http://localhost:3000/users');
    return usersObservable;
  }

  public fetchPosts(): Observable<Post[]> {
    let postsObservable: Observable<Post[]> = this.httpClient.get<Post[]>('http://localhost:3000/posts');
    return postsObservable;
  }
}
