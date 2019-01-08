import {Directive, ElementRef, NgModule} from '@angular/core';
import {JVectorMapDirective} from '../../map/jvectorMap';

declare var jQuery: any;

@Directive({
  selector: '[icheck]'
})

export class ICheckDirective {
  $: any = jQuery;
  constructor(el: ElementRef) {

    console.log(jQuery);

    this.$(el.nativeElement).iCheck({
      checkboxClass: 'icheckbox_square-green',
      radioClass: 'icheckbox_square-green'
    });
  }
}

@NgModule({
  declarations: [
    ICheckDirective
  ],
  exports: [
    ICheckDirective
  ],
  imports: []
})
export class ICheckModule { }
