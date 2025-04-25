import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { GameService } from '../Services/game.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.page.html',
  styleUrls: ['./trivia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonBackButton, IonButtons, IonButton]
})
export class TriviaPage implements OnInit {

  myTrivia:any[] = [];
  quest:any;
  incorrectOne:any;
  rightAnswer:any;
  incorrectTwo:any[] = [];
  right:boolean | null = null;

  hintVisable:boolean = true; 
  

  constructor(private gameService:GameService, private router:Router) { }
  
  //when the user presses the next button, this method calls the ngOnInit method, which will grab a new question
  nextTriviaQuestion(){
    this.ngOnInit();
  }
  rightButtonClicked(){
    this.right = true;
  }
  wrongButtonClicked(){
    this.right = false;
  }
  hint(){
    this.hintVisable = false;

  }

  submitAnswers(){
    if(this.right == true){
      alert("Right answer");
    }
    else if(this.right == false){
      alert("wrong answer");
    }
    else{
      alert("Please choose an answer");
    }
  }


  ngOnInit() {
    this.gameService.getTriviaData().subscribe(
      (data) => {
        this.quest = data.results[0];
        this.rightAnswer = data.results[0];
        
        this.incorrectOne = data.results[0];
        this.incorrectTwo = data.results[0];

      }
    );

  }

}
