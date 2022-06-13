import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videojuego } from 'src/app/Entidad/Videojuego';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  videojuego: Videojuego[];
  v: Videojuego = new Videojuego();
  count: number;
  search: String;
  constructor(private router: Router, private s: ServicioService) { }

  ngOnInit(): void {
    this.contar();
    this.s.getList().subscribe(res => {
      this.videojuego = res;
    });
  }

  editar(v: Videojuego) {
    localStorage.setItem("id", v.id.toString());
    this.router.navigate(["editar"]);
  }

  eliminar(v: Videojuego) {
    localStorage.setItem("id", v.id.toString());
    this.router.navigate(["eliminar"]);
  }

  buscar() {
    this.v.nombre = this.search;
    this.s.search(this.v).subscribe(res => {
      this.videojuego = res;
    });
  }
  
  contar() {
    this.s.count().subscribe(res => {
      this.count = res;
    })
  }
}
