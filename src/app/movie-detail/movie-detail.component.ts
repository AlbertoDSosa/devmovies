import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiMoviesService } from '../api-movies-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id:string;
  idSubscription:any;
  movie: any;
  related: object[];

  constructor(
    private route: ActivatedRoute,
    private api: ApiMoviesService
  )
  {}

  ngOnInit() {
    this.idSubscription = this.route.params.subscribe(params => {
      this.id = params.id;
      this.api
        .getMovie(params.id)
        .subscribe((res: any) => {
          this.movie = res;
        });

     this.api
        .getMoviesSimilar(params.id)
        .subscribe((res: any) => {
          this.related = res.results;
        });
    })
  }
  ngOnDestroy(){
    this.idSubscription.unsubscribe();
  }
}
