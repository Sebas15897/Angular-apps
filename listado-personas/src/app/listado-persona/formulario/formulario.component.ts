import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personaAgregada = new EventEmitter;

  nombre: string = '';
  apellido: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarPersona() {
    if (this.nombre && this.apellido) {
      const persona = new Persona(this.nombre, this.apellido);
      this.personaAgregada.emit(persona);
    }
  }

}
