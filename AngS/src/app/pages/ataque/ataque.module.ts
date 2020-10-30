import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtaqueComponent } from './ataque.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {
    path:'',
    component:AtaqueComponent,
  }
]


@NgModule({
  declarations: [AtaqueComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AtaqueModule { }
