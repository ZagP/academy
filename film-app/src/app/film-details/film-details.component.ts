import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/model/movie';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  public movie: Movie;
  constructor() { 
  }

  ngOnInit() {
  }

}
