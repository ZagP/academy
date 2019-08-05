import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/model/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})

export class FilmDetailsComponent implements OnInit {

  movie: Movie;
  @Input() id: number;
  private url:string='https://www.youtube.com/embed/'; 
  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.id=384018;
    this.getDetails();
    this.getTrailer();
  }

  getDetails(): void {
    this.movieService.getMovieDetails(this.id).subscribe(
      (result: Movie) => {
        this.movie = result;
      },
      (error) => {
        console.error("Error", error);
        alert('error');
      }
    );

  }

  getTrailer(): void {
    this.movieService.getTrailerMovie(this.id).subscribe(
      (result: Object) => {
        this.movie.trailerArray=result['results'];
        this.url+= this.movie.trailerArray[0].key;
      },
      (error) => {
        console.error("Error", error);
        alert('error');
      }
    );
    
  }

}
