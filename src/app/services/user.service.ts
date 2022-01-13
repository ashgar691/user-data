import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { filter, map, Observable, BehaviorSubject, Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { Post } from '../interfaces/post';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  URL: string = "http://jsonplaceholder.typicode.com/";
  // private userLists = new BehaviorSubject();

  public allUsers: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public listPostsOfUser: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  public selectedUser$: Subject<Object> = new Subject<Object>();

  public userId: number = 0;


  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<User[]>(this.URL + 'users');
  }

  loadPostOfUser(): Observable<any> {
    return this.http.get<Post[]>(this.URL + 'posts').pipe(map(posts => posts.filter(post => post.userId == this.userId)));
  }

  addSelectedUser(user: User) {
    console.log(user);
    this.userId = user.id;
    this.selectedUser$.next(user);
    this.loadPostOfUser().subscribe(res => {
      this.listPostsOfUser.next(res);
    })
  }

  deleteUserPost(postId: Number):Observable<any> {
    return this.http.delete(this.URL + 'posts/' + postId);
  }
}
