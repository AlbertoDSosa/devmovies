import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiMoviesService {
  urlBase = `https://api.themoviedb.org/3/`;
  key = '082a5d546b628673bf4ebeba60d93b63';

  generateUrl = (_type) => this.urlBase + `movie/${_type}?api_key=` + this.key;
  generateUrlSimilar = (_id) => this.urlBase + `movie/${_id}/similar?api_key=` + this.key;
  constructor(
    private http: HttpClient

  ) { }

  getMovies(type){
    return this.http.get(this.generateUrl(type))
  }
  getMoviesSimilar(type){
    return this.http.get(this.generateUrlSimilar(type))
  }

  getMovie(id){
    return this.http.get(this.generateUrl(id));
  }

}
