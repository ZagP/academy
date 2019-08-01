import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/model/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  moviesArray:Movie[] = [];
  @Input() searchString:string;
  pagesQnt:number;
  page:number;
  results:boolean = false;
  constructor(private searchService:MovieService) { }

  ngOnInit() {
    
  }

  getSearchResults(){
    this.page = 1;
    console.log("searchREsults");
    console.log(this.searchString);
    this.searchService.searchMovies(this.searchString).subscribe(
      (result:Movie[])=>{
        this.moviesArray=result;
        console.log("total-pages: "+this.pagesQnt);
        console.log("result: ",result);
        console.log("moviesArray: ",this.moviesArray);
      },
      (error)=>{
        console.error("Error",error);
        alert('error');
      }
    );
    this.results = true;
  }

  getResultsPage(pageSel:number){
    this.page = pageSel;
    this.searchService.searchMoviesPage(this.searchString, this.page).subscribe(
      (result:Movie[])=>{
        this.moviesArray=result;
        console.log("result: ",result);
        console.log("moviesArray: ",this.moviesArray);
      },
      (error)=>{
        console.error("Error",error);
        alert('error');
      }
    );
    this.results = true;
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }




}
