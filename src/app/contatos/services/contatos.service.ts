import { Contato } from '../contato.model';
import { CrudService } from '../../shared/crud-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatosService extends CrudService<Contato> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API_URL}/contacts`);
   }

}
