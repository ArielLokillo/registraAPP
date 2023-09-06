import { Injectable } from '@angular/core';
import { Asignatura } from '../pages/asignaturas/asignaturas.models';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  asignaturas: Asignatura[] = [
    {
      id: '1',
      nombre: 'Programacion aplicaciones moviles',
      siglas: 'PGY41211',
      seccion: '007D',
    },
    {
      id: '2',
      nombre: 'Programacion web',
      siglas: 'PGY41212',
      seccion: '008D',
    },
    {
      id: '3',
      nombre: 'Proceso de portafolio',
      siglas: 'PGY41213',
      seccion: '009D',
    }
  ]
  constructor() { }

  //METODOS CUSTOM

  //METODO QUE DEVUELVE EL OBJETO COMPLETO
  getAll() {
    return [...this.asignaturas]
  }

  //METODO QUE DEVUELVE LA ASIGNATURA POR EL ID BUSCADO
  getAsignatura(id: string) {
    return {
      ...this.asignaturas.find( aux => {
        return aux.id === id
      })
    }
  }

  //METODO QUE AGREGA UNA ASIGNATURA
  addAsignatura(nombre: string, siglas: string, seccion: string) {
    this.asignaturas.push({
      nombre, siglas, seccion, id: this.asignaturas.length + 1 + ""
    })    
  }

  //METODO QUE ELIMINA UNA ASIGNATURA POR EL ID
  deleteAsignatura(id: string) {
    this.asignaturas = this.asignaturas.filter(aux => {
      return aux.id !== id
    })
  }
}
