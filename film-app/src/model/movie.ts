import { Video } from './video';
import { Crew } from './crew';
import { Cast } from './cast';

export class Movie {

    public vote_count: number;
    public credits: Object[] = [];
    public id: number;
    public vote_average: number;
    public title: string;
    public popularity: string;
    public poster_path: string;
    public backdrop_path: string = null;
    public overview: string;
    public release_date: string;
    public total_pages: number;
    public production_companies: Object[] = [];
    public genres: Object[] = [];
    public budget: number;
    public trailerArray: Video[] = null;
    public crew: Crew[];
    public cast: Cast[];

    constructor(crew: Crew[], credits: Object[], production_companies: Object[], genres: string[], budget: number, vote_count: number, id: number, vote_average: number, title: string, popularity: string,
        poster_path: string, backdrop_path: string, overview: string, release_date: string) {

        this.crew = crew;
        this.credits = credits;
        this.production_companies = production_companies;
        this.genres = genres;
        this.budget = budget;
        this.vote_count = vote_count;
        this.id = id;
        this.vote_average = vote_average;
        this.title = title;
        this.popularity = popularity;
        this.poster_path = poster_path;
        this.backdrop_path = backdrop_path;
        this.overview = overview;
        this.release_date = release_date;
    }
}