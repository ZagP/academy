import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/model/movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/model/video';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})

export class FilmDetailsComponent implements OnInit {

  movie: Movie;
  @Input() id: number;
  private url:string='https://www.youtube.com/embed/'; 
  private sizeScreenplay:boolean=false;
  private sizeDirector:boolean=false;
  private sizeActor:boolean=false;
  private sizeCompany:boolean=false;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.id = params.id);
    this.getDetails();
    this.getTrailer();
    this.getCredit();
  }

  getDetails(): void {
    this.movieService.getMovieDetails(this.id).subscribe(
      (result: Movie) => {
        this.movie = result;
        if(this.movie.production_companies.length!=0){
          this.sizeCompany= !this.sizeCompany;
        }
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

  getCredit():void{
    this.movieService.getCreditsMovie(this.id).subscribe(
      (result: any[]) => {
        this.movie.cast = result['cast'];
        this.movie.crew = result['crew'];
        
        if(this.movie.cast.length!=0){
          this.sizeActor= !this.sizeActor;
        }

        this.movie.crew.forEach(element => {
          if(element.job=='Director'){
            this.sizeDirector= true;
          } else if( element.job=='Screenplay'){
            this.sizeScreenplay= true;
          }
        });
      },
      (error) => {
        console.error("Error", error);
        alert('error');
      }
    );
  }

}
