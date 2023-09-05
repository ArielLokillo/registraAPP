import { Injectable } from '@angular/core';
import { Asignatura } from '../pages/asignaturas/asignaturas.models';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  asignaturas: Asignatura[] = [
    {
      id: '1',
      siglas: 'PGY4121',
      seccion: '007D',
    },
    {
      id: '2',
      siglas: 'PGY4121',
      seccion: '008D',
    },
    {
      id: '3',
      siglas: 'PGY4121',
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
}
