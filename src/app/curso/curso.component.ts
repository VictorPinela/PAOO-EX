import { Component, EventEmitter, Output } from '@angular/core';
import { curso } from '../app.component';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent {

  @Output() cursoAdicionado = new EventEmitter();


  adicionar(nome: string, cargaHoraria: string) { 
    if(nome.length == 0){
      alert("Campo nome não pode ser vazio");
      throw(new Error("Campo nome não pode ser vazio"));
    };
    if(cargaHoraria.length ==0 ){
      alert("Campo carga horaria não pode ser vazio");
      throw(new Error("Campo carga horaria não pode ser vazio"));
    };
    if(isNaN(+cargaHoraria)){
      alert("Campo carga horaria deve conter apenas numeros");
      throw(new Error("Campo carga horaria deve conter apenas numeros"));
    }
    const curso: curso = {
      nome: nome,
      cargaHoraria: +cargaHoraria
    };
    this.cursoAdicionado.emit(curso);
  }

};
