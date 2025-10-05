import { Component, Input } from '@angular/core';
import { StatusMovie } from '../../enums/statusMovie';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.html',
  styleUrl: './movie.scss',
})
export class Movie {
  @Input()
  title: String = '';

  @Input()
  year!: Number;

  @Input()
  category!: String;

  @Input()
  description: String = '';

  @Input()
  image: String = '';

  @Input()
  status: StatusMovie = StatusMovie.RentalLess;

  clickOnMovie() {
    console.log('click...🍰');
  }
}
