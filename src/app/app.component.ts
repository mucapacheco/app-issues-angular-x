import {Component} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app';

  constructor(private toastr: ToastrService) {
    this.processarFlashMessage();
  }


  processarFlashMessage() {
    const toastr = JSON.parse(localStorage.getItem('toastr'));
    if (toastr) {
      this.toastr[toastr.tipo](toastr.message, toastr.title);
      localStorage.removeItem('toastr');
    }

  }

  static addToast(config) {
    localStorage.setItem('toastr', JSON.stringify(config));
  }

}
