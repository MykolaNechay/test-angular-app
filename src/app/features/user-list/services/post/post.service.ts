import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) { }

  getByUserId(id: string): Observable<any[]> {
    return this.httpClient.get<any>(this.baseUrl, {
      params: {
        userId: id
      }
    })
  }
}
