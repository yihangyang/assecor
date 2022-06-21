import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Base, Movie } from './types';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly prefix = "/api/"
  constructor(private http: HttpClient) { }

  movies(): Observable<Movie[]> {
    return this.http
      .get(`${environment.baseUrl}${this.prefix}/films/`)
      .pipe(map((res: any) => res.results));
  }

  movie(movieId: string): Observable<Movie> {
    // const params = new HttpParams().set('movieid', movieId.toString())
    return this.http
      .get(`${environment.baseUrl}${this.prefix}/films/${movieId}`)
      .pipe(map((res: any) => res));
  }


}
