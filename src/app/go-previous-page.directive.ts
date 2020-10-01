import { Directive, HostListener} from '@angular/core';
import {Location} from '@angular/common';


@Directive({
  selector: '[GoPreviousPage]'
})

export class GoPreviousPageDirective {

  constructor(private location:Location) { }

  @HostListener('click')
  handleClick(event: MouseEvent) {
    this.location.back();
  }

}
