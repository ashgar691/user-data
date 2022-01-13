import { Component, Input, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  searchTerm: string = '';
  allPosts: Array<Post> = [];
  posts: Array<User> = [];



  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listPostsOfUser.subscribe(res => {
      this.allPosts = res;
    });
  }

  search(value: string): void {
    this.posts = this.posts.filter((val) => val.name.toLowerCase().includes(value));
  }

  deletePost(postId: number) {
    this.userService.deleteUserPost(postId).subscribe({
      next: data => {
        alert('Delete successful');
        this.allPosts = this.allPosts.filter(data => data.id !== postId);
      },
      error: error => {
        alert(error.message);
        console.error('There was an error!', error);
      }
    });;

  }

  ngOnDestory() {
    this.userService.listPostsOfUser.unsubscribe();

  }
}
