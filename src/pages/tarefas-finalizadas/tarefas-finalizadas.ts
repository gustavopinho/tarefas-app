import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Imports adicionados
import { Observable } from 'rxjs/Observable';

// Serviço de tarefas
import { TarefasProvider } from '../../providers/tarefas/tarefas';

// Modelo de tarefas
import { Tarefas } from '../../models/tarefas'

@IonicPage()
@Component({
  selector: 'page-tarefas-finalizadas',
  templateUrl: 'tarefas-finalizadas.html',
})
export class TarefasFinalizadasPage {

  // Atributo de lista de tarefas
  tarefas: Observable<Tarefas[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private tarefasProvider:TarefasProvider) {
  }

  // Método para exluir uma tarefa
  excluir(id: string) {
    this.tarefasProvider.excluir(id);
  }

  ionViewDidLoad() {
    this.tarefas = this.tarefasProvider.pegarTarefas(true);
  }

}
