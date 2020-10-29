import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Personas{
  classe:string;
  descricao:string;
  favoritado?:string

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vari = '';
  cadastro = {
    nome: '',
    classe: '',
    telefone: '',
    nivel: '',
    raca: '',
  }


  private _personas:Array<Personas> = [
    {
        "classe":  "Bárbaro",
        "descricao": "A fierce warrior of primitive background who can enter a battle rage"
    },
    {
        "classe":  "Bardo",
        "descricao": "An inspiring magician whose power echoes the music of creation"
    },
    {
        "classe":  "Paladino",
        "descricao": "A holy warrior bound to a sacred oath"
    },
    {
        "classe":  "Mago",
        "descricao": "A scholarly magic-user capable of manipulating the structures of reality"
    },
    {
        "classe":  "Druída",
        "descricao": "A priest of the Old Faith, wielding the powers of nature and adopting animal forms"
    }
    ]
  private _favoritado = this.personas.map(e => false)


  get personas() {
    return this._personas;
  }

  get favoritado() {
    return this._favoritado;
  }


  click2(value ) {
    this.vari = value
  }

  click3(i){
    console.log(i)
    this._favoritado[i] = !this._favoritado[i]
  }

  enviar(i1,i2){
    console.log(i1,i2)
    this._personas.push({
      classe:i1,
      descricao:i2
    })


  }

  remove(i){
    this._personas.splice(i,1)
  }

  reload(e){
    //window.location.reload()
    console.log(e)
  }

  salvar(form:NgForm){
    if(form.valid){
      localStorage.setItem('form',JSON.stringify(this.cadastro))
      console.log(JSON.stringify(this.cadastro))
    } else{
      form.control.markAllAsTouched()
    }
  }

}


