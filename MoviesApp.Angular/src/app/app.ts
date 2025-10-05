import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Movieslist } from "./movieslist/movieslist";

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Movieslist],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
