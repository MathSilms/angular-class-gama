import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[eveField]'
})
export class FieldDirective implements OnInit {

  constructor(
    private campo:ElementRef
  ) { }


  ngOnInit():void {
    const campo = this.campo.nativeElement;

    if(campo.name){
      campo.settAtribute('placeholder',`digite o ${campo.name}`);
    }else{
      throw new Error("atributo 'name' é obrigatório");
    }


  }
}
