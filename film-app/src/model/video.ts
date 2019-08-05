export class Video {

    key: string;
    size: number;
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    site: string;
    type: string;
    
    constructor(id: string, iso_639_1: string, iso_3166_1: string, site: string, name: string, key: string, size: number, type:string) {
        this.key = key;
        this.size = size;
        this.id=id;
        this.iso_639_1=iso_639_1;
        this.iso_3166_1=iso_3166_1;
        this.site=site;
        this.name=name;
        this.type=type;
    }

  
}