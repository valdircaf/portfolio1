import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.css']
})
export class CardProjectsComponent {

  @Input() cardImg: string = ""; 
  @Input() cardTitle: string = ""; 
  @Input() descriptions!: string[];
  @Input() videoUrl: string = "";
  @Input() tecIcons!: string[];
  @Input() subtitle!: string;

  showBigCard: boolean = false;
  @Output() isShowBigCard = new EventEmitter<boolean>();


  constructor(){

  }

  ngOnInit(){

  }

  toggleBigCard() {
    this.showBigCard = !this.showBigCard;
    this.isShowBigCard.emit(this.showBigCard);
  }

}
