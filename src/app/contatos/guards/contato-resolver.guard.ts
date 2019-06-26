import { ContatosService } from './../services/contatos.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contato } from '../contato.model';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContatoResolverGuard implements Resolve<Contato> {

  constructor(private service: ContatosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contato> {

    if (route.params && route.params.id) {
      return this.service.loadById(route.params.id);
    }
    // of cria um observable
    return of({
      id: null,
      name: null,
      email: null,
      phones: null
    });

  }

}
