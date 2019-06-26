import { ContatoResolverGuard } from './guards/contato-resolver.guard';
import { ContatosFormComponent } from './components/contatos-form/contatos-form.component';
import { ContatosListComponent } from './components/contatos-list/contatos-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContatosListComponent },
  {
    path: 'form-contatos',
    component: ContatosFormComponent,
    resolve: {
      contato: ContatoResolverGuard
    }
  },
  {
    path: 'form-contatos/:id',
    component: ContatosFormComponent,
    resolve: {
      contato: ContatoResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
