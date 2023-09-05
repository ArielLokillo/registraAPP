import { Component, OnInit } from '@angular/core';
import { Asignatura } from './asignaturas.models';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  listaAsignaturas: Asignatura[] = [];

  constructor(private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    this.listaAsignaturas = this.asignaturasService.getAll()
  }

}
