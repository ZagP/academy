import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  movies:Movie;
  userUrl:string = "https://api.themoviedb.org/3/search/movie?api_key=5fb6c0b63b9b1121750e3d973f52d8a4&language="+language+"&query="+searchString+"&page="+page+"&include_adult=-boolean-&region=-string-&year=-number-&primary_release_year=-number-
  ";
  constructor(private http: HttpClient) { }



  searchMovies:Observable<Movie[]>(){
    return this.http.get<User[]>(`${this.usersUrl}`);
  }
}
