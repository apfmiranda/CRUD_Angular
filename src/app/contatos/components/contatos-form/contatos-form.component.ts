import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from './../../contato.model';
import { ContatosService } from './../../services/contatos.service';

@Component({
  selector: 'app-contatos-form',
  templateUrl: './contatos-form.component.html',
  styleUrls: ['./contatos-form.component.scss']
})
export class ContatosFormComponent implements OnInit {

  contatoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private service: ContatosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const contato = this.route.snapshot.data.contato;
    console.log(contato);
    this.creatForm(contato);
  }

  creatForm(contato: Contato) {
    this.contatoForm = this.fb.group({
      id:    [contato.id],
      name:  [contato.name, [Validators.required, Validators.minLength(3)] ],
      email: [contato.email, [Validators.required, Validators.email] ],
      // phone: [contato.phone, [Validators.required]],
      phones: this.fb.array([

      ])
    });
    if (contato.phones){
      contato.phones.forEach(phone => this.addPhone(phone));
    }

  }

  get name() { return this.contatoForm.get('name'); }
  get email() { return this.contatoForm.get('email'); }
  get phones() { return this.contatoForm.get('phones') as FormArray; }

  addPhone(phone: string): void {
    this.phones.push(this.fb.control(phone));
  }
  removePhone(i: number): void {
    this.phones.removeAt(i);
  }

  hasError(field: string) {
    return this.contatoForm.get(field).errors;
  }

  onSubmit(): void {

    if (this.contatoForm.valid) {

      let msgSuccess = 'Criado com sucesso';
      let msgError = 'Erro ao criar contato, tente novamente!';

      if (this.contatoForm.value.id) {
        msgSuccess = 'Atualizado com sucesso';
        msgError = 'Erro ao atualizar contato, tente novamente!';
      }
      this.service.save(this.contatoForm.value).subscribe(
        success => {
          console.log(msgSuccess);
          this.router.navigate(['']);
        },
        error => console.log(msgError)
      );
    }
  }

  onCancel() {
    this.router.navigate(['']);
  }

}
