import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AppComponent} from '../../../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-cadastro',
  templateUrl: './project-cadastro.component.html',
  styleUrls: ['./project-cadastro.component.css']
})
export class ProjectCadastroComponent implements OnInit {

  public model: any = {};

  constructor(private toastr: ToastrService, private router: Router) {
  }

  ngOnInit() {
  }

  salvar() {
    if (true) {
      AppComponent.addToast({tipo: 'success', message: 'Salvo com sucesso', title: 'Salvo com sucesso'});

      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };

      this.router.navigate(['/issue-tracker/box']);

    }


  }
}
