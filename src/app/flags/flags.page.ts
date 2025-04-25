import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonBackButton, IonButtons  } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { GameService } from '../Services/game.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.page.html',
  styleUrls: ['./flags.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonInput, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonBackButton, IonButtons ]
})
export class FlagsPage implements OnInit {
  randomCountry:any; //the random country chosen
  randomNumber:number = 0; //a random number chosn from 0 to 50
  randomFlag:string =""; //the image for the flag
  currencyObj:any;
  currencyCode:any;

  countryCode:string = "";
  countdown:number[] = [];
  intervalId: any;
  count: number = 30;

  flagGuess:string = "";

  hintOneHidden:boolean =true;
  hintTwoHidden:boolean =true;
  hintThreeHidden:boolean =true;
  countHint = 0;




  constructor(private gameService:GameService, private storage:Storage, private router:Router) {}

  ngOnInit(): void {
    this.hintOneHidden =true;
  this.hintTwoHidden =true;
  this.hintThreeHidden = true;
    //gets a random number between 1 and 150
    this.randomNumber =Math.floor(Math.random() * 150);
    //sends the api data to randomCountry
    this.gameService.getRandomCountry().subscribe(
      (data) =>{
        //console.log(data[0]);
        //chooses a country from the api (the index is what the value of the random number is)
        this.randomCountry = data[this.randomNumber];
        this.randomFlag = data[this.randomNumber]
        this.currencyCode = data[this.randomNumber].currencies[0];

      }
    );
    //saves the value of the randomCountry's Country code variable countrey code 
    this.countryCode = this.randomCountry.cca2;
    //calls the method when the page loads
    this.getCountryCode();


  }
  submitAnswer(){
    if(this.flagGuess == this.randomCountry.name.common){
      alert("correct");
    }
    else{
      alert("country is: "+this.randomCountry.name.common)
    }

  }


  //this method gives the user a hint
  hint(){
    this.countHint++;
    if(this.countHint == 1){
      this.hintOneHidden = false;
    }
    else if(this.countHint == 2){
      this.hintTwoHidden = false;
    }
    else if(this.countHint == 3){
      this.hintThreeHidden = false;
      this.countHint = 0;

    }
  }

  nextFlag(){
    this.ngOnInit();
  }

    //method runs asynchronously
    async getCountryCode(){
      await this.storage.create(); //ensures it is never null by always creating
      //stores the country code
      await this.storage.set('countryCode', this.countryCode);
    }

}
