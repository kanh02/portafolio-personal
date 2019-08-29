import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef){

  }

  ngOnInit(){
  	  	var element = this.el.nativeElement;
  	    element.style.background = "rgba(53, 103 ,164,0.8)";
  	    element.style.padding = "20px";
  	    element.style.marginTop = "15px";
  	    element.style.color = "white";

  	   	element.innerText = element.innerText.toUpperCase().replace("CONTACTO","|Oskity|");
  }

}
