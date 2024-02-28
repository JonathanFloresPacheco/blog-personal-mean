import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBlog(): Observable<any[]> {
    try {
      const apiUrl= this.apiUrl+'/show';
      const json_result= this.http.get<any[]>(apiUrl);
      return json_result;
    } catch (error) {
      console.error('Error getting blog data:', error); // Log the error for investigation
      return throwError(error);
    }
  }

  getBById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/show/${id}`);
  }

  createBPost(post: any): Observable<Post> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Post>(this.apiUrl, post, {headers});
  }

  updateBPost(post: Post): Observable<Post> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<Post>(`${this.apiUrl}/${post._id}`, post, {headers});
  }

  deleteBPost(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/${id}`);
  }
}


function throwError(error: unknown): Observable<any[]> {
  throw new Error('Function not implemented.');
}

