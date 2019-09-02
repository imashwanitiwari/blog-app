import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  title: string;
  post: any;
  user: any;
  constructor(private route: ActivatedRoute, public http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        let postId = params.get('postId');
        console.log();
        this.getPostDetails(postId)
      }
    );
  }

  getPostDetails(postId) {
    this.http.get<any>('https://jsonplaceholder.typicode.com/' + 'posts/' + postId)
      .subscribe(response => {
        this.post = response;
        this.getUserDetails(this.post.userId)
        console.log(this.post);
      });
  };

  getUserDetails(userId) {
    this.http.get<any>('https://jsonplaceholder.typicode.com/' + 'users/' + userId)
      .subscribe(response => {
        this.user = response;
        console.log(this.user);
      });
  }
}
