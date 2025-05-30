import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonMenu, IonItem, IonMenuButton, IonButtons,
  IonMenuToggle,
  IonRadio,
  IonRadioGroup, IonAvatar} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonAvatar,
    FormsModule,
    IonButton,
    IonContent,
    IonMenuButton,
    IonButtons,
    IonHeader,
    IonItem,
    IonMenu,
    IonMenuToggle,
    IonRadio,
    IonRadioGroup,
    IonTitle,
    IonToolbar,]
})
export class SettingsPage implements OnInit {
//variables
  audio = new Audio();
  userName:string = "";
  totalScore:number = 0;

  totalFlagScore: number = 0;
  totalTriviaScore:number = 0 ;
 


  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  starOneClicked(){
    const button = document.getElementById('starOne');
    
    // Check if the element exists
    if (button) {
      // Change the CSS directly via the style property
      button.style.backgroundColor = '#f39c12';  // Change background color
      button.style.transform = 'scale(1.1)';      // Enlarge the button
      button.style.transition = 'all 0.3s ease'; // Smooth transition
    }

  }

  //PLays sounbnd when clicked
  playSound() {
    this.audio.src = 'assets/music/backgroundMusic.mp3';

    this.audio.loop = true;
    this.audio.load();
    this.audio.play();
  }

  //stops sound
  stopSound()
  {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  //gets the scpores for the games using storage
  async getScores(){
    //this makes the value of country code what was stored in it before
    this.totalFlagScore = await this.storage.get('totalFlagScore');
    this.totalTriviaScore = await this.storage.get('totalTriviaScore');


  }

  async openBrowser(){
  
    //opens the trustpilot review page when the button calls the method
   await Browser.open({
      url: 'https://ie.trustpilot.com/'
    });
  }

  

}
