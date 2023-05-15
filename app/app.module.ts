import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{AngularFireDatabaseModule} from '@angular/fire/compat/database';
import{AngularFireModule} from '@angular/fire/compat';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { MisionyvisionComponent } from './misionyvision/misionyvision.component';
import { QuehacemosComponent } from './quehacemos/quehacemos.component';
import { EquipodetrabajoComponent } from './equipodetrabajo/equipodetrabajo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FooterComponent } from './footer/footer.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';
import { UsuariosListComponent } from './components/usuarios/usuarios-list/usuarios-list.component';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';

import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    MisionyvisionComponent,
    QuehacemosComponent,
    EquipodetrabajoComponent,
    FormularioComponent,
    FooterComponent,
    UsuariosComponent,
    UsuariosListComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    FormsModule,
  ],
  providers: [UsuarioService],
  bootstrap: [
    NavbarComponent,
    HeaderComponent,
    MisionyvisionComponent,
    QuehacemosComponent,
    EquipodetrabajoComponent,
    FooterComponent,
  UsuarioComponent,
]
  
})
export class AppModule { }
