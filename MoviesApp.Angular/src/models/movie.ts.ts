import { StatusMovie } from "../enums/statusMovie";

export interface Movie {
    id: Number,
    title: String,
    category: String,
    year: Number,
    rating: Number,
    description: String,
    status: StatusMovie
    image: String
}
