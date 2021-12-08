import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit {

  personas: Persona[] = [new Persona('Sebastián', 'Contreras'), new Persona('Miguel', 'Lopez')]

  constructor() { }

  ngOnInit(): void {
  }

  agregarPersona(event: Persona) {
    this.personas.push(event);
  }

}
