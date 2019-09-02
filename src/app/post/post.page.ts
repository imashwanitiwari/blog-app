import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  title: string;
  post: any;
  user: any;
  constructor(private route: ActivatedRoute, public http: HttpClient, public constants: ConstantsService) { }

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
    this.http.get<any>(this.constants.getUrl() + 'posts/' + postId)
      .subscribe(response => {
        this.post = response;
        this.getUserDetails(this.post.userId)
        console.log(this.post);
      });
  };

  getUserDetails(userId) {
    this.http.get<any>(this.constants.getUrl() + 'users/' + userId)
      .subscribe(response => {
        this.user = response;
        console.log(this.user);
      });
  }
}
