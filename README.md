Projeto criado no minicurso aplicado no Colégio Delta

## O que é

Uma aplicação mobile de exemplo usando Ionic e Firebase. Ela fornece exemplos dos serviços de autenticação e de banco de dados real time do Firebase.

## Como testar o projeto

Clone o projeto usando o git:

```bash
$ git clone https://github.com/gustavopinho/tarefas-app.git
```

Instale o Ionic e o Cordova:

```bash
$ npm install -g ionic cordova
```

Navegue até a pasta do projeto e instale as dependências:

```bash
$ npm install
```

Crie o arquivo config.ts com as configurações do Firebase na raiz da pasta src:

```bash
export const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
```

Execute o projeto:

```bash
$ ionic serve --lab
```


