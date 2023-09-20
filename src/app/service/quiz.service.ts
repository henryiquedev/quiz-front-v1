import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Quiz } from '../quiz/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  url: string = 'http://localhost:8080/quizzes'

  constructor( private http: HttpClient) { }

  //Método Get buscando todos
  readQuizzes(): Observable<Quiz[]>{
    return this.http.get<Quiz[]>(this.url).pipe(
      map((q) => q),
      catchError((e) => this.error(e))
      
    );
    }

  //Método Get buscando por Id 
  readQuizById(id: any): Observable<Quiz>{
    return this.http.get<Quiz>(`${this.url}/${id}`).pipe(
      map((q) => q),
      catchError((e) => this.error(e))
      
    );
  }

  //Método Post para criar
  createQuiz(quiz: Quiz): Observable<Quiz>{
    return this.http.post<Quiz>(this.url, quiz).pipe(
      map((q) => q),
      catchError((e) => this.error(e))
      
    );
  }

  //Método Delete para alterar 
  updateQuiz(quiz: Quiz): Observable<Quiz>{
    return this.http.put<Quiz>(`${this.url}/${quiz.id}`, quiz).pipe(
      map((q) => q),
      catchError((e) => this.error(e))
      
    );
  }

    //Método Delete para deletar 
    deleteQuiz(id: any): Observable<Quiz>{
      return this.http.delete<Quiz>(`${this.url}/${id}`).pipe(
        map((q) => q),
        catchError((e) => this.error(e))
        
      );
    }

    error(e?: any): Observable<any> {
      return e;

    }
  }

