import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarefa-card',
  templateUrl: './tarefa-card.component.html',
  styleUrls: ['./tarefa-card.component.css']
})
export class TarefaCardComponent {
  @Input() titulo: string = "Titulo da tarefa";
  @Input() descricao: string = "Descrição da tarefa";
}
