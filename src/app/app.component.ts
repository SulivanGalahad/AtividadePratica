import { Component } from '@angular/core';
import { Alunos } from './ListaAlunos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alunos';
  lista = Alunos;
}
