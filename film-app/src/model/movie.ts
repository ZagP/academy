

export class Movie{

    public voteCount: number;
    public id: number;
    public video: boolean;
    public voteAverage: number;
    public title: string;
    public popularity: string;
    public posterPath: string;
    public originalLanguage: string;
    public originalTitle: string;
    public genreIds: Number[] = [];
    public backdropPath: string;
    public adult: boolean;
    public overview: string;
    public releaseDate: string;
    
    //"vote_count":1,"id":484981,"video":false,"vote_average":1,"title":"String","popularity":1.4,"poster_path":"\/lESbUXiBbCOjSfSkjqz6npcvuHD.jpg","original_language":"en",
    //"original_title":"String","genre_ids":[18],
    //"backdrop_path":null,"adult":false,"overview":"A young man is guided through his life by a long piece of string in this symbolic short film.","release_date":"2017-08-30"

    constructor(vote_count: number, id: number, video: boolean, vote_average: number, title: string, popularity: string,
        poster_path: string, original_language: string, original_title: string, genre_ids: Number[], backdrop_path: string, adult: boolean, overview: string, release_date: string) {
        this.voteCount = vote_count;
        this.id = id;
        this.video = video;
        this.voteAverage = vote_average;
        this.title = title;
        this.popularity = popularity;
        this.posterPath = poster_path;
        this.originalLanguage = original_language;
        this.originalTitle = original_title;
        this.genreIds = genre_ids;
        this.backdropPath = backdrop_path;
        this.adult = adult;
        this.overview = overview;
        this.releaseDate = release_date;
    }
}