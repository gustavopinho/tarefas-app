import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Importações necessárias

// Importação do serviço de tarefas
import { TarefasProvider } from '../../providers/tarefas/tarefas';

// Importação do modelo de tarefas
import { Tarefas } from '../../models/tarefas'

// Importação da página tabs que o usuário será direcionado
// ao finalizar a edição de uma tarefa
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-adicionar-tarefa',
  templateUrl: 'adicionar-tarefa.html',
})
export class AdicionarTarefaPage {

  // Definição do atributo tarefa que será usado para o cadastro
  public tarefa = {} as Tarefas;

  // Adicionando o serviço de tarefa no construtor
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private tarefasProvider:TarefasProvider) {
  }

  // Método que será usado para adicionar uma tarefa
  adicionarTarefa(tarefa: Tarefas) {
      tarefa.finalizada = false;
      this.tarefasProvider.adicionar(tarefa);
      this.navCtrl.setRoot(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarTarefaPage');
  }

}
