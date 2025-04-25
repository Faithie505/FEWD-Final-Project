import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { GameService } from '../Services/game.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, IonButton, RouterLink],
})
export class HomePage implements OnInit{
  //fields
  quest:any;
  myTrivia:any[] = [];
  audio = new Audio();
  
  
  constructor(private gameService:GameService, private router:Router, private storage:Storage) {}
//method starts when page loads
  ngOnInit(): void {
  }
   


}
