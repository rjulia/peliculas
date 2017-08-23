import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaimagen'
})
export class PeliculaimagenPipe implements PipeTransform {

  transform(pelicula:any): any {

    let url = "http://image.tmdb.org/t/p/w500";

    if (pelicula.backdrop_path) {
      return  url + pelicula.backdrop_path
    } else {
      if (pelicula.poster_path) {
        return url +  pelicula.poster_path
      } else {
        return "/assets/img/no-image.png";
      }
    }
  }
}
