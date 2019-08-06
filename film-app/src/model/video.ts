export class Video {

    key: string;
    size: number;
    id: string;
   
    constructor(id: string,  key: string, size: number) {
        this.key = key;
        this.size = size;
        this.id=id;
    }
}