import {Component} from '@angular/core';
import {Router} from '@angular/router';

// Import Chart.js library
import 'chart.js';

import {FlotChartDirective} from '../../components/charts/flotChart';

declare var jQuery: any;

@Component({
  selector: 'app-issue-list-box',
  templateUrl: 'issue-list-box.template.html'
})

export class IssueListBoxComponent {

  public data = [
    {'concluido': true, 'estimativa': 4, 'tipo': 'dev', 'realizado': null, 'atividade': 'Protótipo da Tela de Usuários'},
    {'concluido': true, 'estimativa': 4, 'tipo': 'dev', 'realizado': null, 'atividade': 'Protótipo da Tela de Sprints'},
    {'concluido': true, 'estimativa': 4, 'tipo': 'dev', 'realizado': null, 'atividade': 'Protótipo da Tela de Projetos'},
    {'concluido': true, 'estimativa': 16, 'tipo': 'dev', 'realizado': null, 'atividade': 'Protótipo da Tela de Tarefas'},
    {'concluido': true, 'estimativa': 8, 'tipo': 'dev', 'realizado': null, 'atividade': 'Tela de Usuários'},
    {'concluido': true, 'estimativa': 8, 'tipo': 'dev', 'realizado': null, 'atividade': 'Tela de Sprints'},
    {'concluido': true, 'estimativa': 8, 'tipo': 'dev', 'realizado': null, 'atividade': 'Tela de Projetos'},
    {'concluido': false, 'estimativa': 12, 'tipo': 'dev', 'realizado': null, 'atividade': 'Tela de Tarefas'},
    {'concluido': false, 'estimativa': 4, 'tipo': 'dev', 'realizado': null, 'atividade': 'Deploy'},
    {'concluido': false, 'estimativa': 12, 'tipo': 'dev', 'realizado': null, 'atividade': 'Teste'}
  ];


  changed(atividade, item) {
    console.log(atividade, item);
  }
}
