import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { PeliculaComponent } from '../pelicula/pelicula.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
 
  cartelera:any;
  populares:any;

  constructor( public _ps: PeliculasService) {
      this._ps.getCartelera()
          .subscribe(data => this.cartelera = data.results);
      this._ps.getPopulares()
          .subscribe(data => this.populares = data.results);
   }

  
  ngOnInit() {
    
  }

}
