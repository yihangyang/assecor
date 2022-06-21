import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MovieService } from 'src/app/services/apis/movie.service';
import { Movie } from 'src/app/services/apis/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  movie: Movie
  movieId: string | null = '0'
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }


  ngOnInit(): void {
    this.route.paramMap.pipe().subscribe(paramMap => {
      this.movieId = paramMap.get('movieId');
    });

    this.movieService.movie(this.movieId!).subscribe(movie => {
      this.movie = movie
      console.log(this.movie)
    })

  }

}
