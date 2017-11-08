import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarefasFinalizadasPage } from './tarefas-finalizadas';

@NgModule({
  declarations: [
    TarefasFinalizadasPage,
  ],
  imports: [
    IonicPageModule.forChild(TarefasFinalizadasPage),
  ],
})
export class TarefasFinalizadasPageModule {}
