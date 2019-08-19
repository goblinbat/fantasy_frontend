export class User {
    public id?: any;
    public username: string;
    public password: string;
    public profile: string;
    public profilePic: any;
    public friends: User[];
    public liked: number[];
}