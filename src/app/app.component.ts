import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio Valdir Castro';

  isShowBigCard: boolean = false;

  toggleShowBigCard(){
    this.isShowBigCard = !this.isShowBigCard;
  }
}
