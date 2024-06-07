import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectInterface } from 'src/app/interfaces/projects/project-interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  constructor(private http: HttpClient) { }

  url = "https://my-json-server.typicode.com/valdircaf/db-portfolio-atari/projects"

  getAll(): Observable<ProjectInterface[]>{
    return this.http.get<ProjectInterface[]>(`${this.url}`);
  }
}
