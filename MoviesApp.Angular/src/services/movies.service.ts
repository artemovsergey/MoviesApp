import { Injectable, OnInit } from '@angular/core';
import { Movie } from '../models/movie.ts';
import { StatusMovie } from '../enums/statusMovie.js';

@Injectable({
  providedIn: 'root',
})
export class MoviesService implements OnInit {
  movies: Movie[] = [];

  ngOnInit() {}

  getMovies(): Movie[] {
    return (this.movies = [
      {
        id: 1,
        title: 'T34',
        category: 'Боевик',
        year: 2020,
        rating: 5,
        description: 'Описание',
        image:
          'https://avatars.mds.yandex.net/get-ott/2385704/2a0000019852b5a311fec448ec1131eb2d4b/300x450',
        status: StatusMovie.RentalLess,
      },

      {
        id: 2,
        title: 'T34',
        category: 'Боевик',
        year: 2020,
        rating: 5,
        description: 'Описание',
        image:
          'https://avatars.mds.yandex.net/get-ott/2385704/2a0000019852b5a311fec448ec1131eb2d4b/300x450',
        status: StatusMovie.RentalLess,
      },

      {
        id: 3,
        title: 'T34',
        category: 'Боевик',
        year: 2020,
        rating: 5,
        description: 'Описание',
        image:
          'https://avatars.mds.yandex.net/get-ott/2385704/2a0000019852b5a311fec448ec1131eb2d4b/300x450',
        status: StatusMovie.RentalLess,
      },
    ]);
  }
}
