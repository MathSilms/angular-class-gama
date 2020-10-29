import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'eve-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro = {
    nome: '',
    classe: '',
    telefone: '',
    nivel: '',
    raca: '',
  }

  salvar(form:NgForm){
    if(form.valid){
      localStorage.setItem('form',JSON.stringify(this.cadastro))
      console.log(JSON.stringify(this.cadastro))
    } else{
      form.control.markAllAsTouched()
    }
  }

  reload(e){
    //window.location.reload()
    console.log(e)
  }

  ngOnInit(): void {
  }




}
