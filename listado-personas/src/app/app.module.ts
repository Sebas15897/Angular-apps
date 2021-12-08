import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoPersonaComponent } from './listado-persona/listado-persona.component';
import { PersonaComponent } from './listado-persona/persona/persona.component';
import { FormularioComponent } from './listado-persona/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPersonaComponent,
    PersonaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
