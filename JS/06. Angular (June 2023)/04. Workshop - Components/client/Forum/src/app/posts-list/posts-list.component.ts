import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  postsList: Post[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    this.apiService.getPosts().subscribe({
      next: (posts) => {
        this.postsList = posts;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
      },
    });
  }
}
