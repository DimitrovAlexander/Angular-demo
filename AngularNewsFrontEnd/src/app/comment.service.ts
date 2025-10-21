import { Injectable } from '@angular/core';
import { CommentDTO } from './comment-dto';
import { CreateCommentDTO } from './create-comment-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
private apiUrl = 'http://localhost:5000/api/comments'; // Replace with your backend API URL
  constructor(private http: HttpClient) { }

  addComment(comment: CreateCommentDTO): Observable<CommentDTO> {
    return this.http.post<CommentDTO>(this.apiUrl, comment);
  }
   getCommentsForArticle(articleId: number): Observable<CommentDTO[]> {
    return this.http.get<CommentDTO[]>(`${this.apiUrl}/article/${articleId}`);
  }
  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

