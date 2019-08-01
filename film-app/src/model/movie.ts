
export class Movie {

    public vote_count: number;
    public id: number;
    public video: boolean;
    public vote_average: number;
    public title: string;
    public popularity: string;
    public poster_path: string;
    public original_language: string;
    public original_title: string;
    public genre_ids: Number[] = [];
    public backdrop_path: string;
    public adult: boolean;
    public overview: string;
    public release_date: string;
    public total_pages:number;
    public production_companies: string;
    public genres: string;
    public budget: number;
    //"vote_count":1,"id":484981,"video":false,"vote_average":1,"title":"String","popularity":1.4,"poster_path":"\/lESbUXiBbCOjSfSkjqz6npcvuHD.jpg","original_language":"en",
    //"original_title":"String","genre_ids":[18],
    //"backdrop_path":null,"adult":false,"overview":"A young man is guided through his life by a long piece of string in this symbolic short film.","release_date":"2017-08-30"

    constructor(production_companies: string, genres: string, budget: number, vote_count: number, id: number, video: boolean, vote_average: number, title: string, popularity: string,
        poster_path: string, original_language: string, original_title: string, genre_ids: Number[], backdrop_path: string, adult: boolean, overview: string, release_date: string) {
        this.production_companies = production_companies;
        this.genres = genres;
        this.budget = budget;
        this.vote_count = vote_count;
        this.id = id;
        this.video = video;
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