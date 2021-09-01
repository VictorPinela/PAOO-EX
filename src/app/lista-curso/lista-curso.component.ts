import { Component, Input } from '@angular/core';
import { curso } from '../app.component';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css'],
})
export class ListaCursoComponent {
  @Input() curso!: curso;
};