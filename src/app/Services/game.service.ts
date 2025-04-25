import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  //api for flag detai;s
  randomFlagOne:string = "https://flagsapi.com/";
  countryCode:string = "BE";
  randomFlagTwo:string = "/flat/64.png";
  
  getFlag:string = ""; 
  constructor(private httpClient: HttpClient, private storage:Storage) {}

  ///gets questions from a tribia pi
  getTriviaData(): Observable<any>{

    return this.httpClient.get("https://opentdb.com/api.php?amount=50&category=11&difficulty=easy&type=multiple");
  }

  //chses a random country to get data from
  getRandomCountry(): Observable<any>{
    return this.httpClient.get("https://restcountries.com/v3.1/all");
  }

  getRandomFlag(): Observable<any>{
    //calls the method
    this.randFlag();
    console.log(this.countryCode);
    this.getFlag = this.randomFlagOne+this.countryCode+this.randomFlagTwo;

    return this.httpClient.get(this.getFlag);
  }
//stores the data from the flag to the ounty
  async randFlag(){
    //this makes the value of country code what was stored in it before
    this.countryCode = await this.storage.get('countryCode');

  }


 
/*
  getAnagramData(): Observable<any>{
    this.returnWord= "http://www.anagramica.com/best/:anagram";
    return this.httpClient.get(this.returnWord);
  }

  getSudokuData(): Observable<any>{
    return this.httpClient.get("https://sudoku-api.vercel.app/api/dosuku");
  }*/

}
