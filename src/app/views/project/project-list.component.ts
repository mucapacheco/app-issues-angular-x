import {Component} from '@angular/core';
import {Router} from '@angular/router';

// Import Chart.js library
import 'chart.js';

import {FlotChartDirective} from '../../components/charts/flotChart';
import {ToastrService} from 'ngx-toastr';

declare var jQuery: any;

@Component({
  selector: 'app-project-list',
  templateUrl: 'project-list.template.html'
})

export class ProjectListComponent {

  public projetos = [];

  constructor() {

    for (let a = 1; a <= 10; a++) {
      this.projetos.push({
        codigo: a,
        label: 'TI0' + a,
        nome: 'Sprint 0' + a,
        data_inicial: '01/0' + a + '/2019',
        data_termino: '30/0' + a + '/2019',
        alias_subprojeto: 'Produtos',
        abertas: Math.floor((Math.random() * 20) + 1),
        concluidas: Math.floor((Math.random() * 20) + 1),
        descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when' +
          ' looking at its layout. The point of using Lorem Ipsum is that it has.\n',
        usuarios: [1, 2, 3, 4, 5, 7],
        subprojetos: [
          {
            nome: 'Vínculo de protocolo com aluno / turma',
            concluidas: Math.floor((Math.random() * 20) + 1),
            abertas: Math.floor((Math.random() * 20) + 1),
            statusCod: 4,
            status: 'Concluído'
          },
          {
            nome: 'Forma de avaliação para as estruturas modulares',
            concluidas: Math.floor((Math.random() * 20) + 1),
            abertas: Math.floor((Math.random() * 20) + 1),
            statusCod: 1,
            status: 'Em Desenvolvimento'
          },
          {
            nome: 'Regra para renovação de matrícula',
            concluidas: Math.floor((Math.random() * 20) + 1),
            abertas: Math.floor((Math.random() * 20) + 1),
            statusCod: 3,
            status: 'Em Testes'
          },
          {
            nome: 'Software para controle de projetos',
            concluidas: Math.floor((Math.random() * 20) + 1),
            abertas: Math.floor((Math.random() * 20) + 1),
            statusCod: 2,
            status: 'Em Desenvolvimento'
          },
          {
            nome: 'Inclusão de protocolo para o Mestrado',
            concluidas: Math.floor((Math.random() * 20) + 1),
            abertas: Math.floor((Math.random() * 20) + 1),
            statusCod: 3,
            status: 'Em Testes'
          },
          {
            nome: 'Protótipo da tela de matrícula do aluno da Graduação no Saga Online',
            concluidas: Math.floor((Math.random() * 20) + 1),
            abertas: Math.floor((Math.random() * 20) + 1),
            statusCod: 1,
            status: 'Aguardando Início'
          }
        ]
      });

      console.log(this.projetos);
    }
  }


  getClassLabelStatus(status) {
    if (status === 1) {
      return 'label-danger';
    }
    if (status === 2) {
      return 'label-primary';
    }
    if (status === 3) {
      return 'label-warning';
    }
    if (status === 4) {
      return 'label-success';
    }
  }

  getClassIconStatus(status) {
    if (status === 1) {
      return 'far fa-clock';
    }
    if (status === 2) {
      return 'fas fa-tools';
    }
    if (status === 3) {
      return 'fa fa-bug';
    }
    if (status === 4) {
      return 'fa fa-check';
    }
  }

  getClassFormato(i) {
    if (i == 0) {
      return '#1c84c6';
    }
    if (i == 1) {
      return '#1c84c6';
    }

    return '#f8ac59';
  }
}
