import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

import { TarefaModel } from 'src/app/shared/models/tarefa.models';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent {
  tarefasPendentes: TarefaModel[] = [
    { titulo: 'Novo titulo 1', descricao: 'Nova tarefa 1'},
    { titulo: 'Novo titulo 1.2', descricao: 'Nova tarefa 1.2'}
  ]

  tarefasEmAndamento: TarefaModel[] = [
    { titulo: 'Novo titulo 2', descricao: 'Nova tarefa 2'}
  ]

  tarefasFeitas: TarefaModel[] = [
    { titulo: 'Novo titulo 3', descricao: 'Nova tarefa 3'}
  ]

  drop(event: CdkDragDrop<TarefaModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log('event.previousContainer.data')
      console.log(event.previousContainer.data)
    }
  }
}
