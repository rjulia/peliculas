import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

  private apikey: string = "64c23fa85704a74dd026cd64dfe872e2";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private jsonp:Jsonp ) {
    this.getCartelera().subscribe(data => console.log(data));
    this.getPopulares().subscribe(data => console.log(data));
   }

  getCartelera(){

    let desde = new Date();
    let hasta = new Date();

    desde.setDate(hasta.getDate() - 25);
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDay()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDay()}`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=&{ desdeStr }&primary_release_date.lte=&{ hastaStr }&api_key=${ this.apikey }&language=ko&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res2=> res2.json());

    
  }
  

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?with_genres=18&primary_release_year=2014&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

}
