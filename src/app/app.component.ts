import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet,  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonItem,
  IonToolbar, 
  IonList,
IonButton} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,  IonContent,
    IonList,
    IonItem,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    RouterLink],
})
export class AppComponent {
  constructor() {}
}
