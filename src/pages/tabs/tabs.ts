import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Páginas que serão usadas para redirecionamento
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { TarefasFinalizadasPage } from '../tarefas-finalizadas/tarefas-finalizadas';

// Serviço de autenticação
import { AuthProvider } from '../../providers/auth/auth'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // Paginas que teremos no tabs
  tab1Root = HomePage;
  tab2Root = TarefasFinalizadasPage;

  constructor(public navCtrl: NavController, private auth: AuthProvider) {
    // Usado para direcionar o usuário que não estiver logado para a página de login
    this.auth.user.subscribe(
      (auth) => {
        if (auth == null) {
          this.navCtrl.setRoot(LoginPage);
        }
      });
  }
}
