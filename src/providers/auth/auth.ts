import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


// ÍNICIO
// Imports que deverão ser adicionados
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../../models/user';
// FIM



@Injectable()
export class AuthProvider {

  // Atributo usuário que será usado para cadastro e autenticação
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  // Metodo de cadastro
  register(user: User) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  // Método de login
  login(user: User) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  // Método de logout
  logout() {
    return this.firebaseAuth.auth.signOut();
  }

}
