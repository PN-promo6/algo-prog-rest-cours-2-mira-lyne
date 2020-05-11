import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data-service/data.service";
import { Post } from '../models/post/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts: Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchPosts()
      .subscribe(
        res => {
          this.posts = res;
        },
        (error) => {
          console.log(error);
        },
      )
  }

}
