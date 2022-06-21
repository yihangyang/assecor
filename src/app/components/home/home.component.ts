import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/apis/movie.service';
import { Movie } from 'src/app/services/apis/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[]
  title = 'projet';
  constructor(private movieService: MovieService) {
    
  }

  ngOnInit(): void {
    this.init()
  }


  private init(): void {
    this.movieService.movies().subscribe(movies => {
      this.movies = movies
      console.log(this.movies)
    })
  }
}
