import { Route, Router } from '@angular/router';
import { Quiz } from '../quiz';
import { QuizService } from './../../service/quiz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes!: Quiz[]

  constructor(private quizService: QuizService, private router: Router){}

  ngOnInit(): void {
    this.quizService.readQuizzes().subscribe(quizzes => {
      this.quizzes = quizzes
      console.log(quizzes);
    })
   
  }

  openQuizForm(){
    this.router.navigate(['form'])

  }



}
