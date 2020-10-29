import { Component, OnInit } from '@angular/core';

interface Personas{
  classe:string;
  descricao:string;
  favoritado?:string

}
@Component({
  selector: 'eve-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

  enviar(i1,i2){
    console.log(i1,i2)
    this._personas.push({
      classe:i1,
      descricao:i2
    })
  }

  click3(i){
    console.log(i)
    this._favoritado[i] = !this._favoritado[i]
  }



  remove(i){
    this._personas.splice(i,1)
  }







}
