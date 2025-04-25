import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { GameService } from '../Services/game.service';
import { Storage } from '@ionic/storage-angular';

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
  totalTriviaScore:number = 0;
  isClicked = false;
  isClickedTwo = false;
  isClickedThree = false;
 isClickedFour = false;

  

  constructor(private gameService:GameService, private router:Router, private storage:Storage) { }
  
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
      this.totalTriviaScore+=10;
      this.restart();
    }
    else if(this.right == false){
      alert("wrong answer");
    }
    else{
      alert("Please choose an answer");
    }
  }

  restart(){
      this.isClicked = false;
    this.isClickedTwo = false;
    this.isClickedThree = false;
    this.isClickedFour = false;
    this.hintVisable = true;
    this.ngOnInit();

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

  toggleClicked(){
    this.isClicked = !this.isClicked;
    this.isClickedTwo = false;
    this.isClickedThree = false;
    this.isClickedFour = false;

  }
  toggleClickedTwo(){
    this.isClickedTwo = !this.isClickedTwo;
    this.isClicked = false;
    this.isClickedThree = false;
    this.isClickedFour = false;
  }
  toggleClickedThree(){
    this.isClickedThree = !this.isClickedThree;
    this.isClickedTwo = false;
    this.isClicked = false;
    this.isClickedFour = false;
  }
  toggleClickedFour(){
    this.isClickedFour = !this.isClickedFour;
    this.isClickedTwo = false;
    this.isClickedThree = false;
    this.isClicked = false;
  }
  

  async getScore(){
    await this.storage.create(); //ensures it is never null by always creating
    //stores the country code
    await this.storage.set('totalTriviaScore', this.totalTriviaScore);
  }

}
