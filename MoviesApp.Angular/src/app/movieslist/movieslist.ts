import { Component, inject } from '@angular/core';
import { Movie } from "../movie/movie";
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movieslist',
  imports: [Movie],
  templateUrl: './movieslist.html',
  styleUrl: './movieslist.scss',
})
export class Movieslist {

  movieService = inject(MoviesService)

  clickOnMovie(){
    console.log("movie...")
  }
}
