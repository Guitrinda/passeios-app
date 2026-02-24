import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { required } from '@angular/forms/signals';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss',
})
export class CategoriaComponent {
  camposForm: FormGroup;

  constructor(private service: CategoriaService){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    });
  }

  salvar(){
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
    this.service.salvar(this.camposForm.value)
    .subscribe({
      next: categoria => {
        console.log('Salva com sucesso!', categoria),
        this.camposForm.reset();
      },
      error: erro => console.error('Ocorreu um erro: ', erro),
    });
  }
}

  isCampoInvalido(nomecampo: string): boolean {
    const campo = this.camposForm.get(nomecampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
  }
}
