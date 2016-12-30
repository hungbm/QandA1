export class User {
    username: string;
    password: string;
    email: string;
    avatarUrl: string;
    summary: string;
    name: string;
    dateJoin: string;
    point: number;
    constructor(
        username: string,
        password: string,
        email: string,
        avatarUrl: string,
        summary: string,
        name: string,
        dateJoin: string,
        point: number
    ) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.avatarUrl = avatarUrl;
        this.summary = summary;
        this.name = name;
        this.dateJoin = dateJoin;
        this.point = point;
    }
}