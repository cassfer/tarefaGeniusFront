import { RouterModule, Routes } from '@angular/router';

import { ListarTarefasComponent } from './components/listar-tarefas/listar-tarefas.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ListarTarefasComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }
