import { Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appNavigation]'
})
export class NavigationDirective {

  constructor(private el:ElementRef) { }

   @HostListener('click')
  handleClick(event: MouseEvent) {
  	let burgerMenuButton = document.querySelector("div.collapse.navbar-collapse");

  	if (burgerMenuButton.classList.contains("show")) {
  		burgerMenuButton.classList.remove("show")
  	}

  	else {
  		burgerMenuButton.classList.add("show");
  	}
  }

}
