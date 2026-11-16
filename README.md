# 📚 Estudo de JavaScript – Trabalhando com Arrays

## 📌 Sobre o projeto

Este projeto foi desenvolvido durante meus estudos de JavaScript, com o objetivo de praticar e compreender melhor o funcionamento de **Arrays (vetores)** e como manipular listas de informações utilizando a linguagem.

A atividade consiste em um pequeno programa interativo executado por meio de `prompt()` e `alert()`, no qual o usuário pode escolher entre três opções: cadastrar estudantes, consultar planetas do Sistema Solar ou manipular uma lista de frutas.

O principal objetivo foi colocar em prática os conceitos estudados e entender como trabalhar com dados armazenados em arrays.

## 🔗 Acesse o projeto

[Hora de Codar 4 – GitHub Pages](https://davifariass.github.io/Hora-de-codar4/)

## 🎯 Objetivos do estudo

- Compreender como criar e utilizar Arrays.
- Aprender a adicionar elementos em uma lista.
- Aprender a remover elementos de um Array.
- Consultar se determinado elemento existe dentro de uma lista.
- Trabalhar com índices de Arrays.
- Praticar funções e chamadas entre funções.
- Utilizar estruturas condicionais e de repetição.

## 💻 Funcionalidades desenvolvidas

### 1. Cadastro de estudantes

Nesta opção, o programa permite cadastrar nomes de estudantes em um Array vazio.

Utilizei o método `push()` para adicionar novos nomes à lista.

O cadastro continua acontecendo até que o usuário digite `PARE`. Ao finalizar, o programa apresenta a quantidade de estudantes cadastrados e exibe todos os nomes utilizando o método `join()`.

**Conceitos praticados:**
- Criação de Arrays vazios.
- Método `push()`.
- Propriedade `length`.
- Método `join()`.
- Estrutura de repetição `while`.

### 2. Lista de planetas do Sistema Solar

Nesta opção, o programa possui um Array com nomes de planetas.

O usuário informa o nome de um planeta e o sistema verifica se ele está presente na lista.

Para realizar essa verificação, utilizei o método `indexOf()`, que procura um elemento dentro do Array e retorna sua posição. Caso não encontre, retorna `-1`.

**Conceitos praticados:**
- Criação e inicialização de Arrays.
- Método `indexOf()`.
- Estrutura condicional `if/else`.
- Comparação de informações.

### 3. Lista de frutas

Nesta opção, o programa começa com um Array contendo algumas frutas.

O usuário pode digitar o nome de uma fruta para removê-la da lista. Caso a fruta não exista, o programa informa que ela está indisponível.

Para realizar a remoção, utilizei os métodos `indexOf()` e `splice()`.

O programa também verifica se a lista ficou vazia utilizando a propriedade `length`.

**Conceitos praticados:**
- Método `indexOf()`.
- Método `splice()`.
- Propriedade `length`.
- Estrutura de repetição `while`.
- Manipulação e remoção de elementos de Arrays.

## 📖 Principais métodos estudados

| Método / Propriedade | Para que serve |
|---|---|
| `push()` | Adiciona um elemento ao final do Array. |
| `pop()` | Remove o último elemento do Array. |
| `indexOf()` | Procura um elemento e retorna seu índice. |
| `splice()` | Adiciona, substitui ou remove elementos. |
| `join()` | Transforma os elementos do Array em uma string. |
| `length` | Retorna a quantidade de elementos do Array. |

## 🧠 O que aprendi com essa atividade?

Com esse exercício, consegui praticar melhor a utilização de Arrays e entender como eles podem ser utilizados para armazenar e manipular diferentes tipos de informações.

Também pude trabalhar com funções, estruturas condicionais (`if/else`), estruturas de repetição (`while`) e a estrutura `switch`, que permite organizar diferentes opções dentro de um menu.

Foi um exercício importante para compreender na prática como o JavaScript permite criar pequenas aplicações interativas e manipular listas de dados.

## 🚀 Tecnologias utilizadas

- JavaScript
- Visual Studio Code

**Observação:** Este projeto faz parte dos meus estudos e exercícios de aprendizado em programação, sendo desenvolvido para praticar os conceitos fundamentais da linguagem JavaScript.
