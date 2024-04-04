import { User } from "./User";

export interface Book {
    _id: string,
    name: string,
    author:string,
    imageUrl:string,
    year: number,
    description: String,
    owner: User,
}