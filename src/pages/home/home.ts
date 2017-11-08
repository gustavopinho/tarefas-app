import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Imports adicionados
import { Observable } from 'rxjs/Observable';

// Serviço de autenticação que será usado para fazer o logout
import { AuthProvider } from '../../providers/auth/auth'

// Página de login, para onde o usuário que fizer logout sera direcionado
import { LoginPage } from '../login/login';

// Página para adicionar uma tarefa
import { AdicionarTarefaPage } from '../adicionar-tarefa/adicionar-tarefa';

// Serviço de tarefas
import { TarefasProvider } from '../../providers/tarefas/tarefas';

// Modelo de tarefas
import { Tarefas } from '../../models/tarefas'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Atributo de lista de tarefas
  tarefas: Observable<Tarefas[]>;

  // Adição dos serviços de autenticação e de tarefas no construtor
  constructor(public navCtrl: NavController,  private auth: AuthProvider, 
              private tarefasProvider:TarefasProvider) {

  }

  // Método para adicionar uma tarefa
  adicionar () {
    this.navCtrl.push(AdicionarTarefaPage);
  }

  // Método para setar uma tarefa como finalizada
  finalizar(tarefa: Tarefas) {
    tarefa.finalizada = true;
    this.tarefasProvider.atualizar(tarefa.id, tarefa);
  }

  // Método para exluir uma tarefa
  excluir(id: string) {
    this.tarefasProvider.excluir(id);
  }

  // Método para sair do aplicativo e direcionar para o login
  sair() {
    this.auth.logout().then(value => {
      this.navCtrl.setRoot(LoginPage);
     });
  }

  ionViewDidLoad() {
    // Busca todas as tarefas do usuário que não foram concluídas
    this.tarefas = this.tarefasProvider.pegarTarefas(false);
  }
}
