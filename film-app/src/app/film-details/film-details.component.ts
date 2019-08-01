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

  private movie: Movie;
  @Input() id: number = 384018;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getMovieDetails(this.id).subscribe(
      (result: Movie) => {
        this.movie = result;
      },
      (error) => {
        console.error("Error", error);
        alert('error');
      }
    );


    this.movieService.getTrailerMovie(this.id).subscribe(
      (result: Video[]) => {
        this.movie.videoArray = result;
        console.log("" + result[0].key);
      },
      (error) => {
        console.error("Error", error);
        alert('error');
      }
    );


  }

}
