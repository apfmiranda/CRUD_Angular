import { ContatosService } from './../../services/contatos.service';
import { Contato } from './../../contato.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contatos-list.component.html',
  styleUrls: ['./contatos-list.component.scss']
})
export class ContatosListComponent implements OnInit {

  contatos$: Observable<Contato[]>;

  constructor(private contatoService: ContatosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.contatos$ = this.contatoService.list();
  }

  onEdit(id) {
    console.log('editanto contatoId: ' + id);
    this.router.navigate(['form-contatos', id], {relativeTo: this.route});
  }

  onDelete(id) {
    this.contatoService.remove(id).subscribe(
      result => console.log('apagando contatoId: ' + id),
      error => console.log('Erro: ' + error),
      () => this.contatos$ = this.contatoService.list()
    );

  }

}
