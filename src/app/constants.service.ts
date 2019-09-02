import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  private url = 'https://jsonplaceholder.typicode.com/';

  constructor() { }

  public getUrl() {
    return this.url;
  }
}
