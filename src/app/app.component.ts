import {Component} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app';

  static addToast(config) {
    localStorage.setItem('toastr', JSON.stringify(config));
  }

  constructor(private toastr: ToastrService, private router: Router) {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          this.processarFlashMessage();
        }
      });
  }

  processarFlashMessage() {
    const toastr = JSON.parse(localStorage.getItem('toastr'));
    if (toastr) {
      this.toastr[toastr.tipo](toastr.message, toastr.title);
      localStorage.removeItem('toastr');
    }

  }


}
