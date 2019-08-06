import { Video } from './video';

export class Movie {

    public vote_count: number;
    public credits:Object[]=[];
    public id: number;
    public vote_average: number;
    public title: string;
    public popularity: string;
    public poster_path: string;
    public original_language: string;
    public original_title: string;
    public genre_ids: Number[] = [];
    public backdrop_path: string=null;
    public adult: boolean;
    public overview: string;
    public release_date: string;
    public total_pages:number;
    public production_companies: Object[]=[];
    public genres: Object[]=[];
    public budget: number;
    public trailerArray:Video[]=null;
    public crew: Object[];

    constructor(crew:Object[],credits:Object[],production_companies: Object[], genres: string[], budget: number, vote_count: number, id: number, vote_average: number, title: string, popularity: string,
        poster_path: string, original_language: string, original_title: string, genre_ids: Number[], backdrop_path: string, adult: boolean, overview: string, release_date: string) {
        this.crew=crew;
        this.credits=credits;
        this.production_companies = production_companies;
        this.genres = genres;
        this.budget = budget;
        this.vote_count = vote_count;
        this.id = id;
        this.vote_average = vote_average;
        this.title = title;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.original_language = original_language;
        this.original_title = original_title;
        this.genre_ids = genre_ids;
        this.backdrop_path = backdrop_path;
        this.adult = adult;
        this.overview = overview;
        this.release_date = release_date;
    }
}