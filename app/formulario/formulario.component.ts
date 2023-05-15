import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  constructor(public usuarioService:UsuarioService){

  }


  ngOnInit():void{
  this.usuarioService.getUsuarios()
  }
  onSubmit(usuarioform:NgForm){
    this.usuarioService.insertarUsuario(usuarioform.value)
    this.resetForm(usuarioform)
  }

  resetForm(usuarioform?:NgForm){
    if(usuarioform!=null){
      usuarioform.reset()
      this.usuarioService.usuario={}
    }
  }


}
