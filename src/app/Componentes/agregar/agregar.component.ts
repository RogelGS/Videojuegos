import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videojuego } from 'src/app/Entidad/Videojuego';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  v: Videojuego = new Videojuego();
  constructor(private router: Router, private s: ServicioService) { }

  ngOnInit(): void {
  }

  guardar() {
    this.s.add(this.v).subscribe(res => {
      alert("SE GUARDO EL ELEMENTO");
      this.router.navigate(["listar"]);
    })
  }
}
