import {Component} from '@angular/core';
import {Router} from '@angular/router';

// Import Chart.js library
import 'chart.js';

import {FlotChartDirective} from '../../components/charts/flotChart';

declare var jQuery: any;

@Component({
  selector: 'app-issue-list-box',
  templateUrl: 'issue-list-box.template.html',
  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  }
})
export class IssueListBoxComponent {

  public tipos = ['DEV', 'TESTE', 'DEPLOY'];

  public data: any = [
    {'concluido': true, 'estimativa': 4, 'tipo': 'DEV', 'realizado': null, 'atividade': 'Protótipo da Tela de Usuários'},
    {'concluido': true, 'estimativa': 4, 'tipo': 'DEV', 'realizado': null, 'atividade': 'Protótipo da Tela de Sprints'},
    {'concluido': true, 'estimativa': 4, 'tipo': 'DEV', 'realizado': null, 'atividade': 'Protótipo da Tela de Projetos'},
    {'concluido': true, 'estimativa': 16, 'tipo': 'DEV', 'realizado': null, 'atividade': 'Protótipo da Tela de Tarefas'},
    {'concluido': true, 'estimativa': 8, 'tipo': 'DEV', 'realizado': null, 'atividade': 'Tela de Usuários'},
    {'concluido': true, 'estimativa': 8, 'tipo': 'DEV', 'realizado': null, 'atividade': 'Tela de Sprints'},
    {'concluido': true, 'estimativa': 8, 'tipo': 'DEV', 'realizado': null, 'atividade': 'Tela de Projetos'},
    {'concluido': false, 'estimativa': 12, 'tipo': 'DEV', 'realizado': null, 'atividade': 'Tela de Tarefas'},
    {'concluido': false, 'estimativa': 4, 'tipo': 'DEV', 'realizado': null, 'atividade': 'Deploy'},
    {'concluido': false, 'estimativa': 12, 'tipo': 'DEV', 'realizado': null, 'atividade': 'Teste'}
  ];

  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.code === 'KeyM' && event.ctrlKey) {
      this.addAtividade();
    }
  }

  changed(atividade, item) {
    console.log(atividade, item);
  }

  nextTipo(tipo) {
    let index = this.tipos.indexOf(tipo) + 1;
    if (index >= this.tipos.length) {
      index = 0;
    }

    return this.tipos[index];

  }

  addAtividade() {

    const node = this.focusAtividadeVazia();

    if (node) {
      return null;
    }

    this.data.push({'tipo': this.tipos[0]});

    setTimeout(() => {
      // @ts-ignore
      document.querySelector('[key=atividade_' + (this.data.length - 1) + ']').focus();
    }, 100);
  }

  removeItem(index) {
    this.data.splice(index, 1);
  }

  focusAtividadeVazia() {
    let node = null;
    // @ts-ignore
    document.querySelectorAll('[tipo=atividade]').forEach(a => {
      if (!a.innerHTML.trim()) {
        node = a;
      }
    });

    if (!node) {
      return;
    }

    node.focus();

    return node;
  }

}
