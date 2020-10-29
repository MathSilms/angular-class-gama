import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldDirective } from './field.directive';
import { HomeComponent } from './pages/home/home.component';
import { AtaqueComponent } from './pages/ataque/ataque.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'cadastro',
    component:CadastroComponent
  },
  {
    path:'ataques',
    component:AtaqueComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FieldDirective,
    HomeComponent,
    AtaqueComponent,
    CadastroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
