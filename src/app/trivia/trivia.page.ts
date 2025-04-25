import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonBackButton, IonButtons, IonMenu, IonMenuButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { GameService } from '../Services/game.service';
import { Storage } from '@ionic/storage-angular';
import {ToastController} from '@ionic/angular';
@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.page.html',
  styleUrls: ['./trivia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonBackButton, IonButtons, IonButton, IonMenu, IonMenuButton ]
})
export class TriviaPage implements OnInit {

  //variables
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

  

  constructor(private gameService:GameService, private router:Router, private storage:Storage, private toastController:ToastController) { }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Congrats! You were correct',
      duration: 2000, // Duration in ms
      position: 'middle', // 'top' | 'middle' | 'bottom'
      color: 'success', // 'primary', 'danger', 'light', etc.
    });

    await toast.present();
  }

  //when the correct answer is chosen, saves the variable as true
  rightButtonClicked(){
    this.right = true;
  }
    //when the correct answer is chosen, saves the variable as false

  wrongButtonClicked(){
    this.right = false;
  }
  //makes the hint visible
  hint(){
    this.hintVisable = false;

  }
  //when the user presses the next button, this method calls the ngOnInit method, which will grab a new question
  submitAnswers(){
    if(this.right == true){ //if the answer is right
      this.presentToast(); //valls the method to display that the user is right
      this.restart(); //restarts game
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
