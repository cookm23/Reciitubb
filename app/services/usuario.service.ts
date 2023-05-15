import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList,AngularFireObject} from '@angular/fire/compat/database';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private dbPath="/usuario"
  usuariosList?: AngularFireList<Usuario>
  usuarioObject?: AngularFireObject<Usuario>
  usuario?:Usuario={}


  constructor(private firebase:AngularFireDatabase) { 
    this.usuariosList=this.firebase.list(this.dbPath);
  }

  getUsuarios(): AngularFireList<Usuario>{
    return this.usuariosList=this.firebase.list(this.dbPath);
  }



  insertarUsuario(usuario:Usuario): any{
    return this.usuariosList?.push({
      nombre:usuario.nombre,
      telefono:usuario.telefono,
      email:usuario.email,
      dudas:usuario.dudas
    });
  }


  /**
  *metodo para actualizar los datos de un usuario mediante su llave 
  * @param id
  * @param usuario
  */


  updateUsuario(id:string,usuario:Usuario){
    this.usuariosList?.update(id,{
      nombre:usuario.nombre,
      telefono:usuario.telefono,
      email:usuario.email,
      dudas:usuario.dudas
    })
  }



   /**
  *metodo para eliminar usuario 
  * @param id
  * @returns
  */



  eliminarUsuario(id:string):any{
    return this.usuariosList?.remove(id); 
   }

}
