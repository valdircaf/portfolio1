import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio Valdir Castro';

  isShowBigCard: boolean = false;

  config: any;
  fullpageApi: any;

  constructor(){
     // for more details on config options please visit fullPage.js docs
  }

  toggleShowBigCard(){
    this.isShowBigCard = !this.isShowBigCard;
  }
}
