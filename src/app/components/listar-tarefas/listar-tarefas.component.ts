import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

import { TarefaModel } from 'src/app/shared/models/tarefa.models';
import { TarefaService } from 'src/app/service/tarefa.service';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {
  tarefasPendentes: TarefaModel[] = [];

  tarefasEmAndamento: TarefaModel[] = [];

  tarefasFeitas: TarefaModel[] = [];

  constructor(private tarefaService: TarefaService){}

  ngOnInit(): void {
    this.carregaTarefas();
  }


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

  carregaTarefas(){
    this.tarefaService.getTodasTarefas().subscribe((tarefas: TarefaModel[])=>{
      this.tarefasPendentes = tarefas;
    })
  }
}
