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
        abertas: Math.floor((Math.random() * 100) + 1),
        concluidas: Math.floor((Math.random() * 100) + 1),
        descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when' +
          ' looking at its layout. The point of using Lorem Ipsum is that it has.\n',
        usuarios: [1, 2, 3, 4, 5, 7]
      });

      console.log(this.projetos);
    }
  }

}
