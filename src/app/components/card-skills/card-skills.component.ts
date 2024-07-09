import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.css']
})
export class CardSkillsComponent {

  @Input() title: string = "";
  @Input() img: string = "";
  @Input() text: string = "";

}
