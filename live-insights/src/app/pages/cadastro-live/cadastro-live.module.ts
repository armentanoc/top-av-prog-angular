// src/app/pages/cadastro-live/cadastro-live.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLivePage } from './cadastro-live.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroLivePage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroLivePage]
})
export class CadastroLivePageModule {}