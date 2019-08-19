export class Post {
    id?: any;
    userId: number;
    userName: string;
    type: string;
    title: string;
    text: string;
    tags: Array<string>;
    likes: number;
    // time:number;
    likedBy: Array<number>;
    image: Array<string>;
    iName: string;
    iCat: string;
    iRange: string;
    iThrow: string;
    iProperties: Array<string>;
    iAlign: string;
    iScores: string;
    iVuln:string;
    iResist: string;
    iImmune: string;
    iLang: string;
    iAction: string;
    iCR: number; 
}