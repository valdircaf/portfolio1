import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ProjectInterface } from 'src/app/interfaces/projects/project-interface';
import { ProjectsServiceService } from 'src/app/services/projects/projects-service.service';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit{
  @ViewChild("el") divElement!: ElementRef<HTMLDivElement>;

  isShowBigCard: boolean = false;
  @Output() toggleShowBigCard = new EventEmitter<boolean>();
  projectsArr: ProjectInterface[] = []
  titles: string[] = [];
  activeIndex = 0;
  isScrolling = false;
  animateCard:boolean = false;
  

  constructor(private service: ProjectsServiceService){
  }
  
  ngAfterViewInit() { 
  }

  isAnimateCard(){
    this.animateCard = !this.animateCard;
  }

  isAnimateCard2(){
    this.animateCard = !this.animateCard;
  }

  ngOnInit(){
    this.service.getAll().subscribe(response => {
      this.projectsArr = response;
      for(let project of response){
        this.titles.push(project.name);
      }
      console.log(response)
    })
  }

  toggleBigCard(){
    this.isShowBigCard = !this.isShowBigCard; 
    this.toggleShowBigCard.emit(this.isShowBigCard);
  }

  onScroll(event: WheelEvent): void { 
    if (this.isScrolling) return;

    this.isScrolling = true;
    this.isAnimateCard();

    if(this.activeIndex === 1){
      window.document.body.style.overflow = "scroll";
      this.animateCard = false;
    }else if(this.activeIndex === (this.projectsArr.length - 1)){
      this.animateCard = false;
    }

    console.log(this.activeIndex)

    if (event.deltaY > 0) {
      this.nextPage();
      window.document.body.style.overflow = "hidden";
      this.divElement.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
    }else{
      this.previousPage();
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, 500); // Tempo da transição deve corresponder ao tempo de transição do CSS
  }

  handleClickProjects(){
    
  }

  nextPage(): void {
    if (this.activeIndex < this.projectsArr.length - 1) {
      this.activeIndex++;
    }
  }

  previousPage(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
  }


}
