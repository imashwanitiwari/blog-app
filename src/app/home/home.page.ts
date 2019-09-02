import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../constants.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: any[];
  constructor(constants: ConstantsService, http: HttpClient) {
    http.get<any>(constants.getUrl() + 'posts')
      .subscribe(response => {
        let data = response;
        this.posts = data;
      });
  }

}
