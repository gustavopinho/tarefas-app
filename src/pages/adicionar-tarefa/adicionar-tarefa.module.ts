import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarTarefaPage } from './adicionar-tarefa';

@NgModule({
  declarations: [
    AdicionarTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarTarefaPage),
  ],
})
export class AdicionarTarefaPageModule {}
