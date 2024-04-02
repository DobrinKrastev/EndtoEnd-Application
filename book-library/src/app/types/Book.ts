import { User } from "./User";

export interface Book {
    name: string,
    author:string,
    imageUrl:string,
    year: number,
    description: String,
    owner: User,
}