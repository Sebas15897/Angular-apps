import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() index: any;
  @Input() persona: any; 

  constructor() { }

  ngOnInit(): void {
  }

}
