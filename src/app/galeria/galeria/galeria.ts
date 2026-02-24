import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../categorias/categoria';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria/categoria.service';
import  {Lugar } from '../../lugares/lugar.model'
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria implements OnInit {

lugares: Lugar[] = [];
categoriasFiltro: Categoria[] = [];
nomeFiltro: string = '';
categoriaFiltro: string = '';

constructor(
  private lugarService: LugarService,
  private categoriaService: CategoriaService,
  private cdr: ChangeDetectorRef
){}

  ngOnInit(): void {

  this.categoriaService.obterTodas().subscribe({
    next: (categorias) => {
      console.log('Categorias GALERIA:', categorias);
      this.categoriasFiltro = categorias;

      this.cdr.detectChanges();
    },
    error: (err) => console.error('Erro categorias galeria:', err)
  });

    this.lugarService.obterTodos().subscribe({
      next: (lugaresResposta) => {
        console.log('lugares:', lugaresResposta);
        this.lugares = lugaresResposta;

        this.cdr.detectChanges();
      }
    })

 

}

   getTotalEstrelas(lugar: Lugar) : string {
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0) );

    this.cdr.detectChanges();
  }

  filtrar(){
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro)
    .subscribe(resultado => this.lugares = resultado)

    this.cdr.detectChanges();
  }


  // ngOnInit(): void {
    
  //   this.categoriaService.obterTodas().subscribe({
  //     next: (categorias) => this.categoriasFiltro = categorias})

  //   // this.categoriaService.obterTodas()
  //   // .subscribe(categorias => this.categoriasFiltro = categorias);

  

  // }

}
