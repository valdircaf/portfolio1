import { Component, EventEmitter, Output } from '@angular/core';
import { ProjectInterface } from 'src/app/interfaces/projects/project-interface';
import { ProjectsServiceService } from 'src/app/services/projects/projects-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  isShowBigCard: boolean = false;
  @Output() toggleShowBigCard = new EventEmitter<boolean>();
  projectsArr: ProjectInterface[] = []

  constructor(private service: ProjectsServiceService){

  }

  ngOnInit(){
    this.service.getAll().subscribe(response => {
      this.projectsArr = response;
    })
  }

  toggleBigCard(){
    this.isShowBigCard = !this.isShowBigCard; 
    this.toggleShowBigCard.emit(this.isShowBigCard);
  }

}
