import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/model/movie';
import { MovieService } from '../movie.service';
import { Video } from 'src/model/video';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})

export class FilmDetailsComponent implements OnInit {

  movie: Movie;
  @Input() id: number = 384018;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
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
      (result: Object[]) => {
          //this.movie.trailerArray = result[1];
          //console.log(""+this.movie.trailerArray.length);
      },
      (error) => {
        console.error("Error", error);
        alert('error');
      }
    );

  }

}
