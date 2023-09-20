import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.css']
})
export class QuizInfoComponent {

  infos: string[] = [
    'Quiz é um desafio criado para Page Interim & IG Networks.',
    'Você poderá buscar um quiz na sua lista, além de poder editar e remover o mesmo.',
    ' Na criacão, escolha se seu quiz terá 5 ou 10 questões. Cada questão terá no mínimo 2 e no máximo 4 alternativas',
    'E atencão na criação de cada questão: A primeira resposta sempre será a correta, use os campos das demais para as respostas incorretas.',
    'Mas não se preocupe com a ordem! Ao jogá-lo, as alternativas sempre virão aleatoriamente.',
    'Aproveite e divirta-se!',

  ]

}
