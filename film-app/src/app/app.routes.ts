import { Routes } from '@angular/router';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { FilmDetailsComponent } from './film-details/film-details.component';


export const AppRoutes: Routes = [
  { path: '', component: SearchMovieComponent },
  { path: 'details/:id', component: FilmDetailsComponent }
];