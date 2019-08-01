import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies:Movie;
  language:string;
  //page:number;
  adult:boolean;
  region:string;
  year:string;
  primaryRelease:string;
  requestUrl:string;
  constructor(private http: HttpClient) { }



  searchMovies(searchString:string):Observable<Movie[]>{
    this.requestUrl = "https://api.themoviedb.org/3/search/movie?api_key=5fb6c0b63b9b1121750e3d973f52d8a4&query="+searchString;
    console.log("url request: "+this.requestUrl);
    return this.http.get<Movie[]>(this.requestUrl)
  }

  searchMoviesPage(searchString:string, page:number):Observable<Movie[]>{
    this.requestUrl = "https://api.themoviedb.org/3/search/movie?api_key=5fb6c0b63b9b1121750e3d973f52d8a4&query="+searchString+"&page="+page;//aggiungi pagina
    console.log("url request: "+this.requestUrl);
    return this.http.get<Movie[]>(this.requestUrl)
  }
  getMovieDetails(id:number):Observable<Movie>{
    this.requestUrl = "https://api.themoviedb.org/3/movie/"+id+"?api_key=5fb6c0b63b9b1121750e3d973f52d8a4";
    console.log("url request: "+this.requestUrl);
    return this.http.get<Movie>(this.requestUrl)
  }
}

