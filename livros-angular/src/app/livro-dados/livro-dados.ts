import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.html',
  styleUrls: ['./livro-dados.css']
})
export class LivroDadosComponent {

  titulo = '';

  salvar() {
    alert('Livro salvo: ' + this.titulo);
    this.titulo = '';
  }
}
