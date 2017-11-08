import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Importações para funcionamento do Firebase e da Autenticação
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Para usar o serviço de banco de dados é necessário importar o AngularFirestoreModule
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';


// Importação da página de login
import { LoginPage } from '../pages/login/login';
import { TarefasProvider } from '../providers/tarefas/tarefas';


// Adicionado páginas de Adicionar tarefa e  listar tarefas concluídas
import { AdicionarTarefaPage } from '../pages/adicionar-tarefa/adicionar-tarefa';
import { TarefasFinalizadasPage } from '../pages/tarefas-finalizadas/tarefas-finalizadas';


// Configurações do FIREBASE
import { config } from '../config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage, // Registrando a página de login
    AdicionarTarefaPage, // Registrando a página de adicionar tarefa
    TarefasFinalizadasPage, // Registrando a página de tarefas finalizadas
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  
    // Configurações do Firebase
    AngularFireModule.initializeApp(config),
    // Configuração do serviço de autenticação do firebase
    AngularFireAuthModule,
    // Configuração do serviço de banco de dados do firebase
    AngularFirestoreModule,
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage, // Registrando a página de login
    AdicionarTarefaPage, // Registrando a página de adicionar tarefa
    TarefasFinalizadasPage, // Registrando a página de tarefas finalizadas
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    TarefasProvider
  ]
})
export class AppModule {}
