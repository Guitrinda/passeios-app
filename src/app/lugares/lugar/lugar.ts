import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria/categoria.service';
import { LugarService } from '../lugar.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.html',
  styleUrl: './lugar.scss',
})
export class LugarComponent implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private service: LugarService,
    private cdr: ChangeDetectorRef
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl(null, Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {



    this.categoriaService.obterTodas().subscribe({
      next: (listaCategorias) => {
        console.log('Categorias Lugares:', listaCategorias);
        this.categorias = listaCategorias;

        this.cdr.detectChanges();
  }})
  }

  salvar() {
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
    this.service.salvar(this.camposForm.value)
      .subscribe({
        next: (lugar) => {
          console.log('Cadastrado com sucesso!', lugar),
            this.camposForm.reset()
        },
        error: erro => console.error('Ocorreu um erro: ', erro),

      })
  }}

  isCampoInvalido(nomecampo: string): boolean {
    const campo = this.camposForm.get(nomecampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
  }
}
