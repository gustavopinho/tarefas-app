import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// Importações necessárias
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from '../../providers/auth/auth'
import { Tarefas } from '../../models/tarefas'

@Injectable()
export class TarefasProvider {

  // Definição do caminho onde será salvo os dados
  // dos usuários
  private caminho: string = '';

  // Coleção de tarefas
  private tarefasColllection: AngularFirestoreCollection<Tarefas>;

  // Lista de tarefas
  tasks: Observable<Tarefas[]>;

  // Parametros que vamos injetar no construtor
  constructor(private afs: AngularFirestore, private auth: AuthProvider) {
    
    // Verificando ser o usuário está logado para criarmos o caminho
    this.auth.user.subscribe(auth => {
      
      // Verifica se está logado e adiciona o caminho, usaremos o email
      // como caminho para ficar mais fácil identificar as tarefas de cada usuário
      if(auth != null)
      {
        this.caminho = '/' + auth.email;
        this.tarefasColllection = afs.collection<Tarefas>(this.caminho, ref => {
          return ref;
        });

      } else {
        this.caminho = '';
      }
    });
  }

  // Este método será retorna um lista de tarefas pode ser
  // as finalizadas ou as que ainda não foram finalizadas
  // para filtrar passamos o parametro finalizada
  pegarTarefas(finalizada: boolean) {
    return this.afs
      .collection<Tarefas>(this.caminho, ref => {
        return ref.where('finalizada', '==', finalizada);
      })
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Tarefas;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      });
  }

  // Método usado para adicionar uma tarefa
  adicionar(tarefa: Tarefas) {
    this.tarefasColllection.add(tarefa);
  }

  // Método usado para atualizar uma tarefa
  atualizar (id: string, task:Tarefas) {
    this.tarefasColllection.doc(id).update(task);
  }

  // Método usado para excluir uma tarefa
  excluir (id: string) {
    this.tarefasColllection.doc(id).delete();
  }

}
