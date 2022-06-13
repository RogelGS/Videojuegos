import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videojuego } from 'src/app/Entidad/Videojuego';
import { ServicioService } from 'src/app/Servicio/servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  v: Videojuego = new Videojuego();
  constructor(private router: Router, private s: ServicioService) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.v.id =+ Number(localStorage.getItem("id"));
    this.s.find(this.v).subscribe(res => {
      this.v = res;
    });
  }

  editar() {
    this.s.edith(this.v).subscribe(res => {
      alert("SE EDITO EL ELEMENTO");
      this.router.navigate(["listar"]);
    })
  }

}
