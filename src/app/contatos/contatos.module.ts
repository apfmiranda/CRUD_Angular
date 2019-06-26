import { ContatosFormComponent } from './components/contatos-form/contatos-form.component';
import { ContatosListComponent } from './components/contatos-list/contatos-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contatos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContatosListComponent, ContatosFormComponent],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ContatosListComponent,
    ContatosFormComponent
  ]
})
export class ContatosModule { }
