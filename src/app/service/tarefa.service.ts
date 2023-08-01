import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaModel } from '../shared/models/tarefa.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private url: string = environment.SRV_TAREFAS;

  constructor(private http: HttpClient) { }

  getTodasTarefas(): Observable<TarefaModel[]>{
    const urlGetTarefas: string = `${this.url}/tarefa`;
    return this.http.get<TarefaModel[]>(urlGetTarefas);
  }
}
